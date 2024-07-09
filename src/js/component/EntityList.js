import React,{useEffect,useContext} from "react";
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

const EntityList = ({types}) => {
    const {store, actions} = useContext(Context);
  

    useEffect(() => {
        if (Array.isArray(types)) {
            types.forEach(type => {
                if (type === 'people') actions.loadPeople();
                if (type === 'vehicles') actions.loadVehicles();
                if (type === 'planets') actions.loadPlanets();
            });
        }
    }, [types, actions]);

    const handleImgError = (e) =>(
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    )

    return (
        <div className="container">
            {types.includes('people') && (
                <>
                    <h2>People</h2>
                    <div className="row">
                        {store.people.map(person => (
                            <div className="col-md-4" key={person.uid}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant = 'top' src={person.imageUrl} onError={handleImgError} />
                                    <Card.Body>
                                        <Card.Title>{person.name}</Card.Title>  
                                        <Link to={`/people/${person.uid}`}> 
                                            <Button variant="info">Learn More</Button>
                                        </Link>
                                        <Button variant="primary" onClick={() => actions.addFavorite(person)}>Add to Favorites</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </>
            )}
            {types.includes('vehicles') && (
                <>
                    <h2>Vehicles</h2>
                    <div className="row">
                        {store.vehicles.map(vehicle => (
                            <div className="col-md-4" key={vehicle.uid}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Img variant = 'top' src={vehicle.imageUrl} onError={handleImgError} />
                                        <Card.Title>{vehicle.name}</Card.Title>
                                        <Link to={`/vehicle/${vehicle.uid}`}>
                                            <Button variant="info">Learn More</Button>
                                        </Link>
                                        <Button variant="primary" onClick={() => actions.addFavorite(vehicle)}>Add to Favorites</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </>
            )}
            {types.includes('planets') && (
                <>
                    <h2>Planets</h2>
                    <div className="row">
                        {store.planets.map(planet => (
                            <div className="col-md-4" key={planet.uid}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                     <Card.Img variant = 'top' src={planet.imageUrl} onError={handleImgError}/>
                                        <Card.Title>{planet.name}</Card.Title>
                                        <Link to={`/planets/${planet.uid}`}>
                                            <Button variant="info">Learn More</Button>
                                        </Link>
                                        <Button variant="primary" onClick={() => actions.addFavorite(planet)}>Add to Favorites</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default EntityList