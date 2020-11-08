import React, {useEffect, useState} from "react";
import {AutoComplete, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getCity} from "../../store/actions/cities";
import {ICityState} from "../../store/reducers/types";
import {AppState} from "../../store/store";
import {IMockCities} from "../../store/middlewares/types";

function getRandomInt(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query: any): React.ReactElement => {
    return (
        <>
            {'fdsfsdfsd'}
            {/*new Array(getRandomInt(5))*/}
            {/*.join('.')*/}
            {/*.split('.')*/}
            {/*.map((item, idx) => {*/}
            {/*    const category = `${query}${idx}`;*/}
            {/*    return {*/}
            {/*        value: category,*/}
            {/*        label: (*/}
            {/*            <div*/}
            {/*                style={{*/}
            {/*                    display: 'flex',*/}
            {/*                    justifyContent: 'space-between',*/}
            {/*                }}*/}
            {/*            >*/}
            {/*    <span>*/}
            {/*      Found {query} on{' '}*/}
            {/*        <a*/}
            {/*            href={`https://s.taobao.com/search?q=${query}`}*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*        >*/}
            {/*        {category}*/}
            {/*      </a>*/}
            {/*    </span>*/}
            {/*                <span>{getRandomInt(200, 100)} results</span>*/}
            {/*            </div>*/}
            {/*        ),*/}
            {/*    };*/}
            {/*});*/}
        </>
    )
};

const prepareOptions = (data: IMockCities[]) => {
    return data.map((item: IMockCities) => {
        return {
            value: item.id,
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
                    <span>{item.country}</span>
                </div>
            ),
        };
    })

}

const SearchField: React.FunctionComponent = (): React.ReactElement => {

    const [options, setOptions] = useState<any[]>([]);
    const dispatch = useDispatch();
    const {cities} = useSelector((state: AppState) => state.SearchStringReducer);

    useEffect(() => {
        setOptions(prepareOptions(cities));
    }, [cities]);

    console.log('cities', cities);

    const handleSearch = (value: string): void => {
        dispatch(getCity(value));
        console.log('search string', value);
    };

    const handleSelect = (value: string): void => {
        console.log('change search string', value);
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