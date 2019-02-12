import React, { Component } from 'react'
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { constants } from '../../utils/constants'

class InputButton extends Component {
  state = {
    value: '',
    active: false
  }

  handleChange = e => {
    this.setState({value: e.target.value })
  }

  handleClick = () => {
    this.setState({
      active: true
    })

    if (this.textInput !== null) {
      this.textInput.focus();
    }
  }

  handleKeydown = e => {
    if (e.keyCode !== constants.ENTER_KEY){
      return
    }

    if (this.state.value.length > 0) {
      this.props.addItem(this.state.value)
    }

    this.setState({value: ''});
  }

  handleBlur = () => {
    if (this.state.value.length > 0) {
      this.props.addItem(this.state.value) 
    }

    this.setState({value: ''});

    window.setTimeout(() => {
      this.setState({
        active: false
      })
    }, 50)
  }

  handleFocus = () => {
    this.setState({
      active: true
    })
  }

  render() {
    const { icon, buttonType } = this.props
    const { active } = this.state

    return (
      
      <div className={`field-btn ${active ? 'field-btn__expanded' : ''}`} >
        <input
         className="todo-btn__input"
         type="text"
         placeholder={ buttonType }
         onChange={this.handleChange}
         onKeyDown={this.handleKeydown}
         value={this.state.value}
         style={{
           width: active ? "10rem" : "0rem"
         }}
         onBlur={this.handleBlur}
         onFocus={this.handleFocus}
         // prevent user from tabbing through this field when it's not open yet

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
