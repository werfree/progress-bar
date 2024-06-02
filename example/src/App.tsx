import { useEffect, useState } from 'react';

// import './App.css';
import { useProgressBar, LOADING_STATE } from 'react-progress-bar-hook';

function App() {
  const [interval, setInter] = useState<NodeJS.Timeout>();
  const {
    ProgressBarComponent,
    progressBarLoadingState,
    resetProgressBar,
    incrementTotalSteps,
    incrementCompletedSteps,
  } = useProgressBar();

  useEffect(() => {
    incrementTotalSteps(10);
    const inter = setInterval(() => {
      incrementCompletedSteps();
    }, 1000);
    setInter(inter);
    return () => {
      clearInterval(inter);
      setInter(undefined);
      resetProgressBar();
    };
  }, []);
  useEffect(() => {
    if (progressBarLoadingState === LOADING_STATE.COMPLETED && interval) {
      clearInterval(interval);
      setInter(undefined);
    }
  }, [progressBarLoadingState]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      {/* Render the progress bar component with custom styles */}
      <ProgressBarComponent
        progressBarContainerStyle={{ width: '90vw', height: '5px' }}
        progressBarElementStyle={{ backgroundColor: 'blue' }}
      />
      {/* Display the current loading state */}
      <div
        style={{
          margin: '10px',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        }}
      >
        Loading State: {progressBarLoadingState}
      </div>
    </div>
  );
}

export default App;
