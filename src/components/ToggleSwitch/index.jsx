import React from 'react';
import "./index.css";

const ToggleSwitch = ({checked, onChangeHandler}) => {
  return (
    <label className="switch">
        <input type="checkbox" checked={checked} onChange={(e) => {
            onChangeHandler(e.target.checked)
        }} />
        <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch