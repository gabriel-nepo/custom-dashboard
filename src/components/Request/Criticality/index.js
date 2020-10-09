import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { Container } from '../styles';

export default function Criticality() {
    // const [points, setPoints] = useState(0);
    const [securityRisk, setSecurityRisk] = useState('');
    const [stopRisk, setStopRisk] = useState('');
    const [conservation, setConservation] = useState('');
    const [lifeTime, setLifeTime] = useState('');
    const [material, setMaterial] = useState('');
    const [quantity, setQuantity] = useState('');
    const [reason, setReason] = useState('')
    const [hasFailure, setHasFailure] = useState('');
    const [failureReason, setFailureReason] = useState('');
    const [hasForcedDeterioration, setHasForcedDeterioration] = useState('');
    const [deteriorationReason, setDeteriorationReason] = useState('');
    const [hasChemicalContact, setHasChemicalContact] = useState('');
    const [chemicalProduct, setChemicalProduct] = useState('');
    const [temperatureRange, setTemperatureRange] = useState('');
    const [workPressureRange, setWorkPressureRange] = useState('');

    return (
        <>
            <form noValidate autoComplete="off">
                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Caso a peça falhe, ela oferece risco para a Segurança/Qualidade/Meio Ambiente?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="security-risk" name="security-risk" value={securityRisk} onChange={(event) => setSecurityRisk(event.target.value)}>
                                <FormControlLabel value={"yes"} control={<Radio />} label="Sim" />
                                <FormControlLabel value={"no"} control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A peça oferece risco de parada de linha?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="stop-risk" name="stop-risk" value={stopRisk} onChange={(event) => setStopRisk(event.target.value)}>
                                <FormControlLabel value={"yes"} control={<Radio />} label="Sim" />
                                <FormControlLabel value={"no"} control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Qual o estado de conservação da peça?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="stop-risk" name="stop-risk" value={conservation} onChange={(event) => setConservation(event.target.value)}>
                                <FormControlLabel value={"new"} control={<Radio />} label="Nova" />
                                <FormControlLabel value={"used"} control={<Radio />} label="Usada" />
                                <FormControlLabel value={"doesntExist"} control={<Radio />} label="Não existe" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Qual o tempo de vida útil da peça?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="life-time" name="life-time" value={lifeTime} onChange={(event) => setLifeTime(event.target.value)}>
                                <FormControlLabel value={"3months"} control={<Radio />} label="0 à 3 meses" />
                                <FormControlLabel value={"6months"} control={<Radio />} label="4 à 6 meses" />
                                <FormControlLabel value={"12months"} control={<Radio />} label="7 à 12 meses" />
                                <FormControlLabel value={"over12months"} control={<Radio />} label="Acima de 12 meses" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Qual o tipo de material da peça?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="material" name="material" value={material} onChange={(event) => setMaterial(event.target.value)}>
                                <FormControlLabel value={"plastic"} control={<Radio />} label="Plástico" />
                                <FormControlLabel value={"rubber"} control={<Radio />} label="Borracha" />
                                <FormControlLabel value={"metal"} control={<Radio />} label="Metal" />
                                <FormControlLabel value={"pottery"} control={<Radio />} label="Cerâmica" />
                                <FormControlLabel value={"others"} control={<Radio />} label="Outros" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Quantas peças são usadas hoje na linha?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="quantity" name="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)}>
                                <FormControlLabel value={"10"} control={<Radio />} label="1 a 10" />
                                <FormControlLabel value={"20"} control={<Radio />} label="11 a 20" />
                                <FormControlLabel value={"30"} control={<Radio />} label="21 a 30" />
                                <FormControlLabel value={"over30"} control={<Radio />} label="Mais de 30" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Qual a finalidade da peça?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="reason" name="reason" value={reason} onChange={(event) => setReason(event.target.value)}>
                                <FormControlLabel value={"dip"} control={<Radio />} label="DIP (Desenvolvimento Idêntido ao Projeto)" />
                                <FormControlLabel value={"MPGM"} control={<Radio />} label="MPGM (Melhorar o Projeto em Relação à Geometria/Material)" />
                                <FormControlLabel value={"new"} control={<Radio />} label="Novo Projeto" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A peça teve falha catastrófica?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="failure" name="failure" value={hasFailure} onChange={(event) => setHasFailure(event.target.value)}>
                                <FormControlLabel value={"yes"} control={<Radio />} label="Sim" />
                                <FormControlLabel value={"no"} control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>
                {
                    hasFailure === 'yes' ?
                        <Container>
                            <TextField
                                id="failureReason"
                                fullWidth
                                variant="outlined"
                                placeholder="Digite qual falha"
                                label="Qual falha?"
                                type="text"
                                value={failureReason}
                                onChange={(event) => { setFailureReason(event.target.value) }}
                            />
                        </Container>
                        :
                        null

                }
                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A peça teve deterioração forçada?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="has-forced-deterioration" name="has-forced-deterioration" value={hasForcedDeterioration} onChange={(event) => setHasForcedDeterioration(event.target.value)}>
                                <FormControlLabel value={"yes"} control={<Radio />} label="Sim" />
                                <FormControlLabel value={"no"} control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                {
                    hasForcedDeterioration === 'yes' ?
                        <Container>
                            <TextField
                                id="forced-deterioration-reason"
                                fullWidth
                                variant="outlined"
                                placeholder="Digite a causa da deterioração"
                                label="Causa da deterioração"
                                type="text"
                                value={deteriorationReason}
                                onChange={(event) => { setDeteriorationReason(event.target.value) }}
                            />
                        </Container>
                        :
                        null
                }

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A peça tem contato com produtos químicos?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="has-chemical-contact" name="has-chemical-contact" value={hasChemicalContact} onChange={(event) => setHasChemicalContact(event.target.value)}>
                                <FormControlLabel value={"yes"} control={<Radio />} label="Sim" />
                                <FormControlLabel value={"no"} control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                {
                    hasChemicalContact === 'yes' ?
                        <Container>
                            <TextField
                                id="chemical-product"
                                fullWidth
                                variant="outlined"
                                placeholder="Digite o nome dos produtos quimicos"
                                label="Quais produtos químicos?"
                                type="text"
                                value={chemicalProduct}
                                onChange={(event) => { setChemicalProduct(event.target.value) }}
                            />
                        </Container>
                        :
                        null

                }


                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Qual a faixa de temperatura em que a peça opera?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="temperature" name="temperature" value={temperatureRange} onChange={(event) => setTemperatureRange(event.target.value)}>
                                <FormControlLabel value={"ambiente"} control={<Radio />} label="Ambiente" />
                                <FormControlLabel value={"100"} control={<Radio />} label="40 a 100C" />
                                <FormControlLabel value={"over100"} control={<Radio />} label="Acima de 100C" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>
                {
                    temperatureRange === 'over100' ?
                        <Container>
                            <TextField
                                id="temperature"
                                fullWidth
                                variant="outlined"
                                placeholder="Digite qual falha"
                                label="Qual falha?"
                                type="text"
                                value={failureReason}
                                onChange={(event) => { setFailureReason(event.target.value) }}
                            />
                        </Container>
                        :
                        null

                }

                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Qual a faixa de pressão de trabalho?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="work-pressure" name="work-pressure" value={workPressureRange} onChange={(event) => setWorkPressureRange(event.target.value)}>
                                <FormControlLabel value={"1"} control={<Radio />} label="1 bar" />
                                <FormControlLabel value={"4"} control={<Radio />} label="2 a 4 bar" />
                                <FormControlLabel value={"10"} control={<Radio />} label="5 a 10 bar" />
                                <FormControlLabel value={"11"} control={<Radio />} label="Acima de 10 bar" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

            </form>
        </>
    )



}