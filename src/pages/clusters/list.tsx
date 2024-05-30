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

import { IAttribute, ICluster, IMaps, IType, IUser } from "interfaces";

export const ClusterList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IAttribute>({});

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

  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="clusterId">
        <Table.Column
          dataIndex="name"
          key="name"
          title="Cluster Name"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="clusterReport"
          key="clusterReport"
          title="cluster Report"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="type"
          key="type"
          title="Type"
          render={(value) => {
            if (typeSelectProps.options)
              return typeSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
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
          dataIndex="isAccepted"
          key="isAccepted"
          title="isAccepted"
          render={(value) => <TextField value={String(value)} />}
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
          dataIndex="defaultMapId"
          key="defaultMapId"
          title="Default Map"
          render={(value) => {
            if (mapSelectProps.options)
              return mapSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="SpawnableMaps"
          key="SpawnableMaps"
          title="Spawnable Maps"
          render={(value) => {
            if (mapSelectProps.options)
              return mapSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TagField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="clusterVersion"
          key="clusterVersion"
          title="cluster Version"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="clusterToken"
          key="clusterToken"
          title="cluster Token"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<ICluster>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.clusterId}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.clusterId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
