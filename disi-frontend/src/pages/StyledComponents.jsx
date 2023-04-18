import { styled } from '@mui/system';
import { Box, Button, FormHelperText, Grid, InputLabel, Typography, TextField, Alert } from '@mui/material';

export const CreateFieldGridStyled = styled(Grid)(() => {
    return {
        display: 'flex',
        justifyContent: 'justify',
        alignContent: 'center',
        marginTop: '50px',
        marginLeft: '550px'
    };
});

export const MainGridStyled = styled(Grid)(() => {
    return {
        width: '400px'
    };
});

export const GridColorStyled = styled(Grid)(({ }) => {
    return {
        textAlign: 'center',
        color: 'black',
        marginTop: '10px',
        borderColor: '#1976d2'
    };
});

export const TextFieldStyled = styled(TextField)(() => {
    return {
        '& fieldset': {
            borderColor: '#42a5f5',
            borderWidth: 2,
            borderRadius: 9999
        },
        '& label': {
            color: '#42a5f5'
        },
        input: {
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: 'black'
            },
            color: 'black !important',
            backgroundColor: '#64b5f6',
            borderRadius: 9999
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#42a5f5'
            }
        },
        '& label.Mui-focused': {
            color: '#42a5f5'
        }
    };
});


export const TextFieldFieldStyled = styled(TextFieldStyled)(() => {
    return {
        marginBottom: '20px',
        width: '100%',
        input: {
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: 'black'
            },
            color: 'black !important',
            backgroundColor: 'white',
            borderRadius: 9999
        }
    };
});

export const TitleStyled = styled(Typography)(() => {
    return {
        fontFamily: 'Work Sans',
        fontWeight: '10px'
    };
});

export const ButtonStyled = styled(Button)(() => {
    return {
        marginTop: '15px',
        height: '50px',
        width: '150px',
        fontFamily: 'Work Sans',
        borderWidth: 'thick'
    };
});

export const SaveButtonStyled = styled(ButtonStyled)(() => {
    return {
        marginTop: '15px',
        marginRight: '20px',
        marginBottom: '20px'
    };
});

export const AlertStyled = styled(Alert)(() => {
    return {
        width: '100%'
    };
});