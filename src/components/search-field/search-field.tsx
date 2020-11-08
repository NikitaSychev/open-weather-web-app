import React, {useState} from "react";
import {AutoComplete, Input} from "antd";

const SearchField: React.FunctionComponent = (): React.ReactElement => {

    const [options, setOptions] = useState<any[]>([]);

    const handleSearch = (value: string): void => {
        // setOptions(value ? searchResult(value) : []);
        setOptions([{name: 'dsadsad'}, {name: 'dfsfdsfsd'}]);
        console.log('search string', value);
    };

    const handleSelect = (value: string): void => {
        console.log('change search string', value);
    };

    return (
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
    );
};

export default SearchField;