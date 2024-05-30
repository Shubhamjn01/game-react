import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  TextField,
  useTable,
  Space,
  EditButton,
  DeleteButton,
} from "@pankod/refine-antd";

import { ITag } from "interfaces";

export const TagList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<ITag>({});
  return (
    <List>
      <Table {...tableProps} rowKey="tagId">
        <Table.Column
          dataIndex="tagString"
          key="tagString"
          title="TagString"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<ITag>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.tagId} />
              <DeleteButton hideText size="small" recordItemId={record.tagId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
