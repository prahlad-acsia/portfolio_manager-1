import React from "react";
import NetAssets from "./component/net-asset.component";
import GraphComponent from "./component/graph.component";
import { Grid } from "@mui/material";
import ConnectedAppsComponent from "./component/connected-apps.component";

const DashboardContainer = () =>{
    return (
<div className="dashborad_main" style={{"padding": "20px 20px","width" : "70%","display": "flex","justifyContent": "center","height": "750px"}}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={1}
>
<Grid item xs={4}>
<NetAssets/>
</Grid>
<Grid item xs={8}>
    <ConnectedAppsComponent/>
</Grid>
<Grid item xs={12}>
<GraphComponent/>
</Grid>
</Grid>
</div>
    )
}

export default DashboardContainer;