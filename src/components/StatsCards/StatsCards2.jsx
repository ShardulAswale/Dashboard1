import { Grid, Paper } from "@mui/material";
import CardWithBarGraph from "./Graph";
// import CustomerStats from "./CustomerStats";
// import DoughnutCard from "./CustomerStats";

const StatsCards2 = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={8} md={8}>
        <CardWithBarGraph />
      </Grid>
      <Grid item xs={4} md={4}>
        {/* <DoughnutCard /> */}
        <Paper>blank for now </Paper>
      </Grid>
    </Grid>
  );
};

export default StatsCards2;
