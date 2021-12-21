import React from 'react';

import { Dialog, Button, Stack } from '@heathmont/moon-components';

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowDialog(true)}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
        maxWidth="760px"
        position="TOP"
        heading={
          <>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </>
        }
      >
        <Stack>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            blandit massa at lorem fermentum volutpat. Aliquam varius faucibus
            turpis, in facilisis dui dictum ac. Nulla ac consequat enim. Ut
            lobortis ultricies mauris eget volutpat. Aliquam aliquam nisl in
            nulla sagittis, eget viverra est ullamcorper. Morbi vel eros sed
            mauris dignissim congue et nec ligula. Duis quis tellus a est
            facilisis finibus. Duis varius libero id arcu pretium, et ultrices
            diam tincidunt.
          </p>
        </Stack>
      </Dialog>
    </>
  );
};

export default Example;