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
} from "@pankod/refine-antd";

import { IAttribute, IGroupAttributes, IGroups } from "interfaces";

export const GroupAttributesList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IGroupAttributes>({});

  const { selectProps: groupSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
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
          dataIndex="groupId"
          title="Group Id"
          render={(value) => {
            if (groupSelectProps.options)
              return groupSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="attributesId"
          title="Attribute Id"
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
          title="value"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column<IGroupAttributes>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.attributeId}
              />
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
