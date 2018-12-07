import { createElement } from "@wordpress/element";
import { PluginSidebar } from "@wordpress/editPost";

import PhotoList from "../../photo-list";
import Icon from "../../icon";
import { search, all, download } from "../api";

const Sidebar = () => (
  <PluginSidebar class="gutenberg-embed" className="gutenberg-embed"
    icon={<Icon borderless className="gutenberg-embed" color="unsplash" />}
    name="dropit-sidebar"
    title="Powered by Youtube"
  >
    <PhotoList api={{ search, all, download }} />
  </PluginSidebar>
);

export default Sidebar;
