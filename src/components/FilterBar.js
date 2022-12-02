import Form from 'react-bootstrap/Form';
import {Dropdown} from "react-bootstrap";

export default function FilterBar(props) {
    const stops = ["Any", 0, 1, 2, "3+"];
    const destination = ["Any", "North America", "South America", "Europe", "Africa", "East Asia", "Southeast Asia", "Oceania"];

    return (
        <div className="filter-wrap">
            {/*create filter bar with checkboxes for stops and dropdown for destination*/}
            <p>Number of Stops </p>
            <Form>
                {stops.map((stop) => {
                    return (
                        <Form.Check
                            name="stops"
                            type="radio"
                            label={stop}
                            defaultChecked={stop === "Any"}
                            value={stop}
                            onChange= {(e) => props.setStops(e.target.value)}
                        />
                    )
                })}
            </Form>

            <p>Choose Destination</p>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {props.destination}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {destination.map((dest) => {
                        return (
                            <Dropdown.Item
                                onClick= {() => props.setDestination(dest)}
                            > {dest}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}
