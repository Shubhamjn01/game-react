import { IResourceComponentsProps } from "@pankod/refine-core";

import { Edit, Form, Select, useForm, useSelect } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IAttribute, IGroupTags, IGroups, ITag } from "interfaces";

export const GroupTagsEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IGroupTags>();

  const { selectProps: tagsSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });
  const { selectProps: tagselectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
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
          label="Tags Id"
          name="tagsId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...tagselectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
