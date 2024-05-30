import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import { IDungeons, IGroups, IMaps, IType } from "interfaces";
import {
  DeleteButton,
  EditButton,
  Table,
  TextField,
  useTable,
  Space,
  List,
  useSelect,
  TagField,
} from "@pankod/refine-antd";

export const DungeonsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IDungeons>({});

  const { selectProps: groupSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

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

  return (
    <List>
      <Table {...tableProps}>
        {/* <Table.Column
          dataIndex="dungeonsId"
          key="dungeonsId"
          title="Id"
          render={(value) => <TextField value={value} />}
        /> */}
        <Table.Column
          dataIndex="dungeonName"
          key="dungeonName"
          title="Name"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="dungeonDescription"
          key="dungeonDescription"
          title="Description"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="dungeonUrl"
          key="dungeonUrl"
          title="URL"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="groupId"
          key="groupI"
          title="Group"
          render={(value) => {
            if (groupSelectProps.options)
              return groupSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
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
          dataIndex="mapId"
          key="mapID"
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
          dataIndex="tags"
          key="tags"
          title="Tags"
          render={(value) => {
            if (value)
              return value.map((ele: any) => {
                return <TagField value={ele["tagString"]} />;
              });
          }}
        />
        <Table.Column
          dataIndex="attributes"
          key="attributes"
          title="Attribute"
          render={(value) => {
            if (value)
              return value.map((ele: any) => {
                return <TagField value={ele["attributeName"]} />;
              });
          }}
        />
        <Table.Column
          dataIndex="tier"
          key="tier"
          title="tier"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IDungeons>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.dungeonsId}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.dungeonsId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
