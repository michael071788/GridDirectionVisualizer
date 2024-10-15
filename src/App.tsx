import React,{useEffect,useState} from 'react';
import './App.css';
import {Container, Grid2, Box, TextField, InputLabel  } from '@mui/material';
import GridDirectionVisualizer from './components/GridDirectionVisualizer';


function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialLabelMessage, setInitialLabelMessage] = useState("Please input direction on the following format: \"x,y direction\n (e.g., \"1,1 NORTH\")...");
  
  const [inputDirection, setInputDirection] = useState("");
  const [isInputDirectionExecuted, setIsInputDirectionExecuted] = useState(false);

  const handleInputOnChange = (e: any) => {
    setInputDirection(e.target.value.toUpperCase());
}

  //It's just my best practice to put some delay when typing in the input field.
  //Just to make sure, especially when this kind of approach is being used on fetching or sending a request to the API :)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if(inputDirection !== "")  {
        setIsInputDirectionExecuted(true);
      } else {

        setIsInputDirectionExecuted(false)
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [inputDirection])

  useEffect(() => {
  }, [isInputDirectionExecuted])

  return (
    <div className="App">
       <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Grid2 container direction="column" spacing={2} alignItems="center">
          <Grid2 >
            <TextField id="outlined-basic" label="Input direction..." variant="outlined" onChange={handleInputOnChange} />
          </Grid2>

          {!isInputDirectionExecuted ? 
          ( <Grid2 >
            <InputLabel sx={{background: '#aae6f7',fontSize: '25px'}} >{initialLabelMessage}</InputLabel >
          </Grid2>) 
          : 
          (<Grid2 >
            <GridDirectionVisualizer position={inputDirection} />
          </Grid2>)}
          
        </Grid2>
      </Box>
    </Container>
    </div>
  );
}

export default App;
