import { IResourceComponentsProps } from "@pankod/refine-core";

import { Edit, Form, Select, useForm, useSelect,Input } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IGroupMessageComminucations, IGroups } from "interfaces";

export const GroupMessageComminucationsEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IGroupMessageComminucations>();

  const { selectProps: tagsSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Group"
          name="groupId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...tagsSelectProps} />
        </Form.Item>
        <Form.Item
          label="ServerAddress"
          name="serverAddress"
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
