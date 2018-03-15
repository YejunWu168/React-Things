import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/fontawesome-free-solid";
import "../styles/TagList.css";

class TagList extends React.Component {
  filteredTags = () => {
    const filteredTags = this.props.tagList.filter(savedTag => {
      return savedTag.toLowerCase().includes(this.props.tag.toLowerCase());
    });

    if (filteredTags.length > 0 && this.props.showTagList) {
      return (
        <ul className="taglist" style={{ marginTop: this.props.secondaryTagField ? "0.5rem" : "" }}>
          {filteredTags.map((filteredTag, i) => (
            <li
              key={i}
              onMouseEnter={() => {
                this.props.onHover(filteredTag);
              }}
              onClick={() => this.props.addSavedTag()}
            >
              <FontAwesomeIcon icon={faTag} />
              {filteredTag}
            </li>
          ))}
        </ul>
      );
    }
  };

  render() {
    return <div>{this.filteredTags()}</div>;
  }
}

export default TagList;
