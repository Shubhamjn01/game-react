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

import {  IGroupTags, IGroups, ITag } from "interfaces";

export const GroupTagsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IGroupTags>({});

  const { selectProps: tagsSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });

  const { selectProps: tagselectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
  });



  return (
    <List>
      <Table {...tableProps} rowKey="tagId">
        <Table.Column
          dataIndex="groupId"
          title="Group Id"
          render={(value) => {
            if (tagsSelectProps.options)
              return tagsSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="tagsId"
          title="TagId"
          render={(value) => {
            if (tagselectProps.options)
              return tagselectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />

        <Table.Column<IGroupTags>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="middle" recordItemId={record.tagId} />
              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.tagId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
