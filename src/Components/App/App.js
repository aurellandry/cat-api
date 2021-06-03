import React from 'react';
import Router from "../../Routes/Router";
import Navigation from '../Navigation/Navigation';
import { Provider } from 'react-redux';
import Store from '../../Store/configureStore';

function App() {
    return (
        <div>
            <Navigation />
            <div className="App container-fluid">
                <Provider store={Store}>
                    <Router />
                </Provider>
            </div> 
        </div>
    );
}
 
export default App;