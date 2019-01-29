import React from 'react';
import uuid from 'uuid';

import SecondaryTagField from '../SecondaryTagField';


const ExpandedTags = props => (
    <div className="expanded-tags">
      {props.tags.map(tag => (
        <span key={uuid()} className="expanded-tag">
          {tag}
        </span>
      ))}
      <SecondaryTagField
        handleAddTag={props.handleAddTag}
        todoId={props.todoId}
        handleAddTags={props.handleAddTags}
        tagList={props.tagList}
        handleAddToTagList={props.handleAddToTagList}
      />
    </div>
);

export default ExpandedTags; 