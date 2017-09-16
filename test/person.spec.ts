import Person from '../src/Person';

describe('Person', () => {
    it('should greet', () => {
        expect(new Person('Alec').greet()).toBe('Hello Alec');
    })
});