import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea, Container } from '@mui/material';

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

const PokeDex = () => {

    const [pokemon, setPokemon] = React.useState([]);

    const loadData = async () => {
        try {
            console.log("hola")
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10');
            for (let i = 0; i < res.data.results.length; i++) {
                await axios.get(res.data.results[i].url).then(res => {
                    setPokemon(prevState => [...prevState, res.data])
                })
            }

        } catch (error) {
            console.log("error")
        }
    }

    const getRandomPokemon = async () => {
        const random = Math.floor(Math.random() * 150)
        const resu = await axios.get('https://pokeapi.co/api/v2/pokemon/' + random)
        setPokemon(prevState => [...prevState, resu.data])
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <div>
            <h1>PokeDex</h1>
            
            <Container maxWidth='lg' elevattion={4}>
            <Grid container spacing={2}>
                {pokemon.map(pokemon => {
                    return (
                                <Grid item xs={12} sm={4} key={pokemon?.id} >
                                    <Card key={pokemon?.id} sx={{ maxWidth: 275, marginBottom: 2 }}>
                                        <CardActionArea>
                                            <CardContent style={{ backgroundColor: "#C3423F" }}>
                                                <CardMedia />
                                                    <h2>#{pokemon?.id} {capitalize(pokemon?.name)}</h2>
                                                    <img src={pokemon?.sprites.front_default} alt="" />
                                                    <Typography variant="body1" color="text.secondary">
                                                        <p>Attacks: <br /> {capitalize(pokemon?.abilities[0].ability.name) + " - " + capitalize(pokemon?.abilities[1].ability.name)} </p>
                                                        <p>Types: {capitalize(pokemon?.types[0].type.name)}</p>
                                                    </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>


                        )
                    })
                }
                
                
                </Grid>
            </Container>

            <Button variant="contained" color="primary" onClick={getRandomPokemon} >Add random Pokemon</Button>

        </div>
    )
}

export default PokeDex