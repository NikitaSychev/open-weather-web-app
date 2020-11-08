import './App.css'
import 'antd/dist/antd.css';
import React from 'react';
import {Input, Layout} from 'antd';
import WeatherListContainer from "./containers/weather-list-container";
import SearchFieldContainer from "./containers/search-field-container";
import CitiesListContainer from "./containers/cities-list-container";
import { Provider } from "react-redux"
import store from "./store/store";

const {Search} = Input;
const {Header, Content, Sider} = Layout;

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




const App: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <div style={{height: '100%'}}>
                <Header>
                    <p style={{color: "white"}}>
                        {'Погодное одностраничное веб-приложение'}
                    </p>
                </Header>
                <Layout style={{height: '100%'}}>
                    <Sider width={400} style={{backgroundColor: 'white'}}>
                        <SearchFieldContainer/>
                        <CitiesListContainer/>
                    </Sider>
                    <Layout style={{padding: '24px', height: '100%'}}>
                        <Content style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            height: '100%'
                        }} className="site-layout-background">
                            <WeatherListContainer/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </Provider>
    );
};

export default App;
