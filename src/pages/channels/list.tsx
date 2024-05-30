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

import { IAttribute, IChannel, IGroups } from "interfaces";

export const ChannelList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IAttribute>({});

  const { selectProps: groupSelectProps } = useSelect<IGroups>({
    resource: "Groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="clusterId">
        <Table.Column
          dataIndex="server"
          key="server"
          title="Server"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="channelName"
          key="channelName"
          title="channel Name"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column
          dataIndex="groupId"
          key="groupId"
          title="Group"
          render={(value) => {
            if (groupSelectProps.options)
              return groupSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column<IChannel>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.channelId}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.channelId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
