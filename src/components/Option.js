import React from 'react';

const Option = (props) =>
    (
        <div className="option option__text">
            {props.optionText}
            <button
                className="button button--link"
                onClick={() => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
             </button>
        </div>
    )

export default Option