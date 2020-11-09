import './weather-list.scss'
import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {IWeatherListData} from "./types";
import {IOpenWeatherDaily} from "../../store/middlewares/types";


const dateNow = new Date();
const oneDayDuration = 86400000;
const currentDayTime = dateNow.getTime();

const moveDayInDate = (dayCount: number): string => {
    return new Date(currentDayTime + oneDayDuration * dayCount)
        .toLocaleDateString('ru', {
            weekday: 'short',
            day: 'numeric',
            month: 'long'
        });
}

const columns = [
    {
        title: 'Город',
        dataIndex: 'name',
        sorter: {
            compare: (a: any, b: any) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: moveDayInDate(0),
        dataIndex: 'date0',
    },
    {
        title: moveDayInDate(1),
        dataIndex: 'date1',
    },
    {
        title: moveDayInDate(2),
        dataIndex: 'date2',
    },
    {
        title: moveDayInDate(3),
        dataIndex: 'date3',
    },
    {
        title: moveDayInDate(4),
        dataIndex: 'date4',
    },
    {
        title: moveDayInDate(5),
        dataIndex: 'date5',
    },
    {
        title: moveDayInDate(6),
        dataIndex: 'date6',
    },
];

const prepareField = (item: IOpenWeatherDaily, idx: number): React.ReactElement => {
    return (
        <div className="cell-weather">
            <span className="cell-weather__top-line">{item.daily[idx].temp.max}/{item.daily[idx].temp.min}&deg;C</span>
            <span className="cell-weather__bottom-line">{item.daily[idx].weather[0].description}</span>
        </div>
    );
};

const prepareDataList = (weather: IOpenWeatherDaily[]): IWeatherListData[] => {
    if (!weather) {
        return [] as IWeatherListData[];
    }

    return weather.map(item => ({
            key: `${item.lat}${item.lon}`,
            name: item.timezone,
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

    const {weather} = useSelector((state: AppState) => state.SearchStringReducer);
    const [data, setData] = useState<IWeatherListData[]>([]);

    const onChangeTable = (pagination: any, filters: any, sorter: any, extra: any): void => {
        console.log('params', pagination, filters, sorter, extra);
    }

    useEffect(() => {
        setData(prepareDataList(weather));
    }, [weather]);

    console.log('new weather', weather);

    return (
        <Table columns={columns} dataSource={data} onChange={onChangeTable}/>
    );
};

export default WeatherList;