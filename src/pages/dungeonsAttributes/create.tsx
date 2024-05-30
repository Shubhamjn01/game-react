import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
  Create,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
} from "@pankod/refine-antd";
import { IDungeons, IDungeonsAttributes,IAttribute } from "interfaces";

export const DungeonsAttributeCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IDungeonsAttributes>();

  const { selectProps: dungeonSelectProps } = useSelect<IDungeons>({
    resource: "dungeons",
    optionLabel: "dungeonName",
    optionValue: "dungeonsId",
  });
  
  const { selectProps: attributeSelectProps } = useSelect<IAttribute>({
    resource: "attribute",
    optionLabel: "attributeName",
    optionValue: "attributeId",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Dungeons Id"
          name="dungeonsId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...dungeonSelectProps} />
        </Form.Item>
        <Form.Item
          label="AttributeId"
          name="attributesId"
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
    </Create>
  );
};
