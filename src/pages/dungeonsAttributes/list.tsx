import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import { IAttribute, IDungeons, IDungeonsAttributes } from "interfaces";
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

export const DungeonsAttributeList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IDungeonsAttributes>({});
  
  const { selectProps: dungeonSelectProps } = useSelect<IDungeons>({
    resource: "dungeons",
    optionLabel: "dungeonName",
    optionValue: "dungeonsId",
  });

  const { selectProps: attributeSelectProps } = useSelect<IAttribute>({
    resource: "attribute",
    optionLabel: "attributeName",
    optionValue: "attributeId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="attributeId">
        <Table.Column
          dataIndex="dungeonsId"
          key="dungeonsId"
          title="DungeonsID"
          render={(value) => {
            if (dungeonSelectProps.options)
              return dungeonSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="attributesId"
          key="attributesId"
          title="AttributeID"
          render={(value) => {
            if (attributeSelectProps.options)
              return attributeSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="value"
          key="value"
          title="Value"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IDungeonsAttributes>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="middle" recordItemId={record.attributeId} />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.attributeId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
