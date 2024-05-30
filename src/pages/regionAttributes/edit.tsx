import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IAttribute, IRegion, IType } from "interfaces";

export const RegionAttributeEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();

  const { selectProps: regionSelectProps } = useSelect<IRegion>({
    resource: "region",
    optionLabel: "textString",
    optionValue: "regionId",
  });

  const { selectProps: attributeSelectProps } = useSelect<IAttribute>({
    resource: "attribute",
    optionLabel: "attributeName",
    optionValue: "attributeId",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Region"
          name="regionId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...regionSelectProps} />
        </Form.Item>
        <Form.Item
          label="Attribute"
          name="attributeId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...attributeSelectProps} />
        </Form.Item>
        <Form.Item
          label="Value"
          name="value"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
