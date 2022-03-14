import Bath from "./Bath";
import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";
import Kitchen from "./Kitchen";

const Floorplan = (props) => {
  return ( 
    <div>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath />
      <Bedroom bedNum={3} />
    </div>
  );
}

export default Floorplan;