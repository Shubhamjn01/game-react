import { IResourceComponentsProps } from "@pankod/refine-core";

import { Edit, Form, Input, useForm } from "@pankod/refine-antd";

import { IType } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";

export const TypeEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="TextString"
          name="textString"
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
