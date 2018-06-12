import React from 'react';
import PropTypes from 'prop-types';

import './InputField.css';

const InputField = ({ label, value, name, type, placeholder, options, onChange }) => {
  const Label = <label className="input-label" htmlFor={name}>{label}</label>;
  let Input = null;

  if (!type || type === 'number' || type === 'text') {
    Input = <input
      className="input-value"
      type={type}
      id={name}
      name={name}
      placeholder={placeholder || name}
      value={value}
      autoComplete="off"
      onChange={onChange}
    />;
  } else if (type === 'select') {
    const Options = options.map(
      option => <option key={option.value} value={option.value || option.label}>
        {option.label}
      </option>
    );
    Input = <select
      className="input-value"
      id={name}
      name={name}
      placeholder={placeholder || name}
      value={value}
      autoComplete="off"
      onChange={onChange}>
      { Options }
    </select>;
  }

  return (
    <div className="input-field">
      { label && Label }
      { Input }
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array
};

InputField.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  options: []
};

export default InputField;
