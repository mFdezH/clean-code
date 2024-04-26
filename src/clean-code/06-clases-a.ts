(() => {
	// no aplicando el ppio de responsabilidad unica
	type Gender = 'M' | 'F';

	class Person {
		constructor(
			public name: string,
			public gender: Gender,
			public birthdate: Date
		) {}
	}

	class User extends Person {
		constructor(
			public email: string,
			public role: string,
			public lastAccess: Date,
			name: string,
			gender: Gender,
			birthdate: Date
		) {
			super(name, gender, birthdate);
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			lastAccess: Date,
			name: string,
			gender: Gender,
			birthdate: Date
		) {
			super(email, role, lastAccess, name, gender, birthdate);
		}
	}

	const userSettings = new UserSettings(
		'/usr/local/share',
		'/usr/local/home',
		'test@example.com',
		'admin',
		new Date(),
		'Maria',
		'F',
		new Date(1997, 9, 9)
   );
   
   console.log(userSettings);
})();
