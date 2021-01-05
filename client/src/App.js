import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Search} />
				<Route exact path="/search" component={Search} />
				<Route exact path="/saved" component={Saved} />
			</Switch>
		</Router>
	);
}

export default App;
