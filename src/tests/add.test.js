const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    // if(result !== 7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`);
    // }

    expect(result).toBe(7);
});

test('Should add name to greeting', () => {
    const result = generateGreeting('Matt');
    expect(result).toBe('Hello Matt!');
});

test('Should generate greeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});