# Chapter 2.1. Simple Calculations

-	What is **system console**?
In this chapter we are going to get familiar with the following concepts and programming techniques:
- How to **read numbers** from the system console?
- How to work with **data types and variables**, which are necessary to process numbers and the operations between them?
- How to **print** output (a number) on the console?
- How to do simple **arithmetic operations**: add, subtract, multiply, divide, string concatenation?

## Video

<div class="video-player">
  Watch a video tutorial on this chapter here: <a target="_blank" href="https://www.youtube.com/watch?v=7u4X5X-a9Qg">https://www.youtube.com/watch?v=7u4X5X-a9Qg</a>.
</div>

## The System Console

Usually called "**the console**", the system console or more computer console, represents the tool, by which we give the computer commands in a text format and get the results from their execution again as a text.

Generally, the system console represents a text terminal, which means that it accepts and visualizes just **text**, without any graphical elements like buttons, menus, etc. Usually, it looks like a black colored window, in which we write and perform **console commands**, and print the result in the form of a text. In **Windows** the console looks like this:

![](/assets/chapter-2-1-images/00.Console-example.png)

In most operating systems, generally **the console** is available as a standalone application on which we write different console commands. In Windows it is called **Command Prompt**, while in Linux and macOS it is called **Terminal**. The console runs console applications. They read text as an input from the command line and print the output as a text on the console. In this book we are going to learn programming mostly through creating **console applications**.

This is how the console looks in **Linux**:

![](/assets/chapter-2-1-images/00.Linux-terminal-example.png)

## Reading Integers From The Console

In **Java** we have several options to read an input from **the console**. One is through the use of the built-in class **`Scanner`**, which we are going to use now, and the other one is using the  **`BufferedReader`**. The second is a bit faster, but we will start using it after we get familiar with the streams in **Java**.

In order to read an **Integer** (not a float) **number** from the console first we have to import the built-in class **`Scanner`** on the first line of our program, even before the base class declaration. We put this line above:

```java
import java.util.Scanner;
```

Then in the `main(…)` method of the program we have to create a new `Scanner` instance , which to attach to the system input. After the created `scanner` reader we can read integers, floating-point numbers, text, etc. For example, with `.nextInt()` we read the next following integer given as input:

```java
Scanner scanner = new Scanner(System.in);
int num = scanner.nextInt();
```

Now in the variable **`num`** of integer type **`int`** we have read, given as input from **the console**.

Java is **highly typed language**, this means, that the variables have type, which is determine at compile time and can not change on the go (as it is in dynamic languages such as JavaScript and Python). In the example above `scanner` is from type `java.util.Scanner` (scanning text reader), and the variable `num` is from type `int` (integer number).

### Example: Calculating a Square Area With Side **а**
 
For example, let us look at the following program, which **reads an integer** from the console, **multiplies it** by itself (squares it) and **prints the result** from the multiplication. This is how we can calculate the square area by given side length read from the cosnole. The whole source code of the program follows. Write it in file with name `SquareArea.java`, or else you will have a compile time error:

```Java
// Put this code in the file: SquareArea.java

import java.util.Scanner;

public class SquareArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("a = ");
        int a = scanner.nextInt();
        int area = a * a;

        System.out.print("Square area = ");
        System.out.println(area);
    }
}
```
Here is how the program would work when we have a square with a side length equal to 15:

![](/assets/chapter-2-1-images/01.Square-area-01.jpg)

Try to write a wrong number, for example "**hello**". You will get an error message during runtime (exception). 

![](/assets/chapter-2-1-images/02.Exception-hello-01.jpg)

This is normal, because **Java** is highly typed language. Later on, we will find out how we can catch these kinds of errors and make the user enter a number again.

#### How Does the Example Work?

The first line **`Scanner scanner = new Scanner(System.in);`** creates a new instance from the **`Scanner`** class with standard system input.

