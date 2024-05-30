import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  EditButton,
  DeleteButton,
} from "@pankod/refine-antd";

import { IType } from "interfaces";

export const TypeList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IType>({});
  return (
    <List>
      <Table {...tableProps} rowKey="typeId">
        <Table.Column
          dataIndex="textString"
          key="textString"
          title="TextString"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IType>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.typeId} />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.typeId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
