import { useState } from "react";

function DateInput({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
   updateFormValue = () => {},  // Default to an empty function
  updateType = "default"
}) {
  const [value, setValue] = useState(defaultValue);

  const convertToDateFormat = (inputDate) => {
    const regex = /^(0[1-9]|1[0-2])\/([0-2][0-9]|3[01])\/\d{4}$/;

    if (regex.test(inputDate)) {
      const [month, day, year] = inputDate.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }

    return inputDate;
  };

  const updateInputValue = (val) => {
    const formattedValue = convertToDateFormat(val);
    setValue(formattedValue);

    // Use default values if updateFormValue or updateType is missing
    updateFormValue({ updateType, value: formattedValue });
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
        placeholder={placeholder || "MM-DD-YYYY"}
        onChange={(e) => updateInputValue(e.target.value)}
        className="input input-bordered"
      />
    </div>
  );
}

export default DateInput;
