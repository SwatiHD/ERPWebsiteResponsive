import { useState } from "react";

function DateInput({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (val) => {
    setValue(val);
    updateFormValue({ updateType, value: val });
  };

  return (
    <div className={`form-control ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        type="date"
        value={value}
        placeholder={placeholder || "YYYY-MM-DD"}
        onChange={(e) => updateInputValue(e.target.value)}
        className="input input-bordered"
      />
    </div>
  );
}

export default DateInput;
