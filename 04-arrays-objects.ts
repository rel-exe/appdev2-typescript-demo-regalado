let hobbies = ["writing", "reading"]

let userList: Array<string | number>;
userList = ["Elmer", "Elmer123", "relenia", 123456]

console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "russ",
    age: 31,
    hobbies: ["writing", "reading"],
    role: {
        description: 'student',
        id: 1
    }
}

let val: {} = "John Russel Regalado"

let data: Record<string, number | string>
data = {
    "1": 1,
    name: 'Russel'
}

console.log(user)
console.log(val)
console.log(data)