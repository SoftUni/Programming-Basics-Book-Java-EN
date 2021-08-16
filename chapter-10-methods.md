# Chapter 10. Methods

In this chapter, we will introduce you to **methods** and you will learn their **definition**, as well as what their **base concepts** are while working with them. You will learn why it's a **good practice** to use them, how to **define** and **declare** them. We will also introduce you to the **parameters** and **return value of a method**, as well as how to use that return value. In the end, we will peek at **best practices** when using methods.

## What is "method"?

Until this moment, we have found out that while **writing** a programming code for an exercise, **separating** the exercise into different **parts**, favors us a lot. Every part is responsible for a **corresponding action** and by doing so it's **easier** to solve the problem, and the **readability** and the debugging of the code are better.

A block of code designed to perform a particular task and which we have separated logically is called a **method**. **Methods – slices of code, that are named** by us in a specific way. They can be called numerous times when we need them, and they will be run that many times as we want to.

One **method** can be **invoked** that many times, as we think is needed for solving a problem. That **saves** us from repeating the same code and **reduces** the opportunities of making a mistake while editing the repeated code. 

### Simple methods

Simple methods are responsible for running a specific **action**, that will **help** us solve a problem. Those actions can be printing a string on the console, doing a conditional statement, doing a loop, etc.

Let's see an **example of a simple method**:

![](assets/chapter-10-images/01.Simple-method-01.png)

This **method** has the task to print a header, that is a series of the symbol **`-`**. Because of this, the name of the method is **`printHeader`**. The round brackets **`( `** and **`)`** are always after the name, no matter how we have named the method. Later we will take a look at how we have to name a method we are working with. For now, we will only say that the **name of a method must define the action** that is doing.

The **body** of the method consists of **programming code**, which is located between the curly brackets **`{`** and **`}`**. Between them, we place code, that will solve our problem, described by the name of the method.

### Why should we use methods?

Up to this moment, we have found out that, methods help us with **separating long exercises into smaller parts**, which leads to a **simple solution** of the corresponding problem. This makes our program, not just well structured, **easy readable** but also more understandable.

Using methods we **escape repeating** of programming code. **Repeating** code is a **bad practice** because it makes **harder maintenance** for the programmer to do which leads to errors. If one part of code exists in our program more than once and we have to fix it, we will have to change every occurrence of repeating code. The probability of us forgetting one of the repeated places is high, which will lead to incorrect behavior of our program. This is exactly why it's a **good practice** to define a fragment that will be used **more than once** as a **separate method**.

Methods offer us an **opportunity** to use **code several times**. With solving more and more exercises, we will conclude that using already defined methods saves us a lot of time and effort.

### Declaring methods

In Java language, you can **declare** methods inside a class, i.e. between the opening **`{`** and closing **`}`** brackets of the class. Declaring is registering the method in the program so that it can be recognized in the rest of it. The best-known example is the **`main(…)`** method, which we use in every program that we write.

![](assets/chapter-10-images/02.Declaring-methods-01.png)

With the next example, we will look at the mandatory elements in the declaration of a method.

![](assets/chapter-10-images/02.Declaring-methods-02.png)

* **Type of the returned value**. In this case, the type is **`double`**, which means that the method will **return a result**, which is of **`double`** type. The returned value can be **`int`**, **`double`**, **`string`**, **etc.**, and also **`void`**. If the type is **`void`**, this means that the method **doesn't return** a result, but only **does a particular operation**.
* **Method name**. The name of the method is **defined by us**, but we shouldn't forget that it has to **describe the function**, which is executed by the code in its body. In the example, the name is **`GetSquare`**, which tells us that this method is made to find the area of a square.
* **Parameters list**. It is declared between the parentheses **`(`** and **`)`** that we write after its name. This is where we list all the **parameters** that the method will use. There can be **only one** parameter, **multiple** ones or it could be an **empty** list. If there aren't any parameters, we will write only the parentheses **`()`**. In this example, we declare the parameter **`double num`**.
* **`static`** declaration in the method description. For the moment you can accept that we write **`static`** always when we declare a method, and later when we get familiar with object-oriented programming (OOP), we will learn about the difference between **static methods** (shared for the whole class) and **methods of an object**, which work on the data of a certain instance of the class (object).

