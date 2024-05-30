import { IResourceComponentsProps } from "@pankod/refine-core";

import { Create, Form, useForm, useSelect, Select, Input } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IGroupUnrealAssets, IGroups } from "interfaces";

export const GroupUnrealAssetsCreate: React.FC<
  IResourceComponentsProps
> = () => {
  const { formProps, saveButtonProps } = useForm<IGroupUnrealAssets>();
  const { selectProps: unrealAssetsSelectProps } = useSelect<IGroups>({
    resource: "groups",
    optionLabel: "groupName",
    optionValue: "groupId",
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Group"
          name="groupId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...unrealAssetsSelectProps} />
        </Form.Item>
        <Form.Item
          label="unRealAsset"
          name="unRealAsset"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input  />
        </Form.Item>
        
      </Form>
    </Create>
  );
};
