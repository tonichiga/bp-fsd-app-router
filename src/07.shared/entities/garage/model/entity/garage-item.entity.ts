import { GeneralTypes, ItemGroup, ItemRarity } from "@/07.shared/const";
import { Social } from "@/06.entities/social";
import { imageF1Image, wheelImage, zapImage } from "@/07.shared/assets/images";
import { formatCoins } from "@/07.shared/lib/helpers";
import { StaticImageData } from "next/image";

export interface IGarageItem {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  id: number;
  originalId: number;
  title: string;
  description: string;
  image: string;
  level: number;
  price: number;
  tokensPerHours: number;
  group: ItemGroup;
  type: number;
  availableLevel: number;
  dependsOnLevel: number;
  socialLink: string;
  referralsAmount: number;
  referralsJoined: number;
  rarity: ItemRarity;
  socials: Social;
  dependsOn: GarageItem;
  nextTokensPerHours: number;
  available: boolean;
  reason: string;
  maxFuel: number;
  coinPerTap: number;
  offlineTime: number;
}

class GarageItem implements IGarageItem {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  id: number;
  originalId: number;
  title: string;
  description: string;
  image: string;
  level: number;
  price: number;
  tokensPerHours: number;
  group: ItemGroup;
  type: number;
  availableLevel: number;
  dependsOnLevel: number;
  socialLink: string;
  referralsAmount: number;
  referralsJoined: number;
  rarity: ItemRarity;
  socials: Social;
  dependsOn: GarageItem;
  nextTokensPerHours: number;
  available: boolean;
  reason: string;
  maxFuel: number;
  coinPerTap: number;
  offlineTime: number;

  constructor(item: IGarageItem) {
    if (!item) return this;
    Object.assign(this, item);
    this.dependsOn = new GarageItem(item.dependsOn);
    this.socials = new Social(item.socials);
  }

  prepareRenderValues(): {
    title: string;
    icon: StaticImageData;
    value: number;
  } {
    const typesItem = {
      [GeneralTypes.Fuel]: {
        title: "max_fuel",
        icon: zapImage,
        value: this.maxFuel,
      },

      [GeneralTypes.Tap]: {
        title: "coin_per_tap",
        icon: imageF1Image,
        value: `${formatCoins(this.coinPerTap)}`,
      },

      [GeneralTypes.MiningTime]: {
        title: "offline_time",
        icon: wheelImage,
        value: `${this.offlineTime / 1000 / 60 / 60}h`,
      },

      [GeneralTypes.GeneralCard]: {
        title: "card_profit",
        icon: wheelImage,
        value: this.nextTokensPerHours || this.tokensPerHours,
      },
    };

    return typesItem[this.type];
  }
}

export default GarageItem;
