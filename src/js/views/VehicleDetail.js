import React, { useEffect, useState , useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const VehicleDetail = () => {
    const { uid } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const {store, actions} = useContext(Context);
    const handleImgError = (e) => {
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    };

    const imageUrl= `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`

    useEffect(() => {
        const fetchVehicle = async () => {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
            const data = await response.json();
            setVehicle({...data.result.properties, uid: data.result.uid});
        };
        fetchVehicle();
    }, [uid]);

    if (!vehicle) return <div>Loading...</div>;

    return (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#f8f9fa', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: 'red' }}>{vehicle.name}</Card.Title>
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={vehicle.name}
                    style={{ width: '150px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
                    onError={handleImgError}
                />
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Model: {vehicle.model}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Manufacturer: {vehicle.manufacturer}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Cost in Credits: {vehicle.cost_in_credits}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Length: {vehicle.length}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Max Speed: {vehicle.max_atmosphering_speed}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Crew: {vehicle.crew}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Passengers: {vehicle.passengers}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Cargo Capacity: {vehicle.cargo_capacity}</Card.Text>
                {/* Add more details as needed */}
            </Card.Body>
        </Card>
    </div>
    );
};

export default VehicleDetail;