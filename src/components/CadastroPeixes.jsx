import { Button, Container, Divider, FormControlLabel, FormGroup, Icon, List, ListItem, ListItemText, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function CadastroPeixes(){

  const[recaptura,setRecaptura]=useState(false)
  const{register,handleSubmit}=useForm();
  const [value, setValue] = React.useState(new Date());

  const onSubmit=(e)=>{
    e.releaseDate = value;
    e.recapture = recaptura;
    console.log(e);
    fetch("http://localhost:8080/fishes",{
      method:"POST",
      body: JSON.stringify(e),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
    
  }

 return (
  
  <Container>
    
  <form onSubmit={handleSubmit(onSubmit)} >
    <div>
      <List>
        <ListItem >
          <ListItemText primary="Dados de cadastro dos peixes" />
        </ListItem>
        <Divider />
      </List>
      <Grid container spacing={2} style={{ justifyContent:'center', textAlign: 'center'}} >
        <Grid item xs={5} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} autoComplete="off" >
          <TextField
            name='pitTag'
            label="PitTag"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required
            {...register("pitTag")}
           />

          <TextField
            name='standardLength'
            label="Comprimento padrão"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required
            {...register("standardLength")}
          />

          <TextField
            name='captureSite'
            label="Local de captura"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required
            {...register("captureSite")}
          />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Data/Hora"
          name="releaseDate"
          value={value}
          style={{width:'100%'}}
          required
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        </LocalizationProvider>

          <TextField
            name='dnaSample'
            label="Código da amostra de DNA"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required 
            {...register("dnaSample")}
            />

          <TextField
            name='commonName'
            label="Nome popular"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            {...register("commonName")}
            />

        </Grid>
        
        <Grid item xs={5}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
          >
          <TextField
            name='scientificName'
            label="Nome científico da espécie"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required
            {...register("scientificName")}
          />

          <TextField
            name='totalLength'
            label="Comprimento total"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required
            {...register("totalLength")}
          />

          <TextField
            name='releaseWeight'
            label="Peso na soltura"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required
            {...register("releaseWeight")}
          />

          <TextField
            name="releaseSite"
            label="Local da soltura"
            variant='outlined'
            color='primary'
            style={{width:'100%'}}
            required
            {...register("releaseSite")}
        />

          <TextField
            id="outlined-multiline-static"
            name='comments'
            label="Comentário"  
            variant='outlined'
            color='primary'
            aria-label='minimum height'
            multiline
            rows={4}
            style={{width:'100%'}}
            {...register("comments")}
            />

          <FormGroup>
            <FormControlLabel label="Recaptura" onChange  = { (e) => {setRecaptura(e.target.checked)}} control={<Switch /> }  />
          </FormGroup>

          {console.log(recaptura)}

        </Grid>
      </Grid>
    </div>
    
    {recaptura&&(
    <div>
    <List>
      <ListItem >
        <ListItemText primary="Informações de Recaptura" />
      </ListItem>
      <Divider />
    </List>
    <Grid container spacing={2} style={{ justifyContent:'center', textAlign: 'center'}} >
    <Grid item xs={5} 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
      >
       
        <TextField
          label="Comprimento total"
          variant='outlined'
          color='primary'
          style={{width:'100%'}}
          required
        />

        <TextField
          label="Peso na soltura"
          variant='outlined'
          color='primary'
          style={{width:'100%'}}
          required
        />

        <TextField
          label="Local da soltura"
          variant='outlined'
          color='primary'
          style={{width:'100%'}}
          required
        />

        <TextField
          label="Recaptura"
          variant='outlined'
          color='primary'
          style={{width:'100%'}}
          required />

      </Grid>

      <Grid item xs={5} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} autoComplete="off" >
        <TextField
          label="Local da captura"
          variant='outlined'
          color='primary'
          style={{width:'100%'}}
          required
        />

        <TextField
          label="Data de captura"
          variant='outlined'
          color='primary'
          style={{width:'100%'}}
          required
        />

        <TextField
          label="Código da amostra de DNA"
          variant='outlined'
          color='primary'
          style={{width:'100%'}}
          required
      />
        </Grid>
      </Grid>
    </div>
    )}

    <br/>
    <div style={{ justifyContent:'center', textAlign: 'right'}} >
    <Button  size='large' variant='contained' color='info' type='submit' style={{margin: '5px',}} >Salvar</Button>
    <Button  size='large' variant='contained' color='error' style={{margin: '5px', width:'100px'}} >Cancelar</Button>
  </div>
</form>
</Container>
 );   
}
export default CadastroPeixes;