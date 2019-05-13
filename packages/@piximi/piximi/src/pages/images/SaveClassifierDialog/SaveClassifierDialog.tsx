import * as React from 'react';
import {
  DialogTitle,
  DialogActions,
  DialogContent,
  Dialog,
  FilenameTextField
} from '@cytoai/components';

const SaveClassifierDialog = (props: any) => {
  const { open, onClose } = props;

  const [filename, setFilename] = React.useState<string>('');

  const onAcceptance = () => {
    onClose();
  };

  const onFilenameChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setFilename(target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle title="Save classifier" />

      <DialogContent>
        <FilenameTextField
          filename={filename}
          onFilenameChange={onFilenameChange}
        />
      </DialogContent>

      <DialogActions
        acceptanceTitle="Save"
        cancellationTitle="Cancel"
        onAcceptance={onAcceptance}
        onCancellation={onClose}
      />
    </Dialog>
  );
};

export default SaveClassifierDialog;