export default class Calculator extends React.Component {
	state = { display: '0' };

	_clear = () => this.setState({ display: '0' });

	_decimal = () =>
		this.setState({
			display:
				(this.state.display.includes('.') &&
					!this.state.display.includes(' ')) ||
				(this.state.display.includes('.') &&
					!this.state.display.includes(' ') &&
					this.state.display.lastIndexOf('.') >
						this.state.display.lastIndexOf(' '))
					? this.state.display
					: this.state.display + '.'
		});

	_flip = () => {
		if (this.state.display.includes(' ')) {
			const index = this.state.display.lastIndexOf(' ') + 1;
			if (index === this.state.display.length) {
				this.setState({ display: this.state.display + '-' });
			} else if (this.state.display.endsWith('-')) {
				this.setState({
					display: this.state.display.substring(
						0,
						this.state.display.length - 1
					)
				});
			} else if (this.state.display.charAt(index) === '-') {
				this.setState({
					display:
						this.state.display.substring(0, index) +
						this.state.display.substring(index + 1)
				});
			} else {
				this.setState({
					display:
						this.state.display.substring(0, index) +
						'-' +
						this.state.display.substring(index)
				});
			}
		} else if (this.state.display.startsWith('-')) {
			this.setState({ display: this.state.display.substring(1) });
		} else {
			this.setState({ display: '-' + this.state.display });
		}
	};

	_onClickNum = num => {
		if (this.state.display === '0') {
			this.setState({ display: num });
		} else if (this.state.display === '-0') {
			this.setState({ display: '-' + num });
		} else {
			this.setState({ display: this.state.display + num });
		}
	};

	_onClickOp = op => {
		let display;

		const sub = () =>
			this.state.display.substring(0, this.state.display.length - 3);

		if (this.state.display.endsWith(' ')) {
			if (op === '-') {
				display = `${this.state.display}-`;
			} else {
				display = `${sub()} ${op} `;
			}
		} else if (this.state.display.endsWith('-')) {
			if (op === '-') {
				display = this.state.display;
			} else {
				display = `${sub()}${op} `;
			}
		} else {
			display = `${this.state.display} ${op} `;
		}

		this.setState({ display });
	};

	_solve = () => {
		const evaluate = str => {
			const terms = str.split(/ x | \/ /g);
			terms[0] = parseFloat(terms[0]);
			if (terms.length === 1) {
				return terms[0];
			} else {
				const ops = str.replace(/[^(x|\/)]/g, '').split('');
				return terms.reduce((a, b, q) => {
					if (b !== '-') {
						b = parseFloat(terms[q - 1] === '-' ? -b : b);
						if (ops[q - 1] === 'x') {
							return a * b;
						} else {
							return a / b;
						}
					} else {
						return a;
					}
				});
			}
		};
		const terms = this.state.display.split(/ \+ | \- /g);
		terms[0] = evaluate(terms[0]);
		if (terms.length === 1) {
			this.setState({ display: terms[0].toString() });
		} else {
			const ops = this.state.display.replace(/[^(\+|\-)]/g, '').split('');
			this.setState({
				display: terms
					.reduce((a, b, q) => {
						if (b.length !== 0) {
							b = evaluate(b);
							if (ops[q - 1] === '+') {
								return a + b;
							} else {
								return a - b;
							}
						}
					})
					.toString()
			});
		}
	};
	//The IDs are so the tests are passed for FreeCodeCamp
	render() {
		return (
			<div>
				<section id='calculator'>
					<div id='screen'>
						<p id='display'>{this.state.display}</p>
					</div>
					<button className='button' id='clear' onClick={this._clear}>
						AC
					</button>
					<button className='button' onClick={this._flip}>
						+/-
					</button>
					<button
						className='button'
						id='subtract'
						onClick={() => this._onClickOp('-')}
					>
						-
					</button>
					<button
						className='button'
						id='divide'
						onClick={() => this._onClickOp('/')}
					>
						/
					</button>
					<button
						className='button'
						id='multiply'
						onClick={() => this._onClickOp('x')}
					>
						X
					</button>
					<button
						className='button'
						id='add'
						onClick={() => this._onClickOp('+')}
					>
						+
					</button>
					<button
						className='button'
						id='seven'
						onClick={() => this._onClickNum('7')}
					>
						7
					</button>
					<button
						className='button'
						id='eight'
						onClick={() => this._onClickNum('8')}
					>
						8
					</button>
					<button
						className='button'
						id='nine'
						onClick={() => this._onClickNum('9')}
					>
						9
					</button>
					<button
						className='button'
						id='four'
						onClick={() => this._onClickNum('4')}
					>
						4
					</button>
					<button
						className='button'
						id='five'
						onClick={() => this._onClickNum('5')}
					>
						5
					</button>
					<button
						className='button'
						id='six'
						onClick={() => this._onClickNum('6')}
					>
						6
					</button>
					<button
						className='button'
						id='one'
						onClick={() => this._onClickNum('1')}
					>
						1
					</button>
					<button
						className='button'
						id='two'
						onClick={() => this._onClickNum('2')}
					>
						2
					</button>
					<button
						className='button'
						id='three'
						onClick={() => this._onClickNum('3')}
					>
						3
					</button>
					<button
						className='button'
						id='zero'
						onClick={() => this._onClickNum('0')}
					>
						0
					</button>
					<button className='button' id='decimal' onClick={this._decimal}>
						.
					</button>
					<button className='button' id='equals' onClick={this._solve}>
						=
					</button>
				</section>
			</div>
		);
	}
}
