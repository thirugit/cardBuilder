import React, { PropTypes } from 'react';

export default function InputComponent({ id, value, label, onChange, maxlength, type }) {
  return (<div className="size-half">
    <label htmlFor={id} className="hcard-label">{label}</label>
    <input id={id} type={type} maxLength={maxlength} value={value} onChange={e => onChange(e.target.value)}
              className="input-box" />
  </div>);
}
InputComponent.propTypes = {
  id: PropTypes.string,
  inputValue: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  maxlength: PropTypes.string
};
