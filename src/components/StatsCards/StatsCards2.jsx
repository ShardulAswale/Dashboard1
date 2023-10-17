import { Grid, Paper } from "@mui/material";
import CardWithBarGraph from "./Graph";
import DynamicDoughnutChart from "./CustomerStats";
// import CustomerStats from "./CustomerStats";
// import DoughnutCard from "./CustomerStats";

const StatsCards2 = () => {
  const labels = ["Red", "Blue", "Yellow"];
  const data = [300, 50, 100];
  const colors = ["#FF6384", "#36A2EB", "#FFCE56"];
  return (
    <Grid container spacing={5}>
      <Grid item xs={8} md={8}>
        <CardWithBarGraph />
      </Grid>
      <Grid item xs={4} md={4}>
        {/* <DoughnutCard /> */}
        {/* <Paper>blank for now </Paper> */}
        <DynamicDoughnutChart labels={labels} data={data} colors={colors} />
      </Grid>
    </Grid>
  );
};

export default StatsCards2;
