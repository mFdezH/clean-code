(() => {
	// no aplicando el ppio de responsabilidad unica
	type Gender = 'M' | 'F';

	interface PersonProperties {
		birthdate: Date;
		gender: Gender;
		name: string;
	}

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthdate }: PersonProperties) {
			this.birthdate = birthdate;
			this.gender = gender;
			this.name = name;
		}
	}

	interface userProperties {
		birthdate: Date;
		email: string;
		gender: Gender;
		name: string;
		role: string;
	}

	class User extends Person {
		public email: string;
		public lastAccess: Date;
		public role: string;

		constructor({ email, role, name, gender, birthdate }: userProperties) {
			super({ name, gender, birthdate });
			this.lastAccess = new Date();
			this.email = email;
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface UserSettingsProperties {
		birthdate: Date;
		email: string;
		gender: Gender;
		lastOpenFold: string;
		name: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings extends User {
		public lastOpenFolder: string;
		public workingDirectory: string;

		constructor({
			workingDirectory,
			lastOpenFold,
			email,
			role,
			name,
			gender,
			birthdate,
		}: UserSettingsProperties) {
			super({ email, role, name, gender, birthdate });
			this.lastOpenFolder = lastOpenFold;
			this.workingDirectory = workingDirectory;
		}
	}

	const userSettings = new UserSettings({
		birthdate: new Date(),
		email: 'test@example.com',
		gender: 'F',
		lastOpenFold: '/usr/local/home',
		name: 'Maria',
		role: 'admin',
		workingDirectory: '/usr/local/share',
	});

	console.log(userSettings);
})();
