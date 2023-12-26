import { AppBar, Box, InputBase, Container, IconButton, Toolbar, Typography, alpha, styled } from '@mui/material'
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'

const Search = styled('div')(({ theme }) => ({
 position:'relative',
 borderRadius:theme.shape.borderRadius,
 backgroundColor: 'white',
 '&:hover': {
 backgroundColor: alpha(theme.palette.common.white, 0.25),
 },
 marginLeft:0,
 width:'34%',
 [theme.breakpoints.up('sm')]: {
 marginLeft: theme.spacing(1),
 width: 'auto',
 },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      borderBottom: '2px solid transparent', // Add transparent underline
      '&:focus': {
        borderBottomColor: 'black', // Change the underline color on focus
      },
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '13ch',
        },
      },
    },
  }));

function Nav() {

  const handleLogin = () =>{
    console.log("Login");
  }
    
  return (
    <>
    <Container>
        <Box sx={{flexGrow:1}}>
            <AppBar sx={{background:"white" , color:"black"}}>
                <Toolbar  sx={{ justifyContent: 'space-between' }}>
                    {/* <IconButton>
                        <MenuIcon/>
                    </IconButton> */}
                    
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
                    </Search>
                <Box sx={{width:"16%"}}>
                <Typography variant='h6' sx={{fontSize:"30px", fontWeight:'bold'}}>
                        SHOP
                    </Typography>
                </Box>
                <Box onClick={handleLogin} >
                <LoginSharpIcon />
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </Container>
    </>
  )
}

export default Nav