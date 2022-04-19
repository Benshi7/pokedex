import React from 'react';
//import axios from 'axios';
import Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
//import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import InputBase from '@mui/material/InputBase';
//import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import useData from './hooks/useData';
import usePokemon from './hooks/usePokemon';
import PokeCard from './PokeCard';



const PokeDex = () => {

    const [pokemon, setPokemon, loadData, getRandomPokemon] = useData();

    const [searchTerm, setSearchTerm, handleSearch, searchFilter] = usePokemon();

    return (
        <div>

            <h1>PokeDex</h1>

            <Container maxWidth='lg' elevattion={4}>

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ bgcolor: "rgb(195, 66, 63)" }}>
                        <Toolbar
                            color="black"
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2, color: "#111214" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                            </Typography>
                            <input type="text" placeholder="Search" onChange={handleSearch} />

                        </Toolbar>
                    </AppBar>
                </Box>
                <br />
                <Grid container spacing={2} style={{margin: "0 auto"}}>
                    {pokemon.filter(searchFilter
                    ).map(pokemon => {
                        return (
                            <PokeCard 
                                key={pokemon.id}
                                id = {pokemon.id}
                                name = {pokemon.name}
                                img = {pokemon.sprites.front_default}
                                skill1 = {pokemon.abilities[0].ability.name}
                                skill2 = {pokemon.abilities[1].ability.name}
                                type = {pokemon.types[0].type.name}
                                base_experience = {pokemon.base_experience}
                            />
                            )
                    })
                    }
                </Grid>
            </Container>


            <Button variant="contained" color="primary" onClick={getRandomPokemon} >Add random Pokemon</Button>

        </div>
    )
}

export default PokeDex;