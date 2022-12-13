import { useState, useCallback, useEffect, ChangeEvent } from 'react';
import api from '../api/api';

export const useChronos = (initMinutes: number, initSeconds: number) => {
  const [isPaused, setIsPaused] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [millis, seTmillis] = useState(0);
  const [seconds, setSeconds] = useState(initSeconds);
  const [minutes, setMinutes] = useState(initMinutes);
  const [led, setLed] = useState(false);

  const startChronos = useCallback(async () => {
    const timer = setTimeout(() => {
      if (!isPaused) {
        seTmillis(millis - 1);
        if (millis <= 0) {
          seTmillis(10);
          setSeconds(seconds - 1);
        }
        if (seconds <= 0 && minutes > 0 && millis <= 0) {
          setMinutes(minutes - 1);
          setSeconds(60);
        }

        if (seconds <= 0 && minutes == 0 && seconds == 0) {
          clearTimeout(timer);
          setMinutes(0);
          setSeconds(0);
          seTmillis(0);
          if (isActive) {
            api.post('/trigger', { gpio: 'ON' });
            setTimeout(() => api.post('trigger', { gpio: 'OFF' }), 3000);
            setIsPaused(true);
            setIsActive(false);
          }
        }
        clearTimeout(timer);
      }
    }, 100);
  }, [isActive, isPaused, millis, minutes, seconds]);
  const handleStart = useCallback(() => {
    if (minutes > 0 || seconds > 0) {
      setIsPaused(false);
      setIsActive(true);
    }
  }, [minutes, seconds]);

  const handleReset = useCallback(() => {
    api.post('/trigger', { gpio: 'OFF' });
    setIsPaused(true);
    setIsActive(false);
    seTmillis(0);
    setSeconds(0);
    setMinutes(0);
  }, []);

  const handleTestLed = useCallback(async () => {
    try {
      const { data } = await api.get('/toggle');

      if (data.led === 'ON') {
        setLed(true);
      }
      if (data.led == 'OFF') {
        setLed(false);
      }
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const handleStop = useCallback(() => {
    setIsPaused(!isPaused);
  }, [isPaused]);

  const handleSetMinutes = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMinutes(parseInt(event.target.value));
    },
    [setMinutes],
  );

  const handleSetSeconds = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSeconds(parseInt(event.target.value));
    },
    [setSeconds],
  );

  useEffect(() => {
    async () => {
      try {
        const res = await api.get('/connected');
        if (res.status === 200) {
          setLed(true);
        }
      } catch (error) {
        setLed(false);
      }
    };
    startChronos();
  }, [startChronos]);
  return {
    isPaused,
    isActive,
    led,
    handleSetMinutes,
    handleSetSeconds,
    handleStart,
    handleStop,
    handleReset,
    handleTestLed,
    minutes,
    seconds,
    ms: millis.toString().padStart(2, '0'),
    ss: seconds.toString().padStart(2, '0'),
    mm: minutes.toString().padStart(2, '0'),
    //isStartButtonDisable: seconds != 0 && minutes != 0 ? false : true,
  };
};
