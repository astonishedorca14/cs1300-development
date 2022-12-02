import './App.css';
import {useEffect, useState} from "react";
import {flightData} from "./data/data";
import FlightItem from "./components/FlightItem";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import Aggregator from "./components/Aggregator";


function App() {
    // filters
    const [stops, setStops] = useState("Any");
    const [destination, setDestination] = useState("Any");
    // sort
    const [sort, setSort] = useState("None");
    // items to display
    const [flightItems, setFlightItems] = useState([...flightData]);
    // aggregator for cost (min is 0)
    const [cost, setCost] = useState(0);
    // aggregator for duration
    const [duration, setDuration] =  useState(0);

    useEffect(
        () => {
            sortFlights();
        }
    , [sort])

    const setStopsFilter = (event) => {
        setStops(event);
    }

    const setDestinationFilter = (event) => {
        setDestination(event);
    }

    const setSortType = (event) => {
        setSort(event);
        // sortFlights();
    }

    function incrementCart(item) {
        setCost(cost + item.cost);
        setDuration(duration + item.durationMin);
    }

    function decrementCart(item) {
        if (cost - item.cost < 0) {
            setCost(0);
            setDuration(0);
        } else {
            setCost(cost - item.cost);
            setDuration(duration - item.durationMin);
        }
    }


    const resetCart = () => {
        setCost(0);
        setDuration(0);
    }

    function sortFlights() {
        console.log(sort);
        if (sort === "Duration: Fastest") {
            setFlightItems([...flightItems].sort((a, b) => a.durationMin - b.durationMin));
        } else if (sort === "Cost: Cheapest") {
            setFlightItems([...flightItems].sort((a, b) => a.cost - b.cost));
        } else if (sort === "Duration: Longest") {
            setFlightItems([...flightItems].sort((a, b) => b.durationMin - a.durationMin));
        } else if (sort === "Cost: Most Expensive") {
            setFlightItems([...flightItems].sort((a, b) => b.cost - a.cost));
        }
        else {
            setFlightItems([...flightData]);
        }
    }

    const matchStopsFilter = (item) => {
        //check type of stops

        // console.log(stops);
        if (stops === "Any") {
            return true;
        } else if (Number(stops) === item.numStops) {
            return true;
        } else return stops === "3+" && item.numStops >= 3;
    }

    const matchDestinationFilter = (item) => {
        // console.log(destination, item.destinationContinent);
        if (destination === "Any") {
            return true;
        } else return destination === item.destinationContinent;
    }

    return (
        <div className="App">
            <div className="app-header">
                <div className="app-header-title">
                    <h1>Flights from Providence</h1>
                    <div className="main-content">
                        <div className="app-filter-wrap">
                            <FilterBar setStops={setStopsFilter} setDestination={setDestinationFilter} destination={destination}/>
                            <SortBar setSort={setSortType}/>
                            <Aggregator cartCost={cost} cartDuration={duration} resetCart={resetCart}/>
                        </div>
                        <div className="app-header-item-wrapper">
                            {flightItems.map((item) => {
                                if (matchStopsFilter(item) && matchDestinationFilter(item)) {
                                    return (
                                        <FlightItem
                                            destination={item.destination}
                                            airport={item.airport}
                                            durationMin={item.durationMin}
                                            cost={item.cost}
                                            destinationContinent={item.destinationContinent}
                                            numStops={item.numStops}
                                            incrementCart={incrementCart}
                                            decrementCart={decrementCart}
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
