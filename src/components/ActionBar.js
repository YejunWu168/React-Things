import React from 'react';
import {func, bool} from 'prop-types';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";

import Tooltip from './Tooltip';

ActionBar.propTypes = {
    handleAddTodo: func,
    buttonDisabled: bool,
    handleRemoveSelected: func
}

function ActionBar({handleAddTodo, buttonDisabled, handleRemoveSelected}) {
    return (
    <footer className="actionbar">
        {/* <Tooltip tooltipTitle={'New To-Do'} tooltipText={'You can also just press your spacebar.'} /> */}
        <button className="actionbar__btn" onClick={handleAddTodo}>+
            <Tooltip title={'New To-Do'} text={'You can also just press your spacebar'}/>
        </button>
        <button className="actionbar__btn" 
        disabled={buttonDisabled} 
        onClick={handleRemoveSelected}><FontAwesomeIcon icon={faTrash} fixedWidth /></button>
    </footer>
    )
};

export default ActionBar;