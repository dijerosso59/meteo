import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './views/List';
import Meteo from './views/Meteo';
import Search from './views/Search';
import store from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/list" element={<List />} />
                <Route path="/" element={<Meteo />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Provider>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
