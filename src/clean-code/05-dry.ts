type Size = '' | 'S' | 'M' | 'L';

class Product {
	constructor(
		public name: string,
		public price: number = 0,
		public size: Size = ''
	) {}

	productValidation(): boolean {
		for (const key in this) {
			console.log(key);
			console.log(typeof this[key]);
			switch (typeof this[key]) {
				case 'string':
					if ((<string>(<unknown>this[key])).length <= 0)
						throw Error(`${key} is empty`);
					break;
				case 'number':
					if (<number>(<unknown>this[key]) <= 0)
						throw Error(`${key} is 0`);
					break;
				default:
					throw Error(`${key} is not valid`);
			}
		}

		// los throws interrumpen el resto de codigo por lo que si llega aqui es que ha pasado la validación
		return true;
	}

	toString() {
		// no dry
		// if (this.name.length <= 0) throw Error('name empty');
		// if (this.price <= 0) throw Error('prize is 0');
		// if (this.size.length <= 0) throw Error('size empty');

		if (!this.productValidation) return;
		return `${this.name} (${this.price}), ${this.size}`;
	}
}

(() => {
	const bluePants = new Product('pantalones');

	console.log(bluePants.toString());
})();
