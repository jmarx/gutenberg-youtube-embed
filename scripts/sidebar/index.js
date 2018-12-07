import "./style.scss";

import { Fragment, createElement } from "@wordpress/element";
import { registerPlugin } from "@wordpress/plugins";
import SidebarUnsplash from "./components/unsplash/sidebar";
import MenuItemUnsplash from "./components/unsplash/menu-item";
import Dummy from "./components/dummy";

const Dropit = () => (
  <Fragment>
    <SidebarUnsplash />
    <MenuItemUnsplash />
     <Dummy />
  </Fragment>
);

registerPlugin("dropit", {
  render: Dropit
});


