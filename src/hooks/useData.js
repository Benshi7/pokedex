import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";


const useData = () => {

    const [pokemon, setPokemon] = React.useState([]);

    const loadData = async () => {
        try {
            console.log("primer try")
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

    useEffect(() => { loadData() }, []);

    return [pokemon, setPokemon, loadData, getRandomPokemon]
}

export default useData;