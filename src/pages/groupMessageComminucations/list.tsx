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

import { IGroupMessageComminucations, IGroups } from "interfaces";

export const GroupMessageComminucationsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IGroupMessageComminucations>({});

  const { selectProps: tagsSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="serverAddress">
        <Table.Column
          dataIndex="groupId"
          title="Group Id"
          render={(value) => {
            if (tagsSelectProps.options)
              return tagsSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="serverAddress"
          title="ServerAddress"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column<IGroupMessageComminucations>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="middle" recordItemId={record.serverAddress} />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.serverAddress}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
