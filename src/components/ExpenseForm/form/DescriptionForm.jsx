import React, { useState } from "react";

function DescriptionForm(props) {
    const [description, setDescription] = useState("");

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    return (
        <div>
            <input
                type="text"
                value={description}
                onChange={onDescriptionChange}
            />
        </div>
    );
}

export default DescriptionForm;
