import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCity } from "../store/reducers/cityReducer";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCities: [],
      city: null
    };
  }

  submitForm = () => {
    this.props.removeCity(this.props.city);
    this.setState({
      city: null
    });
  }

  render() {
    return (
      <button className="btn-del" onClick={(e) => this.submitForm(e)} >
        Supprimer
      </button>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    removeCity: (city) => dispatch(removeCity(city))
  }
}

const mapStateToProps = state => {
  return {
    listOfCities: state.city.listOfCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);