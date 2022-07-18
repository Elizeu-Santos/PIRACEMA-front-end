import { Divider, Stack, Typography, FormControlLabel, Switch } from '@mui/material';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';


export default function StatusAntennas() {
    const [antennas,setAntennas]=useState([]);
    const [statusantennas,setStatusAntennas]=useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/statusantennas/")
        .then(response => {
            return response.json();
        })
        .then( jsondata => setAntennas(jsondata));
        console.log(antennas)
    },[]);
    return (
        antennas.map((ant)=>(
            
            <Container >
                <Stack direction='row' spacing={50} >
                    <Stack direction='column' spacing={3} >
                        <Avatar sx={{ width: 300, height: 300}} alt="Cindy Baker" src="https://cdn.dribbble.com/users/330641/screenshots/4308153/tower.gif"></Avatar>
                        
                    </Stack>

                    <Stack direction='column' spacing={3} >
                        <FormControlLabel label="Status" onChange  = { (e) => {setStatusAntennas(e.target.checked)}} control={<Switch /> }  />
                        <Typography><b>Nome:</b> {ant.antenna.antennaName}</Typography>
                        <Typography><b>Status:</b> {ant?"Sim":"Não"}</Typography>
                        <Typography><b>Latitude:</b> {ant.antenna.latitude}</Typography>
                        <Typography><b>Longitude:</b> {ant.antenna.longitude}</Typography>
                        <Typography><b>Data da mudança:</b> {ant.antenna.statusChangeDate}</Typography>
                        <Typography><b>Data de Instalação:</b> {ant.antenna.installationDate}</Typography>
                        <Typography><b>Data Desativação:</b> {ant.antenna.deactivationDate}</Typography>
                    </Stack>
                </Stack>
                <br/>
                <Divider />
             
            </Container>
        ))
    )
}