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

import { IZone, IType, ITag } from "interfaces";

export const ZoneList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IZone>({});

  const { selectProps: typeSelectProps } = useSelect<IType>({
    resource: "type",
    optionLabel: "textString",
    optionValue: "typeId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="zoneId">
        <Table.Column
          dataIndex="type"
          title="Type"
          render={(value) => {
            if (typeSelectProps.options)
              return typeSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key="value" />;
              });
          }}
        />
        <Table.Column
          dataIndex="textString"
          key="textString"
          title="TextString"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="mapArrayList"
          key="mapArrayList"
          title="MapArrayList"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="tags"
          key="tags"
          title="Tags"
          render={(value) => {
            if (value)
              return value.map((ele: any) => {
                return <TagField value={ele["tagString"]} />;
              });
          }}
        />
        <Table.Column
          dataIndex="attributes"
          key="attributes"
          title="Attribute"
          render={(value) => {
            if (value)
              return value.map((ele: any) => {
                return <TagField value={ele["attributeName"]} />;
              });
          }}
        />
        <Table.Column<IZone>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.zoneId} />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.zoneId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
