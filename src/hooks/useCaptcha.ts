import { useState, useCallback } from 'react';

interface CaptchaData {
  num1: number;
  num2: number;
  answer: number;
  question: string;
}

export const useCaptcha = () => {
  const generateCaptcha = useCallback((): CaptchaData => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      num1,
      num2,
      answer: num1 + num2,
      question: `${num1} + ${num2} = ?`,
    };
  }, []);

  const [captcha, setCaptcha] = useState<CaptchaData>(generateCaptcha);
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setUserAnswer('');
    setError('');
  }, [generateCaptcha]);

  const validateCaptcha = useCallback((): boolean => {
    const isValid = parseInt(userAnswer) === captcha.answer;
    if (!isValid) {
      setError('Неверный ответ. Попробуйте снова.');
      refreshCaptcha();
    }
    return isValid;
  }, [userAnswer, captcha.answer, refreshCaptcha]);

  return {
    captcha,
    userAnswer,
    setUserAnswer,
    error,
    setError,
    refreshCaptcha,
    validateCaptcha,
  };
};
