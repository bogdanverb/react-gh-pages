import { useState, useEffect } from 'react';
import myImage from './assets/my-image.png'; // Твоя картинка
import confetti from 'canvas-confetti'; // Бібліотека для феєрверку
import './App.css';
import Comments from "./components/Comments.jsx";
import './components/Comments.css';
import LikeButton from './components/LikeButton.jsx';
import ShareButton from './components/ShareButton.jsx';

function App() {
  const [score, setScore] = useState(0); // Бали користувача
  const [message, setMessage] = useState(''); // Повідомлення, що виводиться
  const [gameStage, setGameStage] = useState(''); // Етап гри
  const [text, setText] = useState('Bohdan'); // Текст для анімації
  const [isDeleting, setIsDeleting] = useState(false); // Чи потрібно видаляти частину тексту
  const [index, setIndex] = useState(0); // Індекс для кожного символу
  const [combatText, setCombatText] = useState(''); // Частина Combat для анімації

  const stages = [
    "Ти почав гру, вперед до перемоги!",
    "Наполовину пройшов! Тримайся!",
    "Майже там! Залишилось зовсім трохи!",
    "Вітаємо, ти зібрав 100 балів!"
  ];

  // Функція для анімації друкування та видалення частини Combat
  useEffect(() => {
    const textToType = 'Combat';
    let typingInterval;

    if (index < textToType.length) {
      typingInterval = setInterval(() => {
        setCombatText(prev => prev + textToType[index]);
        setIndex(prev => prev + 1);
      }, 200); // Повільніша анімація
    } else {
      // Після того як вся частина Combat з'явиться, ми будемо стирати її
      setTimeout(() => {
        setCombatText(''); // Очищаємо частину Combat
        setIndex(0); // Оновлюємо індекс
      }, 2000); // Чекаємо 2 секунди після появи Combat
    }

    return () => clearInterval(typingInterval);
  }, [index]);

  const handleClick = () => {
    if (score < 100) {
      setScore(prevScore => {
        const newScore = prevScore + 1;
        
        // Оновлення етапу гри в залежності від набраних балів
        if (newScore === 100) {
          setMessage('Богдан зібрав 100 балів! Вітаємо!');
          setGameStage(stages[3]); // Кінець гри
          triggerConfetti(); // Запуск феєрверку
        } else if (newScore >= 75) {
          setGameStage(stages[2]);
        } else if (newScore >= 50) {
          setGameStage(stages[1]);
        } else {
          setGameStage(stages[0]);
        }

        return newScore;
      });
      
      setMessage(`Бал: ${score + 1}`); // Виведення актуальних балів
    }
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

      {/* Заголовок вище лого, великий шрифт */}
      <h1>Допоможи Богдану зібрати 100 балів!</h1>

      {/* Додаємо анімований текст */}
      <div className="typing-text">
        {text}
        <span className="combat">{combatText}</span> {/* Тільки для Combat */}
        <span className="cursor"></span>
      </div>

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
      
      {/* Додаємо компонент коментарів */}
      <Comments />
      <ShareButton />
      <LikeButton />
    </div>
  );
}

export default App;