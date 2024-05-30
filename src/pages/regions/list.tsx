import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  TextField,
  useTable,
  Space,
  EditButton,
  DeleteButton,
  TagField,
  useSelect,
} from "@pankod/refine-antd";

import { IRegion, IType, IZone } from "interfaces";

export const RegionList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IRegion>({});
  const { selectProps: typeSelectProps } = useSelect<IType>({
    resource: "type",
    optionLabel: "textString",
    optionValue: "typeId",
  });

  const { selectProps: zoneSelectProps } = useSelect<IZone>({
    resource: "zone",
    optionLabel: "textString",
    optionValue: "zoneId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="regionId">
        <Table.Column
          dataIndex="textString"
          key="textString"
          title="TextString"
          render={(value) => <TextField value={value} />}
          sorter
        />
        <Table.Column
          dataIndex="regionDimensions"
          key="regionDimensions"
          title="RegionDimensions"
          render={(value) => <TextField value={value} />}
          sorter
        />
        <Table.Column
          dataIndex="regionWorldPosition"
          key="regionWorldPosition"
          title="RegionWorldPosition"
          render={(value) => <TextField value={value} />}
          sorter
        />
        <Table.Column
          dataIndex="possessingZone"
          key="possessingZone"
          title="PossessingZone"
          render={(value) => {
            if (zoneSelectProps.options)
              return zoneSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key="value" />;
              });
          }}
          sorter
        />
        <Table.Column
          dataIndex="possessorMap"
          key="possessorMap"
          title="PossessorMap"
          render={(value) => <TextField value={value} />}
          sorter
        />
        <Table.Column
          dataIndex="type"
          key="type"
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
        <Table.Column<IRegion>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.regionId}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.regionId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
