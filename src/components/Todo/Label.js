import React, { Component } from 'react';

import uuid from 'uuid';

class Label extends Component {

    render() {
        if (this.props.editing) {
            return (
                <input
                autoFocus
                className="edit-field"
                defaultValue={this.props.editText}
                placeholder="New Todo"
                type="text"
                onChange={e => {
                    this.props.handleEditChange(e);
                }}
                onKeyDown={this.props.handleKeyDown}
                />
            );
            } else {
            return (
                <React.Fragment>
                    <label className={`todo-label ${this.props.todo.isChecked ? "completed" : ""}`}>
                        {
                        this.props.todo.text.trim() ? (
                        this.props.todo.text
                        ) : (
                        <span className="placeholder" style={{ color: "grey" }}>
                            New To - Do
                        </span>
                        )}
                    </label>
                    <div className="tags">
                        {this.props.todo.tags.map(tag => (
                        <span key={uuid()} className="tag">
                            {tag}
                        </span>
                        ))}
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Label;