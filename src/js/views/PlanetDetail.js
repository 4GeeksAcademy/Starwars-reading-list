import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';

const PlanetDetail = () => {
    const { uid } = useParams();
    const [planet, setPlanet] = useState(null);
    const {store, actions} = useContext(Context);
    const handleImgError = (e) => {
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    };

    const imageUrl= `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`


    useEffect(() => {
        const fetchPlanet = async () => {
            const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
            const data = await response.json();
            setPlanet({...data.result.properties, uid: data.result.uid});
        };
        fetchPlanet();
    }, [uid]);

    if (!planet) return <div>Loading...</div>;

    return (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#f8f9fa', textAlign: 'center' }}>
         <Card.Body>
          <Card.Title style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: 'red' }}>{planet.name}</Card.Title>
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={planet.name}
                    style={{ width: '150px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
                    onError={handleImgError}
                />
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Rotation Period: {planet.rotation_period}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Diameter: {planet.diameter}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Orbital Period: {planet.orbital_period}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Gravity: {planet.gravity}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Population: {planet.population}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Climate: {planet.climate}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Terrain: {planet.terrain}</Card.Text>
                <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Surface Water: {planet.surface_water}</Card.Text>
                {/* Add more details as needed */}
            </Card.Body>
        </Card>
    </div>
    );
};



export default PlanetDetail;