(() => {
    // Function Return Value Types
    function add(a: number, b: number): number {
        return a + b;
    }

    console.log(add(9, 11));
    // add("5", 10); //

    // Special Type `void` - return nothing
    function log(message: string): void {
        console.log(message);
    }

    log("Hello, World!");

    // Another Special Type `never`
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }

    // Function as Types (callbacks)
    function performJob(cb: (m: string) => void) {
        cb('Job Donesie!');
    }

    let logMsg = (msg: string): void => {
        console.log(msg);
    };

    performJob(logMsg);

    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        greet: () => string;
    };

    let user: User = {
        name: "Russel",
        age: 20,
        greet() {
            console.log(`Hello, ${this.name}`);
            return this.name;
        }
    };

    user.greet();
})();