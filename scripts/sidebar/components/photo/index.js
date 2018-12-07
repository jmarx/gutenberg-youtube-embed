import { Component, createElement } from "@wordpress/element";
import { IconButton, Spinner } from "@wordpress/components";
import { createBlock } from "@wordpress/blocks";
import { withDispatch, withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import "./style.scss";
class Photo extends Component {
  constructor() {
    super(...arguments);
    this.addVideo = this.addVideo.bind(this);
    this.state = {
      loading: false,
      image: null
    };
  }

  addVideo() {
    const { video } = this.props;
    const block = createBlock("core/embed", {
      url: 'https://www.youtube.com/embed/' + video.id,
      caption: 'testing a caption'
    });
    this.props.insertBlock(block);
  }


  render() {
    const { video, api, featuredImageId } = this.props;
    const { loading, image } = this.state;
    return (
      <div key={video.id} className="dropit-sidebar-video">

        {loading && (
          <div className="dropit-sidebar-video__spinner-container">
            <Spinner />
          </div>
        )}
        <img src={video.thumbnailLink} />
        {!loading && (
          <div className="dropit-sidebar-video__toolbar">
            <IconButton
              isPrimary
              icon="arrow-right"
              onClick={this.addVideo}
              label={__("Add video!", "dropit")}
            />
          </div>

        )}
        <div className="title_container">
          <strong>{video.title}</strong>
          <div> by {video.channelTitle}</div>
        </div>

      </div>
    );
  }
}

export default compose(
  withDispatch(dispatch => ({
    insertBlock: dispatch("core/editor").insertBlock,
  }))
)(Photo);
