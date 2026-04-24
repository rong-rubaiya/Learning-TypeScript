// mixed

let user1: [string, number];
user1 = ["Alice", 30];

user1.push("Bob", 25); // This will not cause an error, but it will break the tuple type
console.log(user1[0]);