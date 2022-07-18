import { Divider, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';

  
export default function RegistroPassagens() {
    const [passagens,setPassagens]=useState([]);
    const [fish, setFish]=useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/passes")
        .then(response => {
            return response.json();
        })
        .then( jsondata =>  setPassagens(jsondata) );
    },[]);
    

    return (
        passagens.map((pass)=>(
            
        <div >
            <Container >
                <br/>
                <Stack direction='row' spacing={50} >
                    <Stack direction='column' spacing={3}   >

                        <Typography><b>Identificador:</b> {pass.fish.id}</Typography>
                        <Typography><b>PitTag:</b> {pass.fish.pitTag}</Typography>
                        <Typography><b>Nome Científico da Espécie:</b> {pass.fish.scientificName}</Typography>
                        <Typography><b>Comprimento Padrão:</b> {pass.fish.standardLength}</Typography>
                        <Typography><b>Comprimento Total:</b> {pass.fish.totalLength}</Typography>

                    </Stack>

                    <Stack direction='column' spacing={3} >
                        <Typography><b>Data da Soltura:</b> {pass.fish.releaseDate}</Typography>
                        <Typography><b>Local da Soltura:</b> {pass.fish.releaseSite}</Typography>
                        <Typography><b>Recaptura:</b> {pass.fish.recapture?"Sim":"Não"}</Typography>
                        <Typography><b>Nome da Antena:</b> {pass.antenna.antennaName}</Typography>
                        <Typography><b>Data e Hora do Registro:</b> {pass.fish.registryDate}</Typography>
                    </Stack>

                </Stack>
               <br/>
               <Divider/>
                
            </Container >
            
            
        </div >
        ))
    )
}