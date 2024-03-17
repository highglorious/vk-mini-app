import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Panel, PanelHeader, Button, Div } from "@vkontakte/vkui";
import { routes } from "@/shared/routes";

export const Home = ({ nav }: { nav: string }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel nav={nav}>
      <PanelHeader>VK mini app</PanelHeader>
      <Div>
        <Button
          stretched
          size="l"
          //mode="secondary"
          onClick={() =>
            routeNavigator.push(
              routes.default_root.default_view.estimate_age_panel
            )
          }
        >
          Возраст по имени
        </Button>
      </Div>
      <Div>
        <Button
          stretched
          size="l"
          //mode="secondary"
          onClick={() =>
            routeNavigator.push(routes.default_root.default_view.cat_fact_panel)
          }
        >
          Факт о котах
        </Button>
      </Div>
    </Panel>
  );
};
