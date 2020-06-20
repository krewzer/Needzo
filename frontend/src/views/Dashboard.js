import React from "react";
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

export default Dashboard;
