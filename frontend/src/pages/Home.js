import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';

// Import image URLs instead of local files
const images = {
  hero: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=2000",
  crypto: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200",
  web3: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200",
  nft: "https://images.unsplash.com/photo-1640272933926-70b4dd815cb1?w=1200",
};

const featuredArticles = [
  {
    title: "Bitcoin's New All-Time High Signals Strong Market Recovery",
    category: "Crypto",
    image: images.crypto,
    timeToRead: "5 min read",
    author: "Alex Chen"
  },
  {
    title: "The Rise of AI in Web3: Transforming the Digital Landscape",
    category: "Web3",
    image: images.web3,
    timeToRead: "7 min read",
    author: "Sarah Johnson"
  },
  {
    title: "NFT Gaming: The Next Frontier of Digital Entertainment",
    category: "NFT",
    image: images.nft,
    timeToRead: "6 min read",
    author: "Mike Williams"
  }
];

const trendingArticles = [
  {
    title: "Ethereum Layer 2 Solutions See Record Growth",
    timeToRead: "4 min read",
    author: "David Zhang"
  },
  {
    title: "DeFi Protocols Reach New Milestone in TVL",
    timeToRead: "3 min read",
    author: "Rachel Brown"
  },
  {
    title: "Top Crypto Projects to Watch in 2024",
    timeToRead: "5 min read",
    author: "James Wilson"
  }
];

function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box sx={{ pt: { xs: 8, md: 10 }, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={images.hero}
                  alt="The Future of Finance"
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0))',
                    p: 3,
                  }}
                >
                  <Chip
                    label="Featured"
                    color="primary"
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography 
                    variant="h4"
                    component="h1" 
                    gutterBottom
                    sx={{ 
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    The Future of Finance: How Web3 is Revolutionizing Traditional Banking
                  </Typography>
                  <Typography 
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.875rem' }}
                  >
                    5 min read • By John Doe • February 17, 2024
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    fontSize: '1.1rem',
                  }}
                >
                  <WhatshotIcon color="primary" sx={{ fontSize: '1.25rem' }} />
                  Trending Now
                </Typography>
                {trendingArticles.map((article, index) => (
                  <Card 
                    key={index} 
                    sx={{ 
                      bgcolor: 'background.paper',
                      '&:hover': {
                        bgcolor: 'background.paper',
                        transform: 'translateY(-2px)',
                        transition: 'transform 0.2s',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography 
                        variant="body2" 
                        color="primary.main" 
                        gutterBottom
                        sx={{ fontSize: '0.75rem' }}
                      >
                        Trending #{index + 1}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ fontSize: '0.95rem', fontWeight: 600 }}
                      >
                        {article.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ fontSize: '0.75rem' }}
                      >
                        {article.timeToRead} • By {article.author}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Latest Articles Section */}
      <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              mb: 3,
              fontSize: '1.25rem',
              fontWeight: 600,
            }}
          >
            Latest Articles
          </Typography>
          <Grid container spacing={2}>
            {featuredArticles.map((article, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.2s',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.image}
                    alt={article.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Chip
                      label={article.category}
                      size="small"
                      sx={{ mb: 1, height: 24 }}
                      color="primary"
                    />
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ fontSize: '1rem', fontWeight: 600 }}
                    >
                      {article.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: '0.75rem' }}
                    >
                      {article.timeToRead} • By {article.author}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 