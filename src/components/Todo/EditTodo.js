import React from 'react';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/fontawesome-free-solid";

import Label from './Label';
import SubtaskList from './SubtaskList';
import ExpandedTags from './ExpandedTags';
import TagField from '../TagField';

const EditTodo = props => (
    <div
      className="edit-todo"
      onClick={e => {
        props.handleClickTodo(e);
      }}
    >
      <Label 
        editing={ props.editing } 
        editText={ props.editText } 
        handleEditChange={props.handleEditChange} 
        todo={ props.todo }
        handleKeyDown={ props.handleKeyDown }
      />
      <SubtaskList 
        editing={props.editing}
        subtasks={props.subtasks}
        handleSubtaskChecked={props.handleSubtaskChecked}
        handleKeyDownSubtaskField={props.handleKeyDownSubtaskField}
        handleSubtaskChange={props.handleSubtaskChange}
      />

      {
        props.hasTags && props.editing && (
        <ExpandedTags 
        tags={props.todo.tags} 
        handleAddTag={props.handleAddTag}
        todoId={props.todo.id}
        handleAddTags={props.handleAddTags}
        tagList={props.tagList}
        handleAddToTagList={props.handleAddToTagList}
        />
      )}

      {
        props.subtaskList === false &&
        props.editing === true && (
          <button className="subtask-btn" onClick={props.handleAddSubtaskList}>
            <FontAwesomeIcon icon={faListUl} fixedWidth />
          </button>
        )
      }

      {
        props.hasTags === false &&
        props.editing && (
          <TagField
            handleAddTag={props.handleAddTag}
            todoId={props.todo.id}
            handleAddTags={props.handleAddTags}
            tagList={props.tagList}
            handleAddToTagList={props.handleAddToTagList}
          />
        )
      }
    </div>
);

export default EditTodo;