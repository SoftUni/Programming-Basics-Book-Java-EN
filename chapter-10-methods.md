# Chapter 10. Methods

In this chapter, we will introduce you to **methods** and you will learn their **definition**, as well as what their **base concepts** are while working with them.You will learn why it's a **good practice** to use them, how to **define** and **declare** them. We will also introduce you to the **parameters** and **return value of a method**, as well as how to use that return value. In the end, we will peek at **best practices** when using methods.

## What is "method"?

Until this moment, we have found out that while **writing** a programming code for an exercise, **separating** the exercise into different **parts**, favors us a lot. Every part is responsible for a **corresponding action** and by doing so it's **easier** to solve the problem, and the **readability** and the debugging of the code are better.

A block of code designed to perform a particular task and which we have separated logically is called **method**. **Methods – slices of code, that are named** by us in a specific way.They can be called numerous times when we need them, and they will be run that many times as we want to.

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

Methods offer us an **opportunity** to use **code several times**. With solving more and more exercises, we will come to the conclusion that using already defined methods saves us a lot of time and effort.

### Declaring methods

In Java lanauge you can **declare** methods inside a class, i.e. between the opening **`{`** and closing **`}`** brackets of the class. Declaring is registering the method in the program, so that it can be recognized in the rest of it. The best-known example is the **`main(…)`** method, which we use in every program that we write.

![](assets/chapter-10-images/02.Declaring-methods-01.png)

With the next example we will look at the mandatory elements in the declaration of a method.

![](assets/chapter-10-images/02.Declaring-methods-02.png)

* **Type of the returned value**. In this case the type is **`double`**, which means that the method will **return a result**, which is of **`double`** type. The returned value can be **`int`**, **`double`**, **`string`** **etc.**, and also **`void`**. If the type is **`void`**, this means that the method **doesn't return** a result, but only **does a particular operation**.
* **Method name**. The name of the method is **defined by us**, but we shouldn't forget that it has to **describe the function**, which is executed by the code in its body. In the example the name is **`GetSquare`**, which tells us that this method is made to find the area of a square.
* **Parameters list**. It is declared between the parentheses **`(`** and **`)`** that we write after its name. This is where we list all the **parameters** that the method will use. There can be **only one** parameter, **multiple** ones or it could be an **empty** list. If there aren't any parameters, we will write only the parentheses **`()`**. In this example we declare the parameter **`double num`**.
* **`static`** declaration in the method description. For the moment you can accept that we write **`static`** always when we declare a method, and later when we get familiar with object-oriented programming (OOP), we will learn about the difference between **static methods** (shared for the whole class) and **methods of an object**, which work on the data of a certain instance of the class (object).

When declaring methods, you must follow the **sequence** of its base elements – first is the **keyword `static`**, then **type of the returned value**, then **method name** and in the end **list of parameters**, surrounded by parentheses **`()`**. 

After we have declared a method, its **implementation (body)** follows. In the body of the method we write down **the algorithm**, by which it solves a problem, i.e. the body contains the code (program block), which applies the method's **logic**. In the shown example we are calculating the area of a square, which is **`side * side`**. 

When declaring a variable in the body of a method, it is called a **local** variable of the method. The area where this variable exists and can be used starts from the line where we have declared it and reaches the closing curly bracket `}` of the body of the method. This area is called **variable scope**.

### Invoking a method

**Invoking** a method means **starting to execute the code**, which is in **the body of the method**. This happens by writing its **name**, followed by parentheses **`()`** and the semicolon sign **`;`** to end the line. If the method needs input data, it is given in the parentheses **`()`**, and the succession of the parameters should be the same as the one of the given parameters when declaring the method. Here is an example:

![](assets/chapter-10-images/03.Invoking-methods-01.png)

A method can be invoked from **several places** in the program. One way is to call it in **the main method**.

![](assets/chapter-10-images/03.Invoking-methods-02.png)

