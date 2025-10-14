import { useState } from "react";

function FileInput({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}) {
  //   const [value, setValue] = useState(defaultValue);

  //   const updateInputValue = (val) => {
  //     setValue(val);
  //     updateFormValue({ updateType, value: val });
  //   };

  return (
    <div className={`form-control ${containerStyle}`}>
      {/* //   <label className="label">
    //     <span className={"label-text text-base-content " + labelStyle}>
    //       {labelTitle}
    //     </span>
    //   </label> */}
      <input
        type="file"
        // value={value}
        placeholder={placeholder || ""}
        // onChange={(e) => updateInputValue(e.target.value)}
        className="file-input input-bordered leading-10 pl-0"
      />
    </div>
  );
}

export default FileInput;
