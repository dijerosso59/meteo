import Header from '../components/Header';
import { useEffect, useState } from 'react';
import weatherRepository from '../repository/weatherRepository';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Delete from '../components/Delete';

class ListCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfCities: []
        };
    }

    componentDidMount() {
        this.setState({ listOfCities: this.props.listOfCities });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listOfCities !== this.props.listOfCities) {
          this.setState({ listOfCities: this.props.listOfCities })
        }
      }

    render() {
        return (
            <div id="AppMeteo">
                <Header />
                <main>
                    <h1>Liste de vos villes favorites</h1>
                    <p>Vos villes favorites seront affichées ci-dessous</p>
                    {this.state.listOfCities.length > 0 ?
                        <div className="result">
                            {this.state.listOfCities.map((city, index) => {
                                return (
                                    <div className="current" key={index}>
                                        <p>{city.name}</p>
                                        <p>{city.main.temp} °C</p>
                                        <p>{city.weather[0].description}</p>
                                        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="" />
                                        <Delete city={ city } />
                                    </div>
                                );
                            }
                            )}
                        </div> : ''}
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listOfCities: state.city.listOfCities
    }
}

export default connect(mapStateToProps)(ListCity);