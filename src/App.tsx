import './App.css'
import 'antd/dist/antd.css';
import React, {useState} from 'react';
import {AutoComplete, Button, Input, Layout, List, Table, Tooltip, Typography} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const {Search} = Input;
const { Header, Content, Sider } = Layout;

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

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
            compare: (a: any, b: any) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
            compare: (a: any, b: any) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
            compare: (a: any, b: any) => a.english - b.english,
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
    },
];


const App: React.FunctionComponent = (): React.ReactElement => {

    const [options, setOptions] = useState<any[]>([]);

    const handleSearch = (value: string): void => {
        // setOptions(value ? searchResult(value) : []);
        setOptions([{name: 'dsadsad'}, {name: 'dfsfdsfsd'}]);
        console.log('search string', value);
    };

    const handleSelect = (value: string): void => {
        console.log('change search string', value);
    };

    const onChangeTable = (pagination: any, filters: any, sorter: any, extra: any): void => {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <React.Fragment>
            <div style={{height: '100%'}}>
                <Header>
                    <p style={{color: "white"}}>
                        {'Погодное одностраничное веб-приложение'}
                    </p>
                </Header>
                <Layout style={{ height: '100%' }}>
                    <Sider width={400} style={{backgroundColor: 'white'}}>
                        <AutoComplete

                            style={{
                                width: '100%',
                            }}
                            options={options}
                            onSelect={handleSelect}
                            onSearch={handleSearch}
                        >
                            <Input.Search size={'large'} allowClear placeholder={'Введите город на английском языке'} enterButton />
                        </AutoComplete>
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
                    </Sider>
                    <Layout style={{ padding: '24px', height: '100%' }}>
                        <Content style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            height: '100%'
                        }} className="site-layout-background">
                            <Table columns={columns} dataSource={data} onChange={onChangeTable} />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </React.Fragment>
    );
};

export default App;
