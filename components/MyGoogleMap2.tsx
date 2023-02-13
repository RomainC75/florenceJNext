import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MyGoogleMap2 = ({apiKey}) => {
    console.log('render google api' )
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        
      </GoogleMap>
    </LoadScript>
  );
};

export  default MyGoogleMap2