import React, { useState } from "react";

function DescriptionForm(props) {
    const [description, setDescription] = useState("");

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    return (
        <>
            <input
                type="text"
                value={description}
                onChange={onDescriptionChange}
            />
        </>
    );
}

export default DescriptionForm;
