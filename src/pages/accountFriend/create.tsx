import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Create,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { ITag, IUser } from "interfaces";
import { useEffect, useState } from "react";

export const FriendCreate: React.FC<IResourceComponentsProps> = () => {
  const [user, setUser] = useState("");
  const { formProps, saveButtonProps } = useForm<ITag>();

  var { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  useEffect(() => {
    const newOptions = userSelectProps?.options?.filter(
      (option) => option.value !== user
    );
    userSelectProps = { ...userSelectProps, options: newOptions };
  }, [user]);

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
