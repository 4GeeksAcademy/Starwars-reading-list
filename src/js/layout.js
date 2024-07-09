import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import EntityList from './component/EntityList'
import FavoritesList from "./component/FavoritesList";


import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import VehicleDetail from "./views/VehicleDetail";
import PlanetDetail from "./views/PlanetDetail";
import PersonDetail from "./views/PersonDetail";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<EntityList types={['people', 'vehicles', 'planets']} />} />
						<Route path="/favorites" element={<FavoritesList />} /> 
						<Route path="/vehicle/:uid" element={<VehicleDetail />} />
						<Route path="/people/:uid" element={<PersonDetail />} />
						<Route path="/planets/:uid" element={<PlanetDetail />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
