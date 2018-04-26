import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemap';

class WeatherList extends Component {
	
	renderWeather(cityData) {

		function kelvinToFar(kTemp) {
			return kTemp * 9/5 - 459.67;
		}

		const name = cityData.city.name;
		const temps = cityData.list.map( weather => kelvinToFar(weather.main.temp));
		const pressure = cityData.list.map( weather => weather.main.pressure);
		const humidity = cityData.list.map( weather => weather.main.humidity);
		const { lat, lon } = cityData.city.coord;


		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
				</td>		
				<td className="graphHolder">
					<Chart data={temps} color="red" units="&#8457;"/>
				</td>
				<td className="graphHolder">
					<Chart data={pressure} color="black" units="hPa"/>
				</td>
				<td className="graphHolder">
					<Chart data={humidity} color="blue" units="%"/>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (&#8457;)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>

			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);