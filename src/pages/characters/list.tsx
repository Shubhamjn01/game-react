import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  TextField,
  useTable,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
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

export const CharList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<IAttribute>({});
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
    <List>
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
  );
};
