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
          border: '1px',
          borderRadius: '5px',
          height: '8px',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        }}
      >
        Progress Bar Two
      </div>
      <ProgressBarComponent
        progressBarContainerStyle={{
          width: '90vw',
          height: '25px',
          backgroundColor: '#fcfcfd',
        }}
        progressBarElementStyle={{
          background:
            'linear-gradient(to bottom, #febbbb 0%,#fe9090 45%,#ff5c5c 100%)',
          // margin: "4px 4px",
          // height: "17px",
          transition: 'width 1s ease-in-out',
        }}
      />
      {/* Display the current loading state */}
    </div>
  );
}

export default ProgressBarOne;
