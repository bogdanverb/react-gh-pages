import { useState } from 'react';
import myImage from './assets/my-image.png'; // Твоя картинка
import confetti from 'canvas-confetti'; // Бібліотека для феєрверку
import './App.css';

function App() {
  const [score, setScore] = useState(0); // Бали користувача
  const [message, setMessage] = useState(''); // Повідомлення, що виводиться
  const [gameStage, setGameStage] = useState(''); // Етап гри

  const stages = [
    "Ти почав гру, вперед до перемоги!",
    "Наполовину пройшов! Тримайся!",
    "Майже там! Залишилось зовсім трохи!",
    "Вітаємо, ти зібрав 100 балів!"
  ];

  const handleClick = () => {
    if (score < 100) {
      setScore(score + 1);

      // Оновлення етапу гри в залежності від набраних балів
      if (score + 1 === 100) {
        setMessage('Богдан зібрав 100 балів! Вітаємо!');
        setGameStage(stages[3]); // Кінець гри
        triggerConfetti(); // Запуск феєрверку
      } else if (score + 1 >= 75) {
        setGameStage(stages[2]);
      } else if (score + 1 >= 50) {
        setGameStage(stages[1]);
      } else {
        setGameStage(stages[0]);
      }
    }

    setMessage(`Бал: ${score + 1}`);
  };

  const resetScore = () => {
    setTimeout(() => {
      setScore(0);
      setMessage('');
      setGameStage('');
    }, 2000); // Затримка в 2 секунди
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="container">
      <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
        <img src={myImage} className="logo custom-logo" alt="My custom logo" />
      </a>

      <h1>Допоможи Богдану зібрати 100 балів!</h1>

      {/* Кнопка для збору балів */}
      <div className="card">
        <button onClick={handleClick}>Зібрати бал</button>
      </div>

      {/* Кнопка скидання рахунку */}
      {score >= 100 && (
        <button onClick={resetScore} className="reset-button">
          Скинути рахунок
        </button>
      )}

      {/* Повідомлення про успіх */}
      {message && <p className="win-message">{message}</p>}

      {/* Етап гри */}
      {gameStage && (
        <p className="game-stage">{gameStage}</p>
      )}

      <p className="read-the-docs">
        Натискайте на кнопку, щоб збирати бали!
      </p>
    </div>
  );
}

export default App;
