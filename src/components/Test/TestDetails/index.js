import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Miniature from './Miniature';
import { Container } from '../styles';
import Divider from '@material-ui/core/Divider';

import HistoryTests from '../HistoryTests';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: 'inline',
	},
	orangeText: {
		color: '#FF6A00',
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
		width: '16vw',
		height: '16vw',
		backgroundColor: 'green',
		alignSelf: 'center',
		justifySelf: 'center'
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
	},
	complete: {
		background: '#3f51b5'
	}
}));

export default function TestDetails(props) {
	const classes = useStyles();


	return (
		<>
			<Container>
				<Miniature element={props.element} />
			</Container>
			<div className={classes.paginationTop}>

			</div>
			<HistoryTests></HistoryTests>
		</>
	);
}