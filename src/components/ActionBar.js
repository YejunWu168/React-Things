import React from 'react';
import {func, bool} from 'prop-types';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";

const ActionBar = props => (
    <footer className="actionbar">
        <button className="actionbar__btn" onClick={props.handleAddTodo}>+</button>
        <button className="actionbar__btn" 
        disabled={props.buttonDisabled} 
        onClick={props.handleRemoveSelected}><FontAwesomeIcon icon={faTrash} fixedWidth /></button>
    </footer>
);

ActionBar.propTypes = {
    handleAddTodo: func,
    buttonDisabled: bool,
    handleRemoveSelected: func
}

export default ActionBar;