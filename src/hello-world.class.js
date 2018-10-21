export class HelloWorld {
    static greet() {
        console.log('Hello World!');
    }

    static greetPeople(...people) {
        console.log(`Hello ${ people.join(', ') }`);
    }
}