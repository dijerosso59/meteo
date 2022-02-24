import Header from '../components/Header';
import { useState } from 'react';
import weatherRepository from '../repository/weatherRepository';
import Formulaire from '../components/Formulaire';

function SearchCity() {

    const [input, setInput] = useState('');
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        weatherRepository.getWeather(input).then(data => {
            setCity(data);
        }).catch(error => {
            setError(error);
        });
    }

    return (
        <div id="AppMeteo">
            <Header />
            <main>
                <h1>Rechercher une ville</h1>
                <form className="ville" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Entrez une ville" value={input} onChange={({ target }) => setInput(target.value)} />
                    <button className="btn" type="submit">Rechercher</button>
                </form>
                {city ?
                    <div className="result">
                        <div className="current">
                            <p>{city.name}</p>
                            <p>{city.main.temp} °C</p>
                            <p>{city.weather[0].description}</p>
                            <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="" />
                            <Formulaire city={ city } />
                        </div>
                    </div> : ''}
                {error ? { error } : ''}
            </main>
        </div>
    );

}

export default SearchCity;