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

import { IEntry, IRegion, ITag, IType, IZone } from "interfaces";
import moment from "moment";

export const EntryList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IEntry>({});

  const { selectProps: typeSelectProps } = useSelect<IType>({
    resource: "type",
    optionLabel: "textString",
    optionValue: "typeId",
  });

  const { selectProps: regionSelectProps } = useSelect<IRegion>({
    resource: "region",
    optionLabel: "textString",
    optionValue: "regionId",
  });

  const { selectProps: zoneSelectProps } = useSelect<IZone>({
    resource: "zone",
    optionLabel: "textString",
    optionValue: "zoneId",
  });

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

  const { selectProps: attributeSelectProps } = useSelect<ITag>({
    resource: "attribute",
    optionLabel: "attributeName",
    optionValue: "attributeId",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="entryId">
        <Table.Column
          dataIndex="textString"
          key="textString"
          title="TextString"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="object"
          key="object"
          title="object"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="location"
          key="location"
          title="Location"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="historicdatetime"
          key="historicdatetime"
          title="Historicdatetime"
          render={(value) => (
            <TextField value={moment(value).format("YYYY-MM-DD hh:mm:ss")} />
          )}
        />
        <Table.Column
          dataIndex="summarydescription"
          key="summarydescription"
          title="Summarydescription"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="possessorEntity"
          key="possessorEntity"
          title="possessorEntity"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="possessorRegion"
          key="possessorRegion"
          title="possessorRegion"
          render={(value) => {
            if (regionSelectProps.options){
              return regionSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
            }
          }}
        />
        <Table.Column
          dataIndex="possessorZone"
          key="possessorZone"
          title="possessorZone"
          render={(value) => {
            if (zoneSelectProps.options)
              return zoneSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="possessorEntry"
          key="possessorEntry"
          title="possessorEntry"
          render={(value) => {
            if (entrySelectProps.options)
              return entrySelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="regionId"
          key="regionId"
          title="regionId"
          render={(value) => {
            if (regionSelectProps.options)
              return regionSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="type"
          key="type"
          title="Type"
          render={(value) => {
            if (typeSelectProps.options)
              return typeSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="tags"
          key="tags"
          title="Tags"
          render={(value) => {
            if (value)
              return value.map((ele:any) => {
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
        <Table.Column<IEntry>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.entryId} />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.entryId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
