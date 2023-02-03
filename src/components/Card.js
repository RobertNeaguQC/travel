
import Pin from "../images/pin.png";

export default function Card(props) {
  console.log(props);
  return (
    <div>
    <div className="card">
      <img src={props.imageUrl} alt="pic" />
      <div className="cardText">
        <div className="location">
          <img src={Pin} alt="pin" className="pin" />
          <h2>{props.location}</h2>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="cardTitle">{props.title}</h2>
        <div className="period">
          <p>{props.startDate}</p>
          <span> - </span> <p>{props.endDate}</p>
        </div>
        <p className="description">
          {props.description}
        </p>
      </div> 
       
    </div>
    <hr />
  </div>
  );
}
