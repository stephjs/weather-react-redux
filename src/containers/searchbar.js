import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.props.fetchWeather("Redondo Beach");
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''});
	}

	render() {
		return(
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
					className="form-control"
					placeholder="Get a 5-day forecast of weather in your favorite cities."
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( {fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);