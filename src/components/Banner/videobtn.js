import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";

class Player extends Component {
  render() {
    const { open, toggleModal } = this.props;
    return (
      <Modal
        open={open}
        onClose={toggleModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "100%",
            padding: "unset"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "yellow"
          }
        }}
        center
      >
        <ReactPlayer
          url="https://vimeo.com/291715535"
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>
    );
  }
}

export default Player;