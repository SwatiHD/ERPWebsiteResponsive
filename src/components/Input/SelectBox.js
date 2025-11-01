import axios from "axios";
import capitalize from "capitalize-the-first-letter";
import React, { useState, useEffect } from "react";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

function SelectBox(props) {
  const {
    labelTitle,
    labelDescription,
    defaultValue,
    containerStyle,
    placeholder,
    labelStyle,
    options,
    updateType,
    updateFormValue,
    value,
  } = props;

  const [changedvalue, setChangedValue] = useState(value );
useEffect(() => {
    setChangedValue(value); // This ensures the controlled value is always up-to-date
  }, [value]);
  // const updateValue = (newValue) => {
  //   updateFormValue({ updateType, value: newValue });
  //   setValue(newValue);
  // };


 
// const updateValue = (newValue) => {
//     // Call the updateFormValue function to update formData in parent
//     updateFormValue({ updateType, value:newValue
//      });
//   };
  const updateValue = (newValue) => {
    // Update the parent with the new value
    updateFormValue({ updateType, value: newValue });
    setChangedValue(newValue);  // Update local state for local rendering
  };
  return (
    <div className={`form-control ${containerStyle}`}>
      <label className={`label  ${labelStyle}`}>
        <div className="label-text">
          {labelTitle}
          {labelDescription && (
            <div className="tooltip tooltip-right" data-tip={labelDescription}>
              <InformationCircleIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </label>

      <select
        className="select select-bordered"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      >
        <option disabled value="PLACEHOLDER">
          {placeholder}
        </option>
        {options.map((o, k) => {
          return (
            <option value={o.value || o.name} key={k}>
              {o.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectBox;
