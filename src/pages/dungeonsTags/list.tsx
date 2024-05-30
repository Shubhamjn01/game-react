import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import { IDungeons, IDungeonsTags,ITag } from "interfaces";
import {
  DeleteButton,
  EditButton,
  Table,
  TextField,
  useTable,
  Space,
  CreateButton,
  List,
  useSelect
} from "@pankod/refine-antd";

export const DungeonsTagsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IDungeonsTags>({});

  const { selectProps: dungeonSelectProps } = useSelect<IDungeons>({
    resource: "dungeons",
    optionLabel: "dungeonName",
    optionValue: "dungeonsId",
  });

  const { selectProps: tagselectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="tagId">
        <Table.Column
          dataIndex="dungeonsId"
          key="dungeonsId"
          title="DungeonsId"
          render={(value) => {
            if (dungeonSelectProps.options)
              return dungeonSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="tagsId"
          key="tagsId"
          title="TagId"
          render={(value) => {
            if (tagselectProps.options)
              return tagselectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column<IDungeonsTags>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="middle" recordItemId={record.tagId} />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.tagId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
