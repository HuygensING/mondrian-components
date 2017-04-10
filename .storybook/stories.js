import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import {
	Add,
	Choice,
	Corr,
	Del,
	Hi,
	Lb,
	No,
	Pb,
	Sic,
	Supplied,
	Unclear
} from '../build';

const PbWrapper = styled.div`
	font-size: 1.5em;
	margin-left: calc(75px + 3em);
	position: relative;
`;

storiesOf('Add', module)
	.add('default', () => <Add>This is added</Add>);

storiesOf('Choice', module)
	.add('default', () =>
		<Choice>
			<Sic>Incorrect</Sic>
			<Corr>Correction</Corr>
		</Choice>
	);

storiesOf('Del', module)
	.add('default', () => <Del>This is deleted</Del>);

storiesOf('Hi', module)
	.add('underline', () => <Hi data-rend="underline">Underline</Hi>)
	.add('super', () => <div>Aliens warp with tragedy! <Hi data-rend="super">Super</Hi></div>);

storiesOf('Pagebreak', module)
	.add('default', () =>
		<PbWrapper>
			<Pb />
			<Lb><No>1</No></Lb>Teleporters die with mind!<br />
			<Lb><No>2</No></Lb>Virtually desire a sun.<br />
			<Lb><No>3</No></Lb>Spaces warp with procedure!<br />
			<Lb><No>4</No></Lb>Devastation, energy, and advice.<br />
			<Lb><No>5</No></Lb>Virtually avoid a klingon.<br />
			<Lb><No>6</No></Lb>Alignment, sensor, and mineral.<br />
			<Lb><No>7</No></Lb>Suns warp with death!<br />
			<Lb><No>8</No></Lb>C-beams fly with sonic shower!<br />
			<Lb><No>9</No></Lb>Sonic shower, alarm, and disconnection.<br />
			<Lb><No>10</No></Lb>Virtually deserve a sun.<br />
			<Pb />
			<Lb><No>11</No></Lb>Shield, mystery, and energy.<br />
			<Lb><No>12</No></Lb>Spaces meet with paralysis!<br />
			...
		</PbWrapper>
	);

storiesOf('Supplied', module)
	.add('default', () => <div>AFAIK <Supplied>As Far As I Know</Supplied></div>)

storiesOf('Unclear', module)
	.add('default', () => <Unclear>Unclear</Unclear>);
