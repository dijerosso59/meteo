import React, { Component } from "react";
import { connect } from "react-redux";
import { addCity } from "../store/reducers/cityReducer";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCities: [],
      city: null
    };
  }

  submitForm = () => {
    this.props.addCity(this.props.city);
    this.setState({
      city: null
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.listOfCities !== this.props.listOfCities) {
      this.setState({ listOfCities: this.props.listOfCities })
    }
  }

  render() {
    return (
      <button className="btn-add" onClick={(e) => this.submitForm(e)} >
        Ajouter
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCity: (city) => dispatch(addCity(city))
  }
};

const mapStateToProps = state => {
  return {
    listOfCities: state.city.listOfCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Formulaire);