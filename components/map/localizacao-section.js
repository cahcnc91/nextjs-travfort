import { Component, Fragment } from "react";
import MapGL from "react-map-gl";

import Pins from "./pins";

const TOKEN =
  "pk.eyJ1IjoiY2FoY25jOTEiLCJhIjoiY2s2Z3RzNzU1MTFxNjNkbXZlZWF1YmtzaSJ9.ifya7nH3p3dN-LahxLqsqQ"; // Set your mapbox token here

export default class LocalizacaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: -23.65357,
        longitude: -46.53935,
        zoom: 17,
        bearing: 0,
        pitch: 0,
      },
    };
  }

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  //   _onClickMarker = city => {
  //     this.setState({popupInfo: city});
  //   };

  //   _renderPopup() {
  //     const {popupInfo} = this.state;

  //     return (
  //       popupInfo && (
  //         <Popup
  //           tipSize={5}
  //           anchor="top"
  //           longitude={popupInfo.longitude}
  //           latitude={popupInfo.latitude}
  //           closeOnClick={false}
  //           onClose={() => this.setState({popupInfo: null})}
  //         >
  //           <CityInfo info={popupInfo} />
  //         </Popup>
  //       )
  //     );
  //   }

  render() {
    const { viewport } = this.state;

    return (
      <section id="localizacao">
        <div className="row">
          <h2>NOSSA LOCALIZAÇÃO </h2>
        </div>
        <MapGL
          {...viewport}
          width="100%"
          height="400px"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
        >
          <Pins
          // onClick={this._onClickMarker}
          />
          {/* 
        {this._renderPopup()} */}
        </MapGL>
        <div className="row">
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <svg
              id="Layer_1"
              class="icon-small"
              viewBox="0 0 511.995 511.995"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m507.308 236.641-198.98-198.99c-28.86-28.85-75.8-28.85-104.66 0l-198.98 198.99c-6.25 6.25-6.25 16.38 0 22.63 6.24 6.25 16.38 6.25 22.62 0l12.69-12.69v203.4c0 25.405 20.595 46 46 46h80c5.523 0 10-4.477 10-10v-148c0-27.614 22.386-50 50-50h60c27.614 0 50 22.386 50 50v148c0 5.523 4.477 10 10 10h80c25.405 0 46-20.595 46-46v-203.4l12.69 12.69c3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.57 11.31-4.69c6.25-6.25 6.25-16.38 0-22.63z" />
              </g>
            </svg>
            Travessa Rodrigo Antonio, 25 <br />
            Vila Alpina <br />
            Santo André, SP
          </div>
        </div>
      </section>
    );
  }
}
