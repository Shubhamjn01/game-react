import { IResourceComponentsProps } from "@pankod/refine-core";

import { Edit, Form, Input, useForm } from "@pankod/refine-antd";

import { ITag } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";

export const TagEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ITag>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="TagString"
          name="tagString"
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
