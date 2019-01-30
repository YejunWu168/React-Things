import React, { Component } from 'react'

class InputButtons extends Component {

    state = {
        clickedButtons: {
            
        }
    }

    registerButton = () => {
        console.log('hello world')
    }

    render() {
        const { children } = this.props
        return (
            <div className="todo-buttons"> 
                {React.Children.map(children, (child) => React.cloneElement(child, {registerButton: this.registerButton}))}
            </div> 
        )
    }
}

export default InputButtons