import { Card, Grid, Pagination, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
    flexWrap: 'wrap'
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