import { IResourceComponentsProps } from "@pankod/refine-core";
import {
  Image,
  List,
  Table,
  TextField,
  useTable,
  Space,
  DeleteButton,
} from "@pankod/refine-antd";
import { IImage } from "interfaces";

export const ImageList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IImage>();

  return (
    <List>
      <Table {...tableProps} rowKey="imageId">
        <Table.Column
          dataIndex="imageUrl"
          key="imageUrl"
          title="Image"
          render={(value) => (
            <Image src={value} loading="lazy" width={"100px"} />
          )}
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
          render={(value) => <TextField value={value} />}
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
