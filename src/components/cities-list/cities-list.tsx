import React from "react";
import {Button, List, Tooltip} from "antd";
import {CloseOutlined} from "@ant-design/icons";

const CitiesList: React.FunctionComponent = (): React.ReactElement => {
    

    return (
        <List
            header={'Выбранные города'}
            style={{overflowY: "auto"}}
            size={'small'}
            dataSource={['dsdss', 'fsfsdsd', 'hgfdgf', 'gfdg', 'fdsfdsf', 'fdsf', 'fhfg', 'frfsd', 'sadww', 'fdsfgf', '33resr']}
            renderItem={item => (
                <List.Item style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    {item}
                    <Tooltip title={'Удалить'}>
                        <Button size={'small'} shape="circle" icon={<CloseOutlined/>}/>
                    </Tooltip>
                </List.Item>
            )}
        />
    );
};

export default CitiesList;