import React, {useContext, useEffect} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar';
import {Home} from "./pages/Home/Home";
import {Footer} from "./components/Footer/Footer";
import {About} from "./pages/About/About";
import {Contacts} from './pages/Contacts/Contacts'
import {Login} from "./pages/Login/Login";
import {AuthContext} from "./context/auth/authContext";
import {Admin} from "./pages/Admin/Admin";
import {Creator} from "./pages/Creator/Creator";
import {Gallery} from "./pages/Gallery/Gallery";
import firebase from "firebase";
import {Delete} from "./pages/Delete/Delete";

function App() {
    const {auth, login} = useContext(AuthContext);

    useEffect(() => {
        if (!auth.login) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    login();
                }
            });
        }
        // eslint-disable-next-line
    }, [])


    return (
        <React.Fragment>
            <header>
                <Navbar />
            </header>

            <div className='parallax' id='parallax'>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contacts' component={Contacts} />
                    <Route path='/login' component={Login} />
                    <Route path='/paintings' component={Gallery} />
                    <Route path='/works' component={Gallery} />
                    <Route path='/paper' component={Gallery} />
                    { auth.login ? <Route path='/admin' component={Admin} /> : null }
                    { auth.login ? <Route path='/create' component={Creator} /> : null }
                    { auth.login ? <Route path='/delete' component={Delete} /> : null }
                    <Redirect to='/' />
                </Switch>

                <footer>
                    <Footer />
                </footer>
            </div>
        </React.Fragment>
    );
}

export default App;
