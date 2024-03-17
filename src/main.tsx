import vkBridge from "@vkontakte/vk-bridge";
import { createRoot } from "react-dom/client";
import { Config } from "./app/config";

vkBridge.send("VKWebAppInit");

createRoot(document.getElementById("root")!).render(<Config />);
