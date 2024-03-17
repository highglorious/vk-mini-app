import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { Root, View } from "@vkontakte/vkui";
import { CatFact } from "@/pages/cat-fact";
import { EstimateAge } from "@/pages/estimate-age";
import { Home } from "@/pages/home";

export const App = () => {
  //const { view: activeView } = useActiveVkuiLocation();
  //const activePanel = useGetPanelForView("default_view");
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

  return (
    <Root activeView={activeView ?? "default_view"}>
      <View nav="default_view" activePanel={activePanel ?? "default_panel"}>
        <Home nav="home_panel" />
        <EstimateAge nav="estimate_age_panel" />
        <CatFact nav="cat_fact_panel" />
      </View>
    </Root>
  );
};
