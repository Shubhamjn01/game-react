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

import { IZoneTag, IZone, IAttribute, IZoneAttribute } from "interfaces";

export const ZoneAttributeList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IZoneTag>({});

  const { selectProps: zoneSelectProps } = useSelect<IZone>({
    resource: "zone",
    optionLabel: "textString",
    optionValue: "zoneId",
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
          dataIndex="zoneId"
          title="Zone"
          render={(value) => {
            if (zoneSelectProps.options)
              return zoneSelectProps.options.map((el) => {
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
        <Table.Column<IZoneAttribute>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.zaId} />
              <DeleteButton hideText size="small" recordItemId={record.zaId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
