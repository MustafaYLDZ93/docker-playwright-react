# 1. Aşama: Build (Derleme)
# Playwright testleri için gerekli tarayıcı bağımlılıklarını içeren resmi Playwright Node imajını kullanıyoruz.
FROM mcr.microsoft.com/playwright/node:lts as build

# Çalışma dizinini ayarlayın
WORKDIR /app

# Bağımlılık dosyalarını kopyalayın
COPY package.json pnpm-lock.yaml ./

# pnpm install ile tüm bağımlılıkları kurun. 
# Bu aşamada Playwright tarayıcıları da kurulacaktır.
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Kalan uygulama dosyalarını kopyalayın
COPY . .

# Uygulamayı derleyin (Build)
# package.json dosyanızdaki "build" scriptini çalıştırır
RUN pnpm build

# 2. Aşama: Test (Playwright ve Jest)
# Playwright testleri ve diğer testler bu aşamada çalıştırılır
FROM build as test

# Playwright için test komutunu çalıştırın.
# package.json'daki "test2" (Playwright) ve "test" (Jest) scriptlerini çalıştırıyoruz.

# Playwright testlerini çalıştırmadan önce tarayıcıları doğru şekilde ayarladığından emin olun.
# Playwright testleri genellikle başsız (headless) modda çalışır.
# Bu komut, E2E testlerini çalıştırır.
RUN pnpm test2

# İsteğe bağlı: Jest/Unit testlerini çalıştırmak için
# RUN pnpm test

# Sonuç: Eğer test aşaması başarılı olursa, sonraki aşamaya geçilir.
# Test raporları, isterseniz bu aşamada dışarıya (volume ile) aktarılabilir.

# 3. Aşama: Production (Üretim/Çalıştırma)
# Uygulamanın sadece çalışması için gerekli minimum dosyaları içeren daha hafif bir imaj kullanın
FROM node:lts-alpine as production

# Gerekli dosya ve klasörleri kopyalayın
WORKDIR /app

# Önceki aşamadan derlenmiş build klasörünü kopyalayın
COPY --from=build /app/dist ./dist

# Sadece üretim bağımlılıklarını kopyalayın (genellikle Vite projelerinde gerekmez ama iyi bir alışkanlıktır)
# COPY --from=build /app/node_modules ./node_modules

# Vite/React uygulamasını çalıştırmak için (preview scriptini kullanabilirsiniz)
# Not: Preview komutu genellikle statik dosya sunucusu görevi görür
EXPOSE 4173
CMD ["pnpm", "preview", "--host"] 
