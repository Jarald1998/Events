import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Crud from './crud';
import EventList from "./eventlist";
import EventStatus from './eventstatus';

const Dashboard = () => {
    return (
        <div>
            <h1>{`Concurs Events`}</h1>
            <p>{`One of the most popular event listing portals which is said to be perfect for listing events. With Eventbrite, you can create your event`}</p> 
            <div>
                <Link to={"/eventlist"}>Events List</Link>
                <Link to={"/eventstatus"}>Status</Link>
                <Link to={"/crud"}>Create/Delete/Update Events</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Dashboard;
