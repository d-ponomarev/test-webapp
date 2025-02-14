import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const initializeTelegramWebApp = () => {
  try {
    // Инициализация Telegram Web App
    Telegram.WebApp.ready();

    console.log('Mini App готов.');

    // Проверка доступности функции sendData
    if (Telegram.WebApp.sendData) {
      console.log('Функция sendData доступна.');
    } else {
      console.log('Функция sendData недоступна.');
    }
  } catch (error) {
    console.log('Ошибка инициализации: ', error);
  }
};

// Инициализация Telegram Web App
initializeTelegramWebApp();

// Рендер React-приложения
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);