# ReactTests Projesi

Bu proje, React bileşenlerini geliştirmek ve test etmek için oluşturulmuş bir örnek projedir. Proje, hem kullanıcı arayüzü (UI) testlerini hem de birim testlerini içermektedir. Ayrıca, modern araçlar ve frameworkler kullanılarak yapılandırılmıştır.

## Proje Yapısı

```
ReactTests/
├── src/                # React bileşenleri ve uygulama dosyaları
│   ├── App.jsx         # Ana uygulama bileşeni
│   ├── Counter.jsx     # Sayaç bileşeni
│   ├── TodoList.jsx    # Görev listesi bileşeni
│   ├── main.jsx        # React uygulamasının giriş noktası
│   └── App.css         # Uygulama için stil dosyası
├── tests/              # Test dosyaları
│   ├── e2e/            # Playwright ile UI testleri
│   │   ├── counter.spec.js
│   │   └── todolist.spec.js
│   ├── unit/           # React Testing Library ile birim testleri
│   │   ├── counter.test.jsx
│   │   └── todolist.test.jsx
├── package.json        # Proje bağımlılıkları ve scriptler
├── jest.config.cjs     # Jest yapılandırma dosyası
├── playwright.config.js# Playwright yapılandırma dosyası
├── .babelrc            # Babel yapılandırma dosyası
└── README.md           # Proje hakkında genel bilgi
```

## Kullanılan Araçlar ve Frameworkler

### React
- React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir.
- Projede React 19 sürümü kullanılmaktadır.

### React Testing Library
- React bileşenlerini test etmek için kullanılan bir kütüphanedir.
- `render`, `screen`, `fireEvent` gibi fonksiyonlar sağlar.
- Kullanıcı odaklı testler yazmayı teşvik eder.

### Playwright
- UI testleri için kullanılan bir test otomasyon aracıdır.
- Chromium, Firefox ve WebKit (Safari) tarayıcılarını destekler.
- Projede `tests/e2e/` klasöründeki testler için kullanılmıştır.

### Jest
- JavaScript test frameworküdür.
- React Testing Library ile birlikte birim testlerini çalıştırmak için kullanılmıştır.

### Vite
- Hızlı bir geliştirme sunucusu ve build aracı.
- React uygulamasını geliştirmek ve çalıştırmak için kullanılmıştır.

### Babel
- Modern JavaScript kodunu eski tarayıcılarla uyumlu hale getirmek için kullanılır.
- React Testing Library ile JSX desteği sağlamak için yapılandırılmıştır.

### ESLint
- Kod kalitesini artırmak ve standartları korumak için kullanılan bir araçtır.
- Projede React ve React Hooks için linting kuralları uygulanmıştır.

## Önemli Komutlar

### Geliştirme Sunucusunu Başlatma
```bash
pnpm run dev
```
- React uygulamasını geliştirme modunda başlatır.
- Uygulama, `http://localhost:5173` adresinde çalışır.

### Jest Testlerini Çalıştırma
```bash
pnpm test
```
- `tests/unit/` klasöründeki birim testlerini çalıştırır.

### Playwright Testlerini Çalıştırma
```bash
pnpm exec playwright test
```
- `tests/e2e/` klasöründeki UI testlerini çalıştırır.

### Sadece Belirli Bir Playwright Testini Çalıştırma
```bash
pnpm exec playwright test tests/e2e/todolist.spec.js
```
- Belirtilen dosyadaki testleri çalıştırır.

### Projeyi Derleme
```bash
pnpm run build
```
- React uygulamasını üretim için derler.

### Lint Kontrolü
```bash
pnpm run lint
```bash
pnpm add -D eslint-plugin-jest
```
- Kodun lint kurallarına uygunluğunu kontrol eder.

## Yapılandırma Dosyaları

### `jest.config.cjs`
- Jest için yapılandırma dosyasıdır.
- `testEnvironment` olarak `jsdom` kullanılmıştır.
- Sadece `tests/unit/` klasöründeki dosyaları çalıştıracak şekilde ayarlanmıştır.

### `playwright.config.js`
- Playwright için yapılandırma dosyasıdır.
- `baseURL` olarak `http://localhost:5173` ayarlanmıştır.
- Chromium, Firefox ve WebKit tarayıcılarını destekler.
- `headless: false` ayarı ile testler tarayıcıda görünür şekilde çalışır.

