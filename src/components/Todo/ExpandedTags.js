import React from 'react';

import SecondaryTagField from '../SecondaryTagField';

import uuid from 'uuid';

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