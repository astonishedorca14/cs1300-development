import {Button} from "react-bootstrap";

export default function Aggregator(props) {

    function convertMinToHoursAndMin(min) {
        let hours = Math.floor(min / 60);
        let minutes = min % 60;
        return `${hours}h ${minutes}m`;
    }

    return (
        <div className="agg-wrap">
            <p> Watch Cart</p>
            <p>Total Flying Duration: {convertMinToHoursAndMin(props.cartDuration)}</p>
            <p>Total Cost: ${props.cartCost}</p>
            <Button variant="primary" onClick={props.resetCart}>Reset Cart</Button>
        </div>
    )

}

