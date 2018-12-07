import { Component, createElement } from "@wordpress/element";
import { IconButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Video from "../photo";

class PhotoList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      videos: [],
      query: ""
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.props.api.all().then(videos => {
      this.setState({ videos });
    });
    const dropit_icon = document.querySelector('.edit-post-pinned-plugins');
    console.log(dropit_icon); 
  }

  updateQuery(event) {
    this.setState({ query: event.target.value });
  }

  search(event) {
    event.preventDefault();
    this.props.api.search(this.state.query).then(videos => {
      this.setState({ videos });
    });
  }

  render() {
    const { videos, query } = this.state;
    const { api } = this.props;
    return (
      <div>
        <form
          className="dropit-sidebar-video-list__search-form"
          onSubmit={this.search}
        >
          <input
            type="text"
            value={query}
            onChange={this.updateQuery}
            placeholder={__("Search…", "dropit")}
          />
          <IconButton className="button" type="submit" icon="search" />
        </form>
        {videos.map(video => (
          <Video
            key={video.id}
            video={video}
            api={{ download: api.download }}
          />
        ))}
      </div>
    );
  }
}

export default PhotoList;
