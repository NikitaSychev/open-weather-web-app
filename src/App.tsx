import './App.scss'
import 'antd/dist/antd.css';
import React from 'react';
import {Layout} from "antd";
import WeatherListContainer from "./containers/weather-list-container";
import SearchFieldContainer from "./containers/search-field-container";
import CitiesListContainer from "./containers/cities-list-container";
import { Provider } from "react-redux"
import store from "./store/store";

const {Header, Content, Sider} = Layout;

const App: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <Layout className="main-container">
                <Header>
                    <h1 className="header-title">
                        {'Погодное одностраничное веб-приложение'}
                    </h1>
                </Header>
                <Layout className="main-container">
                    <Sider width={400} className="left-panel">
                        <Layout className="left-panel-container" style={{backgroundColor: 'white'}}>
                            <SearchFieldContainer/>
                            <CitiesListContainer/>
                        </Layout>
                    </Sider>
                    <Layout className="content-container">
                        <Content className="content-container__content">
                            <WeatherListContainer/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Provider>
    );
};

export default App;
