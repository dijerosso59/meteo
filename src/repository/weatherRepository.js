import axios from "axios";
const {
    REACT_APP_API_URL,
    REACT_APP_API_KEY
} = process.env

const weatherRepository = {
    async getWeather(city) {
        try {
            const response = await axios.get(`${REACT_APP_API_URL}/weather?q=${city}&units=metric&lang=fr&appid=${REACT_APP_API_KEY}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getMeteoByCoords(lat, lon) {
        try {
            const response = await axios.get(`${REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${REACT_APP_API_KEY}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getForecast(lat, lon) {
        try {
            const response = await axios.get(`${REACT_APP_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${REACT_APP_API_KEY}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
};

export default weatherRepository;