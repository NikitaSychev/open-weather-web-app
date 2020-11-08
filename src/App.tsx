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
