import React, {useState} from "react";
import "../App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Alert
} from "reactstrap";
// const [newdetails, setNewdetails] = useState({});
const Deliveries = (props) => {

  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);
  const onActive =() => setVisible(true);
  return(
  <div>
  <div className="flex-container">
    <Card id="card">
      
      <CardBody>
<CardTitle><h3>Delivery details</h3></CardTitle> <br />
        <CardSubtitle><b>Requester Name :</b> <br />
         Atishay Srivastava</CardSubtitle><br />
        <CardText>
        <b>Phone Number :</b> <br />
        <a href="tel:9999123456">9999123456</a>
          <br /> <br />
          <b>Address :</b> <br />
        <a class="card-address-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&amp;destination=533-A Civil Lines, Sitapur, UP">533-A Civil Lines, Sitapur, UP</a>
        </CardText>
        <br />
        <div className="flex-container">
        <Button color="info" onClick={onActive} >COMPLETED DELIVERY</Button> 
        <Button color="danger">CANCEL</Button>
        </div>
        <div className="cardimg"><img
        width="40%"
        src={require("../assets/other.png")}

        alt="Card image cap"
      /></div>
      </CardBody>
    </Card>
    
  </div>
  <br /> <br />
  <Alert color="info" isOpen={visible} toggle={onDismiss}>
      <center> <h2>Thank You For Choosing Needzo.</h2> </center> 
    </Alert>
  </div>
);
  }

export default Deliveries;
