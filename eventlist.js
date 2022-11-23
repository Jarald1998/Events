import { useSelector } from "react-redux";
const EventList = () => {
  const eventlist = useSelector((state) => state.event.events);

  return (
    <div>
      <ul>
      {eventlist.map((item)=>{
                return(
                    <li>{item}</li>
                )
            })}
      </ul>
    </div>
  );
}

export default EventList;
