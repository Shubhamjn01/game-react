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

import { ITemporaryGroups } from "interfaces";

export const TemporarytGroupsList: React.FC<IResourceComponentsProps> = () => {
    
  const { tableProps } = useTable<ITemporaryGroups>({});

  return (
    <List>
      <Table {...tableProps} rowKey="groupTempId">
        <Table.Column
          dataIndex="groupTempId"
          title="GroupTempID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="groupMembers"
          title="GroupMembers"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="groupUnrealId"
          key="groupUnrealId"
          title="GroupUnrealID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<ITemporaryGroups>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="middle" recordItemId={record.groupTempId} />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.groupTempId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
