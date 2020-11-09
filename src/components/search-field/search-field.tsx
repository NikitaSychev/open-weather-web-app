import React, {useEffect, useState} from "react";
import {AutoComplete, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addCityInList, getCity} from "../../store/actions/cities";
import {AppState} from "../../store/store";
import {IMockCities} from "../../store/middlewares/types";

const prepareOptions = (data: IMockCities[]) => {
    return data.map((item: IMockCities) => {
        const coordinates = `${item.coordinates.lat} ${item.coordinates.lon}`;
        return {
            value: `${item.name}   (${coordinates})`,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>
                      {item.name}
                    </span>
                    <span>
                        <div style={{width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <span style={{marginRight: 10}}>{item.country}</span>
                            <span>{coordinates}</span>
                        </div>
                    </span>
                </div>
            ),
        };
    })
}

const getSelectedCity = (value: string, cities: IMockCities[]): IMockCities => {
    const parts = value.split('   ');
    if (parts && parts.length === 2) {
        const name = parts[0];
        const [lat, lon] = parts[1]
            .replace('(', '')
            .replace(')', '')
            .split(' ')
            .map(res => parseFloat(res));
        if (lon && lat) {
            const selectedCity = cities.find(item =>
                item.name === name
                && item.coordinates.lon === lon
                && item.coordinates.lat === lat);
            if (selectedCity) {
                return selectedCity;
            }
        }
    }

    return {} as IMockCities;
}

const SearchField: React.FunctionComponent = (): React.ReactElement => {

    const [options, setOptions] = useState<any[]>([]);
    const {cities} = useSelector((state: AppState) => state.SearchStringReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        setOptions(prepareOptions(cities));
    }, [cities]);

    console.log('cities', cities);

    const handleSearch = (value: string): void => {
        dispatch(getCity(value));
    };

    const handleSelect = (value: string): void => {
        const city = getSelectedCity(value, cities);
        dispatch(addCityInList(city));
        setOptions([]);
    };

    return (
        <AutoComplete
            style={{
                width: '100%',
            }}
            options={options}
            onSelect={handleSelect}
            onSearch={handleSearch}
        >
            <Input.Search size={'large'} allowClear placeholder={'Введите город на английском языке'} enterButton/>
        </AutoComplete>
    );
};

export default SearchField;