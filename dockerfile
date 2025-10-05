FROM mcr.microsoft.com/playwright:v1.55.0-jammy

WORKDIR /app

# Sadece bağımlılıkları kur
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Kod kopyalamıyoruz, çünkü volume ile bağlayacağız
# COPY . .

# Konteyner interaktif shell ile başlasın
CMD ["/bin/bash"]
