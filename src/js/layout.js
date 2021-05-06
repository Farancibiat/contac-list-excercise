import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { AddContact } from "./component/addContact";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

	return (
		<BrowserRouter>
			<ScrollToTop>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/newcontact">
						<AddContact />
					</Route>
					<Route exact path="/modifycontact">
						<AddContact />
					</Route>
				</Switch>
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
