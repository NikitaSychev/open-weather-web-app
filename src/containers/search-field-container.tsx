import React from "react";
import SearchField from "../components/search-field/search-field";

const SearchFieldContainer: React.FunctionComponent = (): React.ReactElement => {
    return (
        <SearchField/>
    );
};

export default React.memo(SearchFieldContainer);