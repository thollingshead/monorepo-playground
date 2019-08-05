export class Doctor {
	public name: string;

	public constructor(name: string) {
		this.name = name;
	}

	public greet(): string {
		return `Hello, my name is Dr. ${this.name}`;
	}
}
