import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Create,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
  TimePicker,DatePicker
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { IMaps, IUser, UserMaps } from "interfaces";
import dayjs from "dayjs";


export const UserMapsCreate: React.FC<IResourceComponentsProps> = () => {

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
    <Create saveButtonProps={saveButtonProps}>
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
          <TimePicker format={"YYYY-MM-DD hh:mm:ss"} />
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
    </Create>
  );
};
