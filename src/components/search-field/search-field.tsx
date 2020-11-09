import './search-field.scss';
import React from "react";
import {AutoComplete, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {IMockCities} from "../../store/middlewares/types";
import {addCityInList, clearSearchList, getCity} from "../../store/actions";

interface ISearchFieldOption {
    key: number
    value: string
    label: React.ReactElement
}

/**
 * Подготовить элемент списка
 * @param data
 */
const prepareOptions = (data: IMockCities[]): ISearchFieldOption[] => {
    return data.map((item: IMockCities) => {
        const coordinates = `${item.coordinates.lat}, ${item.coordinates.lon}`;
        return {
            key: item.id,
            value: `${item.name}   (${coordinates})`,
            label: (
                <div className="label">
                    <span>
                      {item.name}
                    </span>
                    <span>
                        <div className="item-value">
                            <span style={{marginRight: 10}}>{item.country}</span>
                            <span>{coordinates}</span>
                        </div>
                    </span>
                </div>
            ),
        } as ISearchFieldOption;
    })
}

const SearchField: React.FunctionComponent = (): React.ReactElement => {

    const cities = useSelector((state: AppState) => state.SearchReducer.list);
    const dispatch = useDispatch();

    /**
     * Обработка события изменения значения в поле поиска
     * @param value
     */
    const handleSearch = (value: string): void => {
        if (!value || value.length === 0) {
            dispatch(clearSearchList());
            return;
        }
        if (value && value.length < 3) {
            return;
        }
        dispatch(getCity(value));
    };

    /**
     * Обработка события выбора города из выпадающего списка
     * @param value
     * @param option
     */
    const handleSelect = (value: string, option: any): void => {
        const inputData = Object.assign({} as ISearchFieldOption, option);
        if (!inputData) {
            return
        }
        const selectedCity = cities.find(item => item.id === inputData.key);
        if (selectedCity) {
            dispatch(addCityInList(selectedCity));
        }
    };

    return (
        <AutoComplete
            style={{width: '100%'}}
            options={prepareOptions(cities)}
            onSelect={handleSelect}
            onSearch={handleSearch}
        >
            <Input.Search size={'large'} allowClear placeholder={'Введите город на английском языке'} enterButton/>
        </AutoComplete>
    );
};

export default SearchField;