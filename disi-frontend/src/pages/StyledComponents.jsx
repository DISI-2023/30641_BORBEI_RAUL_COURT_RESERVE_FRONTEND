import { styled } from '@mui/system';
import { Box, Button, FormHelperText, Grid, InputLabel, Typography, TextField, Alert, Card } from '@mui/material';

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

export const LabelFieldStyled = styled(InputLabel)(() => {
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

export const LabelStyled = styled(LabelFieldStyled)(() => {
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

export const AdminMainGridStyled = styled(Grid)(() => {
    return {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'justify',
        alignContent: 'center',
        margin: '0 250px',
        gap: '175px'
    };
});

export const StickyFilterMenuStyled = styled(Grid)(() => {
    return {
        position: 'sticky',
        top: '9%',
        alignSelf: 'flex-start'
    };
});

export const CenteredTitlesStyled = styled(Grid)(() => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'left',
        fontFamily: 'Work Sans'
    };
});

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


