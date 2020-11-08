import React from 'react';
import WeatherList from '../components/weather-list/weather-list';

const WeatherListContainer: React.FunctionComponent = (): React.ReactElement => {
    return (
        <WeatherList/>
    );
};

export default React.memo(WeatherListContainer);