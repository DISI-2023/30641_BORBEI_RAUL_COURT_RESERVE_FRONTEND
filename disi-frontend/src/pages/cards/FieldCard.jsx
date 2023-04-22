import { CardContent, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FieldCardStyled,
  FieldCardContentStyled,
  FieldLocationStyled,
  FieldNameStyled,
  LocationOnIconStyled,
} from './StyledComponents';

export function FieldCard({ field }) {
  return (
    <FieldCardStyled variant='outlined' id='fieldCardContainer'>
      <CardContent>
        <Grid container direction='row'>
          <Grid item xs={6} id='fieldCardContentContainer'>
            <FieldCardContentStyled container spacing={2} id='fieldCardContent'>
              <Grid item id='fieldCardContentDetails'>
                <FieldNameStyled id='fieldCardName'>{field.name}</FieldNameStyled>
                <Grid item id='fieldCardLocationDetails' container direction='row'>
                  <LocationOnIconStyled />
                  <FieldLocationStyled id='fieldCardLocation'>{field.locationDTO.name}, {field.locationDTO.street} {field.locationDTO.number}</FieldLocationStyled>
                </Grid>
              </Grid>
            </FieldCardContentStyled>
          </Grid>
        </Grid>
      </CardContent>
    </FieldCardStyled>
  );
}
