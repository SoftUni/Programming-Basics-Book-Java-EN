# Chapter 1. First Steps in Programming

In this chapter, we are going to figure out **what programming is** at its core. We will get familiar with the idea of **programming languages**, and we will look at the **integrated development environments** (IDE) and how to work with them, particularly with **IntelliJ IDEA**. We will write and execute our **first program** with the programming language **Java**, and afterward, we will exercise with a few problems we will create a console program, a graphic application, and a web application. We are going to learn how to check for correctness the solutions from this book in the **Judge system of SoftUni**, and at the end, we will get familiar with the typical errors, which are made when writing code and how to avoid them.

## Videos

<div class="video-player">
  Watch a video lesson about Getting Started with Java: <a target="_blank"
  href="https://www.youtube.com/watch?v=sXM31yfsj04">
  https://www.youtube.com/watch?v=sXM31yfsj04</a>.
</div>
<br>
<div class="video-player">
  Watch a video lesson about IntelliJ IDEA: <a target="_blank"
  href="https://www.youtube.com/watch?v=3Hny8Mz2agQ">
  https://www.youtube.com/watch?v=3Hny8Mz2agQ</a>.
</div>

## What Does It Mean to Program?

To program means to give instructions to the computer, for example, *play a certain sound*, *print something on the screen*, or *multiply two numbers*. When there is a series of commands, we have a computer program (script). The computer program's text is called **program code** (**source code** or **just code**).

## Computer Programs

**Computer programs** represent a **series of commands** written in a particular **programming language**, like Python, C#, Java, JavaScript, Ruby, PHP, C, C++, Go, etc. To write commands, we need to be familiar with the **syntax and semantics of the language** we'll be using, in our case – **Java**. In this book, we will cover programming in general, as well as Python's particular syntax and semantics. We will examine each step of writing code, starting with the simplest and eventually reaching more complex programming constructs.

### Algorithms

Computer programs usually execute some sort of algorithm. **Algorithms** are a series of steps used to complete a problem and achieve an expected result - something like a recipe. For example, if we need to fry some eggs, we follow a specific recipe (algorithm): we heat some oil in a pan, then we break the eggs, we wait until they are cooked, and finally, move the pan away from the heat. Similarly, in programming, **computer programs execute algorithms** – a series of commands needed to complete a specific problem, for example, if we want to print a series of numbers in ascending order, we need an algorithm. It will go through all the numbers, find the smallest one and print it, then go through the rest of them and do the same until there are no more numbers left.

To make creating programs, writing program code (commands), executing it, and other operations that have to do with programming more convenient, we need a **development environment** (IDE) like **IntelliJ**.

### Programming Languages, Compilers, Interpreters, and Environments for Development

**Programming languages** are artificial languages (syntax for expression), designed to **issue commands** which we expect the computer to read, process, and execute. With the help of programming languages, we write a series of commands (**programs**) that **tell the computer what to do**. Execution of computer programs can be achieved by using either a **compiler** or an **interpreter**.

**The compiler** translates code from a programming language into **machine code** and for each construct (command) in the code, it chooses an appropriate, predefined fragment of machine code while simultaneously checking the program's text for **errors**. Together, all the compiled fragments represent the original program translated in machine code, exactly how the computer's microprocessor is expecting it. After it's been compiled, the program can be directly executed by the microprocessor in cooperation with the operating system. Compiled programming languages **compile the program** before executing it and find syntactic errors (incorrect commands) during compile time. Languages like C++, C#, Java, Swift, and Go work with compilers.

Some programming languages don't use a compiler but are **directly interpreted** by specialized software called an interpreter. **The interpreter** is a **program that executes programs**, written in some programming language. It executes the program's commands in sequence and understands not only single commands and series of commands but also other language constructs (checks, iterations, functions, etc.). PHP, Python, and JavaScript are languages that work with an interpreter and are executed without the need to be compiled. Due to lack of preliminary compilation, **interpreted languages' errors are found during the run time** after the program has already started working.

**The development environment** (Integrated Development Environment – **IDE**) combines traditional instruments for software development. In the development environment we write code, compile and execute programs. Development environments incorporate a **text editor** for writing code, a **programming language**, a **compiler** or **interpreter**, an **execution environment** where our program is executed, a **debugger** that  traces our program and looks for errors, **instruments for design, and user interface** as well as other instruments and add-ons.

**Development environments** are convenient because they incorporate everything necessary to develop a program, so there's no need to leave the environment. If we don't use a development environment, we'll have to write code in a text editor, compile it with a command from the console, execute it with another command from the console and write additional commands, when needed, which will cost a lot of time. This is why most programmers use IDEs for everyday work.

