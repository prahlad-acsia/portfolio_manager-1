import React from "react";
import NetAssets from "./component/net-asset.component";

const DashboardContainer = () =>{
    return (
        <div className="dashborad_main">
        <h1>Dashboard</h1>
        <NetAssets/>
        {console.log("DashboardContainer")}
        </div>

    )
}

export default DashboardContainer;