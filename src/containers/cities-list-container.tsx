import React from "react";
import CitiesList from "../components/cities-list/cities-list";

const CitiesListContainer: React.FunctionComponent = (): React.ReactElement => {
    return (
        <CitiesList/>
    );
};

export default React.memo(CitiesListContainer);