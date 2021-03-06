import * as React from 'react';
import { draw } from './draw-numbers';

export interface Props {
	value: string;
}

const defaultCanvas = document.createElement('canvas');

const NumberViz: React.FunctionComponent<Props> = ({ value }) => {
	const canvas = React.useRef(defaultCanvas);

	React.useEffect(() => {
		const ctx = canvas.current.getContext('2d');
		if (!ctx) return;
		draw(ctx, value);
	});

	return (
		<div className="NumberViz mt-5 mb-5 text-center">
			<canvas ref={canvas} width={200} height={250} />
		</div>
	);
};

export default NumberViz;
