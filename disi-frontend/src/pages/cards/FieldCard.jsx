import { CardContent, Grid, CardMedia, Snackbar, Alert } from '@mui/material';
import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FieldCardStyled,
  FieldCardContentStyled,
  FieldLocationStyled,
  FieldNameStyled,
  LocationOnIconStyled,
  ButtonUpdateAndDeleteStyled,
} from './StyledComponents';
import { DeleteFieldService } from '../../services/FieldService';

export function FieldCard({ field }) {

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleClickDelete = async () => {
    try {
      DeleteFieldService(field.id);
      setIsSnackbarOpen(true);
      setTimeout(() => { window.location.href = 'http://localhost:3000/field'; }, 2000);
    } catch (e) {
      console.log(e.data);
    }
  };

  const handleClickUpdate = async () => {
    localStorage.setItem("fieldToUpdate", field.id);
    setTimeout(() => { window.location.href = 'http://localhost:3000/update'; }, 500);
  };

  const handleCloseDelete = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <FieldCardStyled variant='outlined' id='fieldCardContainer'>
      <CardMedia
        sx={{ height: 250 }}
        image='field-prototype.jpg'
        title="green iguana"
      />
      <CardContent>
        <Grid container direction='row'>
          <Grid item xs={6} id='fieldCardContentContainer'>
            <FieldCardContentStyled container spacing={2} id='fieldCardContent'>
              <Grid item id='fieldCardContentDetails'>
                <FieldNameStyled id='fieldCardName'>{field.name}</FieldNameStyled>
                <FieldNameStyled id='fieldCardId'>{field.id}</FieldNameStyled>
                <Grid item id='fieldCardLocationDetails' container direction='row'>
                  <LocationOnIconStyled />
                  <FieldLocationStyled id='fieldCardLocation'>{field.locationDTO.name}, {field.locationDTO.street} {field.locationDTO.number}</FieldLocationStyled>
                </Grid>
                <Grid item id='fieldCardDeleteAndUpdate' container direction='row'>
                  <ButtonUpdateAndDeleteStyled onClick={handleClickDelete}>Delete</ButtonUpdateAndDeleteStyled>
                  <br></br>
                  <ButtonUpdateAndDeleteStyled onClick={handleClickUpdate}>Update</ButtonUpdateAndDeleteStyled>
                </Grid>
              </Grid>
            </FieldCardContentStyled>
          </Grid>
        </Grid>
      </CardContent>
      <Snackbar
        id='successMessageForRegisterUserSnackbar'
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseDelete}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert id='successMessageForDeleteField' onClose={handleCloseDelete} severity='success' sx={{ width: '100%' }}>
          The field was deleted successfully!
        </Alert>
      </Snackbar>
    </FieldCardStyled>
  );
}
