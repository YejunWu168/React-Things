import React from "react";

class FilterTagList extends React.Component {
  render() {
    if (this.state.usedTags.length > 0) {
      return (
        <div>
          <span
            className="filter-tag"
            onClick={() => {
              this.handleClickFilterTag("");
            }}
          >
            All
          </span>
          {this.state.usedTags.map(tag => (
            <span key={tag} className="filter-tag" onClick={() => this.handleClickFilterTag(tag)}>
              {tag}
            </span>
          ))}
        </div>
      );
    }
  }
}

export default FilterTagList;