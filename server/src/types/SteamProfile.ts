import { SteamInventory } from "./SteamInventory";

export interface SteamProfile {
  id: number;
  accountname: any;
  personaname: string;
  realname: string;
  steamid: string;
  loccountrycode: string;
  description: any;
  fame: number;
  famename: any;
  fametype: string;
  famerating: number;
  createdat: string;
  updatedat?: string;
  inventoryupdatedat: any;
  games: number[];
  vac: number;
  lastvacbannedat: any;
  islimited: boolean;
  worth: number;
  size: number;
  peritem: number;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
}

export interface SteamProfileWithInventory extends SteamProfile {
  inventory: SteamInventory[];
}
