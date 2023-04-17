import { styled } from '@mui/system';
import { Box, Tab, Typography, TextField, Grid } from '@mui/material';

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

export const TextFieldRegisterUserStyled = styled(TextFieldStyled)(() => {
    return {
        paddingTop: '0.5%',
        width: '75%',
        '& fieldset': {
            borderColor: '#1976d2',
            borderWidth: 2
        },
        '& label': {
            color: '#1976d2'
        },
        input: {
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: '#1976d2'
            },
            color: '#1976d2',
            backgroundColor: 'white'
        }
    };
});

export const GridGlobalStyled = styled(Grid)(() => {
    return {
        width: '50%',
        height: '80%',
        backgroundColor: 'transparent',
        color: 'black',
        position: 'absolute',
        top: '40%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'justify',
        marginTop: '%',
        marginBottom: '%'
    };
});

export const TitleStyled = styled(Typography)(() => {
    return {
        fontFamily: 'Work Sans',
        fontWeight: '25px'
    };
});

export const GridColorStyled = styled(Grid)(({ theme }) => {
    return {
        textAlign: 'center',
        color: 'black',
        marginTop: '10px',
        borderColor: '#1976d2'
    };
});

export const GridStyled = styled(Grid)(() => {
    return {
        textAlign: 'center'
    };
});