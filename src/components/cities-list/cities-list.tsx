import React from "react";
import {Button, List, Tooltip} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {removeCityFromList} from "../../store/actions/cities";

interface ICitiesListItem {
    id: number
    innerHtml: React.ReactElement
}

const CitiesList: React.FunctionComponent = (): React.ReactElement => {
    const {citiesInList} = useSelector((state: AppState) => state.SearchStringReducer);
    const dispatch = useDispatch();

    const onDeleteCity = (cityId: number): void => {
        dispatch(removeCityFromList(cityId));
    };

    return (
        <List
            header={'Выбранные города'}
            style={{overflowY: 'auto', height: '100%'}}
            size={'small'}
            dataSource={
                citiesInList.map(item => ({
                        id: item.id,
                        innerHtml: <span><span>{item.name}</span> ({item.coordinates.lat} {item.coordinates.lon})</span>
                    } as ICitiesListItem)
                )
            }
            renderItem={item => (
                <List.Item style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
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