The next line **`System.out.print("a = ");`** prints an informative message, which invites the user to enter the side **a** of the square. After the output is printed the cursor stays on the same line. Staying on the same line is more convenient for the user visually. We use **`System.out.print(…);`**, and not **`System.out.println(…);`** and this way the cursor stays on the same line.

The next line **`int a = scanner.nextInt();`** reads an integer from the console. The result is kept in a variable with name **`a`**.

The next command **`int area = a * a;`** keeps in a new variable **`area`** the result of the multiplication of **`a`** by **`a`**.

Next command **`System.out.print("Square area = ");`** prints the given text without going to the next line. Again, use **`System.out.print(…);`**, and not **`System.out.println("…");`** and this way the cursor stays on the same line in order to print the calculated area of the square afterwards.

The last command **`System.out.println(area);`** prints the calculated value of the variable **`area`**.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#0](https://judge.softuni.bg/Contests/Practice/Index/649#0).

#### Reading Floating-Point Numbers From the Console

Try to rework the above program so that it accepts not only integers (`int`), but floating-point numbers as well (`double`). We can use `scanner.nextDouble()`. We will learn more about the floating-point numbers after a while. 


## Calculations in Programming

We know about the computers that they are machines, which process data. All **data** is stored in the computer memory (RAM memory) in **variables**. Variables are named areas of memory, which stores data from certain type, for example number or text. Each **variable** in Java has **name**, **type** and **value**. This is how we can define a variable, as at the same time with the declaration, we also assign value to it:

![](/assets/chapter-2-1-images/03.Declaring-variables-01.png)

After processing, the data is stored again in variables (somewhere in the memory, set aside by our program).

## Data Types and Variables

In programming, each variable stores a certain **value** of a particular **type**. For example, data types can be: **number**, **letter**, **text** (string), **date**, **colour**, **image**, **list** and others.
Here are some examples of data types:
- type **int number**: 1, 2, 3, 4, 5, …
- type **double number**: 0.5, 3.14, -1.5, …
- type **a letter from the alphabet** (symbol): 'a', 'b', 'c', …
- type **text** (string): "Здрасти", "Hi", "Beer", …
- type **day of the week**: Monday, Tuesday, …

## Reading Floating-Point Numbers from the Console

In order to read **floating-point number** from the console it is again neccessary to **declare variable**, to point out **the type of the number**, and to use the standard command to read information from the system console:

```Java
Scanner scanner = new Scanner(System.in);

Double num = scanner.nextDouble();
```

### Example: Converting Inches into Centimeters

Let’s write a program that reads a floating-point number in inches and converts it to centimeters:

```Java
Scanner scanner = new Scanner(System.in);

System.out.print("Inches = ");              
Double inches = scanner.nextDouble();
Double centimeters = inches * 2.54;
System.out.print("Centimeters = ");
System.out.println(centimeters);
```

Let’s start the program and make sure that when a value in inches is entered, we obtain a correct output in centimeters:

