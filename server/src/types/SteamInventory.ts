export interface SteamInventory {
  id: string;
  markethashname: string;
  normalizedname: string;
  marketname: string;
  slug: string;
  count: number;
  assetid: string;
  classid: string;
  instanceid: string;
  groupid: string;
  infoprice: string;
  pricelatest: number;
  pricelatestsell: number;
  pricelatestsell24h: number;
  pricelatestsell7d: number;
  pricelatestsell30d: number;
  pricelatestsell90d: number;
  lateststeamsellat: Lateststeamsellat;
  latest10steamsales: [string, number, number][];
  pricemedian: number;
  pricemedian24h: number;
  pricemedian7d: number;
  pricemedian30d: number;
  pricemedian90d: number;
  priceavg: number;
  priceavg24h: number;
  priceavg7d: number;
  priceavg30d: number;
  priceavg90d: number;
  pricesafe: number;
  pricemin: number;
  pricemax: number;
  pricemix: number;
  buyorderprice: number;
  buyordermedian: number;
  buyorderavg: number;
  buyordervolume: number;
  offervolume: number;
  soldtoday: number;
  sold24h: number;
  sold7d: number;
  sold30d: number;
  sold90d: number;
  soldtotal: number;
  hourstosold: number;
  points: number;
  priceupdatedat: Priceupdatedat;
  nametag: any;
  bordercolor: string;
  color: string;
  quality: string;
  rarity: string;
  image: string;
  itemimage: string;
  marketable: boolean;
  tradable: boolean;
  unstable: boolean;
  unstablereason: any;
  tags: Tag[];
  descriptions: Description[];
  actions: Action[];
  createdat: Createdat;
  firstseentime: number;
  firstseenat: Firstseenat;
  steamurl: string;
  inspectlink: string;
  inspectlinkparsed: Inspectlinkparsed;
  markettradablerestriction: number;
  tag1: string;
  tag2?: string;
  tag3: string;
  tag4: string;
  tag5: any;
  tag6: string;
  tag7: any;
  infotypehintihbfghdajelc?: string;
  infopricereal: string;
  pricereal: number;
  pricereal24h: number;
  pricereal7d: number;
  pricereal30d: number;
  pricereal90d: number;
  pricerealmedian: any;
  winloss: number;
  prices: any[];
  groupname: string;
  wear: any;
  isstar: boolean;
  isstattrak: boolean;
  issouvenir: boolean;
  itemgroup: string;
  itemname: string;
  itemtype?: string;
  infotypehintahcghefjlbid?: string;
  infotypehinthhjicgfladeb?: string;
  infotypehintdgelbhhajcfi?: string;
  infotypehintiecbhfdlhajg?: string;
  infotypehintfgiehjldbhca?: string;
  infotypehintgdbjaehlicfh?: string;
  infotypehintbadfhhcljieg?: string;
  infotypehintgjifehlbdach?: string;
}

interface Lateststeamsellat {
  date: string;
  timezone_type: number;
  timezone: string;
}

interface Priceupdatedat {
  date: string;
  timezone_type: number;
  timezone: string;
}

interface Tag {
  category: string;
  internal_name: string;
  localized_category_name: string;
  localized_tag_name: string;
  color?: string;
}

interface Description {
  type: string;
  value: string;
  name: string;
  color?: string;
}

interface Action {
  link: string;
  name: string;
}

interface Createdat {
  date: string;
  timezone_type: number;
  timezone: string;
}

interface Firstseenat {
  date: string;
  timezone_type: number;
  timezone: string;
}

interface Inspectlinkparsed {
  a: string;
  s: string;
  d: string;
}
