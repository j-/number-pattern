import * as React from 'react';

export interface Props {
	value: string;
}

const defaultCanvas = document.createElement('canvas');

const getPos = (number: number) => {
	switch (number % 10) {
		case 0: return [0 * 50, 3 * 50];
		case 1: return [0 * 50, 2 * 50];
		case 2: return [1 * 50, 2 * 50];
		case 3: return [2 * 50, 2 * 50];
		case 4: return [0 * 50, 1 * 50];
		case 5: return [1 * 50, 1 * 50];
		case 6: return [2 * 50, 1 * 50];
		case 7: return [0 * 50, 0 * 50];
		case 8: return [1 * 50, 0 * 50];
		case 9: return [2 * 50, 0 * 50];
		default: return [0 * 50, 3 * 50];
	}
};

const draw = (ctx: CanvasRenderingContext2D, value: string) => {
	const numbers = value.replace(/[^\d]/g, '');
	const { width, height } = ctx.canvas;
	ctx.save();
	ctx.clearRect(0, 0, width, height);
	ctx.translate(50, 50);
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	for (let i = 0; i < 10; i++) {
		const [x, y] = getPos(i);
		ctx.fillRect(x - 5, y - 5, 10, 10);
	}
	ctx.beginPath();
	for (let i = 0; i < numbers.length; i++) {
		const number = Number(numbers[i]);
		const [x, y] = getPos(number);
		ctx.lineTo(x, y);
	}
	ctx.stroke();
	ctx.restore();
};

const NumberViz: React.FunctionComponent<Props> = ({ value }) => {
	const canvas = React.useRef(defaultCanvas);

	React.useEffect(() => {
		const ctx = canvas.current.getContext('2d');
		if (!ctx) {
			return;
		}
		draw(ctx, value);
	});

	return <canvas ref={canvas} width={500} height={500} />;
};

export default NumberViz;
