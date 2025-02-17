import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          About Yuan Metaverse
        </Typography>
        <Typography paragraph>
          Yuan Metaverse is your premier source for cryptocurrency and Web3 news, 
          providing deep insights into the evolving digital landscape.
        </Typography>
      </Container>
    </Box>
  );
}

export default About; 