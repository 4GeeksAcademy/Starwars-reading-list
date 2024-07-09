import React,{useContext} from "react";
import { Context} from "../store/appContext"
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

const FavoritesList =() => {
    const {store, actions} = useContext(Context);
    const {favorites} = store; 

    const handleImgError = (e) =>(
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    );

    return (
        <div className="container">
            <h2>Favorites</h2>
            <div className="row">
                {favorites.length === 0 ? (
                    <p>No favorites added yet.</p>
                ) : (
                    favorites.map(item => (
                        <div className="col-md-4" key={item.uid}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.imageUrl} alt={item.name} onError={handleImgError} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Link to={`/${item.url.includes('people') ? 'person' : item.url.includes('vehicles') ? 'vehicle' : 'planet'}/${item.uid}`}>
                                        <Button variant="info">Learn More</Button>
                                    </Link>
                                    <Button variant="danger" onClick={() => actions.removeFavorite(item.uid)}>Remove from Favorites</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};


export default FavoritesList