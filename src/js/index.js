import { config } from "./config";
import { main } from "./main.js";

window.addEventListener("load", function actionRightAfterPageIsLoad() {
  config();
  main();
});
