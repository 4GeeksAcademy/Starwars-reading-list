import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const VehicleDetail = () => {
    const { uid } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
            const data = await response.json();
            setVehicle(data.result.properties);
        };
        fetchVehicle();
    }, [uid]);

    if (!vehicle) return <div>Loading...</div>;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <Card.Text>Model: {vehicle.model}</Card.Text>
                <Card.Text>Manufacturer: {vehicle.manufacturer}</Card.Text>
                <Card.Text>Cost in Credits: {vehicle.cost_in_credits}</Card.Text>
                <Card.Text>Length: {vehicle.length}</Card.Text>
                <Card.Text>Max Speed: {vehicle.max_atmosphering_speed}</Card.Text>
                <Card.Text>Crew: {vehicle.crew}</Card.Text>
                <Card.Text>Passengers: {vehicle.passengers}</Card.Text>
                <Card.Text>Cargo Capacity: {vehicle.cargo_capacity}</Card.Text>
                {/* Add more details as needed */}
            </Card.Body>
        </Card>
    );
};

export default VehicleDetail;