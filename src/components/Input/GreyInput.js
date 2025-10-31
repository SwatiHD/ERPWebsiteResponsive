import { useState } from "react";

function GreyInput({
    labelTitle,
    labelStyle,
    type,
    containerStyle,
    defaultValue,
    placeholder,
    updateFormValue,
    updateType,
    jsoncall,
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
                type={type || "text"}
                value={value}
                onChange={(e) => updateInputValue(e.target.value)}
                className="input input-bordered"
                placeholder="Task Number" disabled
            />
        </div>
    );
}

export default GreyInput;
