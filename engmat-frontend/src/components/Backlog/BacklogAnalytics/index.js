import React from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Container } from '../styles';
import Title from '../../Title';

export default function BacklogAnalytics() {

    return (
        <>
            <form noValidate autoComplete="off">
                <Container>
                    <Title>Estatísticas</Title>
                </Container>
                <Container>
                    <TextField
                        id="backlogItens"
                        fullWidth
                        variant="outlined"
                        placeholder="Peças em backlog"
                        label="Peças em backlog"
                        type="text"
                        value={121}
                        disabled
                        helperText="Última atualização 10/10/2020"

                    />
                </Container>
                <Container>
                    <TextField
                        id="3dScanner"
                        fullWidth
                        variant="outlined"
                        placeholder="Escaner 3D"
                        label="Escaner 3D"
                        type="text"
                        value={3}
                        disabled
                        helperText="Última atualização 10/10/2020"
                    />
                </Container>
                <Container>
                    <TextField
                        id="drawCad"
                        fullWidth
                        variant="outlined"
                        placeholder="Desenho CAD"
                        label="Desenho CAD"
                        type="text"
                        value={25}
                        disabled
                        helperText="Última atualização 10/10/2020"
                    />
                </Container>
                <Container>
                    <TextField
                        id="materialStudy"
                        fullWidth
                        variant="outlined"
                        placeholder="Estudo de material"
                        label="Estudo de material"
                        type="text"
                        value={2}
                        disabled
                        helperText="Última atualização 10/10/2020"
                    />
                </Container>
                <Container>
                    <TextField
                        id="manufature"
                        fullWidth
                        variant="outlined"
                        placeholder="Manufatura"
                        label="Manufatura"
                        type="text"
                        value={41}
                        disabled
                        helperText="Última atualização 10/10/2020"
                    />
                </Container>
                <Container>
                    <TextField
                        id="adjust"
                        fullWidth
                        variant="outlined"
                        placeholder="Acabamento"
                        label="Acabamento"
                        type="text"
                        value={0}
                        disabled
                        helperText="Última atualização 10/10/2020"
                    />
                </Container>
                <Container>
                    <TextField
                        id="itensOnTest"
                        fullWidth
                        variant="outlined"
                        placeholder="Peças em teste"
                        label="Peças em teste"
                        type="text"
                        value={89}
                        disabled
                        helperText="Última atualização 10/10/2020"
                    />
                </Container>

            </form>
        </>
    )

}