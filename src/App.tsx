import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import CardDisplay from './components/CardDisplay/CardDisplay';

function App() {
  return (
    <Grid
      height="100vh"
      container
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid xs={3}>
        <CardDisplay
          title="Ad Listing"
          content="Check out other advertisements"
          image="vite.svg"
          buttonText="Browse"
        />
      </Grid>
      <Grid xs={3}>
        <CardDisplay
          title="Create an ad"
          content="Create an new ad to show to customers"
          image="vite.svg"
          buttonText="Create"
        />
      </Grid>
    </Grid>
  );
}

export default App;
