import * as React from 'react';
import styled from 'styled-components';

const FacsThumbComp = (props) =>
	<img
		className={props.className}
		onClick={() => props.activateFacsimile(props.url)}
	  src={`/static/facsimiles/thumbnails/${props.url}.jpg`}
	/>;

export const FacsThumb = styled(FacsThumbComp)`
	cursor: pointer;
	max-height: 75px;
	max-width: 75px;
	position: absolute;
	right: -75px;
`;
