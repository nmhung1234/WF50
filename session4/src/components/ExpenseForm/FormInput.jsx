import React from "react";

function FormInput(props) {

    const { lable, type, placeholder, value, onchange } = props;
    return (
        <lable>
            {lable}
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onchange}
            />
        </lable>
    );
}

export default FormInput;
