import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useSelect,
  Select,
  useForm,
  Row,
  Col,
} from "@pankod/refine-antd";

import { IAttribute, ICluster, IMaps, IUser } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";
import React, { useState } from "react";

export const CharEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<IAttribute>();
  const postData = queryResult?.data?.data;
  const parsedData = postData ? JSON.parse(postData?.characterData) : null;
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

  const [characterData, setCharacterData] = useState("");

  const handleCharacterDataChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCharacterData(event.target.value);
  };

  console.log(characterData, "characterData");
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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
        <Row gutter={16} justify="center">
          <Col span={12}>
            <Form.Item
              label="Character Data"
              name="characterData"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea
                autoSize={{ minRows: 30, maxRows: 30 }}
                value={characterData}
                onChange={handleCharacterDataChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="JSON Format">
              <Input.TextArea
                autoSize={{ minRows: 2, maxRows: 30 }}
                value={characterData ? JSON.parse(characterData) : parsedData}
                readOnly
              />
            </Form.Item>
          </Col>
        </Row>

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
          name="clusterID"
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
          <Select {...mapsSelectProps} mode="multiple" />
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
    </Edit>
  );
};
