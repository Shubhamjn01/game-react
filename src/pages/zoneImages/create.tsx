import {
  Create,
  Form,
  Input,
  useForm,
  Upload,
  getValueFromEvent,
  Select,
  useSelect,
} from "@pankod/refine-antd";
import {
  IResourceComponentsProps,
  useApiUrl,
  useNotification,
} from "@pankod/refine-core";
import { useNavigation } from "@pankod/refine-core";
import axios from "axios";
import { IType, IZone } from "interfaces";
import {useState } from "react";
import { ColorRing } from 'react-loader-spinner'

export const ZoneImageCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IType>();
  const [image, setImage] = useState<string[]>([]);
  const [desc, setDesc] = useState("");
  const [subCategory, setSubCategory] = useState<any>();
  const [showLoader, setShowLoader] = useState(false);
  const apiUrl = useApiUrl();
  const { open } = useNotification();
  const {list}=useNavigation()

  const { selectProps: zoneSelectProps } = useSelect<IZone>({
    resource: "zone",
    optionLabel: "textString",
    optionValue: "textString",
  });
  const handleFileUpload = (e: any) => {
    const file = e.file;
    console.log(e);
    const key = "avatar/" + "_" + Date.now().toString() + "_" + file.name;
    setImage(e.fileList.map((item: any) => item.originFileObj));

    // await putAvatar(file, key);
    // setImage("https://bsbbnet.s3.ca-central-1.amazonaws.com/" + key);
    // props.setImageUrl("https://bsbbnet.s3.ca-central-1.amazonaws.com/" + key);
  };

  const handleClick = async () => {
    if (image.length <= 0 || !desc || !subCategory) {
      open?.({
        type: "error",
        message: "Please fill all the details",
      });
      return;
    }

    let formData = new FormData();

    image.forEach((file) => {
      formData.append(`files`, file);
    });

    formData.append("imageDescription", desc);
    formData.append("imageCategory", "zone");
    formData.append("imageSubcategory", subCategory);
    setShowLoader(true)

    const res = await axios.post(`${apiUrl}/upload`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res?.data?.data?.images?.length > 0) {
      open?.({
        type: "success",
        message: "Image Uploaded Successfully",
        key: res?.data?.imageUrl,
      });
      list("zoneimages")
      setShowLoader(false)
    }
  };
  return (
    <Create saveButtonProps={{ ...saveButtonProps, onClick: handleClick }}>
         {
        showLoader ?<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
        </div> : null
      }
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Zone"
          name="zoneId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...zoneSelectProps} onChange={(e) => setSubCategory(e)} />
        </Form.Item>

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
            name="file"
            // action={}
            onChange={handleFileUpload}
            listType="picture-card"
            multiple={true}
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
