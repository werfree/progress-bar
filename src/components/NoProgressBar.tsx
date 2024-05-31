import React from "react";
import css from "./ProgressBar.css?raw";
import styleInject from 'style-inject';

styleInject(css);

export interface NoProgressBarProps{
  noProgressBarStyle?:React.CSSProperties
}
const NoProgressBar = ({noProgressBarStyle}:NoProgressBarProps):React.ReactNode => {
  return <div className="loading-bar-empty-container" style={noProgressBarStyle} />;
};

export default NoProgressBar;
