import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 70 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 800,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              letterSpacing: '-0.02em',
            }}
          >
            YUAN METAVERSE
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: 2,
              backgroundColor: (theme) => alpha(theme.palette.common.white, 0.05),
              '&:hover': {
                backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1),
              },
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              width: '300px',
            }}
          >
            <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
              <SearchIcon sx={{ color: 'text.secondary' }} />
            </Box>
            <InputBase
              placeholder="Search articles..."
              sx={{
                color: 'inherit',
                '& .MuiInputBase-input': {
                  p: 1,
                },
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/articles">
              Articles
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              About
            </Button>
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <MenuItem component={RouterLink} to="/articles" onClick={handleClose}>
                Articles
              </MenuItem>
              <MenuItem component={RouterLink} to="/about" onClick={handleClose}>
                About
              </MenuItem>
              <MenuItem onClick={handleClose}>Subscribe</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 