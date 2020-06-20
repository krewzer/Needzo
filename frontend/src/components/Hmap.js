// src/DisplayMapFC.js

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "../App.css";

export const HMap = (props) => {
  const mapRef = React.useRef(null);

  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});


  const toggle = () => setModal(!modal);

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
            // console.log(item);
            map.setCenter(item.position);
            const currentMarker = new H.map.Marker(item.position);
            // console.log(item);
            // currentMarker.setData(ele);
            currentGroup.addObject(currentMarker);
            currentGroup.addEventListener(
              "tap",
               async () => {
                await setDetails({details: ele});
                console.log(ele)
                console.log(details)
                setModal(!modal)
                
              }
            );


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
  
  return (
  <div>
  <div className="map" ref={mapRef} style={{ height: "500px" }} />
  <Modal
              isOpen={modal}
              toggle={toggle}
              contentClassName="custom-modal-style"
              labelledBy="request"
            >
              <ModalHeader toggle={toggle}>
                Help others by Volunteering
              </ModalHeader>
              <ModalBody>
                <Container className="text-left">
                  <Row>
                    <Col xs="12" sm="6">
                      <br />
                      <h3> Deliver To :</h3>
                      <br />
                      
                      <br />
                      <h3>Details :</h3>
                      <br />
                      <br />
                      <h3>Address :</h3>
                    </Col>
                    <Col xs="12" sm="6">
                      <img
                        src={require("../assets/groceries.png")}
                        alt="logo"
                        height="90%"
                        width="100%"
                        style={{ marginLeft: 20 }}
                      />
                      <center>
                        <h3> Groceries</h3>
                      </center>
                    </Col>
                  </Row>
                </Container>
              </ModalBody>
              <ModalFooter>
                
                <Button color="danger" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
    </div>
  )};
