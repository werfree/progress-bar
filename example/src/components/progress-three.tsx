import React, { useEffect, useState } from 'react';

// import './App.css';
import { useProgressBar, LOADING_STATE } from 'react-progress-bar-hook';

function ProgressBarOne() {
  const [interval, setInter] = useState(0);
  const {
    ProgressBarComponent,
    progressBarLoadingState,
    resetProgressBar,
    incrementTotalSteps,
    incrementCompletedSteps,
  } = useProgressBar();

  useEffect(() => {
    incrementTotalSteps(15);
    const inter = setInterval(() => {
      incrementCompletedSteps();
    }, 1000);
    setInter(inter);
    return () => {
      clearInterval(inter);
      setInter(0);
      resetProgressBar();
    };
  }, []);
  useEffect(() => {
    if (progressBarLoadingState === LOADING_STATE.COMPLETED && interval !== 0) {
      clearInterval(interval);
      resetProgressBar();
      setInter(0);
    }
  }, [progressBarLoadingState]);
  return (
    <div>
      {/* Render the progress bar component with custom styles */}
      <div
        style={{
          margin: '15px',
          borderRadius: '5px',
          height: '8px',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        }}
      >
        Progress Bar Three
      </div>
      <ProgressBarComponent
        progressBarContainerStyle={{
          margin: '15px', // Add margin to create space between progress bars
          width: '90vw',
          height: '22px',
          backgroundColor: '#ffffff',
          boxShadow: '20px 20px 50px #d9d9d9, -20px -20px 50px #ffffff',
        }}
        progressBarElementStyle={{
          backgroundColor: '#F6EDE8',
          margin: '3px 3px',
          height: '16px',
          transition: 'width 0.5s ease-in-out',
          borderRadius: '15px', // Add border radius for neomorphic effect
          boxShadow: 'inset 2px 2px 5px #cbcbcb, inset -2px -2px 5px #ffffff', // Add inset shadow for neomorphic effect
        }}
      />
      {/* Display the current loading state */}
    </div>
  );
}

export default ProgressBarOne;
