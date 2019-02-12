import React, { Component } from 'react'

const InputButtons = ({ children }) => (
    <div className="todo-buttons"> 
        {/* {React.Children.map(children, (child) => React.cloneElement(child, {registerButton: this.registerButton}))} */}
        { children }
    </div> 
);

export default InputButtons