A method can also be invoked from **the body of another method**, which is **not** the main method of the program.

![](assets/chapter-10-images/03.Invoking-methods-03.png)

A method can be called from **its own body**. This is called **recursion** and you can find more about it on [Wikipedia](https://bg.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F) or google it.

It is important to know that if a method is declared in a class, it can be called before the line, on which it has been declared.

### Example: Blank Receipt

Write a method that prints a blank receipt. The method should call another three methods: one to print the header, one for the middle part of the receipt and one for the lower part.

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

In the same way we'll create two more methods **to print the middle part** of the receipt (body) **`PrintReceiptBody`** and **to print the lower part** of the receipt (footer) **`PrintReceiptFooter`**.

After this we will create **another method**, which will invoke the three methods we already wrote, one after the other:

![](assets/chapter-10-images/04.Print-receipt-02.png)

In the end we'll **invoke** the **`PrintReceipt`** method from the body of the **`Main`** method of our program:

![](assets/chapter-10-images/04.Print-receipt-03.png)

#### Testing in the Judge System

The program with a total of five methods that call one another is ready and we can **run and debug it**. After that, we will send it for test in the Judge system: [https://judge.softuni.bg/Contests/Practice/Index/665#0](https://judge.softuni.bg/Contests/Practice/Index/665#0).


## Methods with Parameters

Frequently in order to solve a problem, the method by which we do this needs **additional information**, which depends on its purpose. This is precisely the information that **the method parameters** are, and its behavior depends on them. 

### Using Parameters in Methods

As we observed above, **the parameters can be zero, one or more**. When declaring them you should divide them with a comma. They can be of any type (**`int`**, **`string`** etc.), and there is an example below to show how they can be used by the method.

We **declare** the method and its **list** of **parameters**, then we write the code that the method executes.

![](assets/chapter-10-images/05.Method-parameters-01.png)

After that **call** the method and **give it particular values**:

![](assets/chapter-10-images/05.Method-parameters-02.png)

When **declaring parameters**, we can use **various** types of variables, and we should be careful that every parameter has a **type** and **name**. It is important to note that when calling the method, we must pass to it **values** for the parameters in **the order**, in which they are **declared**. If the parameters are first **`int`** and after that **`string`**, when calling the method, we can't give it first a **`string`** and then **`int`**. We can only change places of given parameters if we write the name of the parameter beforehand, as you will see below in one of the examples. This is generally not a good practice!

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

The next step is **implementing** the logic by which the program will check what the sign of the number is. You can see from the examples that there are three cases – the number is larger than, equal to or lower than zero, which means that we'll make three verifications in our method.

The next step is to read the input number and to call the new method from the body of the **`main`** method.

![](assets/chapter-10-images/06.Print-sign-02.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#1](https://judge.softuni.bg/Contests/Practice/Index/665#1).


### Example: Printing a Triangle

Create a method which prints a triangle as shown in the examples.

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|3|1<br>1 2<br>1 2 3<br>1 2<br>1|4|1<br>1 2<br>1 2 3<br>1 2 3 4 <br>1 2 3<br>1 2<br>1|

#### Hints and Guidelines

Before creating a method to print a row with a given beginning and an end, we must read the input number from the console. After that we choose a meaningful name, which describes its purpose, e.g. **`printLine`**, and implement it.

![](assets/chapter-10-images/07.Print-triangle-01.png)

From the drawing exercises we remember that it is good practice **to divide the figure into several parts**. To make it easier we will divide the triangle into three parts – upper, middle and lower.

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

The first step is to read the input from the console. After that we need to create a method, which will print the first and the last rows because they are the same. Let's remember that we must give it **a descriptive name** and give it as **a parameter** the length of the side. We will use the constructor **`new String`**. 

![](assets/chapter-10-images/08.Draw-filled-square-01.png)

Our next step is to create a method that will draw the middle rows on the console. Again, give it a descriptive name i.e. **`printMiddleRow`**.

![](assets/chapter-10-images/08.Draw-filled-square-02.png)

Finally, call the methods in the **`main()`** method of the program in order to draw the whole square:

![](assets/chapter-10-images/08.Draw-filled-square-03.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#3](https://judge.softuni.bg/Contests/Practice/Index/665#3).


## Returning Result from a Method

Up to this point, we have viewed methods that do a specific task. For example printing a text, number or a figure on the console. There is another type of method that can **return** a **result** from their task. We will look at this type of function in this part.

### Types of Returned Values

Up until now we saw some examples, in which when declaring methods, we used the keyword **`void`**, which shows that the method **does not** return a result, but just executes a certain action.

![](assets/chapter-10-images/09.Return-types-01.png)

If we **replace** **`void`** by **a type** of some variable, this will tell the program that the method should return a value of the said type. This returned value could be of any type – **`int`**, **`String`**, **`double`** etc. 

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>In order for a method to return <strong>a result</strong> we need to write the type of returned value we expect when declaring the method, in the place of <code>void</code>.</td></tr>
</table>

![](assets/chapter-10-images/09.Return-types-02.png)

We should note that **the result** returned by the method can be of **a type, compatible with the type of the returned value** of the method. For example, if the declared type of the returned value is **`double`**, we can return a value of **`int`** type.

### The "Return" Operator

In order to obtain a result from the method we need to use the **`return`** operator. It should be **used in the body** of the method and tells the program to **stop its execution** and to **return** the method invoker a certain **value**, which is defined by the expression after the **`return`** operator.

In the example below there is a method that reads two names from the console, concatenates them and returns them as a result. The return value is of **`String`** type:

![](assets/chapter-10-images/10.Return-operator-01.png)

The **`return`** operator can also be used in **`void`** methods. This way the method will stop its execution without returning a value, and after it there shouldn't be an expression, which should be returned. In this case we use **`return`** only to exit the method.

**There are cases** where **`return`** can be called from multiple places in the method, but only if there are **certain** input conditions.

We have a method in the example below, which compares two numbers and returns a result respectively **`-1`**, **`0`** or **`1`** depending on if the first argument is smaller, equal or larger than the second argument, given to the function. The method uses the keyword **`return`** in three different places, in order to return three different values according to the logic of comparing the numbers:

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

Write a function that calculates and returns the result the power of a number. 

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|2<br>8|256|3<br>4|81|

#### Hints and Guidelines

Our first step is to read the input data from the console. The next step is to create a method that will take two parameters (the number and the power) and returns as a result a number of **`double`** type.

![](assets/chapter-10-images/12.Number-power-01.png)

After we have done the calculations, we have to only print the result in the **`main()`** method of the program.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/665#5](https://judge.softuni.bg/Contests/Practice/Index/665#5).


## Варианти на методи

В много езици за програмиране един и същ метод може да е деклариран в **няколко варианта** с еднакво име и различни параметри. Това е известно с термина “**method overloading**”. Сега нека разгледаме как се пишат тези overloaded methods.

### Сигнатура на метода

В програмирането **начинът**, по който се **идентифицира** един метод, е чрез **двойката елементи** от декларацията му – **име** на метода и **списък** от неговите параметри. Тези два елемента определят неговата **спецификация**, т. нар. **сигнатура** на метода. 

![](assets/chapter-10-images/13.Method-signature-01.png)

В този пример сигнатурата на метода е неговото име (**`print`**), както и неговият параметър (**`String text`**).

Ако в програмата ни има **методи с еднакви имена**, но с **различни сигнатури**, то казваме, че имаме **варианти на методи (method overloading)**.

### Варианти на методи

Както споменахме, ако използваме **едно и също име за няколко метода с различни сигнатури**, то това означава, че имаме **варианти на метод**. Кодът по-долу показва как три различни метода могат да са с едно и също име, но да имат различни сигнатури и да изпълняват различни действия.

![](assets/chapter-10-images/14.Method-overloading-01.png)

### Сигнатура и тип на връщаната стойност

Важно е да отбележим, че **връщаният тип като резултат** на метода **не е част от сигнатурата му**. Ако връщаната стойност беше част от сигнатурата на метода, то няма как компилаторът да знае кой метод точно да извика.

Нека разгледаме следния пример - имаме два метода с различен тип на връщаната стойност. Въпреки това IntelliJ IDEA ни показва, че има грешка, защото сигнатурите и на двата са еднакви. Съответно при опит за извикване на метод с име **`print()`**, компилаторът не би могъл да прецени кой от двата метода да изпълни.

![](assets/chapter-10-images/14.Method-overloading-02.png)

### Пример: по-голямата от две стойности

Като входни данни са дадени две стойности от един и същ тип. Стойностите могат да са от тип **`int`**, **`char`** или **`String`**. Да се създаде метод **`getMax()`**, който връща като резултат по-голямата от двете стойности.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|
|int<br>2<br>16|16|char<br>a<br>z|z|string<br>Ivan<br>Todor|Todor|

#### Насоки и подсказки

За да създадем този метод, първо трябва да създадем три други метода с едно и също име и различни сигнатури. Първо създаваме метод, който ще сравнява цели числа.

![](assets/chapter-10-images/15.Greater-of-two-values-01.png)

Следвайки логиката от предходния метод, създаваме такъв със същото име, който обаче ще сравнява символи.

![](assets/chapter-10-images/15.Greater-of-two-values-02.png)

Следващият метод, който трябва да създадем, ще сравнява низове. Тук логиката ще е малко по-различна, тъй като стойностите от тип **`String`** не позволяват да бъдат сравнявани чрез операторите **`<`** и **`>`**. Ще използваме метода **`compareTo(…)`**, който връща числова стойност: по-голяма от 0 (сравняваният обект е по-голям), по-малка от 0 (сравняваният обект е по-малък) и 0 (при два еднакви обекта).

![](assets/chapter-10-images/15.Greater-of-two-values-03.png)

Последната стъпка е да прочетем входните данни, да използваме подходящи променливи и да извикаме метода **`getMax()`** от тялото на метода **`main()`**.

![](assets/chapter-10-images/15.Greater-of-two-values-04.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#6](https://judge.softuni.bg/Contests/Practice/Index/665#6).


## Именуване на методи. Добри практики при работа с методи

В тази част ще се запознаем с някои **утвърдени практики** при работа с методи, свързани с именуването, подредбата на кода и неговата структура.

### Именуване на методи

Когато наименуваме даден метод е препоръчително да използваме **смислени имена**. Тъй като всеки метод **отговаря** за някаква част от нашия проблем, то при наименуването му трябва да вземем предвид **неговата функция**, т.е. добра практика е **името да описва неговата цел**. 

Задължително е името да започва с **малка буква** и трябва да е съставено от глагол или от двойка: глагол + съществително име. Форматирането на името става, спазвайки **Lower Case Camel** конвенцията, т.е. **първата дума започва с малка буква, а всяка следваща започва с главна буква**. Кръглите скоби **`( `** и **`)`** винаги следват името му. 

Всеки метод трябва да изпълнява самостоятелна задача, а името на метода трябва да описва каква е неговата функция. 

Няколко примера за **коректно** именуване на методи:
* **`findStudent`**
*	**`loadReport`**
*	**`sine`**

Няколко примера за **лошо** именуване на методи:
*	**`Method1`**
*	**`DoSomething`**
*	**`HandleStuff`**
*	**`SampleMethod`**
*	**`DirtyHack`**

Ако не можем да измислим подходящо име, то най-вероятно методът решава повече от една задача или няма ясно дефинирана цел и тогава трябва да помислим как да го разделим на няколко отделни метода.

### Именуване на параметрите на методите

При именуването на **параметрите** на метода важат почти същите правила, както и при самите методи. Разликите тук са, че за имената на параметрите е добре да използваме съществително име или двойка от прилагателно и съществително име, както и че при именуване на параметрите също се спазва **`lowerCamelCase`** конвенцията. Трябва да отбележим, че е добра практика името на параметъра да **указва** каква е **мерната единица**, която се използва при работа с него.

Няколко примера за **коректно** именуване на параметри на методи:
* **`firstName`**
*	**`report`**
*	**`speedKmH`**
*	**`usersList`**
*	**`fontSizeInPixels`**
*	**`font`**

Няколко примера за **некоректно** именуване на параметри:
*	**`p`**
*	**`p1`**
*	**`p2`**
* **`populate`**
* **`LastName`**
* **`last_name`**

### Добри практики при работа с методи

Нека отново припомним, че един метод трябва да изпълнява **само една** точно определена **задача**. Ако това не може да бъде постигнато, тогава трябва да помислим как да **разделим** метода на няколко отделни такива. Както казахме, името на метода трябва точно и ясно да описва неговата цел. Друга добра практика в програмирането е да **избягваме** методи, по-дълги от екрана ни (приблизително). Ако все пак кода стане много обемен, то е препоръчително метода да се **раздели** на няколко по-кратки, както в примера по-долу.

![](assets/chapter-10-images/04.Print-receipt-02.png)

### Структура и форматиране на кода

При писането на методи трябва да внимаваме да спазваме коректна **индентация** (отместване по-навътре на блокове от кода).

Пример за **правилно** форматиран Java код:

![](assets/chapter-10-images/16.Good-practice-01.png)

Пример за **некоректно** форматиран Java код:

![](assets/chapter-10-images/16.Good-practice-02.png)

Когато заглавният ред на метода е **твърде дълъг**, се препоръчва той да се раздели на няколко реда, като всеки ред след първия се отмества с две табулации надясно (за по-добра четимост):

![](assets/chapter-10-images/05.Method-parameters-03.png)

Друга добра практика при писане на код е да **оставяме празен ред** между методите, след циклите и условните конструкции. Също така, опитвайте да **избягвате** да пишете **дълги редове и сложни изрази**. С времето ще установите, че това подобрява четимостта на кода и спестява време. 

Препоръчваме винаги да се **използват къдрави скоби за тялото на проверки и цикли**. Скобите не само подобряват четимостта, но и намалят възможността да бъде допусната грешка и прогрaмата ни да се държи некоректно.

## Какво научихме от тази глава?

В тази глава се запознахме с базовите концепции при работа с методи:
* Научихме, че **целта** на методите е да **разделят** големи програми с много редове код на по-малки и кратки задачи.
* Запознахме се със **структурата** на методите, как да ги **декларираме** и **извикваме** по тяхното име. 
* Разгледахме примери за методи с **параметри** и как да ги използваме в нашата програма.
* Научихме какво представляват **сигнатурата** и **връщаната стойност** на метода, както и каква е функцията на оператора **`return`** в методите.
* Запознахме се с **добрите практики** при работа с методи, как да именуваме методите и техните параметри, как да форматираме кода и други.


## Упражнения

За да затвърдим работата с методи, ще решим няколко задачи. В тях се изисква да напишете метод с определена функционалност и след това да го извикате като му подадете данни, прочетени от конзолата, точно както е показано в примерния вход и изход.

### Задача: "Hello, Име!"

Да се напише метод, който получава като параметър име и принтира на конзолата "*Hello, \<name\>!*".

#### Примерен вход и изход

|Вход|Изход|
|---|---|
|Peter|Hello, Peter!|

#### Насоки и подсказки

Дефинирайте метод **`printName(string name)`** и го имплементирайте, след което в главната програма прочетете от конзолата име на човек и извикайте метода като му подадете прочетеното име.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#7](https://judge.softuni.bg/Contests/Practice/Index/665#7).


### Задача: по-малко число

Да се създаде метод **`getMin(int a, int b)`**, който връща по-малкото от две числа. Да се напише програма, която чете като входни данни от конзолата три числа и печата най-малкото от тях. Да се използва метода **`getMin(…)`**, който е вече създаден.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|1<br>2<br>3|1|-100<br>-101<br>-102|-102|

#### Насоки и подсказки

Дефинирайте метод **`getMin(int a, int b)`** и го имплементирайте, след което го извикайте от главната програма както е показано по-долу. За да намерите минимума на три числа, намерете първо минимума на първите две от тях и след това минимума на резултата и третото число:

```java
int min = getMin(getMin(num1, num2), num3);
```

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#8](https://judge.softuni.bg/Contests/Practice/Index/665#8).


### Задача: повтаряне на низ

Да се напише метод **`repeatString(str, count)`**, който получава като параметри променлива от тип **`String`** и цяло число **`n`** и връща низа, повторен **`n`** пъти. След това резултатът да се отпечата на конзолата.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|str<br>2|strstr|roki<br>6|rokirokirokirokirokiroki|

#### Насоки и подсказки

Допишете метода по-долу като добавите съединяването входния низ към резултата в цикъла:

![](assets/chapter-10-images/17.Repeated-string-01.png)

Имайте предвид, че в езика Java съединяването на низове в цикъл води до лоша производителност и не се препоръчва. Потърсете и пробвайте по-ефективни решения тук: https://stackoverflow.com/questions/1235179.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#9](https://judge.softuni.bg/Contests/Practice/Index/665#9).


### Задача: n-та цифра

Да се напише метод **`findNthDigit(number, index)`**, който получава число и индекс N като параметри и печата N-тата цифра на числото (като се брои от дясно на ляво, започвайки от 1). След това, резултатът да се отпечата на конзолата.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|
|83746<br>2|4|93847837<br>6|8|2435<br>4|2|

#### Насоки и подсказки

За да изпълним алгоритъма, ще използваме **`while`** цикъл, докато дадено число не стане 0. На всяка итерация на **`while`** цикъла ще проверяваме дали настоящият индекс на цифрата не отговаря на индекса, който търсим. Ако отговаря, ще върнем като резултат цифрата на индекса (**`number % 10`**). Ако не отговаря, ще премахнем последната цифра на числото (**`number = number / 10`**). Трябва да следим коя цифра проверяваме по индекс (от дясно на ляво, започвайки от 1). Когато намерим цифрата, ще върнем индекса. 

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#10](https://judge.softuni.bg/Contests/Practice/Index/665#10).


### Задача: число към бройна система

Да се напише метод **`integerToBase(number, toBase)`**, който получава като параметри цяло число и основа на бройна система и връща входното число, конвертирано към посочената бройна система. След това, резултатът да се отпечата на конзолата. Входното число винаги ще е в бройна система 10, а параметърът за основа ще е между 2 и 10.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|----|---|---|---|---|
|3<br>2|11|4<br>4|10|9<br>7|12|

#### Насоки и подсказки

За да решим задачата, ще декларираме стрингова променлива, в която ще пазим резултата. След това трябва да изпълним следните изчисления, нужни за конвертиране на числото.
* Изчисляваме **остатъка** от числото, разделено на основата.
* **Вмъкваме остатъка** от числото в началото на низа, представящ резултата.
* **Разделяме** числото на основата.
* **Повтаряме** алгоритъма, докато входното число не стане 0.

Допишете липсващата логика в метода по-долу:

```java
static String integerToBase(int number, int toBase) {
    String result = "";
    while (number != 0) {
        // Implement the missing conversion logic
    }
    return result;
}
```

#### Тестване в Judge системата 

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#11](https://judge.softuni.bg/Contests/Practice/Index/665#11).


### Задача: известия

Да се напише програма, която прочита цяло число **`n`** и на следващите редове въвежда **`n`** **съобщения** (като за всяко съобщение се прочитат по няколко реда). Всяко съобщение започва с **`messageType`**: **`success`**, **`warning`** или **`error`**:
   - Когато **`messageType`** е **`success`** да се четат **`operation`** + **`message`** (всяко на отделен ред).
   - Когато **`messageType`** е **`warning`** да се чете само **`message`**.
   - Когато **`messageType`** е **`error`** да се четат **`operation`** + **`message`** + **`errorCode`** (всяко на отделен ред).

На конзолата да се отпечата **всяко прочетено съобщение**, форматирано в зависимост от неговия **`messageType`**. Като след заглавния ред за всяко съобщение да се отпечатат толкова на брой символа **`=`**, **колкото е дълъг** съответният **заглавен ред** и да се сложи по един **празен ред** след всяко съобщение (за по-детайлно разбиране погледнете примерите). 

Задачата да се реши с дефиниране на четири метода: **`showSuccessMessage()`**, **`showWarningMessage()`**, **`showErrorMessage()`** и **`readAndProcessMessage()`**, като само последният метод да се извиква от главния **`main()`** метод:

![](assets/chapter-10-images/18.Notifications-01.png)

#### Примерен вход и изход

|Вход|Изход|
|---|---|
|4<br>error<br>credit card purchase<br>Invalid customer address<br>500<br>warning<br>Email not confirmed<br>success<br>user registration<br>User registered successfully<br>warning<br>Customer has not email assigned|<code>Error: Failed to execute credit card purchase.</code><br><code>==============================================</code><br><code>Reason: Invalid customer address.</code><br><code>Error code: 500.</code><br><br><code>Warning: Email not confirmed.</code><br><code>=============================</code><br><br><code>Successfully executed user registration.</code><br><code>========================================</code><br><code>User registered successfully.</code><br><br><code>Warning: Customer has not email assigned.</code><br><code>=========================================</code>|

#### Насоки и подсказки

Дефинирайте и имплементирайте посочените четири метода.

В **`readAndProcessMessage()`** прочетете типа съобщение от конзолата и според прочетения тип прочетете останалите данни (още един два или три реда). След това извикайте съответния метод за печатане на съответния тип съобщение.

Ако четете от конзолата от няколко отделни метода, имайте предвид, че трябва **да създадете `Scanner` обект само веднъж** (например в главния метод) и да го предавате към другите методи като параметър. Създаването на няколко **`Scanner`** обекта, които четат от конзолата, може да не работи както очаквате.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#12](https://judge.softuni.bg/Contests/Practice/Index/665#12).


### Задача: числа към думи

Да се напише метод **`letterize(number)`**, който прочита цяло число и го разпечатва с думи на английски език според условията по-долу:
* Да се отпечатат с думи стотиците, десетиците и единиците (и евентуални минус) според правилата на английския език.
* Ако числото е по-голямо от **999**, трябва да се принтира "**too large**".
* Ако числото е по-малко от **-999**, трябва да се принтира "**too small**".
* Ако числото е **отрицателно**, трябва да се принтира "**minus**" преди него.
* Ако числото не е съставено от три цифри, не трябва да се принтира.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|3<br>999<br>-420<br>1020|nine-hundred and ninety nine<br>minus four-hundred and twenty<br>too large|2<br>15<br>350|fifteen<br>three-hundred and fifty|

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|4<br>311<br>418<br>509<br>-9945|three-hundred and eleven<br>four-hundred and eighteen<br>five-hundred and nine<br>too small|3<br>500<br>123<br>9|five-hundred<br>one-hundred and twenty three<br>nine|

#### Насоки и подсказки

Можем първо да отпечатаме **стотиците** като текст - (числото / 100) % 10, след тях **десетиците** - (числото / 10) % 10 и накрая **единиците** - (числото % 10).

Първият специален случай е когато числото е точно **закръглено на 100** (напр. 100, 200, 300 и т.н.). В този случай отпечатваме "one-hundred", "two-hundred", "three-hundred" и т.н.

Вторият специален случай е когато числото, формирано от последните две цифри на входното число, е **по-малко от 10** (напр. 101, 305, 609 и т.н.). В този случай отпечатваме "one-hundred and one", "three-hundred and five", "six-hundred and nine" и т.н.

Третият специален случай е когато числото, формирано от последните две цифри на входното число, е **по-голямо от 10 и по-малко от 20** (напр. 111, 814, 919 и т.н.). В този случай отпечатваме "one-hundred and eleven", "eight-hundred and fourteen", "nine-hundred and nineteen" и т.н.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#13](https://judge.softuni.bg/Contests/Practice/Index/665#13).


### Задача: криптиране на низ

Да се напише метод **`encrypt(char letter)`**, който криптира дадена буква по следния начин:
* Вземат се първата и последна цифра от ASCII кода на буквата и се залепят една за друга в низ, който ще представя резултата. 
* Към началото на стойността на низа, който представя резултата, се залепя символа, който отговаря на следното условие:
  * ASCII кода на буквата + последната цифра от ASCII кода на буквата.
* След това към края на стойността на низа, който представя резултата, се залепя символа, който отговаря на следното условие:
  * ASCII кода на буквата - първата цифра от ASCII кода на буквата.
* Методът трябва да върне като резултат криптирания низ.

Пример:
* j &rarr; **p16i**
  * ASCII кодът на **j** e **106** &rarr; Първа цифра - **1**, последна цифра - **6**.
  * Залепяме първата и последната цифра &rarr; **16**.
  * Към **началото** на стойността на низа, който представя резултата, залепяме символа, който се получава от сбора на ASCII кода + последната цифра &rarr; 106 + 6 &rarr; 112 &rarr; **p**.
  * Към **края** на стойността на низа, който представя резултата, залепяме символа, който се получава от разликата на ASCII кода - първата цифра &rarr; 106 - 1 &rarr; 105 &rarr; **i**.
  
Използвайки метода, описан по-горе, да се напише програма, която чете **поредица от символи**, **криптира ги** и отпечатва резултата на един ред.

Приемаме, че входните данни винаги ще бъдат валидни. Главният метод трябва да прочита входните данни, подадени от потребителя – цяло число **`n`**, следвани от по един символ на всеки от следващите **`n`** реда.

Да се криптират символите и да се добавят към криптирания низ. Накрая като резултат трябва да се отпечата **криптиран низ от символи** като в следващия пример.

Пример:
* S, o, f, t, U, n, i &rarr; V83Kp11nh12ez16sZ85Mn10mn15h

#### Примерен вход и изход

|Вход|Изход|
|---|---|
|7<br>S<br>o<br>f<br>t<br>U<br>n<br>i| V83Kp11nh12ez16sZ85Mn10mn15h |

|Вход|Изход| 
|---|---|
|7<br>B<br>i<br>r<br>a<br>H<br>a<br>x| H66<n15hv14qh97XJ72Ah97xx10w |

#### Насоки и подсказки
На променливата от тип **`String`**, в която ще се пази стойността на резултата, ще присвоим първоначална стойност **`String str = ""`** (Empty String / празен стринг). Трябва да се завърти цикъл **`n`** пъти, като на всяка итерация към променливата, в която пазим стойността на резултата, ще прибавяме криптирания символ. 

За да намерим първата и последната цифри от ASCII кода, ще използваме алгоритъма, който използвахме за решаване на задача "N-та цифра", а за да създадем низа, ще процедираме както в задачата "Число към бройна система".

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/665#14](https://judge.softuni.bg/Contests/Practice/Index/665#14).
