import React, { Component } from 'react'
import FontAwesomeIcon from "@fortawesome/react-fontawesome"

class InputButton extends Component {
  state = {
    value: '',
    clicked: false
  }

  handleChange = e => {
    this.setState({value: e.target.value })
  }

  handleClick = () => {
    this.props.onClick(this.state.value)
    this.props.registerButton();
    this.setState({
      clicked: true
    })

    // delay setting focus so it will not be blocked by disabled state
    window.setTimeout(() => {
      if (this.textInput !== null) {
        this.textInput.focus();
      }
    }, 500);
  }

  render() {
    const { icon } = this.props
    const { clicked } = this.state

    return (
      
      <div className={`field-btn ${clicked ? 'field-btn__expanded' : ''}`} >
        <input
         type="text"
         className="todo-btn__input"
         onChange={this.handleChange}
         onKeyDown={this.handleKeyDownTagField}
         value={this.state.value}
         style={{
           width: clicked ? "10rem" : "0rem"
         }}

         // prevent user from tabbing through this field when it's not open yet
         disabled={
           clicked ? false : "disabled"
          }

          ref={input => {
            this.textInput = input
          }}
        />
          <button className="todo-btn" onClick={this.handleClick}>
            <FontAwesomeIcon icon={icon} fixedWidth />
          </button>
        {this.props.children}
      </div>
    )
  }
}

export default InputButton
