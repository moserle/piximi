import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import * as React from "react";
import BarChartIcon from "@material-ui/icons/BarChart";
import {useTranslation} from "react-i18next";
import {useDialog} from "@piximi/hooks";
import {ConnectedEvaluateClassifierDialog} from "@piximi/evaluate-classifier-dialog";

type EvaluateListItemProbs = {
  datasetInitialized: boolean;
  setDatasetInitialized: (datasetInitialized: boolean) => void;
};

export const EvaluateListItem = (probs: EvaluateListItemProbs) => {
  const {datasetInitialized, setDatasetInitialized} = probs;

  const {openedDialog, openDialog, closeDialog} = useDialog();

  const {t: translation} = useTranslation();

  const evaluate = async () => {
    openDialog();
  };

  return (
    // @ts-ignore
    <React.Fragment>
      <ListItem button dense onClick={evaluate}>
        // @ts-ignore
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary={translation("Evaluate")} />
      </ListItem>
      // @ts-ignore
      <ConnectedEvaluateClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
        openedDrawer={true}
        datasetInitialized={datasetInitialized}
        setDatasetInitialized={setDatasetInitialized}
      />
    </React.Fragment>
  );
};
