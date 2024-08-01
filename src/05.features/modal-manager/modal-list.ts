import { modalActions } from "./";
import {
  BottomModalBuy,
  BottomModalEvents,
  BottomModalSubscribe,
  BottomModalUpgrade,
} from "./modals";

const modalList = {
  [modalActions.BOTTOM_MODAL_EVENTS]: BottomModalEvents,
  [modalActions.BOTTOM_MODAL_SUBSCRIBE]: BottomModalSubscribe,
  [modalActions.BOTTOM_MODAL_BUY]: BottomModalBuy,
  [modalActions.BOTTOM_MODAL_UPGRADE]: BottomModalUpgrade,
};

export default modalList;
