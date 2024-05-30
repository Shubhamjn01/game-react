export interface IType {
  typeId: string;
  textString: string;
}

export interface IUser {
  userId: String;
  email: String;
  firstName: String;
  lastName: String;
}

export interface IZone {
  zoneId: string;
  textString: string;
  mapArrayList: JSON;
  type: IType;
  tags: Array;
  tagId: string;
  attribute: String;
  attributeId: Array;
}

export interface IRegion {
  regionId: string;
  textString: string;
  regionDimensions: string;
  regionWorldPosition: string;
  possessingZone: string;
  possessorMap: string;
  type: IType;
  tags: Array;
  tagId: string;
  attributes: Array;
  attributeId: string;
}

export interface IEntry {
  entryId: string;
  object: string;
  historicdatetime: Date;
  summarydescription: string;
  textString: string;
  possessorEntity: string;
  possessorRegion: string;
  possessorZone: string;
  possessorEntry: string;
  type: IType;
  regionId: IRegion;
  tags: Array;
  attributeId: Array;
  tagIds: Array;
}

export interface ICluster {
  clusterId: string;
}
export interface IAccountFriend {
  accountFriendId: string;
}

export interface IToken {
  tokenId: string;
}
export interface IChannel {
  channelId: string;
}
export interface ICharacter {
  characterId: string;
}
export interface ITag {
  tagId: string;
  tagString: string;
}

export interface IAttribute {
  attributeId: string;
  attributeName: string;
  characterData:string
}

export interface IEntryAttribute {
  eaId: string;
  entryId: string;
  attributeId: string;
  value: string;
}

export interface IRegionAttribute {
  raId: string;
  regionId: string;
  attributeId: string;
  value: string;
}

export interface IZoneAttribute {
  zaId: string;
  zoneId: string;
  attributeId: string;
  value: string;
}

export interface IEntryTag {
  etId: string;
  entryId: string;
  tagId: string;
}

export interface IRegionTag {
  rtId: string;
  regionId: string;
  tagId: string;
}

export interface IZoneTag {
  ztId: string;
  zoneId: string;
  tagId: string;
}

export interface IImage {
  imageId: string;
  imageDescription: string;
  imageUrl: string;
}

export interface IDungeons {
  dungeonsId: string;
  dungeonName: string;
  dungeonDescription: string;
  dungeonUrl: string;
  groupID: IGroups;
  typeID: string;
  type: IType;
  map: IMaps;
  tier: number;
}

export interface IMaps {
  mapId: string;
  mapName: string;
  mapDescription: string;
  mapPath: string;
}
export interface IDungeonsTags {
  dungeonsId: IDungeons;
  tagId: string;
  tagsId: string;
  typeId: IType;
  mapId: string;
}
export interface IDungeonsAttributes {
  dungeonsId: IDungeons;
  attributeId: string;
  attributesId: string;
  value: string;
}

export interface IGroups {
  groupId: string;
  groupName: string;
  groupDescription: string;
  groupType: string;
}

export interface IGroupTags {
  groupId: IGroups;
  tagId: string;
}
export interface IGroupAttributes {
  groupId: IGroups;
  attributeId: string;
  value: string;
}

export interface IGroupMessageComminucations {
  groupId: IGroups;
  serverAddress: string;
}
export interface IGroupUnrealAssets {
  groupId: IGroups;
  unrealAssetId: string;
}
export interface IGroupAffliations {
  groupId: IGroups;
  affiliatedGroupId: string;
  relationshipType: string;
  strength: number;
}
export interface ITemporaryGroups {
  groupTempId: string;
  groupMembers: string;
  groupUnrealId: string;
}
export interface UserListing {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserMaps {
  userMapsId: string;
  userId: string;
  mapId: string;
  lastDeploy: Date;
  url: string;
  mapPvpType: string;
  mapTier: string;
  map: {
    populationLimit: number;
    currentPopulation: number;
    mapToken: string;
  };
}
