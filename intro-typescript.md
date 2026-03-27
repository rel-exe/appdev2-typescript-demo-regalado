# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates type inference, explicit typing, and what happens when you assign mismatched types.

Even if you don’t tell TypeScript what type a variable or function return should be, it usually guesses it correctly—this is called type inference. But it’s better to explicitly declare types so anyone reading your code understands what’s going on. Once you say `userAge` is a number, you can’t later assign a string. Functions behave the same: if a parameter expects a number, giving a string throws an error. If your project blocks emitting JavaScript on errors, nothing is generated, but if you run it with Node directly, it will still run—though type errors can make things behave unexpectedly, like concatenating a string with a number.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

`typeof` is a quick runtime check to see what kind of value a variable holds. It’s useful but limited: it won’t catch mistakes until you actually run the code. TypeScript is better for type checking because it catches issues before you run the program, making code more readable and less error-prone.

## 03-flexible-types.ts
Illustrates the `any` type, showing its flexibility and why it’s risky.

`any` is like a free-for-all: you can assign a number, then a string, then an object, and TypeScript won’t complain. Sounds flexible, but it defeats the point of using TypeScript. You lose static typing, making bugs easier to hide and harder to catch. Use `any` sparingly; it’s basically telling TypeScript to ignore type safety.

## 04-arrays-objects.ts
Covers arrays with union types, nested object typing, and `Record` for flexible objects.

Arrays can hold strings, numbers, or both with union types. Declare them as `datatype[]` or `Array<datatype>`—both work. TypeScript won’t let you push a value that doesn’t match. Objects can have typed properties, including nested objects. `Record` lets you define key-value structures more flexibly; keys are always strings, even if you type them as numbers. This keeps your objects predictable while still flexible.

## 05-enum.ts
Introduces enums, especially string enums, and proper value assignment.

Enums let you define a set of fixed, named options, like user roles. Numeric enums can be accessed by name or index, but beware: custom starting numbers can make undefined indices invalid. String enums are safer: each member has a specific string value and must be accessed by name, not number.

## 06-alternative-to-enum.ts
Shows how to use literal types as a simpler alternative to enums.

Literal types let you restrict a variable to a few exact values, like `'admin' | 'teacher' | 'student'`. It’s like a mini enum without the extra syntax. This keeps type safety—assigning anything outside the allowed values will throw an error—while being lighter and easier to read.

## 07-custom-type-role.ts
Demonstrates type aliases and complex object typing.

Type aliases let you name a type and reuse it. For example, `type Role = 'admin' | 'teacher' | 'student'` can then be used inside objects. You can define user objects with properties like `name`, `age`, `role`, and `permissions`, ensuring a consistent structure and reducing mistakes.

## 08-functions.ts
Covers function return types, `void`, `never`, callbacks, and object methods.

Functions can have explicit return types. `void` is for functions that don’t return anything meaningful. `never` is for functions that never finish normally, like throwing errors or infinite loops. Callbacks can be typed to ensure correct arguments and return types. Object methods can also be typed, keeping `this` and return values predictable.

## 09-special-types.ts
Explains `null` and `undefined`, including union types.

`null` and `undefined` represent “no value.” You can combine them with other types, like `string | null`, forcing you to handle absent values safely. This reduces runtime errors and makes your intentions explicit.

## 10-form.html and 10-type-narrowing.ts
Demonstrates DOM type narrowing, optional chaining, non-null assertions, and type casting.

When you grab an element with `getElementById`, TypeScript sees it as a generic `HTMLElement`, which might not have a `value` property. Use `instanceof`, type casting (`as HTMLInputElement`), optional chaining (`?.`), or the non-null assertion (`!`) to safely access the element’s properties without runtime errors.

## 11-optional.ts

Shows how to use optional parameters in functions and optional properties in objects, while highlighting the difference between `||` and `??`. The logical OR operator (`||`) falls back on any falsy value like `0`, `''`, or `false`, whereas the nullish coalescing operator (`??`) only triggers when a value is `null` or `undefined`, giving you more precise control over defaults.