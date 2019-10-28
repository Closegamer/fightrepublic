import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {
    const style = {
      width: '100%',
      height: '100%'
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={style}
        initialCenter={{
          lat: 55.685269,
          lng: 37.628756
        }}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={'Fight Republic Club'} />

        {/* <InfoWindow
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          >
          <div>
            <h1>Школа единоборств "Fight Republic"</h1>
          </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC7O8IjU_W-19mttNxfYyahhK1P8QqwXmk',
  language: 'Russian'
})(MapContainer);
