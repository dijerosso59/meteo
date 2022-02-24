import '../assets/css/style.css';
import '../assets/css/normalize.css';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import weatherRepository from '../repository/weatherRepository';
import { Link } from "react-router-dom";
import loading from '../assets/images/loading-cloud.gif';

function Meteo() {

    const [forecast, setForecast] = useState(null);
    const [meteo, setMeteo] = useState(null);
    const [showForecast, setShowForecast] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async ({ coords }) => {
            setMeteo(await weatherRepository.getMeteoByCoords(coords.latitude, coords.longitude));
        });

        navigator.geolocation.getCurrentPosition(async ({ coords }) => {
            setForecast(await weatherRepository.getForecast(coords.latitude, coords.longitude));
        });

        console.log(forecast);

    }, []);

    function getDate(dateString) {
        let date = new Date(dateString);
        return date.toLocaleString('fr-FR', {
            day: 'numeric',
            hour: 'numeric',
            weekday: 'long',
            // month: 'long',
        });
    }

    return (
        <div id="AppMeteo">
            <Header />
            <main>
                <h1>Bienvenue Sur Di Rosso Meteo</h1>
                <div className="text">
                    <p>Une application qui vous permet de connaitre la météo de votre ville<br />
                        Vous pouvez aussi rechercher la météo d'une ville en cliquant sur le bouton ci-dessous</p>
                </div>
                <Link to="/search">Rechercher</Link>
                {meteo ?
                    <div className="meteo">
                        <div className="result">
                            <h2>Actuellement, vous êtes à</h2>
                            <div className="current">
                                {meteo && <p>{meteo.name}</p>}
                                {meteo && <p>{meteo.main.temp} °C</p>}
                                {meteo && <p>{meteo.weather[0].description}</p>}
                                {meteo && <img src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}.png`} alt="" />}
                            </div>
                        </div>

                        <button className="btn" onClick={() => setShowForecast(!showForecast)}>Voir les prévisions</button>

                        {showForecast && (
                            <div className="result">
                                <h2>Prévision sur les prochaines 24h</h2>
                                <div className="forecast">

                                    {forecast && forecast.list.map((item, index) => {

                                        if (index < 8) {

                                            return (
                                                <div key={index}>
                                                    <p>{getDate(item.dt_txt)}</p>
                                                    <p>{item.main.temp} °C</p>
                                                    <p>{item.weather[0].description}</p>
                                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
                                                </div>
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            </div>
                        )}
                    </div> :
                    <div className="result">
                        <h2>Localisation en cours...</h2>
                        <img className="gif" src={loading} alt="" />
                    </div>}
            </main>
        </div>

    );

}

export default Meteo