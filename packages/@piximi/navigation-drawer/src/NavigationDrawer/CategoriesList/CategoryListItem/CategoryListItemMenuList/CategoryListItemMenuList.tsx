import * as React from "react";
import {
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  Divider
} from "@material-ui/core";
import {useDialog} from "@piximi/hooks";
import {ConnectedEditCategoryDialog} from "../../../../EditCategoryDialog/ConnectedEditCategoryDialog";
import {ConnectedDeleteCategoryDialog} from "../../../../DeleteCategoryDialog/ConnectedDeleteCategoryDialog";
import {ConnectedHideOtherCategoriesMenuItem} from "../../../../HideOtherCategoriesMenuItem/ConnectedHideOtherCategoriesMenuItem";
import {ConnectedChangeCategoryVisibilityMenuItem} from "../../../../ChangeCategoryVisibilityMenuItem/ConnectedChangeCategoryVisibilityMenuItem";
import {Category} from "@piximi/types";

type CategoryListItemMenuListProps = {
  anchorEl: any;
  category: Category;
  categories: Category[];
  closeMenu: () => void;
  openedMenu: boolean;
};

export const CategoryListItemMenuList = (
  props: CategoryListItemMenuListProps
) => {
  const {anchorEl, category, closeMenu, openedMenu} = props;

  const {
    openedDialog: openedEditCategoryDialog,
    openDialog: openEditCategoryDialog,
    closeDialog: closeEditCategoryDialog
  } = useDialog();

  const {
    openedDialog: openedDeleteCategoryDialog,
    openDialog: openDeleteCategoryDialog,
    closeDialog: closeDeleteCategoryDialog
  } = useDialog();

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 10 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left : 0
  };

  const onEditCategoryClick = () => {
    openEditCategoryDialog();

    closeMenu();
  };

  const onDeleteCategoryClick = () => {
    openDeleteCategoryDialog();

    closeMenu();
  };

  const known: boolean =
    category.identifier !== "00000000-0000-0000-0000-000000000000";

  return (
    // @ts-ignore
    <React.Fragment>
      // @ts-ignore
      <Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        id="simple-popper"
        onClose={closeMenu}
        open={openedMenu}
      >
        // @ts-ignore
        <Paper>
          // @ts-ignore
          <MenuList dense>
            // @ts-ignore
            <ConnectedHideOtherCategoriesMenuItem
              categoryProp={category}
              closeMenu={closeMenu}
            />
            // @ts-ignore
            <ConnectedChangeCategoryVisibilityMenuItem
              categoryProp={category}
              closeMenu={closeMenu}
            />
            {known && (
              <div>
                <Divider />

                <MenuItem onClick={onEditCategoryClick}>
                  // @ts-ignore
                  <ListItemText primary="Edit category" />
                </MenuItem>

                <MenuItem onClick={onDeleteCategoryClick}>
                  // @ts-ignore
                  <ListItemText primary="Delete category" />
                </MenuItem>
              </div>
            )}
          </MenuList>
        </Paper>
      </Popover>
      // @ts-ignore
      <ConnectedEditCategoryDialog
        category={category}
        onClose={closeEditCategoryDialog}
        open={openedEditCategoryDialog}
      />
      // @ts-ignore
      <ConnectedDeleteCategoryDialog
        category={category}
        onClose={closeDeleteCategoryDialog}
        open={openedDeleteCategoryDialog}
      />
    </React.Fragment>
  );
};
