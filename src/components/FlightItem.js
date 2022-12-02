import Button from 'react-bootstrap/Button';


export default function FlightItem(props) {
    function convertMinToHoursAndMin(min) {
        let hours = Math.floor(min / 60);
        let minutes = min % 60;
        return `${hours}h ${minutes}m`;
    }

    return (
        <div className="flight-item">
            <div className="flight-item-destination">
                <p className="flight-item-destination-name-airport">{props.destination} ({props.airport})</p>
            </div>
            <div className="flight-item-info">
                <p className="flight-item-info-duration">{convertMinToHoursAndMin(props.durationMin)} </p>
                <p className="flight-item-info-cost">${props.cost}</p>
                <p className="flight-item-info-destinationContinent">{props.destinationContinent}</p>
                <p className="flight-item-info-numStops">{props.numStops} stops</p>
            </div>
            <div className="flight-item-button">
                <Button variant="primary" onClick={() => props.incrementCart(props)}>Save</Button>
                <Button variant="danger" onClick={() => props.decrementCart(props)}>Remove</Button>
            </div>
        </div>
    )
}