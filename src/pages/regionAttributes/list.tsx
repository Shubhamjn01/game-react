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

import { IRegionTag, IRegion, IAttribute, IRegionAttribute } from "interfaces";

export const RegionAttributeList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IRegionTag>({});

  const { selectProps: regionSelectProps } = useSelect<IRegion>({
    resource: "region",
    optionLabel: "textString",
    optionValue: "regionId",
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
          dataIndex="regionId"
          title="Region"
          render={(value) => {
            if (regionSelectProps.options)
              return regionSelectProps.options.map((el) => {
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
        <Table.Column<IRegionAttribute>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.raId} />
              <DeleteButton hideText size="small" recordItemId={record.raId} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