![](assets/chapter-2-1-images/04.Console-output-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#1](https://judge.softuni.bg/Contests/Practice/Index/649#1).


## Reading and Printing Text

To read a text (string) from the console, again **we declare new variable** and use the standard **command for reading a text from the console**:

```Java
Scanner scanner = new Scanner(System.in);

String str = scanner.nextLine();
```
Let's pay attention to the fact that **reading text does not require converting to another type**. It is this way, because by default the method **`scanner.nextLine(…)`** returns as **result text**. Additionally, we can parse the text to an integer by **`Integer.parseInt(…)`** or floating-point number by **`Double.parseDouble(…)`**. If it is not parse to a number, for the program **each number** will be just **text**, with which **we can not do** arithmetic operations.

### Example: Greeting by Name

Let’s write a program, which enter the name of the user and greets them with the text "**Hello, *име***".

```Java 
Scanner scanner = new Scanner(System.in);
         
String name = scanner.nextLine();
System.out.printf("Hello, %s!", name);
```

In this case the expression **`%s`** is replaced with the **first** passed argument, in this case is the variable **`name`**:

![](/assets/chapter-2-1-images/04.Console-output-02.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#2](https://judge.softuni.bg/Contests/Practice/Index/649#2).


## Concatenating Text and Numbers

When printing a text, numbers and other data on the console, **we can join them**, by using templates **`%s`**, **`%d`**, **`%f`** etc. In programming, these templates are called **placeholders**, depending on the type of the variable, different symbols are used to declare different types of arguments. The main ones are `%s` for text (string), `%d` for int numbers, `%f` for floating-point numbers.

This is **example** for printing formatted text with (**placeholders**):

```Java
Scanner scanner = new Scanner(System.in);

String firstName = scanner.nextLine();
String lastName = scanner.nextLine();
int age = Integer.parseInt(scanner.nextLine());
String town = scanner.nextLine();
System.out.printf("You are %s %s, a %d-years old person from %s.",
  firstName, lastName, age, town);
```

This is the result, which we will get after the execution of the example:

![](assets/chapter-2-1-images/04.Console-output-03.png)

Notice how every variable should be passed in the **order, in which we want it to be printed**, and correspond to the **type passed in the placeholder**. Practically, the template (**placeholder**) accepts variables of **every type**.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#3](https://judge.softuni.bg/Contests/Practice/Index/649#3).


## Arithmetic Operations

Let’s look at the basic arithmetic operations in programming.

### Summing up Numbers (operator **`+`**)

We can sum up numbers using the operator **`+`**:

```Java
int a = 5;
int b = 7;
int sum = a + b; // резултатът е 12
```

### Subtracting Numbers (оператор **`-`**)

Subtracting Numbers is done by the operator **`-`**:

```Java
Scanner scanner = new Scanner(System.in);

int a = Integer.parseInt(scanner.nextLine());
int b = Integer.parseInt(scanner.nextLine());
int result = a - b;
System.out.println(result);
```

Here is the result of the execution of this program (with numbers 10 and 3):

![](assets/chapter-2-1-images/04.Console-output-04.png)

### Multiplying Numbers (operator **`*`**)

For multiplication of numbers we use the operator **`*`**:

```Java
int a = 5;
int b = 7;
int product = a * b; // 35
```

### Dividing Numbers (operator **`/`**)

Dividing numbers is done using the **`/`**. It works differently with integers and floating-point numbers.
*	When we divide two integers, **цan integer division** is applied and the obtained output is without its fractional part. Example: 11 / 3 = 3.
*	When we divide two numbers and at least one of them is a float number, **a floating division** is applied, and the obtained result is a float number, just like in math. Example 11 / 4.0 = 2.75. When it cannot be done with exact precision, the result is being rounded, for example 11.0 / 3 = 3.66666666666667.
* The integer **division by 0** causes an **exception** during runtime (`Java.lang.ArithmeticException`).
* •	Float number **divided by 0** do not cause an exception and the result is **+/- infinity** or the special value **`NaN`**. Example 5 / 0.0 = &#8734;.

Here are a few examples with the division operator:

```Java
int a = 25;
int i = a / 4;      // извършваме т.нар. целочислено деление:
                    // резултатът от тази операция ще бъде 6 – дробната част се отрязва, 
                    // тъй като извършваме деление с цели числа
int f = a / 4.0;    // 6.25 – дробно деление. Изрично сме указали числото 4 да се интерпретира
                    // като дробно, като сме добавили десетичната точка, следвана от нула
int error = a / 0;  // Грешка: целочислено деление на 0
```

Let's look at some examples for **integer division** (remember that when we **divide integers** in Java the result is **an integer**):

```Java
int a = 25;
System.out.println(a / 4);  // Целочислен резултат: 6
System.out.println(a / 0);  // Грешка: деление на 0
```
Let's look at a few examples for **floating numbers division**. When we divide floating-point numbers, the result is always **a float number** and the division never fails, and works correctly with the special values **+&#8734;** и **-&#8734;**:

```Java
int a = 15;
System.out.println(a / 2.0);   	 // Дробен резултат: 7.5
System.out.println(a / 0.0);     // Резултат: Infinity
System.out.println(-a / 0.0);    // Резултат: -Infinity
System.out.println(0.0 / 0.0);   // Резултат: NaN (Not a Number), т.е. резултатът
                                 // от операцията не е валидна числена стойност
```

When printing the values **&#8734;** and **-&#8734;** the console output may be `?`, because the console in Windows does not work correctly with Unicode and breaks most of the non-standard symbols, letters and special characters. The example above would most probably give the following result:
```
7.5
?
-?
NaN
```

## Concatenating Text and Numbers

The operator **`+`** besides for summing up numbers, is also used for joining text (concatenation of two strings one after another). In programming, joining text with text or with number is called "concatenation". Here is how we can concatenate a text with a number with the operator **`+`**:

```Java
String firstName = "Maria";
String lastName = "Ivanova";
int age = 19;
String str = firstName + " " + lastName + " @ " + age;
System.out.println(str);  // Maria Ivanova @ 19
```

Here is another example:

```Java
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + a + b;
System.out.println(sum);  // The sum is: 1.52.5
```

Did you notice something strange? Maybe you expected the numbers **`a`** and **`b`** to be summed? Actually, the concatenation works from left to right and the result above is absolutely correct. If we want to sum the numbers, we have to use **brackets**, in order to change the order of execution of the operations:

```Java
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + (a + b);
System.out.println(sum);  // The sum is: 4
```


## Numerical Expressions

In programming, we can calculate **numerical expressions**, for example:

```Java
int expr = (3 + 5) * (4 – 2);
```
The standard rule for priorities of arithmetic operations is applied: **multiplying and dividing are always done before adding and subtracting**. In case of an **expression in brackets, it is calculated first**, but we already know all of that from school math.

### Example: Calculating Trapezoid Area

Let’s write a program that inputs the lengths of the two bases of a trapezoid and its height (one floating-point number per line) and calculates the area of the trapezoid by the standard math formula.

```Java
Scanner scanner = new Scanner(System.in);

double b1 = Double.parseDouble(scanner.nextLine());
double b2 = Double.parseDouble(scanner.nextLine());
double h = Double.parseDouble(scanner.nextLine());
double area = (b1 + b2) * h / 2.0;
System.out.println("Trapezoid area = " + area);
```

If we start the program and enter values for the sides: 3, 4 and 5, we will obtain the following result:
```
3
4
5
Trapezoid area = 17.5
```

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#4](https://judge.softuni.bg/Contests/Practice/Index/649#4).


### Example: Circle Area and Perimeter 

Let’s write a program, which when enter a **radius r** of a circle **calculates the area and the perimeter** of the circle / round.

Formulas:
-	Area = π \* r \* r
- Perimeter = 2 \* π \* r
- π ≈ 3.14159265358979323846…

```Java
Scanner scanner = new Scanner(System.in);

System.out.print("Enter circle radius. r = ");
double r = Double.parseDouble(scanner.nextLine());
System.out.println("Area = " + Math.PI * r * r); 
  // Math.PI - вградена в Java константа за π
System.out.println("Perimeter = " + 2 * Math.PI * r);
```
НLet’s test the program with **radius `r = 10`**:

![](/assets/chapter-2-1-images/04.Console-output-05.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#5](https://judge.softuni.bg/Contests/Practice/Index/649#5).


### Example: 2D Rectangle Area

A rectangle is given with the **coordinates of two of its opposite angles**. Calculate its **area and perimeter**:

<img alt="rectangleArea" src="/assets/chapter-2-1-images/05.Rectangle-area-01.png" width="250" height="200" />

In this tast we must take into account, that if from the bigger `x` we subtract the smaller `x`, we will obtain the length of the rectangle. Identically, if from the bigger `y` we subtract the smaller `y`, we will obtain the height of the rectangle. What is left is to multiply both sides. Here is an example of an implementation of the described logic:

```Java
Scanner scanner = new Scanner(System.in);

double x1 = Double.parseDouble(scanner.nextLine());
double y1 = Double.parseDouble(scanner.nextLine());
double x2 = Double.parseDouble(scanner.nextLine());
double y2 = Double.parseDouble(scanner.nextLine());

// Изчисляване страните на правоъгълника:
double width = Math.max(x1, x2) - Math.min(x1, x2);
double height = Math.max(y1, y2) - Math.min(y1, y2);

DecimalFormat decimalFormat = new DecimalFormat("#.#########");
System.out.println(decimalFormat.format(width * height));
System.out.println(decimalFormat.format(2 * (width + height)));
```

We use **`Math.max(a, b)`**, to find the bigger value from **`a`** and **`b`** and identically **`Math.min(a, b)`** to find the smaller of both values.

When the program is executed with the values from the coordinate system given in the condition, we obtain the following result:

![](/assets/chapter-2-1-images/04.Console-output-06.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#6](https://judge.softuni.bg/Contests/Practice/Index/649#6).


## What we learned in this chapter?

To summarize what we learned from this chapter of the book:
- **Reading text**: **`String str = scanner.nextLine();`** (as we have written in advance **`Scanner scanner = new Scanner(System.in);`**).
- **Reading an integer**: **`int num = Integer.parseInt(scanner.nextLine());`**.
- **Reading a floating-point number**: **`double num = Double.parseDouble(scanner.nextLine());`**.
- **Calculations with numbers** and using the relevant **arithmetic operators** [`+`, `-`, `*`, `/`, `(`, `)`]: **`int sum = 5 + 3;`**.
- **Printing a text by placeholders** on the console: **`System.out.printf("%d + %d = %d", 3, 5, 3 + 5);`**.

## Exercises: Simple Calculations

Let's solidify what we learned in this chapter with some exercises.

### Blank IntelliJ IDEA Solution (Project)

We start by creating an empty solution **(Project)** in IntelliJ IDEA. The solutions (project) in IntelliJ IDEA combine **a group of tasks**. This opportunity is **very convenient**, when we want to **work on a few projects** and switch quickly between them or we want to **unite logically a few interconnected projects**.

In the current practical exercise, we will use a **Project with a couple of tasks (Java classes)**, to organize the solutions of the tasks from the exercises – every task in a separate Java class and all of them in a common project.

* We start IntelliJ IDEA.
* We create a new **Project:** [**File**] → [**New**] → [**Project**].

![](assets/chapter-2-1-images/06.New-project-01.png)

Select from the dialog window [**Java**], in the field Project SDK we specify which version of Java we will use and finally we click [**Next**] → [**Next**]:

![](assets/chapter-2-1-images/06.New-project-02.png)

![](assets/chapter-2-1-images/06.New-project-03.png)

Give an appropriate name for the project, for example "SimpleCalculations" and also where to be stored our project, after that we click [**Finish**]:

![](assets/chapter-2-1-images/06.New-project-04.png)

Now we have **empty IntelliJ IDEA Project** (without any Java classes in it, which have to be in the `src` folder):

![](assets/chapter-2-1-images/06.New-project-05.png)

The purpose of this project is to add in it **`.java` class per problem** from the exercises.

### Problem: Calculating Square Area

The first exercise from this topic is the following: write a console program that **inputs an integer `a` and calculates the area** of a square with side **`a`**. The task is trivial and easy: **input a number** from the console, **multiply it by itself** and **print the obtained result** on the console.

#### Hints and Guidelines

We create **new Java class** in existing IntelliJ IDEA project. On the **src** folder right-click with the mouse. Choose [**New**] → [**Java Class**]:

![](assets/chapter-2-1-images/07.Square-area-01.png)

A **dialogue window** will open for choosing name to the Java class, for example “SquareArea”:

![](assets/chapter-2-1-images/07.Square-area-02.png)

We already have a Project with Java class in it. What remains is to write the **code for solving this problem**. For this purpose, we write in our Java class `Main` method(as it is shown on the picture) and we go to the main method's body **`Main(string[] args)`**, and write the following code between the opening and closing curly brackets:

![](assets/chapter-2-1-images/07.Square-area-03.png)

The code inputs an integer through **`a = Integer.parseInt(scanner.nextLine())`**, afterwards it calculates **`area = a * a`** and finally prints the value of the variable **`area`**. **We start** the program with [**Ctrl+Shft+F10**] and we **test** it with different input values:

![](assets/chapter-2-1-images/07.Square-area-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#0](https://judge.softuni.bg/Contests/Practice/Index/649#0). You have to get 100 points (completely correct solution):

![](assets/chapter-2-1-images/07.Square-area-05.png)

![](assets/chapter-2-1-images/07.Square-area-06.png)


### Problem: Inches to Centimeters

Write a program that **reads a number from the console** (not necessarily an integer) and converts the number from **inches to centimeters.** For this purpose **it multiplies the inches by 2.54** (because one inch = 2.54 centimeters).

#### Hints and Guidelines

First, we create **new Java class** in the project “SimpleCalculations”. We click on the folder **src** and choose [**New**] → [**Java Class**]:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-01.png)

A dialogue window shows up in which we write file’s name. In our case this is "InchesToCentimeters" → [**OK**]:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-02.png)

Next, we have to write the **program code**:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-03.png)

**We start the program** with the right button of the mouse on the window of the current program. We choose [**Run InchesToCentim...main()**] or we press [**Ctrl+Shift+F10**]. This shortcut starts the program in the current Java class (the one in which we wrote last):

![](assets/chapter-2-1-images/08.Inches-to-centimeters-04.png)

We obtain the following result:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-05.png)

Now **let's switch to the previous program / task** ("Square Area"). This is done by double-clicking on the file **`SquareArea.java`** from the folder **src** in the project [**SimpleCalculations**]:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-06.png)

If we use [**Shift+F10**] or press one of the two green arrows (located at the top right and bottom left of the IntelliJ IDEA window)

![](assets/chapter-2-1-images/08.Inches-to-centimeters-07.png)

The last compiled program will be executed (**InchesToCentimeters**). We can see it as a name in the upper right corner of the window in front of one of the two green arrows:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-08.png)

