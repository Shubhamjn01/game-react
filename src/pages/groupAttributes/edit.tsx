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

import { IAttribute, IGroupAttributes, IGroups } from "interfaces";

export const GroupAttributesEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IGroupAttributes>();
  const { selectProps: groupSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
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
          label="Group"
          name="groupId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...groupSelectProps} />
        </Form.Item>
        <Form.Item
           label="AttributeId"
           name="attributesId"
          rules={[
            {
              required: true,
            },
          ]}
        >
      <Select  {...attributeSelectProps} />
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
