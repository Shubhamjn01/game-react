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

import { IGroupAffliations, IGroups } from "interfaces";

export const GroupsAffliationsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IGroupAffliations>({});
  const { selectProps: tagsSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });
  return (
    <List>
      <Table {...tableProps} rowKey="affiliatedGroupId">
        <Table.Column
          dataIndex="groupId"
          title="Group"
          render={(value) => {
            if (tagsSelectProps.options)
              return tagsSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="groupAffiliationId"
          title="Affiliated Group"
          render={(value) => {
            if (tagsSelectProps.options)
              return tagsSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="affiliatedGroupId"
          title="Affliated Group Id"
          render={(value) => {
            return <TextField value={value} />;
          }}
        />
        <Table.Column
          dataIndex="relationshipType"
          key="relationshipType"
          title="Relationship Type"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="strength"
          key="strength"
          title="Affliation Strength"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IGroupAffliations>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.affiliatedGroupId}
              />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.affiliatedGroupId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
