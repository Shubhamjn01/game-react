import { useState } from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useForm,
  Checkbox,
  useSelect,
  Select,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IAttribute, ITag, IType, IZone } from "interfaces";

export const RegionEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();

  const { selectProps: typeSelectProps } = useSelect<IType>({
    resource: "type",
    optionLabel: "textString",
    optionValue: "typeId",
  });

  const { selectProps: zoneSelectProps } = useSelect<IZone>({
    resource: "zone",
    optionLabel: "textString",
    optionValue: "zoneId",
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
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...typeSelectProps} />
        </Form.Item>
        <Form.Item label="TextString" name="textString">
          <Input />
        </Form.Item>
        <Form.Item label="RegionDimensions" name="regionDimensions">
          <Input />
        </Form.Item>
        <Form.Item label="RegionWorldPosition" name="regionWorldPosition">
          <Input />
        </Form.Item>
        <Form.Item
          label="PossessingZone"
          name="possessingZone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...zoneSelectProps} />
        </Form.Item>
        <Form.Item label="PossessorMap" name="possessorMap">
          <Input />
        </Form.Item>
        <Form.Item
          label="Tag"
          name="tagId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select mode="multiple" {...tagSelectProps} />
        </Form.Item>
        <Form.Item
          label="Attributes"
          name="attributeId"
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
          label="InquiryPhases"
          name="InquiryPhases"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 5, maxRows: 20 }} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
