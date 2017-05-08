import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
	Add,
	Anchor,
	Body,
	Choice,
	Corr,
	Del,
	FacsThumb,
	Hi,
	Lb,
	No,
	Note,
	Notes,
	Pb,
	Sic,
	Supplied,
	Unclear
} from '../build';

storiesOf('Add', module)
	.add('default', () => <Add>This is added</Add>);

storiesOf('Anchor', module)
	.add('default', () =>
		<Body>
			<span>Wow</span><Anchor n="no1" /><span>, arrr.</span><br />
			<span>Jolly, undead tunas</span><Anchor n="no2" activeNote="no2" /><span> darkly burn a mighty, scurvy mainland.</span><br />
			<Anchor n="no3" /><span>Why does the son travel?</span><Anchor n="no4" /><br />
			<span>Seas</span><Anchor n="no5" /><Anchor n="no6" /><Anchor n="no7" /><span> die with power!</span><br />
		</Body>
	);

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

storiesOf('Notes', module)
	.add('default', () =>
		<Body>
		<Lb><No>10</No></Lb>Virtually deserve a sun.<br />
		<Lb><No>11</No></Lb>
		Shield, mystery, and energy.<Anchor activeNote="n1" n="n1" />
		Girl of a final attitude, <Anchor n="n2" />gather the mind!<br />
		<Lb><No>12</No></Lb>Spaces meet with paralysis!<br />
		<Notes activeNote="n2" noteTop="46">
			<Note n="n1">A holy form of extend is the ascension.</Note>
			<Note n="n2">Safely emptiness is to remember the silence of the ego's ignorance.</Note>
			<Note n="n3">Our mysterious art for sorrow is to understand others theosophically.</Note>
		</Notes>
		</Body>
	);

storiesOf('Pagebreak', module)
	.add('default', () =>
		<Body>
			<Pb>
				<FacsThumb
					url="SRA024000001_0004_L"
				/>
			</Pb>
			<Lb><No>1</No></Lb>Teleporters die with mind!<br />
			<Lb><No>2</No></Lb>Virtually desire a sun.<br />
			<Lb><No>3</No></Lb>Spaces warp with procedure!<br />
			<Lb><No>4</No></Lb>Devastation, energy, and advice.<br />
			<Lb><No>5</No></Lb>Virtually avoid a klingon.<br />
			<Lb><No>6</No></Lb>Alignment, sensor, and mineral.<br />
			<Lb><No>7</No></Lb>Suns warp with death!<br />
			<Pb>
				<FacsThumb
					url="SRA024000001_0005_L"
				/>
			</Pb>
			<Lb><No>8</No></Lb>C-beams fly with sonic shower!<br />
			<Lb><No>9</No></Lb>Sonic shower, alarm, and disconnection.<br />
			<Lb><No>10</No></Lb>Virtually deserve a sun.<br />
			<Lb><No>11</No></Lb>Shield, mystery, and energy.<br />
			<Lb><No>12</No></Lb>Spaces meet with paralysis!<br />
			...
		</Body>
	)
	.add('With active note', () =>
		<Body>
			<Pb>
				<FacsThumb
					activeNote="some-note"
					url="SRA024000001_0004_L"
				/>
			</Pb>
			<Lb><No>1</No></Lb>Teleporters die with mind!<br />
			<Lb><No>2</No></Lb>Virtually desire a sun.<br />
			<Lb><No>3</No></Lb>Spaces warp with procedure!<br />
			<Lb><No>4</No></Lb>Devastation, energy, and advice.<br />
			<Lb><No>5</No></Lb>Virtually avoid a klingon.<br />
			<Lb><No>6</No></Lb>Alignment, sensor, and mineral.<br />
			<Lb><No>7</No></Lb>Suns warp with death!<br />
			<Pb>
				<FacsThumb
					activeNote="some-note"
					url="SRA024000001_0005_L"
				/>
			</Pb>
			<Lb><No>8</No></Lb>C-beams fly with sonic shower!<br />
			<Lb><No>9</No></Lb>Sonic shower, alarm, and disconnection.<br />
			<Lb><No>10</No></Lb>Virtually deserve a sun.<br />
			<Lb><No>11</No></Lb>Shield, mystery, and energy.<br />
			<Lb><No>12</No></Lb>Spaces meet with paralysis!<br />
			...
		</Body>
	);

storiesOf('Supplied', module)
	.add('default', () => <div>AFAIK <Supplied>As Far As I Know</Supplied></div>)

storiesOf('Unclear', module)
	.add('default', () => <Unclear>Unclear</Unclear>);
