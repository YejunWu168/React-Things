import React from "react";
import TagList from "./TagList";
import onClickOutside from "react-onclickoutside";

class SecondaryTagField extends React.Component {
  state = {
    tag: "",
    placeholder: "",
    showTagList: false
  };

  onHover = placeholder => {
    this.setState({
      placeholder
    });
  };

  componentDidMount() {
    this.textInput.focus();
  }

  handleClickOutside = () => {
    this.setState({
      tagInput: false
    });
  };

  handleClickInput = () => {
    this.setState({
      showTagList: true
    });
  };

  handleChangeTagField = e => {
    this.setState({
      tag: e.target.value
    });
  };

  handleKeyDownTagField = e => {
    if (e.key === "Enter") {
      this.props.handleAddTag(this.props.todoId, this.state.tag);
      this.props.handleAddToTagList(this.state.tag);
      this.setState({
        tag: "",
        placeholder: "",
        showTagList: false
      });
      this.props.handleAddTags();
      this.textInput.focus();
    }
  };

  addSavedTag = () => {
    this.props.handleAddTag(this.props.todoId, this.state.placeholder);
    this.props.handleAddToTagList(this.state.placeholder);
    this.setState({
      tag: "",
      placeholder: "",
      showTagList: false
    });
    this.props.handleAddTags();
    this.textInput.focus();
  };

  render() {
    return (
      <div className="add-tag">
        <input
          type="text"
          className="secondary-tag__input"
          onChange={this.handleChangeTagField}
          onKeyDown={this.handleKeyDownTagField}
          onClick={this.handleClickInput}
          placeholder={this.state.placeholder ? this.state.placeholder : ""}
          value={this.state.tag}
          ref={input => {
            this.textInput = input;
          }}
        />
        {this.state.showTagList && (
          <TagList
            tagList={this.props.tagList}
            onHover={this.onHover}
            addSavedTag={this.addSavedTag}
            filteredTags={this.state.filteredTags}
            tag={this.state.tag}
            showTagList={this.state.showTagList}
            secondaryTagField={true}
          />
        )}
      </div>
    );
  }
}

export default onClickOutside(SecondaryTagField);
