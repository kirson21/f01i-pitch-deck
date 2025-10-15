# ⚡ Быстрый деплой на Vercel

## 🚀 3 простых шага

### 1️⃣ Залейте код на GitHub

```bash
cd /app
git init
git add .
git commit -m "f01i.ai pitch deck ready"

# Создайте репозиторий на GitHub, затем:
git remote add origin https://github.com/ВАШ_USERNAME/f01i-pitch-deck.git
git branch -M main
git push -u origin main
```

### 2️⃣ Подключите к Vercel

1. Идите на **[vercel.com](https://vercel.com)** и войдите через GitHub
2. Нажмите **"Add New Project"**
3. Выберите репозиторий **f01i-pitch-deck**
4. Настройки:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Create React App
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`

### 3️⃣ Нажмите Deploy!

Готово! Ваш сайт будет доступен через 2-3 минуты на `https://ваш-проект.vercel.app`

---

## 🎯 Альтернатива: Vercel CLI

```bash
# Установка CLI
npm i -g vercel

# Авторизация
vercel login

# Деплой из директории frontend
cd /app/frontend
vercel --prod
```

---

## 📝 Важные файлы

Все необходимые файлы для деплоя уже созданы:
- ✅ `/app/vercel.json` - главная конфигурация
- ✅ `/app/frontend/vercel.json` - rewrites для SPA
- ✅ `/app/frontend/package.json` - зависимости

---

## 🔧 После деплоя

### Настройка домена:
1. Vercel Dashboard → Settings → Domains
2. Добавьте `pitch.f01i.ai`
3. Настройте CNAME запись в DNS

### Автодеплой:
Каждый `git push` в `main` автоматически обновит сайт! 🎉

---

## ❓ Проблемы?

**Build failed?**
```bash
cd /app/frontend
rm -rf node_modules
yarn install
yarn build  # Проверьте локально
```

**Нужна помощь?**
- Полная инструкция: `/app/VERCEL_DEPLOY.md`
- Документация Vercel: [vercel.com/docs](https://vercel.com/docs)

---

**Контакты:**
- 📧 kirillpopolitov@gmail.com
- 💬 Telegram: @kirson21
- 📱 WhatsApp: +381665830305
