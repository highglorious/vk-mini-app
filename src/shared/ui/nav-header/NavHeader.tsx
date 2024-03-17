import {
  useFirstPageCheck,
  useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router";
import { PanelHeaderBack } from "@vkontakte/vkui";
import { PanelHeader } from "@vkontakte/vkui";
import { FC, PropsWithChildren } from "react";
import { routes } from "../../routes";

export const NavHeader: FC<PropsWithChildren> = ({ children }) => {
  const routeNavigator = useRouteNavigator();
  const isFirstPage = useFirstPageCheck();

  return (
    <PanelHeader
      before={
        <PanelHeaderBack
          onClick={() =>
            isFirstPage
              ? routeNavigator.push(routes.default_root.default_view.home_panel)
              : routeNavigator.back()
          }
        />
      }
    >
      {children}
    </PanelHeader>
  );
};
