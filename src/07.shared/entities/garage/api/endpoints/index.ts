import { ItemGroup } from "@/07.shared/const/enums";

class Endpoints {
  static getItems = (groupEnum: ItemGroup) => `/items/${groupEnum}`;
}

export default Endpoints;
