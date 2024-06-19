import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  TextField,
  Select,
  useTable,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  Form,
  useForm,
  Create,
} from "@pankod/refine-antd";

import {
  IAttribute,
  ICharacter,
  ICluster,
  IMaps,
  IType,
  IUser,
} from "interfaces";
import { useState } from "react"; 
import "react-mde/lib/styles/css/react-mde-all.css";
export const CharUserList: React.FC<IResourceComponentsProps> = (props:any) => {
  console.log("sdfsdf",props)
  const [user,setUser] =useState('none')
  
  const urlParams = new URLSearchParams(window.location.search);
  let p =urlParams.get('user');
  console.log("UrlParams", p);
  const { tableProps } = useTable<IAttribute>({
    initialFilter: [
      {
        field: 'user',
        value: p,
        operator: "eq"
      }
  ],
  });


  const { formProps, saveButtonProps } = useForm<IAttribute>();
const [show,setShow]=useState(false)


  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "Users",
    optionLabel: "fullName",
    optionValue: "userId",
  });

  const { selectProps: clusterSelectProps } = useSelect<ICluster>({
    resource: "Cluster",
    optionLabel: "name",
    optionValue: "clusterId",
  });

  const { selectProps: mapSelectProps } = useSelect<IMaps>({
    resource: "Map",
    optionLabel: "mapName",
    optionValue: "mapId",
  });
  return (
    <>
     <Form {...formProps} layout="horizontal">
       <Form.Item
      
          label="User"
          name="userId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...userSelectProps} onChange={(e:any)=>{
           window.location.href = `/CharacterByUser?user=${e}`
            console.log(user)}} />
        </Form.Item>
        </Form> 
        
        
    <List >
      <Table {...tableProps} rowKey="CharacterId">
        {/* <Table.Column
          dataIndex="firstName"
          key="firstName"
          title="First Name"
          render={(value) => <TextField value={value} />}
        /> */}
        {/* <Table.Column
          dataIndex="lastName"
          key="lastName"
          title="Last Name"
          render={(value) => <TextField value={value} />}
        /> */}
        <Table.Column
          dataIndex="nickName"
          key="nickName"
          title="Nick Name"
          render={(value) => <TextField value={value} />}
        />
        {/* <Table.Column
          dataIndex="dob"
          key="dob"
          title="DOB"
          render={(value) => <TextField value={value} />}
        /> */}

        <Table.Column
          dataIndex="characterData"
          key="characterData"
          title="Character Data"
          render={(value) => {
            const characterData = JSON.parse(value);
            return (
              <div>
                <button onClick={()=>setShow(!show)}>{show?"close":"show"}</button>
                {show &&<pre>{characterData}</pre> }
                
              </div>
            );
          }}
        />

        <Table.Column
          dataIndex="userId"
          key="userId"
          title="User"
          render={(value) => {
            if (userSelectProps.options)
              return userSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="clusterID"
          key="clusterID"
          title="cluster"
          render={(value) => {
            if (clusterSelectProps.options)
              return clusterSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="mapId"
          key="mapId"
          title="Map"
          render={(value) => {
            if (mapSelectProps.options)
              return mapSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="defaultMapId"
          key="defaultMapId"
          title="Default Map"
          render={(value) => {
            if (mapSelectProps.options)
              return mapSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="lastmapAcessed"
          key="lastmapAcessed"
          title="last Map Acessed"
          render={(value) => {
            if (mapSelectProps.options)
              return mapSelectProps.options.map((el) => {
                if (el.value == value)
                  return <TextField value={el.label} key={value} />;
              });
          }}
        />
        <Table.Column
          dataIndex="lastportalAcessed"
          key="lastportalAcessed"
          title="Last Portal Acessed"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="characterStatus"
          key="characterStatus"
          title="Character Status"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<ICharacter>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.characterId}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.characterId}
              />
            </Space>
          )}
        />
      </Table>
    </List>
    </>
  );
};
