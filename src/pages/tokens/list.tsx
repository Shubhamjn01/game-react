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

import { ITag, IToken, IUser } from "interfaces";

export const TokenList: React.FC<IResourceComponentsProps> = () => {
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
          dataIndex="tokens"
          key="tokens"
          title="Tokens"
          render={(value) => {
            if (value.length) {
              return value?.map((el: any) => {
                return <TagField value={el} key={value} />;
              });
            }
          }}
        />
        <Table.Column<IToken>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.tokenId} />
              <DeleteButton hideText size="small" recordItemId={record.tokenId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
