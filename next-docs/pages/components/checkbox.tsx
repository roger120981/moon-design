import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Checked from '../../public/examples/checkbox/Checked';
import Customize from '../../public/examples/checkbox/Customize';
import Default from '../../public/examples/checkbox/Default';
import Disabled from '../../public/examples/checkbox/Disabled';
import PartiallySelected from '../../public/examples/checkbox/PartiallySelected';
import ReadOnly from '../../public/examples/checkbox/ReadOnly';
import WithLabel from '../../public/examples/checkbox/WithLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('checkbox');
  const { name, text, image } = getComponent('Checkbox');
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
        <p>
          Checkboxes are used to let a user select one or more options of a
          limited number of choices.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="With Label"
        preview={<WithLabel />}
        code={examples ? examples.WithLabel : 'Loading'}
      />
      <Preview
        title="Checked"
        preview={<Checked />}
        code={examples ? examples.Checked : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="ReadOnly"
        preview={<ReadOnly />}
        code={examples ? examples.ReadOnly : 'Loading'}
      />
      <Preview
        title="Partially selected"
        preview={<PartiallySelected />}
        code={examples ? examples.PartiallySelected : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customize />}
        code={examples ? examples.Customize : 'Loading'}
      />
      <PropsTable
        title="Checkbox props"
        data={[
          {
            name: 'bgColor',
            type: 'string',
            required: false,
            default: 'bg-piccolo',
            description: 'Checked state of checkbox',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: "Describes checkbox's purpose",
          },
          {
            name: 'indeterminate',
            type: 'boolean',
            required: false,
            default: '-',
            description: `Set checkbox as indeterminate and does not modify the checked state`,
          },
        ]}
      />
    </>
  );
};

export default Example;
