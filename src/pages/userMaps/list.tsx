import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  TextField,
  useTable,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  TagField,
} from "@pankod/refine-antd";

import { IMaps, IUser, UserMaps } from "interfaces";

export const UserMapsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<UserMaps>({});
  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });
  const { selectProps: mapSelectProps } = useSelect<IMaps>({
    resource: "Map",
    optionLabel: "mapName",
    optionValue: "mapId",
  });
  return (
    <List>
      <Table {...tableProps} rowKey="userMapsId">
        <Table.Column
          dataIndex="userId"
          key="userId"
          title="User"
          render={(value) => {
            if (userSelectProps.options)
              return userSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="mapId"
          key="mapId"
          title="Map"
          render={(value) => {
            if (mapSelectProps.options)
              return mapSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />

        <Table.Column
          dataIndex="mapPvpType"
          key="mapPvpType"
          title="Map Pvp Type"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="mapTier"
          key="mapTier"
          title="Map Tier"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex={["map", "populationLimit"]} // Access the nested field correctly
          key="populationLimit"
          title="Population Limit"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex={["map", "currentPopulation"]} // Access the nested field correctly
          key="currentPopulation"
          title="Current Population"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex={["map", "mapToken"]} // Access the nested field correctly
          key="mapToken"
          title="Map Token"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="url"
          key="url"
          title="URL"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="lastDeploy"
          key="lastDeploy"
          title="Last Deploy"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<UserMaps>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.userMapsId} />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.userMapsId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
