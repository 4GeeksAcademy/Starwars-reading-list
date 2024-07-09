import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const PlanetDetail = () => {
    const { uid } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
            const data = await response.json();
            setPlanet(data.result.properties);
        };
        fetchPlanet();
    }, [uid]);

    if (!planet) return <div>Loading...</div>;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{planet.name}</Card.Title>
                <Card.Text>Diameter: {planet.diameter}</Card.Text>
                <Card.Text>Rotation Period: {planet.rotation_period}</Card.Text>
                <Card.Text>Orbital Period: {planet.orbital_period}</Card.Text>
                <Card.Text>Gravity: {planet.gravity}</Card.Text>
                <Card.Text>Population: {planet.population}</Card.Text>
                <Card.Text>Climate: {planet.climate}</Card.Text>
                <Card.Text>Terrain: {planet.terrain}</Card.Text>
                <Card.Text>Surface Water: {planet.surface_water}</Card.Text>
                {/* Add more details as needed */}
            </Card.Body>
        </Card>
    );
};

export default PlanetDetail;