import { Routes, Route } from "react-router-dom";
import Crud from "./components/crud";
import Dashboard from "./components/dashboard";
import EventList from "./components/eventlist";
import EventStatus from "./components/eventstatus";

const RootRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Dashboard />} >
                    <Route path="eventlist" exact element={<EventList />} />
                    <Route path="eventstatus" exact element={<EventStatus />} />
                    <Route path="crud" exact element={<Crud />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RootRouter;