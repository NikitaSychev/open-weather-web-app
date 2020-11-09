import './weather-list.scss'
import React from "react";
import {Table} from "antd";
import {useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {IWeatherListData} from "./types";
import {IOpenWeatherDaily} from "../../store/middlewares/types";

/**
 * Сместить день от текущей даты
 * @param dayCount
 * @param dateStart
 */
const moveDayInDate = (dayCount: number, dateStart: Date = new Date()): string => {
    const oneDayDuration = 86400000;
    const currentDayTime = dateStart.getTime();

    return new Date(currentDayTime + oneDayDuration * dayCount)
        .toLocaleDateString('ru', {
            weekday: 'short',
            day: 'numeric',
            month: 'long'
        });
}

const prepareColumns = (dateStart: Date = new Date()) => {
    return [
        {
            title: moveDayInDate(0, dateStart),
            dataIndex: 'date0',
        },
        {
            title: moveDayInDate(1, dateStart),
            dataIndex: 'date1',
        },
        {
            title: moveDayInDate(2, dateStart),
            dataIndex: 'date2',
        },
        {
            title: moveDayInDate(3, dateStart),
            dataIndex: 'date3',
        },
        {
            title: moveDayInDate(4, dateStart),
            dataIndex: 'date4',
        },
        {
            title: moveDayInDate(5, dateStart),
            dataIndex: 'date5',
        },
        {
            title: moveDayInDate(6, dateStart),
            dataIndex: 'date6',
        },
    ];
}

// Заголовок таблицы
const initialColumns = [
    {
        title: 'Город',
        dataIndex: 'name',
        sorter: {
            // Типа сортировка :)
            compare: (first: IWeatherListData, second: IWeatherListData) => {
                return first.name.length - second.name.length;
            },
            multiple: 3,
        },
    },
    ...prepareColumns()
];

/**
 * Подготовить ячеёку таблицы
 * @param item
 * @param idx
 */
const prepareField = (item: IOpenWeatherDaily, idx: number): React.ReactElement => {
    return (
        <div className="cell-weather">
            <span className="cell-weather__top-line">{item.daily[idx].temp.max}/{item.daily[idx].temp.min}&deg;C</span>
            <span className="cell-weather__bottom-line">{item.daily[idx].weather[0].description}</span>
        </div>
    );
};

/**
 * Заполнить строку таблицы данными
 * @param weather
 */
const prepareDataList = (weather: IOpenWeatherDaily[]): IWeatherListData[] => {
    if (!weather) {
        return [] as IWeatherListData[];
    }

    return weather.map(item => ({
            key: `${item.lat}${item.lon}`,
            name: item.cityName,
            date0: prepareField(item, 0),
            date1: prepareField(item, 1),
            date2: prepareField(item, 2),
            date3: prepareField(item, 3),
            date4: prepareField(item, 4),
            date5: prepareField(item, 5),
            date6: prepareField(item, 6),
        } as IWeatherListData)
    );
}


const WeatherList: React.FunctionComponent = (): React.ReactElement => {

    const weather = useSelector((state: AppState) => state.WeatherReducer.list);

    return (
        <React.Fragment>
            {
                weather.length > 0
                    ? <Table style={{height: '100%', overflow: 'auto'}} pagination={false} sticky={true}
                             columns={initialColumns} dataSource={prepareDataList(weather)}/>
                    : <Table style={{height: '100%', overflow: 'auto'}}
                             columns={initialColumns} dataSource={prepareDataList(weather)}/>
            }
        </React.Fragment>
    );
};

export default WeatherList;