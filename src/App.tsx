import Grid from '@mui/material/Unstable_Grid2';
import CardDisplay from './components/CardDisplay/CardDisplay';

function App() {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid xs={3}>
        <CardDisplay
          title="Ad Listing"
          content="Check out other advertisements"
          image="add.webp"
          buttonText="Browse"
        />
      </Grid>
      <Grid xs={3}>
        <CardDisplay
          title="Create an ad"
          content="Create an new ad to show to customers"
          image="addpromo.webp"
          buttonText="Create"
        />
      </Grid>
    </Grid>
  );
}

export default App;
