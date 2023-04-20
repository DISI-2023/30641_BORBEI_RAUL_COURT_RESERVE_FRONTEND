import { CardContent, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FieldCardStyled,
  FieldCardContentStyled,
  FieldLocationStyled,
  FieldNameStyled,
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
                <FieldLocationStyled id='fieldCardLocation'>{field.locationId}</FieldLocationStyled>
              </Grid>
            </FieldCardContentStyled>
          </Grid>
        </Grid>
      </CardContent>
    </FieldCardStyled>
  );
}
