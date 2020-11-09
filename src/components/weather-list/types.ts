import React from 'react';


export interface IWeatherListSorter {
    compare: (a: any, b: any) => number
    multiple: number,
}

export interface IWeatherListColumn {
    title: string
    dataIndex: string
    sorter?: IWeatherListSorter
    value?: string
}

export interface IWeatherListData {
    key: string
    name: string
    date0: React.ReactElement
    date1: React.ReactElement
    date2: React.ReactElement
    date3: React.ReactElement
    date4: React.ReactElement
    date5: React.ReactElement
    date6: React.ReactElement
}