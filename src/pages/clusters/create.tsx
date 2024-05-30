import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IAttribute, IMaps, ITag, IType, IUser } from "interfaces";

export const ClusterCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IAttribute>();

  const { selectProps: typeSelectProps } = useSelect<IType>({
    resource: "type",
    optionLabel: "textString",
    optionValue: "typeId",
  });

  const { selectProps: mapSelectProps } = useSelect<IMaps>({
    resource: "map",
    optionLabel: "mapName",
    optionValue: "mapId",
  });

  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  const { selectProps: tagSelectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Cluster Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="cluster Report"
          name="clusterReport"
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
          <Select {...typeSelectProps} />
        </Form.Item>
        <Form.Item
          label="userId"
          name="userId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...userSelectProps} />
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
          label="Default Map Id"
          name="defaultMapId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...mapSelectProps} />
        </Form.Item>
        <Form.Item
          label="Spawnable Map"
          name="SpawnableMaps"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...mapSelectProps} mode="multiple"/>
        </Form.Item>
        <Form.Item
          label="filter Tags"
          name="filterTags"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...tagSelectProps} mode="multiple"/>
        </Form.Item>
        <Form.Item
          label="cluster Version"
          name="clusterVersion"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="isAccepted"
          name="isAccepted"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={true}
            options={[
              { value: true, label: "True" },
              { value: false, label: "False" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="cluster Token"
          name="clusterToken"
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
