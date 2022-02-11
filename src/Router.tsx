import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps{
	// router가 function을 받고자 한다면, function은 아무 argument도 받지 않고, void를 return하는 함수
	toggleDark: () => void;
	isDark: boolean;
}

function Router({toggleDark, isDark}: IRouterProps){
	return <BrowserRouter>
		<Switch>
			<Route path="/:coinId">
				<Coin isDark={isDark}/>
			</Route>
			<Route path="/">
				<Coins toggleDark={toggleDark}/>
			</Route>
		</Switch>
	</BrowserRouter>
}
export default Router;