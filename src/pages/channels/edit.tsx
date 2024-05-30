import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";

import { IAttribute, IGroups, IMaps, IType } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";

export const ChannelEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IAttribute>();

  const { selectProps: mapSelectProps } = useSelect<IGroups>({
    resource: "Groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Server"
          name="server"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="channel Name"
          name="channelName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Group"
          name="groupId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...mapSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
