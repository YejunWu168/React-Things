import React from 'react';
import {string} from 'prop-types';



const Tooltip = props => (
    <div className="tooltip">
        <h5 className="tooltip__title">{props.title}</h5>
        <p className="tooltip__text">{props.text}</p>
    </div>
);

Tooltip.propTypes = {
    title: string,
    text: string
}


export default Tooltip;