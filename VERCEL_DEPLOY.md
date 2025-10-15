# 🚀 Деплой f01i.ai Pitch Deck на Vercel

## Подготовка проекта

### 1. Подготовка Frontend для Vercel

Vercel идеально подходит для React приложений. Нам нужно внести несколько изменений:

#### Создайте `vercel.json` в корне проекта:

```bash
cd /app
```

Создайте файл `/app/vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "frontend/build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

#### Обновите `package.json` в frontend:

Добавьте в `/app/frontend/package.json` в секцию `scripts`:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "vercel-build": "react-scripts build"
}
```

### 2. Установка Vercel CLI (опционально)

```bash
npm install -g vercel
```

## Способ 1: Деплой через Vercel Dashboard (Рекомендуется)

### Шаг 1: Подготовка Git репозитория

1. **Убедитесь, что проект находится в Git репозитории:**

```bash
cd /app
git init
git add .
git commit -m "Initial commit: f01i.ai pitch deck"
```

2. **Загрузите на GitHub:**

```bash
# Создайте новый репозиторий на GitHub
# Затем выполните:
git remote add origin https://github.com/YOUR_USERNAME/f01i-pitch-deck.git
git branch -M main
git push -u origin main
```

### Шаг 2: Подключение к Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите **"Add New Project"**
3. Выберите **"Import Git Repository"**
4. Подключите ваш GitHub аккаунт
5. Выберите репозиторий `f01i-pitch-deck`

### Шаг 3: Настройка проекта

В настройках проекта укажите:

**Framework Preset:** `Create React App`

**Root Directory:** `frontend`

**Build Command:** `yarn build`

**Output Directory:** `build`

**Install Command:** `yarn install`

### Шаг 4: Environment Variables

Добавьте переменные окружения в Vercel Dashboard:

```
REACT_APP_BACKEND_URL=https://your-backend-api.com
```

> **Примечание:** Для backend API рекомендуется использовать отдельный сервис (Railway, Render, или Heroku)

### Шаг 5: Деплой

Нажмите **"Deploy"** и дождитесь завершения сборки.

Ваш сайт будет доступен по адресу: `https://your-project-name.vercel.app`

## Способ 2: Деплой через Vercel CLI

### Шаг 1: Авторизация

```bash
vercel login
```

### Шаг 2: Деплой из директории frontend

```bash
cd /app/frontend
vercel
```

Следуйте инструкциям CLI:
- Set up and deploy? **Y**
- Which scope? Выберите ваш аккаунт
- Link to existing project? **N**
- What's your project's name? **f01i-pitch-deck**
- In which directory is your code located? **./frontend**

### Шаг 3: Production деплой

```bash
vercel --prod
```

## Настройка Custom Domain

1. В Vercel Dashboard перейдите в **Settings → Domains**
2. Добавьте ваш домен (например, `pitch.f01i.ai`)
3. Следуйте инструкциям для настройки DNS записей

## Деплой Backend (Опционально)

Поскольку backend используется только для генерации PDF, можно:

### Вариант 1: Serverless Functions на Vercel

Создайте `/app/api/generate-pdf.js`:

```javascript
// Этот файл будет автоматически развернут как serverless function
module.exports = (req, res) => {
  res.json({ message: 'PDF generation endpoint' });
};
```

### Вариант 2: Деплой backend отдельно

**Railway.app:**
1. Зайдите на [railway.app](https://railway.app)
2. Создайте новый проект
3. Выберите "Deploy from GitHub repo"
4. Укажите директорию `/backend`
5. Railway автоматически определит Python и задеплоит

**Render.com:**
1. Зайдите на [render.com](https://render.com)
2. New → Web Service
3. Connect repository
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `python server.py`

## Автоматический деплой

После настройки, каждый push в `main` ветку будет автоматически деплоиться на Vercel!

### Создайте Production и Preview окружения:

- **Production:** `main` ветка → `f01i-pitch-deck.vercel.app`
- **Preview:** Все остальные ветки → временные URL для preview

## Оптимизация для Production

### 1. Build оптимизации

В `/app/frontend/.env.production` добавьте:

```
GENERATE_SOURCEMAP=false
REACT_APP_BACKEND_URL=https://your-production-api.com
```

### 2. Оптимизация изображений

Все изображения в `/app/frontend/public/` будут автоматически оптимизированы Vercel.

### 3. Кэширование

Vercel автоматически настраивает кэширование для статических ресурсов.

## Мониторинг и аналитика

1. В Vercel Dashboard перейдите в **Analytics**
2. Включите **Web Analytics** для отслеживания посещений
3. **Speed Insights** покажет производительность (ваш сайт уже имеет 100 баллов!)

## Troubleshooting

### Проблема: Build fails

**Решение:** Проверьте логи сборки и убедитесь, что все зависимости установлены.

```bash
cd /app/frontend
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Проблема: Images not loading

**Решение:** Убедитесь, что изображения находятся в `/app/frontend/public/` и пути корректны.

### Проблема: Environment variables not working

**Решение:** 
- Переменные должны начинаться с `REACT_APP_`
- Пересоберите проект после добавления переменных
- Используйте `process.env.REACT_APP_VARIABLE_NAME`

## Полезные команды

```bash
# Локальная сборка
cd /app/frontend
yarn build

# Проверка production build локально
npx serve -s build

# Vercel CLI деплой
vercel --prod

# Откатить к предыдущей версии
vercel rollback

# Посмотреть логи
vercel logs
```

## Чеклист перед деплоем

- [ ] Все изображения загружены в `/app/frontend/public/`
- [ ] Environment variables настроены
- [ ] Build проходит успешно локально (`yarn build`)
- [ ] Все ссылки работают
- [ ] PDF export функционирует
- [ ] Responsive design проверен
- [ ] Контактная информация актуальна
- [ ] Git repository готов и залит на GitHub

## После деплоя

Ваш pitch deck будет доступен по адресу:
- **Production:** `https://f01i-pitch-deck.vercel.app`
- **Custom domain:** `https://pitch.f01i.ai` (после настройки DNS)

🎉 **Готово! Ваша презентация теперь доступна онлайн!**

## Контакты

Если возникнут вопросы по деплою:
- **Email:** kirillpopolitov@gmail.com
- **Telegram:** @kirson21
- **WhatsApp:** +381665830305
