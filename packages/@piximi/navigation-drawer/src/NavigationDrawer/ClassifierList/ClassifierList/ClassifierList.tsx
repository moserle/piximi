import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from "@material-ui/core";
import * as React from "react";
import {useState} from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useCollapseList} from "@piximi/hooks";
import {ConnectedFitListItem} from "../FitListItem/ConnectedFitListItem";
import {ConnectedEvaluateListItem} from "../EvaluateListItem/ConnectedEvaluateListItem";
import {ConnectedPredictListItem} from "../PredictListItem/ConnectedPredictListItem";

export const ClassifierList = () => {
  const {collapsedList, collapseList} = useCollapseList();

  const [datasetInitialized, setDatasetInitialized] = useState<boolean>(false);

  return (
    <List dense>
      <ListItem button onClick={collapseList}>
        // @ts-ignore
        <ListItemIcon>
          {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary="Classifier" />
      </ListItem>
      // @ts-ignore
      <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
        // @ts-ignore
        <ConnectedFitListItem
          datasetInitialized={datasetInitialized}
          setDatasetInitialized={setDatasetInitialized}
        />
        // @ts-ignore
        <ConnectedEvaluateListItem
          datasetInitialized={datasetInitialized}
          setDatasetInitialized={setDatasetInitialized}
        />
        // @ts-ignore
        <ConnectedPredictListItem />
      </Collapse>
    </List>
  );
};