### Babel Yapılandırması
Proje, modern JavaScript ve JSX desteği için Babel kullanmaktadır. Babel yapılandırması `.babelrc` dosyasında tanımlıdır:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
- `@babel/preset-env`: Modern JavaScript özelliklerini destekler.
- `@babel/preset-react`: React ve JSX desteği sağlar.

## Proje Kurulum Komutları

Proje kurulumunda kullanılan temel komutlar aşağıda listelenmiştir:

### React Uygulaması Oluşturma
```bash
pnpm create vite@latest . --template react
```
- Vite kullanarak React şablonuyla bir proje oluşturur.

### Playwright Kurulumu
```bash
pnpm add -D @playwright/test
```
- Playwright'i projeye ekler ve UI testleri için gerekli bağımlılıkları yükler.

### React Testing Library ve Jest Kurulumu
```bash
pnpm add -D jest @testing-library/react @testing-library/jest-dom
```
- Jest ve React Testing Library bağımlılıklarını yükler.
- React bileşenlerini test etmek için gerekli ortamı sağlar.
@testing-library/react: React bileşenlerini test etmek için araçlar sağlar.
@testing-library/jest-dom: Jest için DOM eşleştiricileri ekler (örneğin, toBeVisible, toHaveTextContent gibi).

@testing-library/react, React bileşenlerini test etmek için kullanılan bir kütüphanedir ve kullanıcı odaklı testler yazmayı teşvik eder. Bu kütüphane, DOM ile etkileşim kurarak bileşenlerin kullanıcı davranışlarına nasıl tepki verdiğini test etmenizi sağlar.
Sağladığı Özellikler:
1. render:
    * Bir React bileşenini sanal bir DOM ortamında render eder.
    * Test sırasında bileşenin DOM'da nasıl göründüğünü ve kullanıcıların nasıl etkileşimde bulunabileceğini simüle eder.
2. screen:
    * DOM'daki öğelere erişim sağlar.
    * Örneğin:
        * screen.getByText: Belirli bir metni içeren öğeyi seçer.
        * screen.getByRole: Belirli bir rolü (örneğin, button, textbox) olan öğeyi seçer.
        * screen.queryByText: Belirli bir metni içeren öğeyi seçer, ancak öğe bulunamazsa null döner.
3. fireEvent:
    * DOM olaylarını simüle etmek için kullanılır.
    * Örneğin:
        * fireEvent.click: Bir düğmeye tıklama olayını simüle eder.
        * fireEvent.change: Bir giriş alanına yazma olayını simüle eder.
4. act:
    * React bileşenlerinin durum değişikliklerini ve yeniden render işlemlerini test etmek için kullanılır.
    * Genellikle render ve fireEvent gibi işlemler sırasında otomatik olarak çağrılır.

5. Eşleştiriciler (jest-dom ile birlikte):
    * @testing-library/jest-dom ile birlikte kullanıldığında, DOM üzerinde daha anlamlı eşleştirme yapmanızı sağlar:
        * toBeInTheDocument: Bir öğenin DOM'da olup olmadığını kontrol eder.
        * toHaveTextContent: Bir öğenin belirli bir metni içerip içermediğini kontrol eder.
        * toBeVisible: Bir öğenin görünür olup olmadığını kontrol eder.


### Bu projede kullanılan frameworkler ve araçlar:

React: Kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesi.
React Testing Library: React bileşenlerini test etmek için kullanılan bir test kütüphanesi.
Playwright: UI testleri için kullanılan bir test otomasyon aracı.
Jest: JavaScript test frameworkü.
Vite: Hızlı bir geliştirme sunucusu ve build aracı.
Babel: Modern JavaScript ve JSX desteği sağlamak için kullanılan bir derleyici.
ESLint: Kod kalitesini artırmak ve standartları korumak için kullanılan bir araç.

PNPM
pnpm yüklü değilse, aşağıdaki komutla yükleyebilirsiniz:

```bash
npm install -g pnpm
```

pnpm ile Bağımlılıkları Yükleme
Projenin mevcut bağımlılıklarını pnpm ile yüklemek için aşağıdaki komutu çalıştırın:

```bash
pnpm install
```

Projeyi pnpm de run etme : pnpm run dev
Playwright ile UI testleri run etme : pnpm exec playwright test tests/e2e/todolist.spec.js
Jest ile birim testleri run etme: pnpm test
   - belirli bi testi çalıştırma : pnpm test tests/unit/todolist.test.jsx
