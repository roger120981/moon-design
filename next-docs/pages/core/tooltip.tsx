import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import ArrowPositions from '../../public/examples/tooltipTW/ArrowPositions';
import Customization from '../../public/examples/tooltipTW/Customization';
import Default from '../../public/examples/tooltipTW/Default';
import WithoutArrow from '../../public/examples/tooltipTW/WithoutArrow';
import WithoutShadow from '../../public/examples/tooltipTW/WithoutShadow';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('tooltipTW');
  return (
    <>
      <ComponentPageDescription title="Tooltip" isInProgress>
        <p>
          A means of displaying a description or extra information about an
          element, usually on hover, but can also be on click or tap.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://www.radix-ui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Radix
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Tooltip>
  <Tooltip.Trigger>...</Tooltip.Trigger>
  <Tooltip.Content>
    ...
    <Tooltip.Arrow />
  </Tooltip.Conten>
</Tooltip>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Arrow positions"
        preview={<ArrowPositions />}
        code={examples ? examples.ArrowPositions : 'Loading'}
      />
      <Preview
        title="Without arrow"
        preview={<WithoutArrow />}
        code={examples ? examples.WithoutArrow : 'Loading'}
      />
      <Preview
        title="Without shadow"
        preview={<WithoutShadow />}
        code={examples ? examples.WithoutShadow : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <PropsTable
        title="Tooltip.Trigger props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Tooltip.Content props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'position',
            type: 'top-start | top-center | top-end | bottom-start | bottom-center | bottom-end | right | left',
            required: false,
            default: 'top-center',
            description: 'Position of Tooltip',
          },
          {
            name: 'withShadow',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Shows Tooltip shadow',
          },
        ]}
      />
      <PropsTable
        title="Tooltip.Arrow props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

export default Example;