// Import React and useState hook
import React,{ useEffect, useState } from "react";
import NoProgressBar,{NoProgressBarProps} from "../components/NoProgressBar";
import ProgressBar,{ProgressBarProps} from "../components/ProgressBar";
// Define your hook component
export enum LOADING_STATE {
  INITIAL = "initial",
  LOADING = "loading",
  COMPLETED = "completed",
}
interface ProgressBarHookReturn{
  incrementTotalSteps: (inc: number) => void
  incrementCompletedSteps: (n?: number) => void
  progressBarLoadingState: LOADING_STATE
  ProgressBarComponent: React.FC<ProgressBarComponentProps> 
};

interface ProgressBarComponentProps extends NoProgressBarProps,Omit<ProgressBarProps,'progressWidth'>{
}


const useProgressBar = ():ProgressBarHookReturn => {
  const [totalSteps, setTotalSteps] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const [progressBarLoadingState, setProgressBarLoadingState] =
    useState<LOADING_STATE>(LOADING_STATE.INITIAL);

  const incrementTotalSteps = (inc: number) => {
    setTotalSteps((prev) => {
      if (prev === 0) {
        setProgressWidth(2); // We will start the progress bar from 2%
      }
      return prev + inc;
    });
  };
  const incrementCompletedSteps = (n: number = 1) => {
    setCompletedSteps((prev) => {
      return prev + n;
    });
  };
  useEffect(() => {
    if (
      (completedSteps === totalSteps && totalSteps !== 0) ||
      completedSteps > totalSteps
    ) {
      setCompletedSteps(0);
      setTotalSteps(0);
      setProgressWidth(0);
      setProgressBarLoadingState(LOADING_STATE.COMPLETED);
    } else if (completedSteps !== 0) {
      setProgressWidth(
        Number(((completedSteps / totalSteps) * 100).toFixed(2))
      );
      setProgressBarLoadingState(LOADING_STATE.LOADING);
    }
  }, [completedSteps, totalSteps]);
  // Return the JSX for your hook component
  const displayProgressBar =
    Number(progressWidth) === 0 || completedSteps === totalSteps;
  const ProgressBarComponent: React.FC<ProgressBarComponentProps>  = ({noProgressBarStyle,progressBarContainerStyle,progressBarElementStyle}:ProgressBarComponentProps)=> {
    return displayProgressBar  ? <NoProgressBar noProgressBarStyle={noProgressBarStyle}/> : <ProgressBar progressBarContainerStyle={progressBarContainerStyle} progressBarElementStyle={progressBarElementStyle} progressWidth={progressWidth}/>
  };
  // const ProgressBarComponent: React.ReactNode = <ProgressBarWrapper progressWidth={progressWidth}/>;

  return {
    incrementTotalSteps,
    incrementCompletedSteps,
    progressBarLoadingState,
    ProgressBarComponent,
  };
};

// Export your hook component
export  {useProgressBar};
