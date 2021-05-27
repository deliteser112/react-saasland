import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 }],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    return (
      <section className="contact_map">
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
          style={mapStyles}
        >
          {this.displayMarkers()}
        </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y",
})(MapContainer);
