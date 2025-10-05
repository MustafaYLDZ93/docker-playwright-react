# --- Base image olarak Playwright + Node ---
FROM mcr.microsoft.com/playwright:v1.55.0-jammy

# --- Çalışma dizini ---
WORKDIR /app

# --- Bağımlılıkları yükle ---
# Önce package.json ve lock dosyalarını kopyala
COPY package.json pnpm-lock.yaml* ./
# pnpm'i global olarak kur
RUN npm install -g pnpm
RUN npm install -g serve
# Bağımlılıkları yükle
RUN pnpm install

# --- Kaynak dosyaları kopyala ---
COPY . .

# --- Esbuild sürümünü fixle (React build için) ---
# Eğer build işlemleri için ek bir esbuild sürümüne ihtiyacınız varsa,
# bunu bağımlılıklar arasına dahil etmek daha doğru olabilir.
# RUN pnpm install esbuild@latest -D

# --- React uygulamasını build et ---
RUN pnpm run build




# --- Tek container’da React app + Playwright test ---
# Serve'i arka planda başlat, 5 saniye bekle ve sonra testleri çalıştır.
# serve'in çıktısını /dev/null'a yönlendirerek log karmaşasını azaltabiliriz.
CMD ["sh", "-c", "pnpm run build && serve -s dist -l 5173 & sleep 5 && pnpm exec playwright test"]

