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

import { IEntryTag, ITag, IEntry } from "interfaces";

export const EntryTagList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IEntryTag>({});

  const { selectProps: entrySelectProps } = useSelect<IEntry>({
    resource: "entry",
    optionLabel: "textString",
    optionValue: "entryId",
  });

  const { selectProps: tagSelectProps } = useSelect<ITag>({
    resource: "tag",
    optionLabel: "tagString",
    optionValue: "tagId",
  });
  return (
    <List>
      <Table {...tableProps} rowKey="eaId">
        <Table.Column
          dataIndex="entryId"
          title="Entry"
          render={(value) => {
            if (entrySelectProps.options)
              return entrySelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="tagId"
          title="Tag"
          render={(value) => {
            if (tagSelectProps.options)
              return tagSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="value"
          key="value"
          title="Value"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IEntryTag>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.etId} />
              <DeleteButton hideText size="small" recordItemId={record.etId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
