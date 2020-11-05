import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useInputStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
}))

const Container = styled.div`
    padding: 10px 10px 10px 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
`;

const ButtonContainer = styled.div`
    margin-left: 80%;
    margin-bottom: 2%;
`;


export { useInputStyle, Container, ButtonContainer };