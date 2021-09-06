import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
