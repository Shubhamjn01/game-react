import React from "react";
import { IResourceComponentsProps,  } from "@pankod/refine-core";
import { Create, Form, Input, useForm,Select ,useSelect} from "@pankod/refine-antd";
import {  IMaps,IDungeons,IType, ITag, IAttribute } from "interfaces";

export const DungeonsCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IDungeons>();

  const { selectProps: mapSelectProps } = useSelect<IMaps>({
    resource: "map",
    optionLabel: "mapName",
    optionValue: "mapId",
  });
  const { selectProps: typeSelectProps } = useSelect<IType>({
    resource: "type",
    optionLabel: "textString",
    optionValue: "typeId",
  });

  const { selectProps: tagSelectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
  });

  const { selectProps: attributeSelectProps } = useSelect<IAttribute>({
    resource: "attribute",
    optionLabel: "attributeName",
    optionValue: "attributeId",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Dungeon Name"
          name="dungeonName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Dungeon Description"
          name="dungeonDescription"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Dungeon URL"
          name="dungeonUrl"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Select  {...typeSelectProps} />
        </Form.Item>
        <Form.Item
          label="Map"
          name="mapId"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Select {...mapSelectProps} />
        </Form.Item>
        <Form.Item
          label="Attribute"
          name="attributes"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select mode="multiple" {...attributeSelectProps} />
        </Form.Item>
        <Form.Item
              label="Value"
              name="attributeValue"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
        <Form.Item
          label="Tag"
          name="tags"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select mode="multiple" {...tagSelectProps} />
        </Form.Item>
        <Form.Item
          label="Tier"
          name="tier"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
