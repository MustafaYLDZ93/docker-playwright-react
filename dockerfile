# --- Base image olarak Playwright + Node ---
FROM mcr.microsoft.com/playwright:v1.55.0-noble

# 1. Aşama: test-runner (Derleme ve Testler için tam ortam)
# İlk aşamayı 'test-runner' olarak etiketliyoruz. Bu sayede bu aşamanın içeriğine kolayca erişebileceğiz.
FROM node:20 AS test-runner

# Tarayıcılar için gerekli sistem bağımlılıklarını yükleyin (Debian tabanlı sistemler için)
RUN apt-get update && apt-get install -y \
    libnss3 \
    libfontconfig \
    libgtk-3-0 \
    libasound2 \
    libgbm-dev \
    libcups2 \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# --- Çalışma dizini ---
WORKDIR /app

# --- Bağımlılıkları Kurma ---
COPY package.json pnpm-lock.yaml* ./

# pnpm'i etkinleştir ve bağımlılıkları kur
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Playwright tarayıcılarını manuel olarak kurun (Tek ve temiz kurulum)
RUN pnpm exec playwright install --with-deps

# Kalan uygulama dosyalarını kopyala
COPY . .

# --- BUILD (Uygulama Derlemesi) ---
RUN pnpm build

# --- TEST (E2E Playwright Testlerini Çalıştırma - Build Time) ---
# Playwright testlerini çalıştırın.
# Testler başarılı olmazsa, imaj oluşturma süreci duracaktır.
RUN pnpm test2


# 3. Aşama: production (Üretim/Çalıştırma)
# Uygulamanın sadece sunumu için gerekli minimum dosyaları içeren hafif bir Alpine imajı
FROM node:lts-alpine AS production

# Gerekli dosya ve klasörleri kopyalayın
WORKDIR /app

# Önceki 'test-runner' aşamasından derlenmiş dist klasörünü kopyalayın
COPY --from=test-runner /app/dist ./dist

# serve'i global olarak kurun (Uygulamayı çalıştırmak için)
RUN npm install -g serve

# Uygulamayı sunmak için portu açın
EXPOSE 5173
# CMD: Konteynerin ana görevi, derlenmiş dosyaları sunmaktır.
CMD ["serve", "-s", "dist", "-l", "5173"]
