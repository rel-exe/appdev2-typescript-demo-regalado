// 10-type-narrowing.ts

const inputEl = document.getElementById('user-name');

if (inputEl instanceof HTMLInputElement) {
    console.log("Input value is:", inputEl.value);
} else {
    throw new Error('Element not found or not an input!');
}