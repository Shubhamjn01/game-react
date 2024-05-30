import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
} from "@pankod/refine-antd";

import { ITag, IUser } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";

export const FriendEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ITag>();

  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="User"
          name="userId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          
          <Select {...userSelectProps} />
        </Form.Item>
        <Form.Item
          label="Friends"
          name="Friends"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...userSelectProps} mode="multiple" />
        </Form.Item>
      </Form>
    </Edit>
  );
};
