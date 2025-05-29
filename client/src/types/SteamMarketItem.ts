export interface SteamMarketItem {
  id: string;
  markethashname: string;
  normalizedname: string;
  marketname: string;
  slug: string;
  classid: string;
  instanceid: string;
  groupid: string;
  infoprice: string;
  pricelatest: number;
  pricelatestsell: number;
  pricelatestsell24h?: number;
  pricelatestsell7d?: number;
  pricelatestsell30d?: number;
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
  hourstosold?: number;
  points: number;
  priceupdatedat: Priceupdatedat;
  bordercolor: string;
  color: string;
  quality: string;
  rarity: string;
  itemimage: string;
  marketable: boolean;
  tradable: boolean;
  unstable: boolean;
  unstablereason: any;
  createdat: Createdat;
  firstseentime: number;
  firstseenat: Firstseenat;
  steamurl: string;
  markettradablerestriction: number;
  tag1: string;
  tag2: string;
  tag3: string;
  tag4: string;
  tag5: string;
  tag6: string;
  tag7: string;
  infotypehintlcjhgafibdeh?: string;
  infopricereal: string;
  pricereal: number;
  pricereal24h: number;
  pricereal7d: number;
  pricereal30d: number;
  pricereal90d: number;
  pricerealmedian: any;
  winloss: number;
  groupname: string;
  wear: string;
  isstar: boolean;
  isstattrak: boolean;
  issouvenir: boolean;
  itemgroup: string;
  itemname: string;
  itemtype: string;
  infotypehinteahlbifhcjgd?: string;
  infotypehintcadhfjbehlgi?: string;
  infotypehintcflahijeghdb?: string;
  infotypehintbiedhglhacfj?: string;
  infotypehintiladbjeghhfc?: string;
  infotypehintglhdjiahefbc?: string;
  infotypehintlgfbejacidhh?: string;
  infotypehintjegcbhdlahfi?: string;
  infotypehintgchefhdblaij?: string;
  infotypehintgfablhehjicd?: string;
  infotypehintdhiejfbahclg?: string;
  infotypehinthidbchjlgefa?: string;
  infotypehintjhebahldicfg?: string;
  infotypehinthijebcfadglh?: string;
  infotypehintiadbhjlfcegh?: string;
  infotypehintdiahchejbflg?: string;
  infotypehinthhjlcefdbgai?: string;
  infotypehintehfchdliabjg?: string;
  infotypehintjhicldehgfba?: string;
  infotypehintifdjlbhgecah?: string;
  infotypehintfcdibgjheahl?: string;
  infotypehintladjhfhcgbie?: string;
  infotypehintdhhafgcjeibl?: string;
  infotypehinthlhbadecfgij?: string;
  infotypehintfgijlcehhadb?: string;
  infotypehintebihhfgldjac?: string;
  infotypehintaldjcbihfghe?: string;
  infotypehintbijgdealhhcf?: string;
  infotypehintchfdgjeibhla?: string;
  infotypehintlhfgdjbhciae?: string;
  infotypehintjebhlgfhdcia?: string;
  infotypehinthdaifgelhjcb?: string;
  infotypehintjhlbfigcedah?: string;
  infotypehintaghijbefhcld?: string;
  infotypehintjgeifhcbhdla?: string;
  infotypehintliahhcebjdgf?: string;
  infotypehintajghfldheibc?: string;
  infotypehintbgeahhlfdcij?: string;
  infotypehintcfgjdahibhle?: string;
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
