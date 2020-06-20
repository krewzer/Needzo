// src/DisplayMapFC.js

import React from "react";

export const HMap = (props) => {
  const mapRef = React.useRef(null);
  React.useLayoutEffect(() => {
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "4KPBKxjiNVDzx7F_50w9gvRBX_GYXUCjV0Xl8-kLLBw",
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 28, lng: 77 },
      zoom: 7,
      pixelRatio: window.devicePixelRatio || 1,
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers);
    const addMarkerfromData = (platform, data) => {
      let service = platform.getSearchService();
      data.map((ele) =>
        service.geocode(
          {
            q: ele.deliveryAddress,
          },
          (result) => {
            let item = result.items[0];
            const currentGroup = new H.map.Group();
            map.addObject(currentGroup);
            console.log(item);
            map.setCenter(item.position);
            const currentMarker = new H.map.Marker(item.position);
            console.log(item);
            // currentMarker.setData(ele);
            currentGroup.addObject(currentMarker);
            // currentGroup.addEventListener("tap", (evt) => {});
          },
          alert
        )
      );
    };
    console.log(props.data);
    addMarkerfromData(platform, props.data);

    return () => {
      map.dispose();
    };
  }, [mapRef, props.data]);

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};
