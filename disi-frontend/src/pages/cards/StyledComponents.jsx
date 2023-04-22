import { Card, Grid, Pagination, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const FieldsGridStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'Work Sans',
    minWidth: '70%'
  };
});

export const FieldCardStyled = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'justify',
    alignContent: 'left',
    border: '1px solid #393C3F',
    boxShadow: '2px 2px 18px 0px rgba(0,0,0,1)',
    fontFamily: 'Work Sans',
    width: '750px',
    //flexWrap: 'wrap'
  };
});

export const FieldCardContentStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'justify',
    alignContent: 'left',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    hyphens: 'auto'
  };
});

export const FieldNameStyled = styled(Typography)(() => {
  return {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#446291',
    fontFamily: 'Work Sans'
  };
});

export const FieldLocationStyled = styled(Typography)(() => {
  return {
    color: 'lightslategray',
    textTransform: 'uppercase',
    fontFamily: 'Work Sans'
  };
});

export const LocationOnIconStyled = styled(LocationOnIcon)(({ }) => {
  return {
    color: '#1976d2'
  };
});

export const LocationsGridStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'Work Sans',
    minWidth: '70%'
  };
});

export const LocationCardStyled = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'justify',
    alignContent: 'left',
    border: '1px solid #393C3F',
    boxShadow: '2px 2px 18px 0px rgba(0,0,0,1)',
    fontFamily: 'Work Sans',
    width: '750px',
    //flexWrap: 'wrap'
  };
});

export const LocationCardContentStyled = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'justify',
    alignContent: 'left',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    hyphens: 'auto'
  };
});

export const LocationNameStyled = styled(Typography)(() => {
  return {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#446291',
    fontFamily: 'Work Sans'
  };
});

export const LocationDetailsStyled = styled(Typography)(() => {
  return {
    color: 'lightslategray',
    textTransform: 'uppercase',
    fontFamily: 'Work Sans'
  };
});

export const ButtonUpdateAndDeleteStyled = styled(Button)(() => {
  return {
    marginTop: '15px',
    height: '50px',
    '&:hover': {
      backgroundColor: '#90caf9',
      boxShadow: 'none'
    },
    ':disabled': {
      backgroundColor: '#e0e0e0'
    }
  };
});