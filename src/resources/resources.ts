import { TypeList, TypeCreate, TypeEdit } from "pages/types";
import { ZoneList, ZoneCreate, ZoneEdit } from "pages/zones";
import { RegionList, RegionCreate, RegionEdit } from "pages/regions";
import { EntryList, EntryCreate, EntryEdit } from "pages/entries";
import { TagList, TagCreate, TagEdit } from "pages/tags";
import {
  AttributeList,
  AttributeCreate,
  AttributeEdit,
} from "pages/attributes";
import {
  EntryAttributeCreate,
  EntryAttributeEdit,
  EntryAttributeList,
} from "pages/entryAttributes";
import {
  ZoneAttributeCreate,
  ZoneAttributeEdit,
  ZoneAttributeList,
} from "pages/zoneAttributes";
import {
  RegionAttributeCreate,
  RegionAttributeEdit,
  RegionAttributeList,
} from "pages/regionAttributes";
import { ImageList, ImageCreate } from "pages/image";
import { EntryImageCreate, EntryImageList } from "pages/entryImages";
import { ZoneImageCreate, ZoneImageList } from "pages/zoneImages";
import { RegionImageCreate, RegionImageList } from "pages/regionImages";
import { DungeonsCreate, DungeonsEdit, DungeonsList } from "pages/dungeons";
import { MapsCreate, MapsEdit, MapsList } from "pages/maps";
import {
  DungeonsTagsCreate,
  DungeonsTagsEdit,
  DungeonsTagsList,
} from "pages/dungeonsTags";
import {
  DungeonsAttributeCreate,
  DungeonsAttributeEdit,
  DungeonsAttributeList,
} from "pages/dungeonsAttributes";
import { GroupsCreate, GroupsList, GroupsEdit } from "pages/groups";
import { GroupTagsCreate, GroupTagsEdit, GroupTagsList } from "pages/groupTags";
import {
  GroupAttributesCreate,
  GroupAttributesEdit,
  GroupAttributesList,
} from "pages/groupAttributes";
import {
  GroupUnrealAssetsCreate,
  GroupUnrealAssetsEdit,
  GroupUnrealAssetsList,
} from "pages/groupUnrealAssets";
import {
  GroupsAffliationsList,
  GroupAffliationsCreate,
  GroupAffliationsEdit,
} from "pages/groupAffliations";
import {
  TemporaryGroupsCreate,
  TemporaryGroupsEdit,
  TemporarytGroupsList,
} from "pages/temporaryGroups";
import {
  GroupMessageComminucationsCreate,
  GroupMessageComminucationsEdit,
  GroupMessageComminucationsList,
} from "pages/groupMessageComminucations";
import { ClusterCreate, ClusterEdit, ClusterList } from "pages/clusters";
import { ChannelEdit, ChannelList, ChannelCreate } from "pages/channels";
import { CharCreate, CharEdit, CharList } from "pages/characters";
import { TokenCreate, TokenEdit, TokenList } from "pages/tokens";
import { FriendCreate, FriendEdit, FriendList } from "pages/accountFriend";
import {
  UserListingCreate,
  UserListingEdit,
  UserListingList,
} from "pages/users";
import { UserMapsCreate, UserMapsEdit, UserMapsList } from "pages/userMaps";

export const resources = [
  {
    name: "type",
    list: TypeList,
    create: TypeCreate,
    edit: TypeEdit,
  },
  {
    name: "AccountFriend",
    list: FriendList,
    create: FriendCreate,
    edit: FriendEdit,
  },
  {
    name: "zone",
    list: ZoneList,
    create: ZoneCreate,
    edit: ZoneEdit,
  },
  {
    name: "region",
    list: RegionList,
    create: RegionCreate,
    edit: RegionEdit,
  },
  {
    name: "token",
    list: TokenList,
    create: TokenCreate,
    edit: TokenEdit,
  },
  {
    name: "entry",
    list: EntryList,
    create: EntryCreate,
    edit: EntryEdit,
  },
  {
    name: "attribute",
    list: AttributeList,
    create: AttributeCreate,
    edit: AttributeEdit,
  },
  {
    name: "tag",
    list: TagList,
    create: TagCreate,
    edit: TagEdit,
  },

  {
    name: "Cluster",
    list: ClusterList,
    create: ClusterCreate,
    edit: ClusterEdit,
  },
  {
    name: "Channel",
    list: ChannelList,
    create: ChannelCreate,
    edit: ChannelEdit,
  },
  {
    name: "Character",
    list: CharList,
    create: CharCreate,
    edit: CharEdit,
  },
  {
    name: "entryattribute",
    list: EntryAttributeList,
    create: EntryAttributeCreate,
    edit: EntryAttributeEdit,
  },
  {
    name: "zoneattribute",
    list: ZoneAttributeList,
    create: ZoneAttributeCreate,
    edit: ZoneAttributeEdit,
  },
  {
    name: "regionattribute",
    list: RegionAttributeList,
    create: RegionAttributeCreate,
    edit: RegionAttributeEdit,
  },
  {
    name: "entryimages",
    list: EntryImageList,
    create: EntryImageCreate,
  },
  {
    name: "zoneimages",
    list: ZoneImageList,
    create: ZoneImageCreate,
  },
  {
    name: "regionimages",
    list: RegionImageList,
    create: RegionImageCreate,
  },
  {
    name: "image",
    list: ImageList,
    // create:ImageCreate
  },
  {
    name: "dungeons",
    list: DungeonsList,
    create: DungeonsCreate,
    edit: DungeonsEdit,
  },
  {
    name: "DungeonTags",
    list: DungeonsTagsList,
    create: DungeonsTagsCreate,
    edit: DungeonsTagsEdit,
  },
  {
    name: "DungeonAttribute",
    list: DungeonsAttributeList,
    create: DungeonsAttributeCreate,
    edit: DungeonsAttributeEdit,
  },
  {
    name: "Map",
    list: MapsList,
    create: MapsCreate,
    edit: MapsEdit,
  },
  {
    name: "Groups",
    list: GroupsList,
    create: GroupsCreate,
    edit: GroupsEdit,
  },
  {
    name: "GroupTags",
    list: GroupTagsList,
    create: GroupTagsCreate,
    edit: GroupTagsEdit,
  },
  {
    name: "GroupMessage",
    list: GroupMessageComminucationsList,
    create: GroupMessageComminucationsCreate,
    edit: GroupMessageComminucationsEdit,
  },
  {
    name: "GroupAttribute",
    list: GroupAttributesList,
    create: GroupAttributesCreate,
    edit: GroupAttributesEdit,
  },
  {
    name: "GroupUnrealAsset",
    list: GroupUnrealAssetsList,
    create: GroupUnrealAssetsCreate,
    edit: GroupUnrealAssetsEdit,
  },
  {
    name: "GroupAffiliation",
    list: GroupsAffliationsList,
    create: GroupAffliationsCreate,
    edit: GroupAffliationsEdit,
  },
  {
    name: "TemporaryGroup",
    list: TemporarytGroupsList,
    create: TemporaryGroupsCreate,
    edit: TemporaryGroupsEdit,
  },
  {
    name: "Users",
    list: UserListingList,
    create: UserListingCreate,
    edit: UserListingEdit,
  },
  {
    name: "UserMaps",
    list: UserMapsList,
    create: UserMapsCreate,
    edit: UserMapsEdit,
  },
];
