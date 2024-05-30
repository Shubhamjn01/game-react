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

import { IEntryTag, IEntry, IAttribute, IEntryAttribute } from "interfaces";

export const EntryAttributeList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IEntryTag>({});

  const { selectProps: entrySelectProps } = useSelect<IEntry>({
    resource: "entry",
    optionLabel: "textString",
    optionValue: "entryId",
  });

  const { selectProps: attributeSelectProps } = useSelect<IAttribute>({
    resource: "attribute",
    optionLabel: "attributeName",
    optionValue: "attributeId",
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
          dataIndex="attributeId"
          title="Attribute"
          render={(value) => {
            if (attributeSelectProps.options)
              return attributeSelectProps.options.map((el) => {
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
        <Table.Column<IEntryAttribute>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.eaId} />
              <DeleteButton hideText size="small" recordItemId={record.eaId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
