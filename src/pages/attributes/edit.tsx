import { IResourceComponentsProps } from "@pankod/refine-core";

import { Edit, Form, Input, useForm } from "@pankod/refine-antd";

import { IAttribute } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";

export const AttributeEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IAttribute>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="AttributeName"
          name="attributeName"
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
