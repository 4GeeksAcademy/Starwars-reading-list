import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import "../../styles/home.css"

const PersonDetail = () => {
    const { uid } = useParams();
    const [person, setPerson] = useState(null);
    const {store, actions} = useContext(Context);
    const handleImgError = (e) => {
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    };

    const imageUrl= `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`

    useEffect(() => {
        const fetchPerson = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
            const data = await response.json();
            setPerson({...data.result.properties, uid: data.result.uid});
        };
        fetchPerson();
    }, [uid]);

    if (!person) return <div>Loading...</div>;

    return (
        <div id='main' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',}}>
      <Card style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#f8f9fa', textAlign: 'center' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px', color: 'red' }}>{person.name}</Card.Title>
          <Card.Img
            variant="top"
            src={imageUrl}
            alt={person.name}
            style={{ width: '150px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
            onError={handleImgError}
          />
          <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Height: {person.height}</Card.Text>
          <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Mass: {person.mass}</Card.Text>
          <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Hair Color: {person.hair_color}</Card.Text>
          <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Skin Color: {person.skin_color}</Card.Text>
          <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Eye Color: {person.eye_color}</Card.Text>
          <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Birth Year: {person.birth_year}</Card.Text>
          <Card.Text style={{ fontSize: '1.1em', color: 'yellow' }}>Gender: {person.gender}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonDetail;