import { Box, Button, ButtonGroup, Divider, Stack, TextField, Typography, List } from '@mui/material';
import Container from '@mui/material/Container';

import { useState, useEffect} from 'react';


export default function PeixesCadastrados() {
    const [fish,setFish]=useState([]);
    const [input,setInput]=useState('');

    useEffect(() => {
        fetch("http://localhost:8080/fishes/")
            .then(response => { return response.json();})
            .then( jsondata => setFish(jsondata));
        },[]);

        function Deletar(fish, pitTag){
            if(window.confirm("Tem certeza que deseja excluir? ") === true){
                var url = "http://localhost:8080/fishes/"+fish
                fetch(url, {
                    method: "DELETE",
                    body: JSON.stringify(fish),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => response.json())
                .then(json => console.log(json))
                .then(jsondata => setFish(jsondata))
                .catch(err => console.log(err));
    
                alert("Peixe excluído com sucesso!");
            }

            function filter(fish) {
                let expressao = new RegExp(input, 'i')
                let resultado = fish.filter(
                    (fish) => {
                        if(
                            expressao.test(fish.pitTag)
                        ){
                            return fish}
                    })
                    return console.log(resultado)   
            }
        }


    return (
        
        fish.map((fishes)=>(

        <div>
            <br/>

            <Container >
            
                <Stack direction='row' spacing={50}   >
                    <Stack direction='column' spacing={2}   >
                        <Typography><b>Identificador:</b> {fishes.id}</Typography>
                        <Typography><b>PitTag:</b> {fishes.pitTag}</Typography>
                        <Typography><b>Nome Científico da Espécie:</b> {fishes.scientificName}</Typography>
                        <Typography><b>Comprimento Padrão:</b> {fishes.standardLength}</Typography>
                        <Typography><b>Comprimento Total:</b> {fishes.totalLength}</Typography>
                        <Typography><b>Local da Captura:</b> {fishes.captureSite}</Typography>
                        <Typography><b>Peso Soltura:</b> {fishes.releaseWeight}</Typography>
                        <Typography><b>Data da Soltura:</b> {fishes.releaseDate}</Typography>
                        <Typography><b>Local da Soltura:</b> {fishes.releaseSite}</Typography>
                        <Typography><b>Código de Amostra do DNA:</b> {fishes.dnaSample}</Typography>
                        <Typography><b>Recaptura:</b> {fishes.recapture?"Sim":"Não"}</Typography>
                        <Typography><b>Nome Popular:</b> {fishes.commonName}</Typography>
                        <Typography><b>Comentários:</b> {fishes.comments}</Typography>
                    </Stack>
                    
                        <Box>
                            <ButtonGroup size="small" aria-label=" small button group" variant='text' color="inherit">
                                <Button  style={{margin: '7px', width:'100px', height:'35px'}} variant="contained" color="primary">Recaptura</Button>
                                <Button sx={{backgroundColor:"#ffc107"}} style={{margin: '7px', width:'100px', height:'35px'}} variant="contained" >Editar</Button>
                                <Button  style={{margin: '7px', width:'100px', height:'35px'}} onClick={() => Deletar(fishes.id)} variant="contained" color="error">Excluir</Button>
                            </ButtonGroup>
                        </Box>

                </Stack>
        
            </Container>
            <br/>
            <Divider/>
        </div>

        
        ))
        
    )
    
}
