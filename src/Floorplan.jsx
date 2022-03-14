import Bath from "./Bath";
import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";

const Floorplan = (props) => {
  return ( 
    <>
      <Bedroom />
      <Bath />
      <Bedroom />
      <LivingRoom />
    </>
  );
}

export default Floorplan;