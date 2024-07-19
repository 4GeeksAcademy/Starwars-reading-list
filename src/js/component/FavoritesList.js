import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const FavoritesList = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    useEffect(() => {
        console.log('Favorites list updated:', favorites);
    }, [favorites]);

    const handleImgError = (e) => {
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    };

    return (
        <div id='main' className="container">
            <h2>Favorites</h2>
            <div className="row">
                {(!favorites || favorites.length === 0) ? (
                    <p>No favorites added yet.</p>
                ) : (
                    favorites.map((item, index) => (
                        item ? (
                            <div className="col-md-4 mb-3" key={item.uid ? item.uid : index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src={item.imageUrl}
                                        alt={item.name}
                                        onError={handleImgError}
                                    />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Link to={`/${item.url.includes('people') ? 'people' : item.url.includes('vehicles') ? 'vehicle' : 'planets'}/${item.uid}`}>
                                            <Button variant="secondary info">Learn More</Button>
                                        </Link>
                                        <Button 
                                            variant="danger"
                                            onClick={() => {
                                                console.log('Removing favorite:', item.uid);
                                                actions.removeFavorite(item.uid);
                                            }}
                                        >
                                            Remove from Favorites
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ) : (
                            console.log('Undefined item at index:', index)
                        )
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoritesList;