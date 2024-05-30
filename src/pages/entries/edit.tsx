import { useState } from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Edit,
  Form,
  Input,
  useForm,
  Checkbox,
  useSelect,
  Select,
  TimePicker,
  Row,
  Col,
  Button,
  Space,
} from "@pankod/refine-antd";
import { MinusCircleOutlined } from "@ant-design/icons";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IEntry, IRegion, ITag, IType, IZone } from "interfaces";

export const EntryEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();
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

  const { selectProps: entrySelectProps } = useSelect<IEntry>({
    resource: "entry",
    optionLabel: "textString",
    optionValue: "entryId",
  });

  const { selectProps: zoneSelectProps } = useSelect<IZone>({
    resource: "zone",
    optionLabel: "textString",
    optionValue: "zoneId",
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
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="TextString"
          name="textString"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea
            // style={{
            //   height: "280px",
            // }}
            autoSize={{ minRows: 5, maxRows: 10 }}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Type"
              name="type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select {...typeSelectProps} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Region"
              name="regionId"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select {...regionSelectProps} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Object"
              name="object"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}></Col>
        </Row>
        <Form.Item
          label="Summarydescription"
          name="summarydescription"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 10, maxRows: 20 }} />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="PossessorEntity" name="possessorEntity">
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="PossessorRegion" name="possessorRegion">
              <Select {...regionSelectProps} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="PossessorZone" name="possessorZone">
              <Select {...zoneSelectProps} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="PossessorEntry" name="possessorEntry">
              <Select {...entrySelectProps} />
            </Form.Item>
          </Col>{" "}
        </Row>

        <Form.Item
          label="Tag"
          name="tagId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select mode="multiple" {...tagSelectProps} />
        </Form.Item>

        <Form.List name="attributes">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Row
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  <Col span={8}>
                    <Form.Item
                      label={`Attribute ${index + 1}`}
                      name={[field.name, "attributeId"]}
                      rules={[
                        {
                          required: true,
                          message: "Please select attribute",
                        },
                      ]}
                    >
                      <Select {...attributeSelectProps} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={`Value ${index + 1}`}
                      name={[field.name, "Value"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter attribute value",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={4}>
                    {index !== 0 && (
                      <MinusCircleOutlined
                        type="link"
                        onClick={() => remove(field.name)}
                      />
                    )}
                  </Col>
                </Row>
              ))}
              <Form.Item style={{ width: "70%" }}>
                <Button type="dashed" onClick={() => add()} block>
                  Add Attribute
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item
          label="InquiryPhases"
          name="InquiryPhases"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 5, maxRows: 20 }} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
