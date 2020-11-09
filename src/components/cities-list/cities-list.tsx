import './cities-list.scss';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {Button, List, Tooltip} from "antd";
import {CloseOutlined} from '@ant-design/icons';
import {removeCityFromList} from "../../store/actions";


interface ICitiesListItem {
    id: number
    innerHtml: React.ReactElement
}

const CitiesList: React.FunctionComponent = (): React.ReactElement => {

    const citiesInList = useSelector((state: AppState) => state.CitiesInListReducer.list);
    const dispatch = useDispatch();

    /**
     * Обрадотка события удаления города из списка
     * @param cityId
     */
    const onDeleteCity = (cityId: number): void => {
        dispatch(removeCityFromList(cityId));
    };

    return (
        <List
            header={<span className="cities-list__header">Выбранные города</span>}
            className="cities-list"
            size={'small'}
            dataSource={
                citiesInList.map(item => ({
                        id: item.id,
                        innerHtml: <span><span>{item.name}</span> ({item.coordinates.lat}, {item.coordinates.lon})</span>
                    } as ICitiesListItem)
                )
            }
            renderItem={(item: ICitiesListItem) => (
                <List.Item className="cities-list__item">
                    {item.innerHtml}
                    <Tooltip title={'Удалить'}>
                        <Button size={'small'} shape="circle" icon={<CloseOutlined/>}
                                onClick={() => onDeleteCity(item.id)}/>
                    </Tooltip>
                </List.Item>
            )}
        />
    );
};

export default CitiesList;