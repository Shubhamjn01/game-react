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

import { IMaps, ITag } from "interfaces";

export const MapsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IMaps>({});

  return (
    <List>
      <Table {...tableProps} rowKey="mapId">
        {/* <Table.Column
          dataIndex="mapId"
          title="Id"
          render={(value) => <TextField value={value} />}
        /> */}
        <Table.Column
          dataIndex="mapName"
          key="mapName"
          title="Name"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="mapDescription"
          key="mapDescription"
          title="Description"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="mapPath"
          key="mapPath"
          title="Path"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="tagsOfTypeCulture"
          key="tagsOfTypeCulture"
          title="Tags Of Type Culture"
          render={(value) => {
            if (value)
              return value.map((ele: any) => {
                return <TagField value={ele["tagString"]} />;
              });
          }}
        />
        <Table.Column
          dataIndex="populationLimit"
          key="populationLimit"
          title="Population Limit"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="currentPopulation"
          key="currentPopulation"
          title="Current Population"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="currentMapStatus"
          key="currentMapStatus"
          title="Current Map Status"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="mapToken"
          key="mapToken"
          title="Map Token"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IMaps>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="middle" recordItemId={record.mapId} />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.mapId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
