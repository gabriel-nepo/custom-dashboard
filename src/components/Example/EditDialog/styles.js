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
`;

export { useInputStyle, Container };