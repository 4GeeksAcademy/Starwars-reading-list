const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [],
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            loadPeople: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    const peopleWithImages = data.results.map(person => ({
                        ...person,
                        imageUrl: `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`
                    }));
                    setStore({ people: peopleWithImages });
                } catch (error) {
                    console.error('Error fetching people:', error);
                }
            },
            loadVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    const vehiclesWithImages = data.results.map(vehicle => ({
                        ...vehicle,
                        imageUrl: `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`
                    }));
                    setStore({ vehicles: vehiclesWithImages });
                } catch (error) {
                    console.error('Error fetching vehicles:', error);
                }
            },
            loadPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    const planetsWithImages = data.results.map(planet => ({
                        ...planet,
                        imageUrl: `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`
                    }));
                    setStore({ planets: planetsWithImages });
                } catch (error) {
                    console.error('Error fetching planets:', error);
                }
            },
            addFavorite: item => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === item.uid)) {
                    const newFavorites = [...store.favorites,item]
                    setStore( 'favorites:' , newFavorites);
                } else {
                    console.log('Item Already In Favorites')
                }
            },
            removeFavorite: uid => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(item => item.uid !== uid) });
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;