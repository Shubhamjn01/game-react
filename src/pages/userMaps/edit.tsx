import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
  DatePicker,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

import { IMaps, IUser, UserMaps } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";

export const UserMapsEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<UserMaps>();

  var { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  const { selectProps: mapSelectProps } = useSelect<IMaps>({
    resource: "map",
    optionLabel: "mapName",
    optionValue: "mapId",
  });
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="User"
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
          label="Map Pvp Type"
          name="mapPvpType"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="mapTier"
          label="Map Tier"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          name="lastDeploy"
          label="Last Deploy"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
          <TimePicker  />
        </Form.Item> */}

        <Form.Item
          name="lastDeploy"
          label="Last Deploy"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Edit>
  );
};
