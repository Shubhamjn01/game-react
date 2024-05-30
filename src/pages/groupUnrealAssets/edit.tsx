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

import { IGroupAttributes, IGroups } from "interfaces";

export const GroupUnrealAssetsEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IGroupAttributes>();
  const { selectProps: attributeSelectProps } = useSelect<IGroups>({
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
          <Select {...attributeSelectProps} />
        </Form.Item>
        <Form.Item
          label="unRealAsset"
          name="unRealAsset"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input  />
        </Form.Item>
      </Form>
    </Edit>
  );
};
