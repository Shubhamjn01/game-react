import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Create,
  Form,
  Input,
  useForm,
  useSelect,
  NumberField,
  Select,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { ITag, IType } from "interfaces";
import { type } from "os";

export const MapsCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();

  const { selectProps: tagSelectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="mapName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="mapDescription"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Path"
          name="mapPath"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tags Of Type Culture"
          name="tagsOfTypeCulture"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select mode="multiple" {...tagSelectProps} />
        </Form.Item>
        <Form.Item
          label="Population Limit"
          name="populationLimit"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number"/>
        </Form.Item>
        <Form.Item
          label="Current Population"
          name="currentPopulation"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Current Map Status"
          name="currentMapStatus"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Map Token"
          name="mapToken"
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
