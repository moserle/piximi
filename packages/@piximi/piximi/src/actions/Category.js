import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

export const createCategory = category => ({
  type: 'CREATE_CATEGORY',
  category
});

export const deleteCategory = identifier => ({
  type: 'DELETE_CATEGORY',
  identifier
});

export const updateCategoryVisibility = identifier => ({
  type: 'UPDATE_CATEGORY_VISIBILITY',
  identifier
});
