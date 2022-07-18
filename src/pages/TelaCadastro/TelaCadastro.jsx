import React, { useState } from 'react';
import {Tabs,Tab, Container, Divider, Box, TextField, Button} from '@mui/material'
import CadastroPeixes from '../../components/CadastroPeixes';
import PeixesCadastrados from '../../components/PeixesCadastrados';

import './TelaCadastro.css'
import RegistroPassagens from '../../components/RegistroPassagens';
import StatusAntenas from '../../components/StatusAntenas';


export default function TelaCadastro(){

const [value, setValue] = useState(0)

const handleTabs=(e,val)=>{
  setValue(val)
}

return(
    
      <div>
        <Container  className='cont'>
        
          <Tabs className='Tabs' value={value} onChange={handleTabs} centered >
          <Tab label="Cadastro de Peixes"/>
            <Tab label="Peixes Cadastrados"/>
            <Tab label="Registro Passagens"/>
            <Tab label="Status das Antenas"/>
            <img src='./Logo.png'></img>
            
            
          </Tabs>
          
          <Divider/>
            <TabPanel value={value} index={0}><CadastroPeixes/></TabPanel>
            <TabPanel value={value} index={1}>
                <Box><TextField label="Digite para buscar peixes"
                style={{margin: '22px'}}
                variant='outlined'
                color='primary'
                required />
                </Box>
            <PeixesCadastrados/></TabPanel>
            <TabPanel value={value} index={2}>
            <Button variant="contained" component="label" color="primary">
          {" "}
          Upload a file
          <input type="file" hidden />  
          </Button>
            <RegistroPassagens/></TabPanel>
            <TabPanel value={value} index={3}><StatusAntenas/></TabPanel>
        </Container>
      </div>
    );
}

function TabPanel(props){
  const {children,value,index}=props;
  return(
    <div>
      {
        value===index &&(
          <h1>{children}</h1>
        )
      }
    </div>
  )
}

