import React, { useState } from "react";
import PropTypes from "prop-types";

function FilterForm(props) {
    const [filter, setFilter] = useState(0);
    const onChangeFilter = (e) => {
        console.log(e.target.value);
    };
    return (
        <>
            <select onChange={onChangeFilter}>
                <option value="-1">Ít</option>
                <option value="0">Vừa phải</option>
                <option value="1">Nhiều</option>
            </select>
        </>
    );
}

FilterForm.propTypes = {};

export default FilterForm;
