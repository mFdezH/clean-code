(() => {
	// Resolver sin la triple condicional dentro del if
	// includes? arrays?
	function isRedFruit(fruit: string): boolean {
		const redFruits = ['manzana', 'ciruela', 'cereza'];
		return redFruits.includes(fruit);
	}

	// Simplificar esta función
	// switch? Object literal? validar posibles colores
	type fruitColor = 'red' | 'yellow' | 'purple';

	function getFruitsByColor(color: fruitColor): string[] {
		// switch (color) {
		// 	case'red':
		//       return ['manzana', 'fresa'];
		//    case 'yellow':
		//       return ['piña', 'banana'];
		//    case 'purple':
		//       return ['mora', 'uva'];
		//    default:
		//       throw Error('the color must be: red, yellow, purple');
		// }

		const fruitsByColor = {
			red: ['manzana', 'fresa'],
			yellow: ['piña', 'banana'],
			purple: ['mora', 'uva'],
		};

		if (!Object.keys(fruitsByColor).includes(color))
			throw Error('Invalid color');

		return fruitsByColor[color];
	}

	// Simplificar esta función
	let isFirstStepWorking = true;
	let isSecondStepWorking = true;
	let isThirdStepWorking = true;
	let isFourthStepWorking = true;

	function workingSteps() {
		if (!isFirstStepWorking) return 'first step broken';
		if (!isSecondStepWorking) return 'second step broken';
		if (!isThirdStepWorking) return 'third step broken';
		if (!isFourthStepWorking) return 'fourth step broken';
		return 'Working properly!';
	}

	// isRedFruit
	console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
	console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

	//getFruitsByColor
	console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
	console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
	console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
	// console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

	// workingSteps
	console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
