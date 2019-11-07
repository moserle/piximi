import * as React from 'react';
import styles from './ImageViewerAppBar.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/styles';
import { UndoButton } from '../UndoButton';
import { SaveButton } from '../SaveButton';

const useStyles = makeStyles(styles);

type ImageViewerAppBarProps = {
  imgIdentifier: any;
  saveEditsGlobally: any;
  onClose: any;
  images: any;
};

export const ImageViewerAppBar = (props: ImageViewerAppBarProps) => {
  const classes = useStyles({});

  const [applySettingsGlobally, setApplySettingsGlobally] = React.useState(
    false
  );

  const [brightness, setBrightness] = React.useState(100);
  const [contrast, setContrast] = React.useState(100);

  const { imgIdentifier, onClose, images } = props;

  const onPublicClick = () => {
    setApplySettingsGlobally(!applySettingsGlobally);
  };

  return (
    <AppBar color="inherit" position="sticky">
      <Toolbar>
        <IconButton onClick={onClose}>
          <ArrowBackIcon styles={{ height: '256px', width: '256px' }} />
        </IconButton>

        <IconButton onClick={onPublicClick}>
          <PublicIcon />
        </IconButton>

        <div className={classes.grow} />

        <UndoButton
          identifier={imgIdentifier}
          images={images}
          setBrightness={setBrightness}
          setContrast={setContrast}
        />

        <SaveButton />
      </Toolbar>
    </AppBar>
  );
};