When declaring methods, you must follow the **sequence** of its base elements – first is the **keyword `static`**, then the **type of the returned value**, then **method name**, and in the end **list of parameters**, surrounded by parentheses **`()`**. 

After we have declared a method, its **implementation (body)** follows. In the body of the method we write down **the algorithm**, by which it solves a problem, i.e. the body contains the code (program block), which applies the method's **logic**. In the shown example we are calculating the area of a square, which is **`side * side`**. 

When declaring a variable in the body of a method, it is called a **local** variable of the method. The area where this variable exists and can be used starts from the line where we have declared it and reaches the closing curly bracket `}` of the body of the method. This area is called **variable scope**.

### Invoking a method

**Invoking** a method means **starting to execute the code**, which is in **the body of the method**. This happens by writing its **name**, followed by parentheses **`()`** and the semicolon sign **`;`** to end the line. If the method needs input data, it is given in the parentheses **`()`**, and the succession of the parameters should be the same as one of the given parameters when declaring the method. Here is an example:

![](assets/chapter-10-images/03.Invoking-methods-01.png)

A method can be invoked from **several places** in the program. One way is to call it inside **the main method**.

![](assets/chapter-10-images/03.Invoking-methods-02.png)

A method can also be invoked from **the body of another method**, which is **not** the main method of the program.

![](assets/chapter-10-images/03.Invoking-methods-03.png)

