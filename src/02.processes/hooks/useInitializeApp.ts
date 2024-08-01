import { modalActionsCenter, modalCenter } from "@/05.features";
import { IModalCheckedProps } from "@/05.features/modal-manager/types";
import socket from "@/07.shared/api/socket";
import { useValidateHash } from "@/07.shared/lib/hooks";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const useInitializeApp = () => {
  // const { data: player } = useGetPlayerQuery();
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const isHashValid = useValidateHash();
  const t = useTranslations("game");

  useEffect(() => {
    const getAsyncData = async () => {
      // const ipApi = await serviceApi.getIp();
      // window.ipApi = ipApi;
      socket.connect();
      setIsAppLoaded(true);
    };

    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.setHeaderColor("#d21a07");
    window.Telegram.WebApp.setBackgroundColor("#1f1f1f");

    function onUseOnline(data: { tokens: number }) {
      modalCenter.call<IModalCheckedProps>(modalActionsCenter.MODAL_CHECKED, {
        title: t("online.title"),
        subTitle: t("online.subtitle", { tokens: data.tokens }),
        buttonText: t("online.button_text"),
      });
    }

    socket.on("tokens/offline", onUseOnline);

    getAsyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAppLoaded, isHashValid };
};

export default useInitializeApp;