**Switching between projects** is very easy, isn't it? Just choose the file with the source code of the program, double click it and when it starts, the program from the current file is being executed.

Let's test with floating-point numbers, for example with **2.5**:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-09.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>В зависимост от регионалните настройки на операционната система, е възможно вместо <b>десетична точка</b> (US настройки) да се използва <b>десетична запетая</b> (BG настройки).</td>
</tr></table>

If the program expects a decimal point and instead you enter a number with a decimal comma or the opposite (to enter a decimal point, when a decimal comma is expected), the following error will be produced:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-10.png)

It is recommended to **change the settings of your computer**, in order to use a **decimal point**:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-11.png)

![](assets/chapter-2-1-images/08.Inches-to-centimeters-12.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#1](https://judge.softuni.bg/Contests/Practice/Index/649#1).

The solution should be accepted as a completely correct one:

![](assets/chapter-2-1-images/08.Inches-to-centimeters-13.png)


### Problem: Greeting by Name

Write a program that **reads from the console a person's name** and prints **`Hello, <name>!`**, where **`<name>`** is the name entered earlier.

#### Hints and Guidelines

First, we create **new Java class** with name “Greeting” in the project “SimpleCalculations”:

![](assets/chapter-2-1-images/09.Greeting-by-name-01.png)

**Next, we have to write the code** of the program. If you have any difficulties, you can use the code from the example below:

![](assets/chapter-2-1-images/09.Greeting-by-name-02.png)

**Run** the program with [**Ctrl+Shift+F10**] and test if it works:

![](assets/chapter-2-1-images/09.Greeting-by-name-03.png)

#### Testing in the Judge System

Test your solution here:  [https://judge.softuni.bg/Contests/Practice/Index/649#2](hhttps://judge.softuni.bg/Contests/Practice/Index/649#2).


### Problem: Concatenating Text and Numbers

Write a Java program, that reads from the console a first name, last name, age and city and prints a message of the following kind: **`You are <firstName> <lastName>, a <age>-years old person from <town>.`**.

#### Hints and Guidelines

We add to the existing IntelliJ IDEA Project one more Java Class with name "`ConcatenateData`".	**We write the code**, which reads the input from the console:

![](assets/chapter-2-1-images/10.Concatenate-data-01.png)

**The code**, that prints the message described in the problem requirements should be finished.

![](assets/chapter-2-1-images/10.Concatenate-data-02.png)

In the picture above the code is blurred on purpose, in order for you to think of a way to finish it yourself.

СNext, the solution should be tested locally using [**Ctrl+Shift+F10**] and by entering an exemplary input data.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#3](https://judge.softuni.bg/Contests/Practice/Index/649#3).


### Problem: Trapezoid Area

Write a program that reads three numbers from the console **b1**, **b2** and **h** and calculates **the area of a trapezoid** with bases **b1** and **b2** and height **h**. The formula for trapezoid area is **(b1 + b2) * h / 2**.

On the figure below shows a trapezoid with bases 8 and 13 and height 7. It has an area **(8 + 13) * 7 / 2 = 73.5**.

![](assets/chapter-2-1-images/11.Trapezoid-area-01.png)

#### Hints and Guidelines

Again, we have to add to the existing IntelliJ IDEA Project another **Java class** with name "`TrapezoidArea`" and to write **the code, that reads the input from the console, calculates the trapezoid area and prints it**:

![](assets/chapter-2-1-images/11.Trapezoid-area-02.png)

The code on the picture is purposely blurred, in order for you to give it a thought and finish it yourself.

**Test** your solution locally using [**Ctrl+Shift+F10**] and enter an exemplary data.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#4](https://judge.softuni.bg/Contests/Practice/Index/649#4).


### Problem: Circle Area and Perimeter

Write a program that reads from the console **a number r** r and calculates and prints **the area and perimeter of the circle**/**round** with **radius r**.

#### Sample Input and Output

| Вход  |           Изход                                          |    
|-----|--------------------------------------------------------|
| 3     | Area = 28.2743338823081 <br> Perimeter = 18.8495559215388|
| 4.5   | Area = 63.6172512351933 <br> Perimeter = 28.2743338823081|

#### Hints and Guidelines

For the calculations you may use the following formulas:
-	**`Area = Math.PI * r * r`**.
-	**`Perimeter = 2 * Math.PI * r`**.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#5](https://judge.softuni.bg/Contests/Practice/Index/649#5).


### Problem: Rectangle Area

**A rectangle** is defined by the **coordinates** at two of its opposite angles (x1, y1) – (x2, y2). Calculate its **area and perimeter**. **The input** is read from the console. The numbers **x1, y1, x2 и y2** are given one per line. **The output** is printed on the console and it has to contain two lines, each with one number – the area and the perimeter.

![](/assets/chapter-2-1-images/12.Rectangle-area-01.png)

#### Sample Input and Output

|               Вход                        |       Изход         |
|-----------------------------------------|-------------------|
|60<br>20<br>10<br>50                     |1500<br>160         |
|30<br>40<br>70<br>-10                   |2000<br>180         |
|600.25<br>500.75<br>100.50<br>-200.5    |350449.6875<br>2402 |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#6](https://judge.softuni.bg/Contests/Practice/Index/649#6).


### Problem: Triangle Area

Write a program that reads from the console **a side and height of a triangle** and calculates its area. Use **the formula** for triangle area: **area = a * h / 2**. Round the result to **2 digits after the decimal point using `Math.round(area, 2)`**.

#### Sample Input and Output

|       Вход           |         Изход         |
|--------------------|---------------------|
| 20 <br>30            | Triangle area = 300   |
| 15 <br>35            | Triangle area = 262.5 |
| 7.75 <br>8.45        | Triangle area = 32.74 |
| 1.23456 <br>4.56789  | Triangle area = 2.82  |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#7](https://judge.softuni.bg/Contests/Practice/Index/649#7).


### Problem: Converter – from °C Degrees to °F Degrees

Write a program that reads **degrees on Celsius scale** (°C) and converts them to **degrees on Fahrenheit scale** (°F). Look on the Internet for a proper [formula](http://bfy.tw/3rGh "Търсене в Google"), to do the calculations. Round the result to **2 digits after the decimal point**. Here are a few examples:

#### Sample Input and Output

| Вход | Изход |
|----|-----|
|  25  |   77  |
|   0  |   32  |
| -5.5 |  22.1 |
| 32.3 | 90.14 |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#8](https://judge.softuni.bg/Contests/Practice/Index/649#8).


### Problem: Converter – from Radians to Degrees

Write a program, that reads **ъan angle in [radians](https://bg.wikipedia.org/wiki/Радиан)** (**`rad`**) and converts it to **[degrees](https://bg.wikipedia.org/wiki/Градус_(ъгъл))** (`deg`). Look for a proper formula on the Internet. The number **π** in Java programs is available through **``Math.PI``**. Round the result to the nearest integer using the method **``Math.round(…)``**.

#### Sample Input and Output

|  Вход  | Изход |
|------|-----|
| 3.1416 |  180  |       
| 6.2832 |  360  | 
| 0.7854 |   45  | 
| 0.5236 |   30  |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#9](https://judge.softuni.bg/Contests/Practice/Index/649#9).


### Problem: Converter – USD to BGN

Write a program for **conversion of US dollars** (USD) **into Bulgarian levs** (BGN). **Round** the result **2 digits** след десетичния знак. after the decimal point. Use a fixed rate between a dollar and levs: **1 USD = 1.79549 BGN**.

#### Sample Input and Output

|  Вход  |    Изход  |
|------|---------|
|   20   | 35.91 BGN |      
|   100  | 179.55 BGN|
|  12.5  | 22.44 BGN |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#10](https://judge.softuni.bg/Contests/Practice/Index/649#10).


### Problem:	\* Currency Converter

Write a program for **conversion of money from one currency into another**. It has to support the following currencies: **BGN, USD, EUR, GBP**. Use the following fixed currency rates:

|  Курс  |   USD   |   EUR   |   GBP   |
|:------:|:-------:|:-------:|:-------:|
| 1 BGN  | 1.79549 | 1.95583 | 2.53405 |

**The input** is **sum for conversion**, **input currency** and **output currency**. **The output** is one number – the converted value of the above currency rates, rounded **2 digits** after the decimal point. 

#### Sample Input and Output

|        Вход        |   Изход  |
|------------------|--------|
|   20<br>USD<br>BGN |35.91 BGN |     
|  100<br>BGN<br>EUR |51.13 EUR | 
| 12.35<br>EUR<br>GBP| 9.53 GBP |  
|150.35<br>USD<br>EUR|138.02 EUR|
 
#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#11](https://judge.softuni.bg/Contests/Practice/Index/649#11).


### Problem: ** Date Calculations – 1000 Days on the Earth

Write a program that enters a **birth date** in format **`dd-MM-yyyy`** and calculates the date on which **1000 days** are turned since this birth date and prints it in the same format.

#### Sample Input and Output

|   Вход   |	 Изход  |
|--------|--------|
|25-02-1995|21-11-1997|
|07-11-2003|03-08-2006|
|30-12-2002|25-09-2005|
|01-01-2012|27-09-2014|
|14-06-1980|11-03-1983|

#### Hints and Guidelines 
  * Look for information about the data type **`Date`**, **`Calendar`** and **`SimpleDateFormat`** in Java and in particular look at the methods **`Calendar.setTime(date)`**, **`Calendar.add(countDays)`** and **`SimpleDateFormat.format(date)`**. With their help you can solve the problem without the need to calculate days, months and leap years.
  * **Don't print** anything additional on the console except for the wanted date!

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/649#12](https://judge.softuni.bg/Contests/Practice/Index/649#12).
