import { Container, Typography, Grid, Box } from '@mui/material';

function Articles() {
  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Latest Articles
        </Typography>
        <Grid container spacing={4}>
          {/* Article cards will go here */}
        </Grid>
      </Container>
    </Box>
  );
}

export default Articles; 