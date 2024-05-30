import {
  Image,
  List,
  Table,
  TextField,
  useTable,
  Space,
  DeleteButton,
} from "@pankod/refine-antd";
import { IResourceComponentsProps } from "@pankod/refine-core";
import { IImage } from "interfaces";
import React from "react";

export const RegionImageList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IImage>();
  return (
    <List>
      <Table {...tableProps} rowKey="imageId">
        <Table.Column
          dataIndex="imageUrl"
          key="imageUrl"
          title="Image"
          render={(value) => <Image src={value} width="100px" loading="lazy" />}
        />
        <Table.Column
          dataIndex="imageSubcategory"
          key="imageSubcategory"
          title="Subcategory"
          render={(value) => <TextField value={value || "Image SubCategory"} />}
        />
        <Table.Column
          dataIndex="imageDescription"
          key="imageDescription"
          title="Description"
          render={(value) => <TextField value={value || "No Description"} />}
        />
        <Table.Column
          title="Actions"
          dataIndex="imageId"
          key="imageId"
          render={(value) => (
            <Space>
              <DeleteButton hideText size="small" recordItemId={value} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
