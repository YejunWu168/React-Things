import React, { Fragment } from 'react';
import uuid from 'uuid';

const Label = ({handleChange, value, editing, tags, onEnter}) => (
    editing ?
        <input
        autoFocus
        className="edit-field"
        defaultValue={value.trim() !== '' ? value : null}
        placeholder="New To-Do"
        type="text"
        onChange={handleChange}
        onKeyDown={onEnter}
        />
    :
        <Fragment>
            <label className='todo-label'>
                {
                value.trim() !== '' ? value
                 : (
                <span className="placeholder" style={{ color: "grey" }}>
                    New To-Do
                </span>
                )}
            </label>
            {/* <div className="tags">
                {tags.map(tag => (
                <span key={uuid()} className="tag">
                    {tag}
                </span>
                ))}
            </div> */}
        </Fragment>
)


export default Label;