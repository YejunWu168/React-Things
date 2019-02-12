import React, { Component } from 'react'

const withUpdateStore = (WrappedComponent, dispatchers) => 
     class withUpdateStore extends Component {
        
        state = {
          value: ''
        }

        handleChange = e => {
          this.setState({value: e.target.value })
        }

        handleKeydown = e => {
          if (e.keyCode !== constants.ENTER_KEY){
            return;
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
        }

        render() {
            return (
                <WrappedComponent  {...this.props} />
            )
        }
    }

export default withUpdateStore