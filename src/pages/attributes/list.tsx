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

import { IAttribute } from "interfaces";

export const AttributeList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IAttribute>({});
  return (
    <List>
      <Table {...tableProps} rowKey="attributeId">
        <Table.Column
          dataIndex="attributeName"
          key="attributeName"
          title="AttributeName"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IAttribute>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.attributeId}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.attributeId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
