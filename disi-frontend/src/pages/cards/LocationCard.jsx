import { CardContent, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LocationCardStyled,
  LocationCardContentStyled,
  LocationDetailsStyled,
  LocationNameStyled,
  LocationOnIconStyled,
} from './StyledComponents';

export function LocationCard({ location }) {
  return (
    <LocationCardStyled variant='outlined' id='locationCardContainer'>
      <CardContent>
        <Grid container direction='row'>
          <Grid item xs={6} id='locationCardContentContainer'>
            <LocationCardContentStyled container spacing={2} id='locationCardContent'>
              <Grid item id='locationCardContentDetails'>
                <LocationNameStyled id='locationCardName'>{location.name}</LocationNameStyled>
                <LocationNameStyled id='locationCardId'>{location.id}</LocationNameStyled>
                <Grid item id='fieldCardLocationDetails' container direction='row'>
                  <LocationOnIconStyled />
                  <LocationDetailsStyled id='fieldCardLocation'>{location.street}, {location.number}</LocationDetailsStyled>
                </Grid>
              </Grid>
            </LocationCardContentStyled>
          </Grid>
        </Grid>
      </CardContent>
    </LocationCardStyled>
  );
}
