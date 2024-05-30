import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Create,
  Form,
  Input,
  useForm,
  Select,
  useSelect,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IAttribute, IMaps, IUser } from "interfaces";
import { ICluster } from "../../interfaces";

export const CharCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IAttribute>();

  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  const { selectProps: clusterSelectProps } = useSelect<ICluster>({
    resource: "Cluster",
    optionLabel: "name",
    optionValue: "clusterId",
  });

  const { selectProps: mapsSelectProps } = useSelect<IMaps>({
    resource: "Map",
    optionLabel: "mapName",
    optionValue: "mapId",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        {/* <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        {/* <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        <Form.Item
          label="Nick Name"
          name="nickName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          label="DOB"
          name="dob"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        <Form.Item
          label="Character Data"
          name="characterData"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 2 , maxRows:15}} />
        </Form.Item>

        <Form.Item
          label="User ID"
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
          label="Cluster ID"
          name="clusterId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...clusterSelectProps} />
        </Form.Item>
        <Form.Item
          label="map ID"
          name="mapId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...mapsSelectProps} />
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
          <Select {...mapsSelectProps} />
        </Form.Item>
        <Form.Item
          label="last map Acessed"
          name="lastmapAcessed"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...mapsSelectProps} />
        </Form.Item>
        <Form.Item
          label="last portal Acessed"
          name="lastportalAcessed"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="character Status"
          name="characterStatus"
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
