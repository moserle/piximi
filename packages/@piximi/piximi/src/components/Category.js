import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip
} from 'material-ui';
import LabelIcon from '@material-ui/icons/Label';
import LabelOutlineIcon from '@material-ui/icons/LabelOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { DropTarget } from 'react-dnd';
import styles from './Category.css';
import { withStyles } from 'material-ui/styles/index';

const spec = {
  drop(props, monitor, component) {
    return {
      category: props.identifier,
      color: props.color
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Category = props => {
  const {
    deleteCategory,
    updateCategoryVisibility,
    color,
    connectDropTarget,
    description,
    images,
    visible
  } = props;

  return connectDropTarget(
    <div>
      <ListItem
        dense
        button
        onClick={() => updateCategoryVisibility(images, !visible)}
        classes={{
          root: props.isOver ? props.classes.isOver : props.classes.isNotOver
        }}
      >
        <ListItemIcon>
          {visible ? (
            <LabelIcon style={{ color: color }} />
          ) : (
            <LabelOutlineIcon style={{ color: color }} />
          )}
        </ListItemIcon>

        <ListItemText primary={description} />

        <ListItemSecondaryAction>
          <Tooltip id="tooltip-icon" title="Delete category">
            <ListItemIcon
              onClick={deleteCategory}
              classes={{ root: props.classes.icon }}
            >
              <DeleteIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(
  DropTarget('Image', spec, collect)(Category)
);
