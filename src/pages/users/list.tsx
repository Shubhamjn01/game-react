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

import { UserListing, ITag, IToken, IUser } from "interfaces";

export const UserListingList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<UserListing>({});

  return (
    <List>
      <Table {...tableProps} rowKey="userId">
      <Table.Column
          dataIndex="firstName"
          key="firstName"
          title="First Name"
          render={(value) => <TextField value={value} />}
        />
         <Table.Column
          dataIndex="lastName"
          key="lastName"
          title="Last Name"
          render={(value) => <TextField value={value} />}
        />
          <Table.Column
          dataIndex="email"
          key="email"
          title="Email"
          render={(value) => <TextField value={value} />}
        />
         <Table.Column<UserListing>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.userId} />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.userId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
