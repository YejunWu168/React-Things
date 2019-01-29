import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/fontawesome-free-solid";
import TagList from "./TagList";
import onClickOutside from "react-onclickoutside";

class TagField extends React.Component {
  state = {
    tagInput: false,
    tag: "",
    placeholder: ""
  };

  onHover = placeholder => {
    this.setState({
      placeholder
    });
  };

  componentDidMount() {
    if (this.textInput !== null) {
      this.textInput.focus();
    }
  }

  handleAddTags = () => {
    this.setState(prevState => ({
      tagInput: !prevState.tagInput
    }));

    // delay setting focus so it will not be blocked by disabled state
    window.setTimeout(() => {
      if (this.textInput !== null) {
        this.textInput.focus();
      }
    }, 500);
  };

  handleClickOutside = () => {
    this.setState({
      tagInput: false
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
        tag: ""
      });
      this.props.handleAddTags();
    }
  };

  addSavedTag = () => {
    this.props.handleAddTag(this.props.todoId, this.state.placeholder);
    this.props.handleAddToTagList(this.state.placeholder);
    this.setState({
      tag: ""
    });
    this.props.handleAddTags();
  };

  render() {
    return (
      <div className="add-tag" style={{ background: this.state.tagInput ? "#f0f1f2" : "none" }}>
        <input
          type="text"
          className="todo-btn__input"
          onChange={this.handleChangeTagField}
          onKeyDown={this.handleKeyDownTagField}
          onClick={this.handleClickInput}
          placeholder={this.state.placeholder ? this.state.placeholder : "tags"}
          value={this.state.tag}
          style={{
            width: this.state.tagInput ? "10rem" : "0rem"
          }}
          disabled={this.state.tagInput ? false : "disabled"}
          ref={input => {
            this.textInput = input;
          }}
        />
        <button className="todo-btn" onClick={this.handleAddTags}>
          <FontAwesomeIcon className="todo-btn" icon={faTag} fixedWidth />
        </button>

        {this.state.tagInput && (
          <TagList
            tagList={this.props.tagList}
            onHover={this.onHover}
            addSavedTag={this.addSavedTag}
            filteredTags={this.state.filteredTags}
            tag={this.state.tag}
            showTagList={true}
          />
        )}
      </div>
    );
  }
}

export default onClickOutside(TagField);
