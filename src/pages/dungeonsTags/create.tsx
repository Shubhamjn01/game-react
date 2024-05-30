import React from "react";
import { IResourceComponentsProps  } from "@pankod/refine-core";
import { Create, Form, Input, useForm ,useSelect,Select} from "@pankod/refine-antd";
import { IDungeonsTags ,IDungeons,ITag} from "interfaces";

export const DungeonsTagsCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IDungeonsTags>();

  const { selectProps: dungeonSelectProps } = useSelect<IDungeons>({
    resource: "dungeons",
    optionLabel: "dungeonName",
    optionValue: "dungeonsId",
  });
  const { selectProps: tagselectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
  });

  return (
    <Create saveButtonProps={saveButtonProps} >
      <Form {...formProps} layout="vertical">
      <Form.Item
          label="Dungeons Id"
          name="dungeonsId"
          rules={[
            {
              required: true,
            },
          ]}
        >
      <Select  {...dungeonSelectProps} />
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
      <Select  {...tagselectProps} />
      </Form.Item>
      </Form>
    </Create>
  );
};
