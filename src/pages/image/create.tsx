import { IResourceComponentsProps, useApiUrl } from "@pankod/refine-core";
import { useNotification } from "@pankod/refine-core";

import axios from "axios";
import {
  Create,
  Form,
  Input,
  useForm,
  Upload,
  getValueFromEvent,
  Select,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IType } from "interfaces";
import { useState } from "react";

export const ImageCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();
  const [image, setImage] = useState<string[]>([]);
  const [desc, setDesc] = useState("");
  const apiUrl = useApiUrl();
  const { open } = useNotification();

  const handleFileUpload = async (e: any) => {
    const file = e.file;
    console.log(e);
    const key = "avatar/" + "_" + Date.now().toString() + "_" + file.name;
    setImage((prev) => [...prev, file?.originFileObj]);

    // await putAvatar(file, key);
    // setImage("https://bsbbnet.s3.ca-central-1.amazonaws.com/" + key);
    // props.setImageUrl("https://bsbbnet.s3.ca-central-1.amazonaws.com/" + key);
  };

  const handleClick = async () => {
    if (image.length <= 0 || !desc) {
      open?.({
        type: "error",
        message: "Please fill all the details",
      });
      return;
    }

    let formData = new FormData();
    // formData.append("file", image);
    image.forEach((file, ind) => {
      formData.append(`file${ind}`, file);
    });

    formData.append("imageDescription", desc);

    const res = await axios.post(`${apiUrl}/upload`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res?.data?.imageUrl) {
      open?.({
        type: "success",
        message: "Image Uploaded Successfully",
        key: res?.data?.imageUrl,
      });
    }
  };

  console.log("apiUrl", apiUrl);
  return (
    <Create saveButtonProps={{ ...saveButtonProps, onClick: handleClick }}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Image"
          name="Image"
          valuePropName="file"
          getValueFromEvent={getValueFromEvent}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Upload.Dragger
            onChange={handleFileUpload}
            name="file"
            // action={}
            listType="picture-card"
            maxCount={1}
          >
            <p className="ant-upload-text">Drag & drop a file in this area</p>
          </Upload.Dragger>
        </Form.Item>
        <Form.Item
          label="ImageDescription"
          name="imageDescription"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea onChange={(e) => setDesc(e.target.value)} />
        </Form.Item>
      </Form>
    </Create>
  );
};
