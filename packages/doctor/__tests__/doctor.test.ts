import { Doctor } from "../src/doctor"

test('The doctor has a name', () => {
	const doc = new Doctor('Doolittle');

	expect(doc.name).toBeDefined();
});

test('The doctor knows his name', () => {
	const doc = new Doctor('Holliday');

	expect(doc.greet()).toBe('Hello, my name is Dr. Holliday');
});
