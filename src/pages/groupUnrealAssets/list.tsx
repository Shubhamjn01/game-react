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

import { IGroupUnrealAssets, IGroups } from "interfaces";

export const GroupUnrealAssetsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IGroupUnrealAssets>({});

  const { selectProps: unrealAssetsSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="unrealAssetId">
        <Table.Column
          dataIndex="groupId"
          title="Group Id"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column
          dataIndex="groupId"
          title="Group Name"
          render={(value) => {
            if (unrealAssetsSelectProps.options)
              return unrealAssetsSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="unRealAsset"
          title="Unreal Asset Id"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column<IGroupUnrealAssets>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.unrealAssetId}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.unrealAssetId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
