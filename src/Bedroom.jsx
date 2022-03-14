const Bedroom = (props) => {
  return ( 
    <div id= {`bed-${props.bedNum}`}>
      Bedroom {props.bedNum}
    </div>
  );
}

export default Bedroom;