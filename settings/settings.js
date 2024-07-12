import { users } from './users';
import { Lightspeed } from "components/Themes/Lightspeed";


export const settings = {
  ai_chat: true,
  custom_metrics: true,
  themes: [
    {
      label: "Cockpit",
      name: "Lightspeed",
      component: Lightspeed,
      type: "default",
      logo: "lightspeed/Lightspeedlogo.png",
      styles: "",
      project: {
        name: "superstore_embedded",
        workbooks: [],
        data_sources: []
      }
    },
  ],
  demo_users: users
}
