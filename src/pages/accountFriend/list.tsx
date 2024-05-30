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

import { IAccountFriend, ITag, IToken, IUser } from "interfaces";

export const FriendList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<ITag>({});

  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="tagId">
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
          dataIndex="Friends"
          key="Friends"
          title="Friends"
          render={(value) => {
            if (userSelectProps.options)
              return userSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TagField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column<IAccountFriend>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.accountFriendId}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.accountFriendId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
