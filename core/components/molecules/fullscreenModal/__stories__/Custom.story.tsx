import * as React from 'react';
import { Button, Paragraph, Text, FullscreenModal } from '@/index';
import Heading from '@/components/atoms/heading';
import { action } from '@storybook/addon-actions';

export const customized = () => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
      </Paragraph>

      <Button appearance="primary" onClick={openModal}>
        Open modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        header={(
          <>
            <Heading>Custom Heading component</Heading>
            <Text appearance="subtle">This is subheading</Text>
          </>
        )}
        footer={(
          <>
            <Button appearance="basic" onClick={action('Basic button click')}>
              Basic
            </Button>
            <Button appearance="primary" className="ml-4" onClick={action('Primary button click')}>
              Primary
            </Button>
          </>
        )}
      >
        <Text>Fullscreen Modal Body</Text>
        <Heading size="s">Description Title</Heading>
        <Paragraph>
          Adding a subheading clearly indicates the hierarchy of the information.
        </Paragraph>
        <Paragraph>
          Card Sections include supporting text like an article summary or a restaurant description.
        </Paragraph>
      </FullscreenModal>
    </div>
  );
};

const customCode = `
// import { FullscreenModal, Paragraph, Button, Heading, Text } from '@innovaccer/design-system';
() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };


  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
      </Paragraph>

      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        header={(
          <>
            <Heading>Custom Heading component</Heading>
            <Text appearance="subtle">This is subheading</Text>
          </>
        )}
        footer={(
          <>
            <Button appearance="basic" onClick={ev => console.log('Basic button click', ev)}>
              Basic
            </Button>
            <Button appearance="primary" className="ml-4" onClick={ev => console.log('Primary button click', ev)}>
              Primary
            </Button>
          </>
        )}
      >
        <Text>Fullscreen Modal Body</Text>
        <Heading size="s">Description Title</Heading>
        <Paragraph>
          Adding a subheading clearly indicates the hierarchy of the information.
        </Paragraph>
        <Paragraph>
          Card Sections include supporting text like an article summary or a restaurant description.
        </Paragraph>
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Molecules|Fullscreen Modal',
  component: FullscreenModal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Fullscreen Modal',
        noHtml: true
      }
    }
  }
};