For programming with the **Java language** the most commonly used development environment is **IntelliJ IDEA**, which is developed and distributed by JetBrains and it can be downloaded free from their website: [https://jetbrains.com/idea](https://jetbrains.com/idea).

Alternatives of IntelliJ IDEA are **Eclipse** [https://eclipse.org/downloads/packages](https://eclipse.org/downloads/packages), **NetBeans** [https://netbeans.apache.org/download](https://netbeans.apache.org/download), and **JDeveloper** [https://www.oracle.com/tools/downloads/jdeveloper-12c-downloads.html](https://www.oracle.com/tools/downloads/jdeveloper-12c-downloads.html) and many others. In the current book, we are going to use IntelliJ IDEA.

If you don't have an opportunity to install an IDE, you can use some online Java IDE like **Repl.it**: [https://repl.it/languages/java](https://repl.it/languages/java).

### Low- and High-Level Languages, Runtime Environments
A program is, in essence, a **set of instructions** that ask the computer to carry out specific problems. They are entered by the programmer and **executed unconditionally by the machine**.

There are different types of **programming languages**. **Lowest-level** languages are used to write the **instructions commanding the processor** - **Assembler** is one such language. Higher-level languages are utilized to create an operating system, drivers for managing hardware (video card drivers, for example), web browsers, compilers, engines for game graphics (game engines), and other system components and programs. Even higher-level languages like **JavaScript**, **C#**, and **Python** are used to create application software, like programs for reading mail or chatting.

**Low-level languages** command hardware directly and require a lot of effort, and a vast number of commands, to carry out a specific problem. **Higher-level languages** require less code to achieve the same result but have no direct access to hardware. They are used to develop application software like web and mobile applications.

Most of the software we use daily like music players, video players, GSP programs, etc., is written on high-level **languages for application programming** like Python, JavaScript, C#, Java, C++, PHP, etc.

**Java is a compiled language**, and this means that we are writing commands, which are being compiled before they are executed. The code, written in Java, is not compiled to machine code for a specific processor, but for a specific language, **called Java bytecode**. Due to that, the execution of a program, written in Java, requires a virtual machine - **Java Virtual Machine** (JVM). 

The Java compiler, the virtual machine, and many libraries stand inside the core of the **Java platform**. The Java platform is developed in a few variations

- **Java Standard Edition** (Java SE) – the basic version, which is used for the development of client applications and the so-called Java applets.
- **Java Enterprise Edition** (Java EE) – based on the Standard Edition, it is mostly used with server applications on the internet, but besides that, it includes many other software technologies.
- **Java Micro Edition** (Java ME) – a standalone light version for working on devices with limited computing power like mobile phones, smartphones, PDA devices, and others.

### Computer Programs - Compilation and Execution
As we have already mentioned, the program is a **sequence of commands**, in other words, it describes a sequence of calculations, evaluations, iterations, and all kinds of similar operations, which aim to accomplish some result.

The program is written in text format, and the text of the program itself is called a **source code**. It is compiled to an executable file (for example, `Program.cs` is compiled to `Program.exe`), or it is executed directly from the .NET environment.

The compilation process of the code, before its execution, is used only in compiled languages like C#, Java, and C++. Scripts and interpreted languages, like JavaScript, Python, and PHP, the source code gets executed step by step by an interpreter.

### Computer Programs – Problems
Let us start with a simple example Java program, which consists of a single command.

#### Problem: a Command Which Prints a Given Text

Our first program will consist of a **single Java command** which prints the word *"Hello"*
```java
System.out.println("Hello");
```

In a moment, we will get to know **how to execute this command**, but for now, we will just stick to what commands in programming consist of. Let us have a look at a few more examples.

#### Problem: a Program Which Checks Whether a Word Contains Another Word

We can check whether the word "alright" consist of the word "right" using the **contains** method:
```java
System.out.println("alright".contains("right"));
```

#### Problem: a Program Which Converts Bulgarian BGNs (leva) into Euro

Let us have a look at another simple program that reads a number of levs (Bulgaria's currency) (whole number) from the user, converts them into euro (divides them by the euro exchange rate), and prints the result. This is a program of three consecutive commands.
```java
Scanner console = new Scanner(System.in);
double leva = Double.parseDouble(console.nextLine());
double euro = leva / 1.95583;
System.out.println(euro);
```
We looked at **three examples of computer programs**: two with a single command, and one consisting of a sequence of three commands. Let us now move on to the more exciting bit: writing, compiling, and executing our programs in **Java**.

## How Do We Write a Console Program?

Let's go through the necessary **steps to create and execute a computer program** that uses a text console (window for entering and printing text) to read and write its data. Such programs are called **console programs**. But first of all, we need to **install and prepare the development environment** where we will write and execute the Java programs from this book and the exercises that go along with it.

## Java Development Kit (JDK)

To create programs using the Java programming language, we need to install the **Java Development Kit**. It includes a **virtual machine**, a **Java compiler**, and numerous **helper tools**. JDK should not be confused for a runtime environment – **Java Runtime Environment** (JRE). Installing JRE will allow us to open and work with Java programs but won't give us the ability to develop our own.

## Installing JDK
JDK is distributed freely and can be downloaded from this link: https://oracle.com/technetwork/java/javase/downloads. Choose the latest version of **Java SE** (Java Standard Edition).

![](assets/chapter-1-images/00.Jdk-1.png)

We need to accept the license agreement and choose the installation file which corresponds to our operating system. Windows 64-bit, for instance.

![](assets/chapter-1-images/00.Jdk-2.png)

Then we can download the installation file and run it. The installer which opens should look like this on a **Windows** environment:

![](assets/chapter-1-images/00.Jdk-3.png)

Press the **[Next]** button a few times until the Java development Kit starts installing:

![](assets/chapter-1-images/00.Jdk-4.png)

When it's finished, close the installer with the **[Close]** button.
Installation on a Linux environment may be completely different, but most often, you need to install a standard package from the central repository `sudo apt install default-jdk`.

## Development Environment (IDE)

As was already noted, we need a development environment (IDE – Integrated Development Environment) to program. The IDE is a program editor, where we write program code and execute it, discover our mistakes, correct them and start the program again.
-	Suitable environments for Java programming are the IntelliJ IDEA, Eclipse, and NetBeans.

## Installing IntelliJ IDEA

Let us start installing the **integrated environment** **IntelliJ IDEA Community** (version 2021, current as of September 2021).
**The community version** of IntelliJ IDEA is **free distributed** by JetBrains and can be downloaded from this link: [https://jetbrains.com/idea/download](https://www.jetbrains.com/idea/download).
The following paragraphs contain a detailed description of the **steps needed to install IntelliJ IDEA** (version Community 2021). After we download and run the installation file, appear the following screen:

![](assets/chapter-1-images/00.Intellij-idea-1.png)

We click the **[Next]** button, and we will see the following window displayed:

![](assets/chapter-1-images/00.Intellij-idea-2.png)

We click the **[Next]** button one more time, and IntelliJ IDEA's installation panel gets loaded on the screen.

![](assets/chapter-1-images/00.Intellij-idea-3.png)

Depending on our operating system, we choose the 32 or the 64-bit launcher.  Then we tick the **[.java]**, **[.groovy]** and **[.kt]** boxes and click **[Next]**.

We save the folder's name in the start menu and click **[Install]**. The following screen should appear once IntelliJ IDEA has started installing:

![](assets/chapter-1-images/00.Intellij-idea-4.png)

When the process is finished, tick the **[Run IntelliJ IDEA]** box and hit **[Finish]**, which will wrap up the installation and run the development environment.

![](assets/chapter-1-images/00.Intellij-idea-5.png)

We choose **[Create New Project]** from IntelliJ IDEA's welcome screen:

![](assets/chapter-1-images/00.Intellij-idea-6.png)

A window that shows we haven't chosen a software development kit (SDK) gets displayed:

![](assets/chapter-1-images/00.Intellij-idea-7.png)

We click **[New]** and find the route to the **Java Development Kit** (JDK) we already installed, being careful not to choose **JRE**.

![](assets/chapter-1-images/00.Intellij-idea-8.png)

Then we select the JDK installation folder and click **[OK]**. That is it. We are ready to start working with **IntelliJ IDEA**.

### Older Versions of IntelliJ IDEA

Using older versions of IntelliJ IDEA is possible but **not advisable**. Older versions might not contain some of the newest development options, and some of the examples from this book may not be compiled.

### Online Development Environments

There are also **online development environments** that allow you to write code directly in your browser. They are not the most convenient, but if you have no other options, you can use them at the start of your education and install IntelliJ IDEA later. You can find useful links here:
- For Java, we can use the following online Java IDE: [https://www.compilejava.net](https://www.compilejava.net).
- For C# we can use **.NET Fiddle**: [https://dotnetfiddle.net](https://dotnetfiddle.net).
- For JavaScript, we can write JS code directly in our browser by pressing **[F12]**.

### Project Solutions and Projects in IntelliJ IDEA

The IntelliJ IDEA project uses **logic to group the numerous files** that make up a specific application or component. A single **IntelliJ IDEA project** consists of several **Java source files**, configuration files, and other resources. Each Java source file can have several **definitions and types** (classes or other definitions). **Classes** contain methods (actions), which consist of a **series of commands**. It may seem complicated, but in larger projects, this structure is extremely convenient and allows for a good organization of our work files.

### Problem: Creating a 'Hello Java' Console Program

Let us get back to our console program. Now that we have IntelliJ IDEA installed, we can run it. Then we will create a new project: **[Create New Project]**. Choose **[Java]** -> **[Command Line App]** from the dialog window and give our project an appropriate name – `HelloJava`, for instance.

![](assets/chapter-1-images/01.Hello-java-01.png)

![](assets/chapter-1-images/01.Hello-java-02.png)

IntelliJ IDEA will create a blank Java program for us and we will need to write the code for it.

#### Writing Program Code

Java programs' source code is written between the curly brackets of the **`main(String[] args)`** section. It is the main method (action) executed when starting a Java program. Press [Enter] after the opening bracket, and we can start writing. In regards to text formatting, program code is written with an indentation which helps when reviewing and debugging it. 

![](assets/chapter-1-images/01.Hello-java-03.png)

We can write the following command:
```java
System.out.println("Hello Java");
```

And here's what our program in IntelliJ IDEA should look like:

![](assets/chapter-1-images/01.Hello-java-04.png)

The **`System.out.printIn("Hello Java")`** command in the Java language allows us to print the text message **`"Hello Java"`** on the console ('out.printIn(…)'). The message needs to be enclosed in quotes that signify text. At the end of every Java command, we place a semicolon **`;`** that indicates the end of the command (meaning it doesn't continue on the next row).

This command is quite typical for programming: signify we need a certain **object** (a **`PrintStream`** object named **`out`** located in the object **`System`**, in this case) to be found, and a certain **`action`** (printing something, passed within brackets, in this case) to be performed on it. In more technical terms, we call the method **`printIn(…)`** from the class **`PrintStream`**, part of the **`System`** class, and pass as a parameter to it the text **`Hello Java`**.

#### Classes and Files in Java

**Java** is an **object-oriented language** hence why every Java program consists of at least one **class**. If the Java class is public, its name needs to match the name of the file + **`.java`**. In the above example, the **`Main`** class, defined with **`public class Main {…}`**, is located in a file named **`Main.java`** in the project's **`src`** folder. Were it called **`HelloJava`**, its source code would need to be located in a file named **`HelloJava.java`**. Otherwise, we'd get a compile-time error. 

#### Starting The Program

We start the program by pressing **[Ctrl + Shift + F10]**. If there are no errors, the program will execute. The result will be displayed on the console (the window at the very bottom of IntelliJ IDEA).

![](assets/chapter-1-images/01.Hello-java-05.png)

The result of the program is the following message:
```java
Hello Java
```
The additional message **`Process finished with exit code 0`**  is written last in the console and signifies that the program has ended with no errors.

#### Testing in The Judge System

Testing the solutions to the problems in this book is completely automated via the Judge System's website: [https://judge.softuni.org](https://judge.softuni.org). The solutions are judged in real-time by the system. Each solution goes through a series of hidden tests, and every test that passes grants the user certain points.
The program that we just wrote can be tested here:
[https://judge.softuni.org/Contests/Practice/Index/646#0](https://judge.softuni.org/Contests/Practice/Index/646#0).
We need to paste the program's entire source code in the black field and make sure we've selected **Java code** from the dropdown menu.

![](/assets/chapter-1-images/01.Hello-java-06.png)

Then we can send our solution by clicking the **[Submit]** button. The system returns a result in a few seconds, which is displayed in the table of submitted solutions. If necessary, we can hit the **[Refresh]** button at the upper right-hand corner of the table of submitted solutions:

![](/assets/chapter-1-images/01.Hello-java-07.png)

The Judge System will display one of the following possible results in the table:
* A **number of points** (between 0 and 100), when the submitted code is compiled successfully (there are no syntactic errors) and can be tested.
    - If our solution is **correct**, all tests are marked in green, and we receive **100 points**.
    - If our solution is **incorrect**, some tests are marked in red, and we receive less than 100 or 0 points.
* If there are syntactic errors in our program, we receive a **compile-time error message**.

### How Do I Register at SoftUni Judge?

It's just a standard website registration and takes no more than a minute.

## Typical Mistakes in Java Programs

One mistake that often sees with beginners is that they write their **code outside the body of the `main(String[] args)` method**. It causes an error because the integrated environment or the compiler cannot read the commands issued in the program correctly. Here is an example of an incorrect program:
```java
static void main(String[] args)
{
}
System.out.println("Hello SoftUni");
```

Another usual mistake is mixing up **capital and lowercase letters**. They matter when we call commands and can impede proper functioning. Here is an example of such a mistake:
```java
static void main(String[] args)
{
    System.out.Println("Hello SoftUni");
}
```

In the example above, **`PrintIn`** is written incorrectly, and the capital letter **`P`** needs to be changed to lowercase.

The missing **semicolon** `(;)`** at the end of commands is one of the timeless issues for beginner programmers. Skipping this symbol leads to the **program functioning improperly**, and it is very often left **unnoticed**. Here is an example of incorrect code:
```java
static void main(String[] args)
{
    System.out.println("Hello SoftUni")
}
```

A missing **quotation mark** or **closing bracket** can also cause issues. As with the *semicolon*, this will lead to the program either **functioning improperly** or not executing at all. Such mistakes are hard to notice, especially with large amounts of code. Here is an example of an incorrect program with a lonely opening quotation mark:
```java
static void main(String[] args)
{
    System.out.println("Hello SoftUni);
}
```

This program will return a **compile-time error**, and even before that, the code will be underlined to draw the programmer's attention towards the error (missing closing quotation mark).
Another beginner's frequent mistake is trying to write the **`main(…)`** method outside the class:
```java
public class Example {
}

static void main(String[] args)
{
    System.out.println("Method outside of the class");
}
```

The correct way to do this is by placing the **`main(…)`** method within the **`Example`** class and saving the entire code in the **`Example.java`** file:
```java
 Put this code in the file Example.java

public class Example {
    static void main(String[] args) {
        System.out.println(Correct class);
    }
}

```

## What Have We Learned from This Chapter?

First of all, we learned **what programming is** – **issuing commands written in a computer language** that the machine can understand and carry out. We also found out **what a computer program is** – a **series of commands** that aim to achieve a certain result. We gained some basic knowledge of the **Java programming language** and learned **how to create simple console programs using IntelliJ IDEA**. We followed Java's program code structure, one example of which is that issuing of commands mainly happens in the **`static void main(String[] args)`** section, within the curly brackets. We looked at printing with the function **`System.out.printIn(…)`** and starting the program with **[Ctrl + Shift + F10]**. And last but not least, we now know how to test our code in **SoftUni's Judge System**.

Top work! Let us now tackle the **exercises**. You remember that learning how to program involves a lot of code writing and problem-solving, right? Let us do just that and put what we have learned into practice.

## First Steps in Programming – Exercises

Welcome to the exercises. We are now going to write a couple of console applications, which will help us make a few more steps into programming. After that, we will show you how to program something more complex – programs with graphical and web user interfaces.

### Problem: Expression

Write a console-based Java program that **calculates** and **prints** the value of the following numerical expression:
<p align="center"> (3522 + 52353) * 23 - (2336 * 501 + 23432 - 6743) * 3 </p>

Note: **you are not allowed to previously calculate the value** (for example, with Windows Calculator).

### Hints and Guidelines

Create a **new Java file** and name it **`Expression`**. Then we find the method **`static void main(String[] args)`** and start writing in its body (the space **between the opening and closing curly braces**). We need to **write the code**, which will calculate the numeric expression above and print its value on the console. Pass the expression to the **`System.out.printIn(…)`** command by writing it within its brackets:

![](assets/chapter-1-images/02.Expression-01.png)

Start the program with **[Ctrl + Shift + F10]** and check whether the result matches the one from the picture:

![](assets/chapter-1-images/02.Expression-02.png)

### Testing in The Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/646#1](https://judge.softuni.org/Contests/Practice/Index/646#1).

![](assets/chapter-1-images/02.Expression-03.png)

### Problem: Nums 1...20

Write a Java console program that **prints the numbers from 1 to 20** on separate lines on the console.

### Hints and Guidelines

Create a new Java class and name it **`Nums1to20`** (right click on the **`src`** folder -> [New] -> [Java Class])

![](/assets/chapter-1-images/03.Numbers-1-to-20-01.png)

Inside the **`static void main(String[] args`** method, write 20 **`print()`** commands, each on a separate line, to print the numbers from 1 to 20 one after another. Some of you may be wondering if there is a cleverer way. Don't worry, there is, but we will mention it later on.

![](/assets/chapter-1-images/03.Numbers-1-to-20-02.png)

Let's now **start the program** and check whether the result is what we're expecting:
```
1
2
…
20
```

### Testing in The Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/646#2](https://judge.softuni.org/Contests/Practice/Index/646#2).
Now try and think of a cleverer way we can write this program, to avoid repeating the same command so many times. Look up information for "**[for loop Java](https://www.google.com/search?q=for+loop+Java&oq=for+loop+Java)**" on the Internet.

### Problem: Triangle of 55 Stars
Write a Java console program that **prints a triangle of 55 stars** on 10 lines:
```
*
**
***
****
*****
******
*******
********
*********
**********
```

### Hints and Guidelines

Create a **new Java console application** and name it **TriangleOf55Stars**. Inside we need to write code that prints the triangle of stars, using commands like the ones below:
```java
System.out.println();
System.out.println();
…
```
### Testing in The Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/646#3](https://judge.softuni.org/Contests/Practice/Index/646#3).

Try and **improve your solution** to avoid repeating the same command so many times. Can this be achieved with a **`for`**-loop? Did you manage to invent a better solution (with a for-loop, for example) to the previous problem? The current problem can be solved with a similar but more complex approach (a loop within another loop). It is completely fine if you can't figure it out, you will remember this problem when we learn about loops in a few chapters.

### Problem: Rectangle Area

Write a Java program that receives two numbers, **a** and **b**, then calculates and prints the area of a rectangle with sides **a** and **b**.

### Sample Input and Output

| a | b | area | 
| --- | --- | --- | 
| 2 | 7 | 14 |  
| 7 | 8 | 56 |
| 12 | 5 | 60 | 
 
### Hints and Guidelines

Create a **new Java console application**. We will use the following code to read our numbers:
```java
import java.util.Scanner;

public class RectangleArea {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int a = Integer.parseInt(console.nextLine());
        int b = Integer.parseInt(console.nextLine());

        // TODO: calculate the area and print it
    }
}
```
To read input data from the console, we import and use the `java.util.Scanner` class, which we will look at in detail a little later. For now, just accept that the reading number is achieved as in the example above.

What is left is to finish the program to calculate the rectangle's area and print it. Pass the product of **`a`** and **`b`** to the already familiar **`System.out.printIn()`** command. In programming, we multiply using the **`*`** operator.

### Test Your Solution
Test your solution with a few examples. You should receive a result identical to the one you see below (we enter 2 and 7 as input, and the program prints 14 – their product, as output):
```
2
7
14
```

### Testing in The Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/1046#4](https://judge.softuni.org/Contests/Practice/Index/1046#4).

### Problem: Square of Stars
Write a **Java console program** that **reads** a whole positive number N from the console and **prints a square of N stars on the console**, like in the examples below.

### Sample Input and Output

| Input  |    Output   	| Input  |    Output   	| Input  |    Output   	| 
|-----|-----------|-----|-----------|-----|----------|
|  3  	|<code>\*\*\*</code><br><code>\*&nbsp;\*</code><br><code>\*\*\*</code>|  4  |<code>\*\*\*\*</code><br><code>\*&nbsp;&nbsp;\*</code><br><code>\*&nbsp;&nbsp;\*</code><br><code>\*\*\*\*</code>| 5  	|<code>\*\*\*\*\*</code><br><code>\*&nbsp;&nbsp;&nbsp;\*</code><br><code>\*&nbsp;&nbsp;&nbsp;\*</code><br><code>\*&nbsp;&nbsp;&nbsp;\*</code><br><code>\*\*\*\*\*</code>|

### Hints and Guidelines

Create a new **Java console program**. To read the number N (2 ≤ N ≤100), we use the following code:
```java
Scanner console = new Scanner(System.in);
int n = Integer.parseInt(console.nextLine());

// TODO: print the rectangle
```

Don't forget to import the `java.util.Scanner` class and put your code in the `main(…)` method of your program's main class. Finish the program so that it prints a square made up of stars. You may need to use `for`-loops. Look up information on the Internet.

**Caution**: this problem is more complex than the rest and is presented to you at this point purposefully. It is marked with a star to provoke you to **look for information on the Internet**. It is one of the most important skills you have to develop while you're learning to program. It is what you'll be doing every day if you work as a developer, so don't be scared to try it out. 

### Testing in The Judge System

Test your solution here: [https://judge.softuni.org/Contests/Practice/Index/646#5](https://judge.softuni.org/Contests/Practice/Index/646#5).

## Console, Graphical, and Web Applications

With **console applications**, as you can figure out yourselves, **all operations** for reading input and printing output are done through the **console**. There the **input data is inserted**, which is read from the application also in it, is **printed the output data** after or during the runtime of the program.

While the console application uses the **text console**, web applications use a **web-based user interface**. To receive their performance are needed two things - a **web server** and a **web browser**, as the browser plays the main role in the **visualization of the data and the interaction with the user**. Web applications are much more pleasant for the user, they visually look better, and a mouse and touch screen can be used (for tablets and smartphones), but behind all of that stands programming. And this is why we **have to learn to program**. We have already made our first steps.

**Graphical (GUI) applications** have a **visual user interface**, directly into your computer or mobile device, without a web browser. Graphical applications (or otherwise said, desktop applications) **contain one or more graphical windows**, which consist of specific **controllers** (text fields, buttons, pictures, tables, and others), **serving for dialog with the user** more intuitively. Similar to them are the mobile applications in your telephone or your tablet, we use forms, text fields, buttons, and other controls, and we control them by programming code. It is why we are learning how to write code now **that code is everywhere in software development**.

## Exercises Graphical and Web Applications
Now we are about to build one simple **web application** and one simple **graphical application**, to take a look at what we will be able to create when we progress with programming and software development. We are not going to look through the details about the used techniques and constructions fundamentally, rather we are just going to take a look at the arrangement and functionality of our creation. After we progress with our knowledge, we will be able to do bigger and more complex software applications and systems. We hope that the examples given below will **enlighten your interest**, rather than make you give up.

### Problem: Graphical Application "Summator for Numbers"

Write a **graphical (GUI) application**, which **calculates the sum of two numbers**:

![](assets/chapter-1-images/07.Numbers-sum-01.png)

By entering two numbers in the first two fields and pressing the button [Calculate], their sum is being calculated, and the result is shown in the third text field.

Unlike console applications, which read and write their data as text on the console **graphical (GUI) applications** have a visual user interface. Graphical applications (desktop applications) consist of one or more graphic windows, in which there are controls text fields, buttons, pictures, tables, and others.

For our application, we will use the technology **JavaFX**. It allows us to create graphical applications for every platform using **Java** language. For the environment for development, we are going to use the program **IntelliJ IDEA**.

To create graphical applications with JavaFX, we will use the program that we can download from: [https://gluonhq.com/products/javafx](https://gluonhq.com/products/javafx)

![](assets/chapter-1-images/07.Numbers-sum-02.png)

We install **SceneBuilder** for the design of the JavaFX user interface.

![](assets/chapter-1-images/07.Numbers-sum-03.png)

In IntelliJ IDEA, create a new Java project of type **JavaFX Application**

![](assets/chapter-1-images/07.Numbers-sum-04.png)

When creating a **JavaFX application**, a project with a few files will be generated.

![](assets/chapter-1-images/07.Numbers-sum-05.png)

The file, inside which is the view of our application, can be found on the path **[src/sample/sample.fxml]**. Let us go there and open it

![](assets/chapter-1-images/07.Numbers-sum-06.png)

The file looks like this. We will not work with it directly later, but we will use the mentioned above **SceneBuilder**, which will generate code instead of us. We click the right mouse button on the file and choose **[Open in SceneBuilder]**.

![](assets/chapter-1-images/07.Numbers-sum-07.png)

By choosing the option for the first time, IntelliJ IDEA will ask us to enter the path towards **SceneBuilder.exe**:

![](assets/chapter-1-images/07.Numbers-sum-08.png)

With the usual Windows installation of **SceneBuilder**, it is found in [**C:\Users\[username]\AppData\Local\SceneBuilder**]. 

After we have pointed the right path, **SceneBuilder** opens, and we see the following screen:

![](assets/chapter-1-images/07.Numbers-sum-09.png)

We have the types of controls we can add on the left-hand side of the screen, so let us find the **[AnchorPane]** window and add it by dragging it to the environment where our design is located.

![](assets/chapter-1-images/07.Numbers-sum-10.png)

It is our window where we can now start adding controls located in the same place we added [AnchorPane] from (in the [Containers] menu). For our interface we will need:
  - 3 text fields: **`TextField`**
  - 2 labels between the text fields (for **`+`** and **`=`**) 
  - 1 button for calculation the result: **`Button`**

After we have added them, our application should look like this:

![](assets/chapter-1-images/07.Numbers-sum-11.png)

We will rename the controls by choosing more appropriate names, reflecting our application's functionality (**`"+"`** and **`"="`**). It is achieved by clicking the control we wish to change and going to its [Properties] on the right.

First, we will change the **`Text`** property of the tickets. Their name is **`Label`** by default:

![](assets/chapter-1-images/07.Numbers-sum-12.png)

We will choose more meaningful names which will reflect our program's logic better. Change the first text **`Label`** with **`+`**:

![](assets/chapter-1-images/07.Numbers-sum-13.png)

Then do the same with the second ticket and the button - change the former's text to **`=`** and the latter's to **`Calculate`** 

![](assets/chapter-1-images/07.Numbers-sum-14.png)

We will save our design changes using **[Ctrl+S]**:

![](assets/chapter-1-images/07.Numbers-sum-15.png)

Now go back to IntelliJ IDEA and start the application using **[Shift+F10]**:

![](assets/chapter-1-images/07.Numbers-sum-16.png)

The application's size is most likely not what you expected it to be. It is due to a piece of our code explicitly stating what that size needs to be. Let us resolve the issue:
Go to the **`Main`** class and find the piece of code

![](assets/chapter-1-images/07.Numbers-sum-17.png)

Delete the code responsible for window size, so our program can use the sizing we chose in SceneBuilder.

![](assets/chapter-1-images/07.Numbers-sum-18.png)

Now the code looks like this:

![](assets/chapter-1-images/07.Numbers-sum-19.png)

We start the program once more using **[Shift+F10]** and check whether the sizing is correct.

![](assets/chapter-1-images/07.Numbers-sum-20.png)

The final step in our design is to go back to our code and change the application's **title**, located on this line:

![](assets/chapter-1-images/07.Numbers-sum-21.png)

Change the name from **"Hello World"** to **"Sumator"**:

![](assets/chapter-1-images/07.Numbers-sum-22.png)

And start the application:

![](assets/chapter-1-images/07.Numbers-sum-23.png)

The graphical part's design looks ready. It is now time for something a lot more interesting – **the program logic**. Time to write the code which sums the numbers from the first two fields and displays the result in the third field. To do that, we need to go back to **SceneBuilder** and give the text fields names so we can access them in the code:

![](assets/chapter-1-images/07.Numbers-sum-24.png)

Click the first text field and go to the **[Code]** section on the right, where we will enter the name **`num1`** in the **`fxid`** field:

![](assets/chapter-1-images/07.Numbers-sum-25.png)

Then rename the second field to **`num2`**:

![](assets/chapter-1-images/07.Numbers-sum-26.png)

And the third field to **`result`**:

![](assets/chapter-1-images/07.Numbers-sum-27.png)

Now we will tell the button what function to perform once it is clicked. Go to the **`On Action`** field and enter the name of the function **`calculate`**, which we will create in a moment:

![](assets/chapter-1-images/07.Numbers-sum-28.png)

Save the changes in SceneBuilder using **[Ctrl+S]** and go back to the **`sample.fxml`** file

![](assets/chapter-1-images/07.Numbers-sum-29.png)

We can see that our fields have names, and our button has a function to perform once it is clicked.
So far, so good, but these fields and the button's function don't yet exist in our code. To generate them, we will go to each one of them and press **[Alt+Enter]** -> **[Create field]** (the field's name]

![](assets/chapter-1-images/07.Numbers-sum-30.png)

Once we create one of the fields, we will get redirected to the **`Controller.java`** file, where the field will be generated in the code in the following manner:

![](assets/chapter-1-images/07.Numbers-sum-32.png)

Write the following Java code between the curly braces of the **`calculate`** function:

![](assets/chapter-1-images/07.Numbers-sum-33.png)

This code takes the first number from the field **`num1`** and stores it in the variable **`num1`**, then does the same with the **`num2`** field and stores it in the variable **`num2`**. The numbers are then summed, storing their value in the variable **`result`**, and finally, the latter's text value is visualized in the **`result`** field.

![](assets/chapter-1-images/07.Numbers-sum-34.png)

**Start** the program again with **[Shift+F10]** and **check if it is working**. Check whether we can calculate the sum of different values correctly. First, we enter two whole numbers – **4** and **5**, for example:

![](assets/chapter-1-images/07.Numbers-sum-35.png)

Then we try summing negative and positive floating-point numbers – for example, **-12.5** and **1.3**:

![](assets/chapter-1-images/07.Numbers-sum-36.png)

How about entering invalid input such as **aaa** and bbb**:

![](assets/chapter-1-images/07.Numbers-sum-37.png)

We have a problem when the user enters **invalid input data**:

![](assets/chapter-1-images/07.Numbers-sum-38.png)

It is due to the transformation of our text field into a number. If the value in the field isn't a number, the program crashes and **returns an error** (exception). We can fix the code by doing the following:

![](assets/chapter-1-images/07.Numbers-sum-39.png)

With this code, we intercept errors when working with numbers (**catch exceptions**), and in case of an error, we display the value **"error"** in our result field. Start the program again with **[Shift+F10]** and check if it's working. This time, if an incorrect number is entered, the result is **"error"** and the program doesn't crash:

![](assets/chapter-1-images/07.Numbers-sum-40.png)

Does all this seem complicated? If it does, that's completely normal. We are at the beginning of our programming journey. The example above requires much more knowledge and skills, which we will develop using this book and later on. Just allow yourself to have some fun with desktop programming. If something doesn't work, feel free to ask for help in the SoftUni discussion forum: https://forum.softuni.org, or bravely move forward to the next example or the next chapter in the book. A time will come when this will be easy for you, but you have to put in some effort and be persistent. Learning programming is a slow process involving lots and lots of practice.

### Web Application: 'Numbers Summator'

Now, we will create something even more complex but more interesting: a Web application that **calculates the sum of two numbers**. By **entering two numbers** in the first two text fields and clicking the **[Calculate]** button, **their sum is calculated**, and the result is displayed in the third text field. The application is expected to look like as is shown below:

![](assets/chapter-1-images/08.Numbers-sum-web-01.png)

Unlike the console applications that read and write data as text on the console, **Web applications** have a **Web-based user interface**. Web applications are loaded from some **Internet address** (URL) through a standard **web browser**. Users write input data on a page, visualized by the web browser, the data is processed on a web server, and the results are shown again on a page in the web browser.

For our web application, we will use **Spring MVC**. It enables us to create a web application with the **Java** programming language in the **IntelliJ IDEA** development environment.

Take the project (the application's skeleton) from this link:
[https://github.com/SoftUni/Programming-Basics-Book-JS-EN/blob/master/assets/chapter-1-assets](https://github.com/SoftUni/Programming-Basics-Book-JS-EN/blob/master/assets/chapter-1-assets) and load it in IntelliJ IDEA using **[Import Project]**:

![](assets/chapter-1-images/08.Numbers-sum-web-02.png)

Find the folder where we have downloaded the skeleton:

![](assets/chapter-1-images/08.Numbers-sum-web-03.png)

Choose **[Import project from an external model]** and then **[Maven]**:

![](assets/chapter-1-images/08.Numbers-sum-web-04.png)

It is the screen that comes up next:

![](assets/chapter-1-images/08.Numbers-sum-web-05.png)

Proceed by clicking **[Next]**:

![](assets/chapter-1-images/08.Numbers-sum-web-06.png)

And again continue with **[Next]**:

![](assets/chapter-1-images/08.Numbers-sum-web-07.png)

One more time – **[Next]**:

![](assets/chapter-1-images/08.Numbers-sum-web-08.png)

Once the project is loaded, in IntelliJ, it should look something like this:

![](assets/chapter-1-images/08.Numbers-sum-web-09.png)

Let us start the project and make sure it runs without errors. To do that, we will go to the **[src/main/javacom.softuni]** folder and open the **SumatorApplication** file:

![](assets/chapter-1-images/08.Numbers-sum-web-10.png)

To run the program, we can either use the **[Ctrl+Shift+F10]** key combination, or select **[Run 'SumatorApplication.main()']** from the context menu:

![](assets/chapter-1-images/08.Numbers-sum-web-11.png)

Once the web application is loaded, we should see the following message at the bottom of the console which has appeared:

![](assets/chapter-1-images/08.Numbers-sum-web-12.png)

We can run the application and check whether it's working by opening our web browser and typing **localhost:8080** in the address bar:

![](assets/chapter-1-images/08.Numbers-sum-web-13.png)

All seems fine but when we enter the two numbers and hit **[Calculate]**, nothing happens. Let us write the logic needed to sum both numbers to work as expected. Open the **`HomeController`** file in the same folder, and we should be able to see the following:

![](assets/chapter-1-images/08.Numbers-sum-web-14.png)

The part we are interested in is the **`sum`** function:

![](assets/chapter-1-images/08.Numbers-sum-web-15.png)

Currently, this function accepts two pieces of text **`num1`** and **`num2`**, passes them to the server, and returns the file **`index`** to the user. As you have probably realized, there is no code to calculate the numbers from the two text fields and enter the result in the third field. Let us write the logic to make it happen.

Go between the curly braces and write the following code:

![](assets/chapter-1-images/08.Numbers-sum-web-16.png)

Here is what the **`HomeController`** file should look like after the change:

![](assets/chapter-1-images/08.Numbers-sum-web-17.png)

Before we go back to the application, we need to apply our changes. We'll do that by going to the console window and clicking the **[Rerun application]** button.

![](assets/chapter-1-images/08.Numbers-sum-web-18.png)

The application is completed. If we enter the two numbers in the text fields and click the **[Calculate]** button, we should see the result come up in the third text field:

![](assets/chapter-1-images/08.Numbers-sum-web-19.png)

Does all this seem scary? **There's no need to be afraid!** We have a lot to learn to reach the knowledge and skills required to write web-based applications, with ease like in the example above, and much bigger and more complex applications. If it all makes little sense, just keep going without worrying. In time, you will remember with a smile how incomprehensible and exciting your first collision with web programming was. 

The purpose of both examples (the graphical desktop application and web application) is not to teach you, but to allow you to dive a little deeper into programming, **to fuel your interest** in software development, and to inspire you to study hard. **You have a lot to learn**, but it is interesting, isn't it?
