### 1. **LIST THE SYMBOLS FOR EACH OF THE BELOW JS OPEATORS**

#### 1. **Arithmetic Operators**

- Addition: +
- Subtraction: -
- Multiplication: *
- Division: /
- Modulus: %
- Increment: ++
- Decrement: --

#### 2. **Assignment Operators**

- Assignment: =
- Addition assignment: +=
- Subtraction assignment: -=
- Multiplication assignment: *=
- Division assignment: /=
- Modulus assignment: %=
- Left shift assignment: <<=
- Right shift assignment: >>=
- Unsigned right shift assignment: >>>=
- Bitwise AND assignment: &=
- Bitwise OR assignment: |=
- Bitwise XOR assignment: ^=

#### 3. **Comparison Operators**

- Equal to: ==
- Not equal to: !=
- Strict equal to: ===
- Strict not equal to: !==
- Greater than: >
- Greater than or equal to: >=
- Less than: <
- Less than or equal to: <=

#### 4. **Logical Operators**

- Logical AND: &&
- Logical OR: ||
- Logical NOT: !

#### 5. **Bitwise Operators**

- Bitwise AND: &
- Bitwise OR: |
- Bitwise XOR: ^
- Bitwise NOT: ~
- Left shift: <<
- Right shift: >>
- Unsigned right shift: >>>

### 2. ** FOR EACH OF THE OPEATORS WRITE TWO EXAMPLE**

#### 1. **Arithmetic Operators Examples**

```javascript
  Example 1 (Addition: +)
const addNum  = 10 + 10 // addNum is 20

  Example 2 (Modulus: %)
const balance = 10 % 3 // balance is 1
```

#### 2. **Assignment Operators Examples**

```javascript
  Example 1 (Assignment: =)
const greet  = "Hello" // greet is assigned the value "Hello"

  Example 2 (Addition assignment: +=)
let num = 10
num -= 4 // num is now 6
```

#### 3. **Comparison Operators Examples**

```javascript
  Example 1 (Equal to: ==)
let x = 10;
console.log(x == 10); // true
console.log(x == "10"); // true

  Example 2 (Strict equal to: ===)
let x = 8;
console.log(x === 8); // true
console.log(x === "8"); // false
```

#### 4. **Logical Operators Examples**

```javascript
  Example 1 (Logical AND: &&)
let a = 20;
let b = 30
let c = 40
if(a < b && b < c ){
    console.log("Correct")
}else{
    cosole.log("Wrong")
}
//the above will evaluate to true as both conditions are met hence the output will be "Correct"

  Example 2 (Logical NOT: !)
let isCorrect  = true;
if(!isCorrect){
    console.log("This condition is not met")
}else{
    console.log("This condition is met")
}

//The output of the above will be "This condition is met" as isCorrect is true.
```

#### 5. **Bitwise Operators Examples**

```javascript
  Example 1 (Bitwise AND: &)
let a = 5; // binary: 101
let b = 3; // binary: 011
let c = a & b; // binary: 001 (decimal: 1)
console.log(c); // Output: 1

  Example 2 (Bitwise OR: |)
let a = 5; // binary: 101
let b = 3; // binary: 011
let c = a | b; // binary: 111 (decimal: 7)
console.log(c); // Output: 7
```

### 1. **WHAT IS THE RESULT WHEN THE FOLLWING PROGRAM IS EXECUTED**

```javascript
for (let i = 1; i < 20; i += 7) {
  console.log(i);
}
```

The result of the above program when executed is as follows;

1

8

15

#### Brief Explanation
This is so because at first i is initialized as 1. so when the loop runs for the first time, 

i = 1


then it checks is (i + 7) <  20?, if yes add 7 to i(ie 7 + 1) hence this returns 8, now i = 8

then it checks again, is (i + 7)  < 20?  if yes add 7 to i(ie 7 + 8), this returns 15

then it checks again is (i + 7) < 20? if no terminate the loop. At this point i = 15 therefor 15 + 7 is > 20  Hence the loop is terminated.