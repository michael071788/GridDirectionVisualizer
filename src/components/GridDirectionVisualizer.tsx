import React, {useState} from 'react';
import { Container, Grid2, Box, InputLabel } from '@mui/material';
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward} from '@mui/icons-material';

interface Props {
  position: string;
}

type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

function validateDirection(direction: Direction) {
  switch (direction) {
      case 'NORTH':
      case 'SOUTH':
      case 'EAST':
      case 'WEST':
        return true;
      default:
          return false;
  }
}

function getIconMark(direction: Direction) {
  switch (direction) {
      case 'NORTH':
        return <ArrowUpward />;
      case 'SOUTH':
        return <ArrowDownward />;
      case 'EAST':
        return <ArrowBack />;
      case 'WEST':
        return <ArrowForward />;
      default:
          return <></>;
  }
}

const parsePosition = (position: string) => {
  const [coords, direction] = position.split(' ');
  const [x, y] = coords.split(',').map(Number);
  return { x, y, direction};
};

const GridDirectionVisualizer: React.FC<Props> = ({ position }) => {
  const { x, y, direction } = parsePosition(position);

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [errorMessage, setErrorMessage] = useState("  Invalid input direction...  ");

  let validateResult = validateDirection(direction as Direction);

  if (x < 0 || x > 4 || y < 0 || y > 4 || !validateResult) {
    return <InputLabel sx={{background: '#fd9191', fontSize: '25px'}} >{errorMessage}</InputLabel >;
  }

  return (
    <Container maxWidth="sm">
      {[...Array(5)].map((_, row) =>
         (<Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}
        >{
          [...Array(5)].map((_, col) => (
            <Grid2  key={`${row}-${col}`} style={{ border: '1px solid gray', width: '100px', height: '100px', borderRadius: '5px', margin: '5px' }}>
               {row === 4 - y && col === x ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                {getIconMark(direction as Direction)}
              </Box>
            ) : <></>}
            </Grid2>
          ))
        }</Box>)
      )}
  
    </Container>
  );
};

export default GridDirectionVisualizer;
