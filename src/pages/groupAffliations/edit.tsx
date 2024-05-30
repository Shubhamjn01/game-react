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

import { IGroupAffliations,IGroups } from "interfaces";

export const GroupAffliationsEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IGroupAffliations>();

  const { selectProps: attributeSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="groupId"
          name="groupId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...attributeSelectProps}/>
        </Form.Item>
        <Form.Item
          label="Affialtion Group"
          name="groupAffiliationId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...attributeSelectProps} />
        </Form.Item>
        <Form.Item
          label="Relationship type"
          name="relationshipType"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Affliation Strength"
          name="strength"
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
