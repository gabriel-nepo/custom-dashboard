import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    orangeText: {
        color: 'orange',
        fontWeight: 'normal'
    },
    bold: {
        fontWeight: 'bold',
    },
    avatar: {
        width: '12vh',
        height: '12vh',
        marginRight: '20px'
    },
    sapCode: {
        display: 'inline',
        fontWeight: 'bold',
    },
    avatarContainer: {
        borderRadius: '50%',
        width: '7rem',
        height: '7rem',
        backgroundColor: 'green',
        alignSelf: 'center',
        justifySelf: 'center',
    },
    title: {
        display: 'inline-block',
        width: '10%',
        backgroundColor: 'blue'
    },
    paginationBot: {
        textAlignLast: "center",
        marginTop: '2%'
    },
    paginationTop: {
        textAlignLast: "center",
        marginBottom: '2%'
    }
}));

export default function Miniature(props) {
    const classes = useStyles();
    const value = clsx(classes.inline, classes.orangeText);
    const key = clsx(classes.inline, classes.bold)

    return (
        <>
            <div style={{ marginBottom: '2%', display: 'flex', width: '100%', verticalAlign: "top" }}>
                <div style={{ display: `inline`, marginRight: '3%' }}>
                    <div className={classes.avatarContainer}></div>
                </div>
                <div>

                    <h2 style={{ display: "inline" }}>{props.element.title}</h2>
                    <br />
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.sapCode}
                        color="textPrimary"
                    >
                        Código SAP: {<span className={value}>{props.element.sapCode}</span>}
                    </Typography>
                    <br />

                    <Typography
                        component="span"
                        variant="body2"
                        className={key}
                        color="textPrimary"
                    >
                        Área: {<span className={value}>{props.element.area}</span>}
                    </Typography>
                    <br />
                    <Typography
                        component="span"
                        variant="body2"
                        className={key}
                        color="textPrimary"
                    >
                        Linha: {<span className={value}>{props.element.line}</span>}
                    </Typography>
                    <br />
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.sapCode}
                        color="textPrimary"
                    >
                        ID responsável: {<span className={value}>99813121</span>}
                    </Typography>
                </div>
            </div>
            <Divider />
        </>


    );
}