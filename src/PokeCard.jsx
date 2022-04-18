import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea, Container } from '@mui/material';


    
function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}


const PokeCard = (props) => {

    return (
        <Grid item xs={12} sm={4} key={props?.id} >
            <Card key={props?.id} sx={{ maxWidth: 275, marginBottom: 2 }}>
                <CardActionArea>
                    <CardContent style={{ backgroundColor: "#C3423F" }}>
                        <CardMedia />
                        <h2>#{props?.id} {capitalize(props?.name)}</h2>
                        <img src={props?.img} alt="" />
                        <Typography variant="body1" color="text.secondary">
                            <p>Attacks: <br /> {capitalize(props?.skill1) + " - " + capitalize(props?.skill2)}
                                <br />
                                Types: {capitalize(props?.type)} <br />
                                Base experience: {(props?.base_experience)}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default PokeCard