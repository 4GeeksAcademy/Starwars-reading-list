import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const PersonDetail = () => {
    const { uid } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const fetchPerson = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
            const data = await response.json();
            setPerson(data.result.properties);
        };
        fetchPerson();
    }, [uid]);

    if (!person) return <div>Loading...</div>;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>Height: {person.height}</Card.Text>
                <Card.Text>Mass: {person.mass}</Card.Text>
                <Card.Text>Hair Color: {person.hair_color}</Card.Text>
                <Card.Text>Skin Color: {person.skin_color}</Card.Text>
                <Card.Text>Eye Color: {person.eye_color}</Card.Text>
                <Card.Text>Birth Year: {person.birth_year}</Card.Text>
                <Card.Text>Gender: {person.gender}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PersonDetail;