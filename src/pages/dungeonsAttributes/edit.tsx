import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
} from "@pankod/refine-antd";

import { IAttribute, IDungeons ,IDungeonsAttributes} from "interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";

export const DungeonsAttributeEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IDungeonsAttributes>();
  const { selectProps: dungeonSelectProps } = useSelect<IDungeons>({
    resource: "dungeons",
    optionLabel: "dungeonName",
    optionValue: "dungeonsId",
  });

  const { selectProps: attributeSelectProps } = useSelect<IAttribute>({
    resource: "attribute",
    optionLabel: "attributeName",
    optionValue: "attributeId",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
       <Form {...formProps} layout="vertical">
       <Form.Item
          label="Dungeons Id"
          name="dungeonsId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...dungeonSelectProps} />
        </Form.Item>
        <Form.Item
          label="AttributeId"
          name="attributesId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...attributeSelectProps} />
        </Form.Item>
        <Form.Item
          label="Value"
          name="value"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
