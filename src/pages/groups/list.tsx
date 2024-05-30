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

import { IGroups, IType } from "interfaces";

export const GroupsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IGroups>({});

  const { selectProps: typeSelectProps } = useSelect<IType>({
    resource: "type",
    optionLabel: "textString",
    optionValue: "typeId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="groupId">
        {/* <Table.Column
          dataIndex="groupId"
          title="Id"
          render={(value) => <TextField value={value} />}
        /> */}
        <Table.Column
          dataIndex="groupName"
          title="Name"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="groupDescription"
          key="groupsDescription"
          title="Description"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="groupType"
          key="groupsType"
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
        <Table.Column<IGroups>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.groupId}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.groupId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
