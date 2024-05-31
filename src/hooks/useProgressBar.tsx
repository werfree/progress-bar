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
  incrementTotalApiCalls: (inc: number) => void
  incrementCompletedApiCalls: (n?: number) => void
  progressBarLoadingState: LOADING_STATE
  ProgressBarComponent: React.FC<ProgressBarComponentProps> 
};

interface ProgressBarComponentProps extends NoProgressBarProps,Omit<ProgressBarProps,'progressWidth'>{
}


const useProgressBar = ():ProgressBarHookReturn => {
  const [totalApiCalls, setTotalApiCalls] = useState(0);
  const [completedApiCalls, setCompletedApiCalls] = useState(0);
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const [progressBarLoadingState, setProgressBarLoadingState] =
    useState<LOADING_STATE>(LOADING_STATE.INITIAL);

  const incrementTotalApiCalls = (inc: number) => {
    setTotalApiCalls((prev) => {
      if (prev === 0) {
        setProgressWidth(2); // We will start the progress bar from 2%
      }
      return prev + inc;
    });
  };
  const incrementCompletedApiCalls = (n: number = 1) => {
    setCompletedApiCalls((prev) => {
      return prev + n;
    });
  };
  useEffect(() => {
    if (
      (completedApiCalls === totalApiCalls && totalApiCalls !== 0) ||
      completedApiCalls > totalApiCalls
    ) {
      setCompletedApiCalls(0);
      setTotalApiCalls(0);
      setProgressWidth(0);
      setProgressBarLoadingState(LOADING_STATE.COMPLETED);
    } else if (completedApiCalls !== 0) {
      setProgressWidth(
        Number(((completedApiCalls / totalApiCalls) * 100).toFixed(2))
      );
      setProgressBarLoadingState(LOADING_STATE.LOADING);
    }
  }, [completedApiCalls, totalApiCalls]);
  // Return the JSX for your hook component
  const displayProgressBar =
    Number(progressWidth) === 0 || completedApiCalls === totalApiCalls;
  const ProgressBarComponent: React.FC<ProgressBarComponentProps>  = ({noProgressBarStyle,progressBarContainerStyle,progressBarElementStyle}:ProgressBarComponentProps)=> {
    return displayProgressBar  ? <NoProgressBar noProgressBarStyle={noProgressBarStyle}/> : <ProgressBar progressBarContainerStyle={progressBarContainerStyle} progressBarElementStyle={progressBarElementStyle} progressWidth={progressWidth}/>
  };
  // const ProgressBarComponent: React.ReactNode = <ProgressBarWrapper progressWidth={progressWidth}/>;

  return {
    incrementTotalApiCalls,
    incrementCompletedApiCalls,
    progressBarLoadingState,
    ProgressBarComponent,
  };
};

// Export your hook component
export  {useProgressBar};
