import React from "react";
import css from "./ProgressBar.css?raw";
import styleInject from 'style-inject';

styleInject(css);

export interface ProgressBarProps{
  progressWidth: Number;
  progressBarContainerStyle?:React.CSSProperties,
  progressBarElementStyle?:React.CSSProperties
};
const ProgressBar = ({ progressWidth,progressBarContainerStyle,progressBarElementStyle }: ProgressBarProps): React.ReactNode =>  {
  return (
    <div className="loading-bar-container" style={progressBarContainerStyle}>
      <div
        className="loading-bar-orange"
        style={{ width: `${progressWidth}%`,...progressBarElementStyle}}
      />
    </div>
  );
};

export default ProgressBar;
