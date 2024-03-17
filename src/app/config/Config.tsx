import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { queryClient } from "@/shared/lib";
import { router } from "@/shared/routes";
import { App } from "../App";

export const Config = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot mode="full">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </QueryClientProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
