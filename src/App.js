import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
export default function App() {
    return (
        <div>
            <Header />
            <main className="container content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" component={Contact} />
                    <Route path="/categories/:name" component={Category} />
                    <Route path="/meals/:id" component={Recipe}/>
                    <Route component={NotFound} />
                </Switch>

            </main>
            <Footer />
        </div>
    )
}