import { useState } from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useForm,
  Checkbox,
  useSelect,
  Select,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IAttribute, IEntry, IType } from "interfaces";

export const EntryAttributeEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();

  const { selectProps: entrySelectProps } = useSelect<IEntry>({
    resource: "entry",
    optionLabel: "textString",
    optionValue: "entryId",
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
          label="Entry"
          name="entryId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...entrySelectProps} />
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