A method can be called from **its own body**. This is called **recursion** and you can find more about it on [Wikipedia](https://bg.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F) or google it.

It is important to know that if a method is declared in a class, it can be called before the line, on which it has been declared.

### Example: Blank Receipt

Write a method that prints a blank receipt. The method should call another three methods: one to print the header, one for the middle part of the receipt, and one for the lower part.

|Part of cash receipt|Text|
|---|---|
|Upper part|CASH RECEIPT<br>------------------------------|
|Middle part|Charged to\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>Received by\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|
|Lower part|------------------------------<br>(c) SoftUni|

#### Sample Input and Output

|Input|Output|
|---|---|
|(no input)|CASH RECEIPT<br>------------------------------<br>Charged to\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>Received by\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>------------------------------<br>(c) SoftUni|

#### Hints and Guidelines

The first step is to create a **`void`** method to **print the upper part** of the receipt (header). Let's give it a meaningful name, which describes what the method does, e.g. **`PrintReceiptHeader`**. In its body write the code from the example below:

![](assets/chapter-10-images/04.Print-receipt-01.png)

In the same way, we'll create two more methods **to print the middle part** of the receipt (body) **`PrintReceiptBody`** and **to print the lower part** of the receipt (footer) **`PrintReceiptFooter`**.

After this we will create **another method**, which will invoke the three methods we already wrote, one after the other:

![](assets/chapter-10-images/04.Print-receipt-02.png)

In the end, we'll **invoke** the **`PrintReceipt`** method from the body of the **`Main`** method of our program:

![](assets/chapter-10-images/04.Print-receipt-03.png)

#### Testing in the Judge System

The program with a total of five methods that call one another is ready and we can **run and debug it**. After that, we will send it for test in the Judge system: [https://judge.softuni.bg/Contests/Practice/Index/665#0](https://judge.softuni.bg/Contests/Practice/Index/665#0).


## Methods with Parameters

Frequently to solve a problem, the method by which we do this needs **additional information**, which depends on its purpose. This is precisely the information that **the method parameters** are, and its behavior depends on them. 

### Using Parameters in Methods

As we observed above, **the parameters can be zero, one or more**. When declaring them you should divide them with a comma. They can be of any type (**`int`**, **`string`**, etc.), and there is an example below to show how they can be used by the method.

We **declare** the method and its **list** of **parameters**, then we write the code that the method executes.

![](assets/chapter-10-images/05.Method-parameters-01.png)

After that **call** the method and **give it particular values**:

![](assets/chapter-10-images/05.Method-parameters-02.png)

When **declaring parameters**, we can use **various** types of variables, and we should be careful that every parameter has a **type** and **name**. It is important to note that when calling the method, we must pass to its **values** for the parameters in **the order**, in which they are **declared**. If the parameters are first **`int`** and after that **`string`**, when calling the method, we can't give it first a **`string`** and then **`int`**. We can only change places of given parameters if we write the name of the parameter beforehand, as you will see below in one of the examples. This is generally not a good practice!

Let's look at the example for declaring a method, which has several parameters of different types.

![](assets/chapter-10-images/05.Method-parameters-03.png)

### Example: Sign of an Integer

Create a method that prints the sign of an integer **n**.

#### Sample Input and Output

|Input|Output|
|---|---|
|2|The number 2 is positive.|
|-5|The number -5 is negative.|
|0|The number 0 is zero.|

#### Hints and Guidelines

The first step is **creating** a method and giving it a descriptive name, e.g. **`PrintSign`**. This method will have only one parameter of **`int`** type. 

![](assets/chapter-10-images/06.Print-sign-01.png)

The next step is **implementing** the logic by which the program will check what the sign of the number is. You can see from the examples that there are three cases – the number is larger than, equal to, or lower than zero, which means that we'll make three verifications in our method.

The next step is to read the input number and to call the new method from the body of the **`main`** method.

![](assets/chapter-10-images/06.Print-sign-02.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#1](https://judge.softuni.bg/Contests/Practice/Index/665#1).


### Example: Printing a Triangle

Create a method that prints a triangle as shown in the examples.

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|3|1<br>1 2<br>1 2 3<br>1 2<br>1|4|1<br>1 2<br>1 2 3<br>1 2 3 4 <br>1 2 3<br>1 2<br>1|

#### Hints and Guidelines

Before creating a method to print a row with a given beginning and an end, we must read the input number from the console. After that, we choose a meaningful name, which describes its purpose, e.g. **`printLine`**, and implements it.

![](assets/chapter-10-images/07.Print-triangle-01.png)

From the drawing exercises, we remember that it is good practice **to divide the figure into several parts**. To make it easier we will divide the triangle into three parts – upper, middle, and lower.

The next step is to print **the upper half** of the triangle using a loop:

![](assets/chapter-10-images/07.Print-triangle-02.png)

After that, we will print the **middle part**:

![](assets/chapter-10-images/07.Print-triangle-03.png)

In the end, we will print the **bottom part** from the triangle but this time with a reverse loop.

![](assets/chapter-10-images/07.Print-triangle-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#2](https://judge.softuni.bg/Contests/Practice/Index/665#2).


### Example: Draw a Filled Square

Print on the console a filled square with side **n**, as in the examples below.

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|4|<code>--------</code><br><code>-\\/\\/\\/-</code><br><code>-\\/\\/\\/-</code><br><code>--------</code>|5|<code>----------</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>----------</code>|

#### Hints and Guidelines

The first step is to read the input from the console. After that, we need to create a method, which will print the first and the last rows because they are the same. Let's remember that we must give it **a descriptive name** and give it as **a parameter** the length of the side. We will use the constructor's **`new String`**. 

![](assets/chapter-10-images/08.Draw-filled-square-01.png)

Our next step is to create a method that will draw the middle rows on the console. Again, give it a descriptive name i.e. **`printMiddleRow`**.

![](assets/chapter-10-images/08.Draw-filled-square-02.png)

Finally, call the methods in the **`main()`** method of the program to draw the whole square:

![](assets/chapter-10-images/08.Draw-filled-square-03.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#3](https://judge.softuni.bg/Contests/Practice/Index/665#3).


## Returning Result from a Method

Up to this point, we have viewed methods that do a specific task. For example printing a text, number, or a figure on the console. There is another type of method that can **return** a **result** from their task. We will look at this type of method in this part.

### Types of Returned Values

Up until now, we saw some examples, in which when declaring methods, we used the keyword **`void`**, which shows that the method **does not** return a result, but just executes a certain action.

![](assets/chapter-10-images/09.Return-types-01.png)

If we **replace** **`void`** with **a type** of some variable, this will tell the program that the method should return a value of the said type. This returned value could be of any type – **`int`**, **`String`**, **`double`**, etc. 

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>For a method to return <strong>a result</strong> we need to write the type of returned value we expect when declaring the method, in place of the <code>void</code>.</td></tr>
</table>

![](assets/chapter-10-images/09.Return-types-02.png)

We should note that **the result** returned by the method can be of **a type, compatible with the type of the returned value** of the method. For example, if the declared type of the returned value is **`double`**, we can return a value of **`int`** type.

### The "Return" Operator

To obtain a result from the method we need to use the **`return`** operator. It should be **used in the body** of the method and tells the program to **stop its execution** and to **return** the method invoker a certain **value**, which is defined by the expression after the **`return`** operator.

In the example below there is a method that reads two names from the console, concatenates them, and returns them as a result. The return value is of **`String`** type:

![](assets/chapter-10-images/10.Return-operator-01.png)

The **`return`** operator can also be used in **`void`** methods. This way the method will stop its execution without returning a value, and after it, there shouldn't be an expression, which should be returned. In this case, we use **`return`** only to exit the method.

**There are cases** where **`return`** can be called from multiple places in the method, but only if there are **certain** input conditions.

We have a method in the example below, which compares two numbers and returns a result respectively **`-1`**, **`0`**, or **`1`** depending on if the first argument is smaller, equal, or, larger than the second argument, given to the method. The method uses the keyword **`return`** in three different places, to return three different values according to the logic of comparing the numbers:

![](assets/chapter-10-images/10.Return-operator-02.png)

####  Code after a return is unreachable

When the **return** operator is located inside a conditional statement such as **`if`**, after the statement in the same block, we must **not** have rows with code because IntelliJ IDEA will display a warning telling us that it had found an **unreachable** statement.

![](assets/chapter-10-images/10.Return-operator-03.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>In programming, we can't have 2 times the operator <code><b>return</b></code> one after another because the first return won't allow us to use the second. Sometimes programmers joke
with the phrase <b><i>write</i> <code>return; return;</code> <i>and let's go home</i></b>”, to explain that the logic of the program is wrongly typed.</td></tr>
</table>

### Using the return value of a method

After a method is executed and has returned a value, we can use the value in several ways.

The first is to **assign the result to a variable**:

```java
int max = getMax(5, 10);
```

The second is to be used inside **an expression**:

```java
double total = getPrice() * quantity * 1.2;
```

The third is to **pass** the result from one method to **another method**:

```java
Scanner scanner = new Scanner(System.in);
int age = Integer.parseInt(scanner.nextLine());
```

### Example: Calculating Triangle Area

Create a method that calculates the area of a triangle using the given base and height and returns it as a result.

#### Sample Input and Output

|Input|Output|
|---|---|
|3<br>4|6|

#### Hints and Guidelines

The first step is to read the input. After that, **create** a method, but this time be careful when **declaring** to give it the correct **type** of data we want the method to return, which is **`double`**

![](assets/chapter-10-images/11.Calculate-triangle-area-01.png)

The next step is to **call the new** method from the **`main()`** method and to **store the returned value in a suitable variable**.

![](assets/chapter-10-images/11.Calculate-triangle-area-02.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#4](https://judge.softuni.bg/Contests/Practice/Index/665#4).


### Example: Power of a number

Write a method that calculates and returns the result the power of a number. 

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|2<br>8|256|3<br>4|81|

#### Hints and Guidelines

Our first step is to read the input data from the console. The next step is to create a method that will take two parameters (the number and the power) and return, as a result, a number of a **`double`** type.

![](assets/chapter-10-images/12.Number-power-01.png)

After we have done the calculations, we have to only print the result in the **`main()`** method of the program.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#5](https://judge.softuni.bg/Contests/Practice/Index/665#5).


## Method Overloading

In many programming languages, the same methods can be declared in **different variants** with the **same name and different parameters**. This goes by the term “**method overloading**”. Now let's see how to write these overloaded methods.

### Method Signature

In programming methods are **identified** through the elements of their declaration: **name** of the method + a list of its **parameters**. These two elements define its specification, the so-called “**method signature**”.

![](assets/chapter-10-images/13.Method-signature-01.png)

In this example, the method's signature is its name (**`print`**), together with its parameter (**`String text`**).

If our program holds several **methods with the same name**, but with **different lists of parameters (signatures)**, we can say that we use **method overloading**.

### Overloading Methods

As we mentioned, if you use **the same name for several methods with different signatures**, this means that you are **overloading a method**. The code below shows how three different methods can use the same name, but have different signatures and execute different actions.

![](assets/chapter-10-images/14.Method-overloading-01.png)

### Signature and Return Value Type

It is important to say that **the returned type as a result** of the method **is not a part of its signature**. If the returned type was a part of the signature, then the compiler doesn't know which method exactly to call (there is ambiguity).

Let's look at the following **example**: we have two methods with different return types. Even though IntelliJ IDEA shows that there is an error, our compiler won't know which of the two methods to invoke because they are with the same name **`print()`**.

![](assets/chapter-10-images/14.Method-overloading-02.png)

### Example: Greater of Two Values

The input is two values of the same type. The values can be of **`int`**, **`char`**, or **`String`** type. Create a method **`getMax()`** that returns, as a result, the greater of the two values.

#### Sample Input and Output

|Input|Output|Input|Output|Input|Output|
|---|---|---|---|---|---|
|int<br>2<br>16|16|char<br>a<br>z|z|string<br>Ivan<br>Todor|Todor|

#### Hints and Guidelines

To complete our task we need to create three methods with the same name and different signatures. First, we create a method, which will compare integers.

![](assets/chapter-10-images/15.Greater-of-two-values-01.png)

Following the logic of the previous method, we create another one with the same name, but this one will compare characters.

![](assets/chapter-10-images/15.Greater-of-two-values-02.png)

The next method we need to create will compare strings. The logic here is a bit different from the previous two methods because variables of **`String`** type cannot be compared with the operators **`<`** and **`>`**. We will use the method **`compareTo(…)`**, which returns a numerical value: larger than 0 (the compared object is larger), smaller than 0 (the compared object is smaller), and 0 (the two objects are the same).

![](assets/chapter-10-images/15.Greater-of-two-values-03.png)

The last step is to read the input data, use the appropriate variables, and invoke the method **`getMax()`** from the body of the **`main()`** method.

![](assets/chapter-10-images/15.Greater-of-two-values-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#6](https://judge.softuni.bg/Contests/Practice/Index/665#6).


## Naming Methods. Best Practices when working with methods

In this chapter, we will introduce you to some of the **best practices** when working with methods. They will be related to naming, organizing our code and its structure. 

### Naming Methods

When we name a method it's recommended to use **logical name**. This is good because every method must **correspond** to a specific part of our problem. We must take into consideration the **task** which the method will do. This is why it's a good practice **for the name to describes the purpose of the method**.

It is required for the name of the method to start with a **small letter** and to be a verb or a combination of a verb and a noun. Formatting the names must be done following **Lower Camel Case** convention - **every word except the first to start with an upper letter**. Round brackets  **`( `** and **`)`** are always after the name of the method.

Every method must do an independent task and the name must describe its role.

Here are some examples of **correctly** named methods:
* **`findStudent`**
*	**`loadReport`**
*	**`sine`**

Some examples of **badly** named methods:
*	**`Method1`**
*	**`DoSomething`**
*	**`HandleStuff`**
*	**`SampleMethod`**
*	**`DirtyHack`**

If we can't come up with a good name it's probably because our method does more than one job or it doesn't have a clear task. We must think of a way to divide the method into different methods.

### Naming parameters of methods

When naming **the parameters** of a method you can apply almost the same rules as with the methods themselves. The difference here is that it is good for the names of the parameters to use a noun or a couple of an adjective and a noun, and when naming the parameters, we use the **`lowerCamelCase`** convention, i.e. **each word except for the first one starts with uppercase**. We should note that it is a good practice that the name of the parameter **shows** what **unit** is used when working with it.

Here are some examples of **correctly** named parameters of methods:
* **`firstName`**
*	**`report`**
*	**`speedKmH`**
*	**`usersList`**
*	**`fontSizeInPixels`**
*	**`font`**

Some examples of **incorrectly** named parameters: 
*	**`p`**
*	**`p1`**
*	**`p2`**
* **`populate`**
* **`LastName`**
* **`last_name`**

### Good Practices When Working with Methods

We must keep in mind that a method must do **only one** specific **task**. If this can't be achieved, then we must come up with a way to **divide** the functionality into different parts.
As we have already said the name must be clear and descriptive. Another **good practice** is to **avoid** methods that are longer than our screen. If this happens it's recommended to **split** the method into smaller ones as shown in the example below.

![](assets/chapter-10-images/04.Print-receipt-02.png)

### Structure and formatting of the code

When writing methods we must keep in mind to follow a correct **indication** (move more inward blocks of the code).

Here are some examples of **correctly** formatted Java code:

![](assets/chapter-10-images/16.Good-practice-01.png)

Some examples of **incorrectly** formatted Java code:

![](assets/chapter-10-images/16.Good-practice-02.png)

When the headline row of the method is **too long**, it's recommended to be split into several rows, and every row after the first should be moved 2 tabulations to right (for clear readability):

![](assets/chapter-10-images/05.Method-parameters-03.png)

Another good practice is to **leave an empty row** between methods, after loops, and conditional statements. You should always try to **avoid** writing **long rows and complicated expressions**. Over time you will find out that improves the readability and saves time.

We recommend you to always **use curly brackets for the body of conditional statements and loops**. The brackets don't just improve the readability but also reduce the possibility of making a mistake.

## What have we learned from this chapter?

In this chapter we have learned base concepts about working with methods:
* Learned that **the goal** of a method is to **split** programs with many rows to code with smaller and shorter parts.
* Comprehended the idea of the **structure** of methods and how to **declare** and **invoke** them by their name.
* Looked into different examples of methods with **parameters** and how to use them in our program.
* Learned what is **signature** and **return value** of the method as well as what is the role of the **`return`** operator.
* Studied **good practices** for working with methods, how to name them and their parameters and how to format our code and others.


## Exercises

To improve what we have learned we will solve a few exercises. In them, it is required to write a method with specific functionality and then call it with values read from the console, as shown in the example. 

### Problem: "Hello, Name!"

Write a method that takes a name as a parameter and prints on the console "*Hello, \<name\>!*".

#### Sample Input and Output

|Input|Output|
|---|---|
|Peter|Hello, Peter!|

#### Hints and Guidelines

Define a method **`printName(String name)`** and implement it, after which read a name from the console in the main program and invoke the method by feeding it the name.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#7](https://judge.softuni.bg/Contests/Practice/Index/665#7).


### Problem: Min Method

Create a method **`getMin(int a, int b)`**, which returns the smaller of two numbers. Write a program, which takes as input three numbers and prints the smallest of them. Use the method **`getMin(…)`**, which you have already created.

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|1<br>2<br>3|1|-100<br>-101<br>-102|-102|

#### Hints and Guidelines

Define a method **`getMin(int a, int b)`** and implement it.After that call it from the main method as shown in the example below. To find the minimum of 3 numbers, first, find the minimum of the first two and then the result from their result and the third one.

```java
int min = getMin(getMin(num1, num2), num3);
```

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#8](https://judge.softuni.bg/Contests/Practice/Index/665#8).


### Problem: String Repeater

Create a method **`repeatString(str, count)`**, which takes parameters of type **`String`** and an integer **`n`** and returns the string, repeated **`n`** times. After this print the result on the console.

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|str<br>2|strstr|roki<br>6|rokirokirokirokirokiroki|

#### Hints and Guidelines

Write method and add the input string to the result in the for loop:

![](assets/chapter-10-images/17.Repeated-string-01.png)

Keep in mind that **in Java concatenating strings in loops leads to a bad performance** and is not recommended. Learn more at: https://stackoverflow.com/questions/1235179.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#9](https://judge.softuni.bg/Contests/Practice/Index/665#9).


### Problem: N-th Digit

Create a method **`findNthDigit(number, index)`**, which takes a number and index N as parameters and prints the N-th digit of the number (counting **from right to left** and starting from 1). After that print the result on the console.

#### Sample Input and Output

|Input|Output|Input|Output|Input|Output|
|---|---|---|---|---|---|
|83746<br>2|4|93847837<br>6|8|2435<br>4|2|

#### Hints and Guidelines

To do the algorithm use a **`while`** loop, until the given number equals 0. At each iteration of the **`while`** loop check if the current index of the digit is equal to the index you are looking for. If it is, return as a result of the digit at this index (**`number % 10`**). If not, remove the last digit in the number (**`number = number / 10`**). You should count which digit you are checking by index (from right to left and starting from 1). When you find the number, return the index. 

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#10](https://judge.softuni.bg/Contests/Practice/Index/665#10).


### Problem: Integer to Base

Write a method **`integerToBase(number, toBase)`**, which takes as parameters an integer and a base of a numeral system and returns the integer converted to the given numeral system. After this, the result should be printed on the console. The input number will always be in the decimal numeral system, and the base parameter will be between 2 and 10.

#### Sample Input and Output

|Input|Output|Input|Output|Input|Output|
|---|----|---|---|---|---|
|3<br>2|11|4<br>4|10|9<br>7|12|

#### Hints and Guidelines

To solve the problem, we will declare a string, in which we will keep the result. After this, we need to do the following calculations to convert the number.
* Calculate **the remainder** of the number, divided by the base.
* **Insert the remainder** at the beginning of the string.
* **Divide** the number to the base.
* **Repeat** the algorithm until the input integer equals 0.

Write the missing logic in the method below:

```java
static String integerToBase(int number, int toBase) {
    String result = "";
    while (number != 0) {
        // Implement the missing conversion logic
    }
    return result;
}
```

#### Testing in the Judge System 

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#11](https://judge.softuni.bg/Contests/Practice/Index/665#11).


### Problem: Notifications

Write a program, which takes an integer **`n`** and **`n` input messages** and prints **`n` output messages**, based on the input. For each message read a few lines. Each message starts with **`messageType`**: “**`success`**”, “**`warning`**” or “**`error`**”:
- When **`messageType`** is “**`success`**” read **`operation`** + **`message`** (each from a new line).
- When **`messageType`** is “**`warning`**” read only **`message`** (from a new line).
- When **`messageType`** is “**`error`**” read **`operation`** + **`message`** + **`errorCode`** (each from a new line).

Print on the console **each read message**, formatted depending on its **`messageType`**. After the headline of the message print as much **`=`**, **as the length** of the said **headline** and print **an empty line** after each message (to understand in detail look at the examples). 

The problem should be solved by defining four methods: **`showSuccessMessage()`**, **`showWarningMessage()`**, **`showErrorMessage()`** and **`readAndProcessMessage()`**, so that only the last method is invoked by the **`main()`** method:

![](assets/chapter-10-images/18.Notifications-01.png)

#### Sample Input and Output

|Input|Output|
|---|---|
|4<br>error<br>credit card purchase<br>Invalid customer address<br>500<br>warning<br>Email not confirmed<br>success<br>user registration<br>User registered successfully<br>warning<br>Customer has not email assigned|<code>Error: Failed to execute credit card purchase.</code><br><code>==============================================</code><br><code>Reason: Invalid customer address.</code><br><code>Error code: 500.</code><br><br><code>Warning: Email not confirmed.</code><br><code>=============================</code><br><br><code>Successfully executed user registration.</code><br><code>========================================</code><br><code>User registered successfully.</code><br><br><code>Warning: Customer has not email assigned.</code><br><code>=========================================</code>|

#### Hints and Guidelines

Define and implement the four shown methods.

In **`ReadAndProcessMessage()`** read the type of message from the console and according to the read, type read the rest of the data (one, two, or three more lines). After that invoke the method for printing the given type of message.

If you are reading from the console a few separate methods, you should keep in mind that you should **create `Scanner` object only once** (for example in the main method) and pass it to the other methods as a parameter.  Creating more than one **`Scanner`** which reads from the console might not work as expected.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#12](https://judge.softuni.bg/Contests/Practice/Index/665#12).


### Problem: Numbers to Words

Write a method **`letterize(number)`**, which reads an integer and prints it in words in English according to the conditions below:
* Print in words the hundreds, the tens, and the ones (and the eventual minus) according to the rules of the English language.
* If the number is larger than **999**, you must print "**too large**".
* If the number is smaller than **-999**, you must print "**too small**".
* If the number is **negative**, you must print "**minus**" before it.
* If the number is not built up of three digits, you shouldn't print it.

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|3<br>999<br>-420<br>1020|nine-hundred and ninety nine<br>minus four-hundred and twenty<br>too large|2<br>15<br>350|fifteen<br>three-hundred and fifty|

|Input|Output|Input|Output|
|---|---|---|---|
|4<br>311<br>418<br>509<br>-9945|three-hundred and eleven<br>four-hundred and eighteen<br>five-hundred and nine<br>too small|3<br>500<br>123<br>9|five-hundred<br>one-hundred and twenty three<br>nine|

#### Hints and Guidelines

We can first print **the hundreds** as a text - (the number / 100) % 10, after that **the tens** –  (the number / 10) % 10 and at the end **the ones** – (the number % 10).

The first special case is when the number is exactly **rounded to 100** (e.g. 101, 305, 609, etc.). In this case we print "one-hundred", "two-hundred", "three-hundred" etc.

The second special case is when the number formed by the last two digits of the input number is **less than 10**  (e.g. 101, 305, 609, etc.). In this case, we print "one-hundred and one", "three-hundred and five", "six-hundred and nine" etc.

The third special case is when the number formed by the last two digits of the input number is **larger than 10 and smaller than 20** (e.g. 111, 814, 919, etc.). In this case, we print "one-hundred and eleven", "eight-hundred and fourteen", "nine-hundred and nineteen" etc.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#13](https://judge.softuni.bg/Contests/Practice/Index/665#13).


### Problem: String Encryption

Write a method **`encrypt(char letter)`**, which encrypts a given letter in the following way:
* It takes the first and the last digit from the ASCII code of the letter and concatenates them into a string, which will represent the result. 
* At the beginning of the string, which represents the result, we will insert the symbol which matches the following condition:
  * ASCII code of the letter + the last digit of the ASCII code of the letter.
* After that at the end of the string, which represents the result, you concatenate the character which matches the following condition:
  * ASCII code of the letter - the first digit of the ASCII code of the letter.
* The method should return the encrypted string.

Example:
* j &rarr; **p16i**
  * ASCII code of **j** is **106** &rarr; First digit – **1**, last digit – **6**.
  * We concatenate the first and the last digit &rarr; **16**.
  * At **the beginning** of the string, which represents the result, concatenate the symbol, which you get from the sum of the ASCII code + the last digit &rarr; 106 + 6 &rarr; 112 &rarr; **p**.
  * At **the end** of the string, which represents the result, concatenate the symbol, which you get from subtracting the ASCII code – the first digit &rarr; 106 - 1 &rarr; 105 &rarr; **i**.

Using the method shown above, write a program that takes **a sequence of characters**, **encrypts them** and prints the result on one line.

The input data will always be valid. The Main method must read the data given by the user – an integer **`n`**, followed by a character for each of the following **`n`** lines.

Encrypt the symbols and add them to the encrypted string. In the end, as a result, you must print **an encrypted string** as in the following example.

Example:
* S, o, f, t, U, n, i &rarr; V83Kp11nh12ez16sZ85Mn10mn15h

#### Sample Input and Output

|Input|Output|
|---|---|
|7<br>S<br>o<br>f<br>t<br>U<br>n<br>i| V83Kp11nh12ez16sZ85Mn10mn15h |

|Input|Output| 
|---|---|
|7<br>B<br>i<br>r<br>a<br>H<br>a<br>x| H66<n15hv14qh97XJ72Ah97xx10w |

#### Hints and Guidelines

Our variable from type **`String`** which will store the value of the result, will have an initial value of **`String str = ""`** (Empty String). The loop should iterate **`n`** times, and in every iteration, we will add to our variable the encrypted symbol.

To find the first and the last digit from the ASCII code, we will use the algorithm, that we have used when solving the "Integer to Base" problem.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#14](https://judge.softuni.bg/Contests/Practice/Index/665#14).
