import { useChronos } from './hooks/useChronos';

function App() {
  const {
    isActive,
    isPaused,
    led,
    handleSetMinutes,
    handleSetSeconds,
    handleReset,
    handleStart,
    handleStop,
    handleTestLed,
    minutes,
    seconds,
    ms,
    mm,
    ss,
    // isStartButtonDisable,
  } = useChronos(0, 0);

  return (
    <div className='appContent'>
      <div className='sliderContent'>
        <span>{`🕗 ${mm}:${ss}:${ms}`}</span>
        <input type='range' min='0' max='5' onChange={handleSetMinutes} value={minutes} />
        <input type='range' min='0' max='60' onChange={handleSetSeconds} value={seconds} />
      </div>
      {!isActive ? (
        <>
          <button className='btnOutline' onClick={handleTestLed}>
            {led ? '🟢 Led ON ' : '🔴 Led OFF'}
          </button>
          <button className='btnStart' onClick={handleStart}>
            Start
          </button>
        </>
      ) : (
        <div className='btnContent'>
          <button className='btnOutline' onClick={handleReset}>
            Reset
          </button>
          <button className='btnStart' onClick={handleStop}>
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
