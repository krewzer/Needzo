import React from "react";
<<<<<<< HEAD
import '../sidebar.css'
import { Button } from "reactstrap";
const Dashboard = () => (
  <div className="sidebar-container">
    <div className="sidebar-inner-container">
      <div className="sidebar-container-header">
        <div className="sidebar-container-inner-header">
          <div
            className="sidebar-container-header-available"
            onClick={(e) => {
              e.preventDefault();
          //    clickHandler("available");
            }}
          >
            <div
              // className={
              //   available
              //     ? "available-title-name-active"
              //     : "available-title-name"
              // }
            >
              Delivery Requests
            </div>
          </div>
          <div
            className="sidebar-container-header-active"
            onClick={(e) => {
              e.preventDefault();
           //   clickHandler("active");
            }}
          >
          
          </div>
        </div>
      </div>
      <div className="sidebar-container-inner-body" id="scroll-container">
        {/* {available ? (
          <AvailableSidebar
            available={helpNeededTasks}
            updateTask={updateTask}
            openModal={openModal}
            closeModal={closeModal}
            currentUserId={currentUserId}
            history={history}
            activeTask={activeTask}
            receiveActiveTaskId={props.receiveActiveTaskId}
            currentPosition={userLocation}
            receiveNewTask={receiveNewTask}
          />
        ) : (
          <ActiveSidebar
            session={session}
            active={currentUserTasks}
            updateTask={updateTask}
            openModal={openModal}
            closeModal={closeModal}
            currentUserId={currentUserId}
            history={history}
            activeTask={activeTask}
            receiveActiveTaskId={props.receiveActiveTaskId}
            currentPosition={userLocation}
            receiveNewTask={receiveNewTask}
          />
        )} */}
      </div>
    </div>
    <Button color="info">Click me</Button>
  </div>
);
=======
import { HMap } from "../components/Hmap";

const Dashboard = () => {
  const API_URL = "http://localhost:5000/api/delivery";
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const res = await response.json();
    setData(res);
    console.log(res);
  };
  return (
    <div className="bg-light p-3 text-center">
      <HMap data={data} />
    </div>
  );
};
>>>>>>> b500c4163cdd1aa687523c734a50575271b90f74

export default Dashboard;
