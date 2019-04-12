import React from 'react';
import Head from 'next/head';

import styles from './index.scss';

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

	_onClickOp = op =>
		this.setState({
			display:
				(this.state.display.endsWith(' ')
					? this.state.display.substring(0, this.state.display.length - 3)
					: this.state.display) +
				' ' +
				op +
				' '
		});

	_solve = () => {
		const evaluate = str => {
			const terms = str.split(/ x | \/ /g);
			console.log(terms);
			terms[0] = parseFloat(terms[0]);
			if (terms.length === 1) {
				return terms[0];
			} else {
				const ops = str.replace(/[^(x|\/)]/g, '').split('');
				console.log(ops);
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
		console.log(terms);
		terms[0] = evaluate(terms[0]);
		if (terms.length === 1) {
			this.setState({ display: terms[0].toString() });
		} else {
			const ops = this.state.display.replace(/[^(\+|\-)]/g, '').split('');
			console.log(ops);
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
				<Head>
					<title>Calculator by Brandon Suen</title>
				</Head>
				<section className={styles.calculator}>
					<div className={styles.display}>
						<p className={styles.displayText} id='display'>
							{this.state.display}
						</p>
					</div>
					<button className={styles.button} id='clear' onClick={this._clear}>
						AC
					</button>
					<button className={styles.button} onClick={this._flip}>
						+/-
					</button>
					<button
						className={styles.button}
						id='subtract'
						onClick={() => this._onClickOp('-')}
					>
						-
					</button>
					<button
						className={styles.button}
						id='divide'
						onClick={() => this._onClickOp('/')}
					>
						/
					</button>
					<button
						className={styles.button}
						id='multiply'
						onClick={() => this._onClickOp('x')}
					>
						X
					</button>
					<button
						className={styles.button}
						id='add'
						onClick={() => this._onClickOp('+')}
					>
						+
					</button>
					<button
						className={styles.button}
						id='seven'
						onClick={() => this._onClickNum('7')}
					>
						7
					</button>
					<button
						className={styles.button}
						id='eight'
						onClick={() => this._onClickNum('8')}
					>
						8
					</button>
					<button
						className={styles.button}
						id='nine'
						onClick={() => this._onClickNum('9')}
					>
						9
					</button>
					<button
						className={styles.button}
						id='four'
						onClick={() => this._onClickNum('4')}
					>
						4
					</button>
					<button
						className={styles.button}
						id='five'
						onClick={() => this._onClickNum('5')}
					>
						5
					</button>
					<button
						className={styles.button}
						id='six'
						onClick={() => this._onClickNum('6')}
					>
						6
					</button>
					<button
						className={styles.button}
						id='one'
						onClick={() => this._onClickNum('1')}
					>
						1
					</button>
					<button
						className={styles.button}
						id='two'
						onClick={() => this._onClickNum('2')}
					>
						2
					</button>
					<button
						className={styles.button}
						id='three'
						onClick={() => this._onClickNum('3')}
					>
						3
					</button>
					<button
						className={styles.button}
						id='zero'
						onClick={() => this._onClickNum('0')}
					>
						0
					</button>
					<button
						className={styles.button}
						id='decimal'
						onClick={this._decimal}
					>
						.
					</button>
					<button className={styles.button} id='equals' onClick={this._solve}>
						=
					</button>
				</section>
				<script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' />
			</div>
		);
	}
}
