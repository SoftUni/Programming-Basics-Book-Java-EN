# Chapter 7.1. More complex loops

Having learnt what **`for` loops** are and what they serve for, it is now time to get to know **other types of loops**, as well as some **more complex loops constructs**. They will expand our knowledge and help us solve more difficult and challenging tasks. In particular, we will have a look at how the following constructs are used:

  * loops **with a step**
  * **`while`** loops
  * **`do-while`** loops
  * **infinite** loops

In the current chapter we will also get acquainted with the **`break`** statement and **how** to **terminate** a loop with it. We will also learn how to keep track of **errors** during the execution of our program, using a **`try-catch`** block. 


## Video

<div class="video-player">
  Watch a video tutorial on this chapter here: <a target="_blank"
  href="https://www.youtube.com/watch?v=kaJSrGrvakQ">
  https://www.youtube.com/watch?v=kaJSrGrvakQ</a>.
</div>


## Loops with a step

In chapter **"Repetitions (Loops)"** we learnt how the **`for`** loop works and we already know when and for what purpose to use it. In this chapter we will pay **attention** to a certain and very important **part of its construction**, namely the **step**. 

### What is a step?

The **step** is that **part** of the **`for`** loop construction that states **how** much to **increase** or **decrease** the value of its **leading** variable.  It is declared last in the  **`for`** loop block.

It most often has a **size `1`** and in that case instead of writing **`i += 1`** or **`i -= 1`**, we can use the **`i++`** or **`i--`** operators. If we want the step to be **different than 1**, we use the operator **`i += (step size)`** to increment and **`i -= (step size)`** to decrement. For a step size of 10, the loop would look like this:

![](assets/chapter-7-1-images/00.Step-explanation-01.png)

The following is a series of sample problems, the solution of which will help us better understand the use of the **step** in the **`for`** loop.

### Example: Numbers from 1 to N with Step 3

Write a program that prints the numbers **from 1 to n** with a **step 3**. For example, **if n = 100**, the result will be **1, 4, 7, 10, …, 94, 97, 100**. 

We can solve the problem through the following sequence of actions (algorithm):

  * We read the number **`n`** from the console input.
  * We run a **`for` loop** from **1** to **`n`** with a step size of **3**.
  * We print the value of the current step in **the body of the loop**.
  
![](assets/chapter-7-1-images/01.Numbers-1-to-n-with-step3-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#0](https://judge.softuni.bg/Contests/Practice/Index/659#0).


### Example: Numbers from N to 1 in reverse order

Write a program that prints the numbers **from n to 1 in reverse order** (step -1). For example, **if n = 100**, the result will be **100, 99, 98, …, 3, 2, 1**.

We can solve the problem in the following way:

  * We read the number **`n`** from the console input.
  * We run a **`for` loop** in which we assign **`int i = n`**.
  * We reverse the loop condition: **`i >= 1`**.
  * We define the step size as: **-1**.
  * We print the value of the current step in **the body of the loop**.

![](assets/chapter-7-1-images/02.Numbers-from-n-to-1-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#1](https://judge.softuni.bg/Contests/Practice/Index/659#1).


### Example: Numbers from 1 to 2^n with a for loop

In the following example, we will have a look at using the usual step with size 1, but with a slightly different logic in the body of the loop.

Write a program that prints the numbers ** from 1 to 2^n ** (two to the power of n). For example, **if n = 10**, the result will be **1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024**.

![](assets/chapter-7-1-images/03.Powers-of-two-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#2](https://judge.softuni.bg/Contests/Practice/Index/659#2).


### Example: Even powers of 2

Print the **even** powers of **2** to **2^n**: **2^0, 2^2, 2^4, 2^8, …, 2^n**. For example, if **n = 10**, the result will be **1, 4, 16, 64, 256, 1024**.

Here is a way to solve the problem:

  * We create a variable **`num`** for the current number to which we assign an initial **value of 1**.
  * We set a value of **2** for the **step** of the loop.
  * In **the body of the loop**, we print the value of the current step and **increase the current number `num` 4 times** (as per the condition of the problem).

![](assets/chapter-7-1-images/04.Even-powers-of-two-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#3](https://judge.softuni.bg/Contests/Practice/Index/659#3).


## While loop

The next type of loops we will get acquainted with are called **'while' loops**. What is specific about them is that they repeat a block of commands, **as long as a given condition is true**. Their structure differs from that of the **`for`** loops, they even have a simplified syntax.


### What is a while loop?

In programming, the **` while` loop** is used when we want to **repeat** the execution of a certain logic while **a given condition is met**. We define '**condition**' as any **expression** that returns **'true'** or **'false'**. When the **condition** is **false**, the **`while`** loop terminates and the program **continues** with the execution of the code following the loop. The **`while` loop** construction looks like this:

![](assets/chapter-7-1-images/00.While-loop-01.png)

The following is a series of sample problems, the solution of which will help us better understand the use of the **`while`** loop.


### Example: Sequence of 2k+1 numbers

Write a program that prints all **numbers ≤ n** from the sequence: **1, 3, 7, 15, 31**, …, having in mind that each next number = **previous number \* 2 + 1**.

Here is how we can solve the problem:

* We create a variable **`num`** for the current number to which we assign an initial **value of 1**.
* We put the **current number <= n** as the loop condition.
* In **the body of the loop**, we print the value of the current number and increase the current number, using the formula from the problem.

Here is a sample representation of the described steps:

![](assets/chapter-7-1-images/05.Sequence-2k-plus-1-01.png)
 
#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#4](https://judge.softuni.bg/Contests/Practice/Index/659#4).


### Example: Numbers in range [1 … 100]

Enter an integer in the range [**1 … 100**]. If it is invalid, input an integer again. In this case, we will consider any number that **is not** in the specified range as invalid.

We can solve the problem through the following algorithm:

* We create a variable **`num`** to which we assign the integer value, obtained from the console input.
* For a loop condition, we put an expression that is **`true`** if the number of the input **is not** in the range specified in the problem condition.
* In **the body of the loop**: we print a message "**Invalid number!**" on the console and then we assign a new value to **`num`** from the console input.
* Having validated the input number, we print its value outside the body of the loop.

Here is a sample representation of the algorithm, using a **`while` цикъл**:

![](assets/chapter-7-1-images/06.Number-in-range-1-to-100-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#5](https://judge.softuni.bg/Contests/Practice/Index/659#5).


## Greatest Common Divisor (GCD)

Before proceeding to the next problem, it is necessary to get acquainted with the definition of the **greatest common divisor** (**GCD**).

**Definition of GCD**: the greatest common divisor of two **natural** numbers **a** and **b** is the largest number that divides **simultaneously** both **a** and **b** without a remainder. For example:


|a|b|GCD| 
|:---:|:---:|:---:| 
|24|16|8|
|67|18|1|
|12|24|12|
|15|9|3|
|10|10|10|
|100|88|4|

## The Euclidean algorithm

In the next problem we will use **the Euclidean algorithm**, one of the first published algorithms for finding the GCD:

**Until** we reach a remainder of 0:

* We divide the larger number by the smaller one.
* We take the remainder of the division.

**Pseudocode** for the Euclidean algorithm:

```java
while b ≠ 0
  var oldB = b;
  b = a % b;
  a = oldB;
print а;
```

### Example: Greatest Common Divisor (GCD)

Enter **integers** **a** and **b** and find **GCD(a, b)**.

We will solve the problem using **the Euclidean algorithm**:

* We create **`a`** and **`b`** variables to which we assign the **integer** values, obtained from the console input.
* For a loop condition, we put an expression that is **`true`** if the **`b`** number **is different** than **0**.
* In **the body of the loop**: we follow the conditions of the pseudocode: 
   * We create a temporary variable to which we assign the **current** value of **`b`**.
   * We assign a new value to **`b`**, which is the remainder of the division of **`a`** and **`b`**.
   * We assign the **previous** value of the **`b`** variable to **`a`**.
* Once the loop is complete and we have found the GCD, we print it on the screen.

![](assets/chapter-7-1-images/07.Greatest-common-divisor-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#6](https://judge.softuni.bg/Contests/Practice/Index/659#6).


## Do-while loop

The next type of loops we will get acquainted with is the **`do-while`**. It resembles the **`while`** loop by structure but there is a significant difference between the two. It consists in the fact that **`do-while`** will execute its body **at least once**. Why is this happening? In the **`do-while`** loop construction, the **condition** is always checked **after** its body, which ensures that the code will be **executed** after the **first loop iteration** and **the check for the loop termination** will be applied to each subsequent iteration of the **`do-while`**. 

![](assets/chapter-7-1-images/00.Do-while-01.png)

The following is the usual series of sample problems, the solution of which will help us better understand the use of the **`do-while`** loop.


### Example: Calculating factorial

Calculate **n! = 1 \* 2 \* 3 \* … \* n**, where **n** is a natural number. For example, if **n = 5**, the result will be: **5!** = 1 \* 2 \* 3 \* 4 \* 5 = **120**.

Here is how we can calculate the factorial:

* We create the variable **`n`** to which we assign the **integer** value, obtained from the console input.
* We create another variable - **`fact`**, the initial value of which is 1. We will use it to calculate and store the factorial.
* For a loop condition, we will use **`n > 1`**, since each time we perform the calculations in the body of the loop, we will reduce the value of **`n`** by 1.
* In **the body of the loop**: 
   * We assign a new value to **`fact`**, which is the result of multiplying the current value of **`fact`** by the current value of **` n` **.
   * We decrease the value of **`n`** by **-1**.
* We print the final value of the factorial outside the body of the loop.

![](assets/chapter-7-1-images/08.Factorial-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#7](https://judge.softuni.bg/Contests/Practice/Index/659#7).


### Example: Sum of a number's digits

Sum the digits of a **positive** integer **n**. For example, if **n = 5634**, the result will be: 5 + 6 + 3 + 4 = **18**.

We can use the following idea to solve the problem:

* We create the variable **`n`** to which we assign a value equal to the number entered by the user.
* We create a second variable - **`sum`**, the initial value of which is 0. We will use it to calculate and store the result.
* For a loop condition, we will use **`n > 0`**, since we will remove the last digit of ** `n` ** after each calculation of the result in the body of the loop.
* In the body of the loop:
   * We assign a new value to **`sum`**, which is the result of the sum of the current value of **`sum`** and the last digit of **`n`**.
   * We assign a new value to **`n`**, which is the result of removing the last digit of  **`n`**.
* We print the final value of the sum outside the body of the loop.

![](assets/chapter-7-1-images/09.Sum-of-digits-01.png)

<table><tr><td><img src="assets/alert-icon.png" style="max-width:50px" /></td>
<td><code><strong>n % 10</strong></code>: <b>returns</b> the last digit of the number <code><strong>n</strong></code>.<br>
<code><strong>n / 10</strong></code>: <b>deletes</b> the last digit of <strong><code>n</code></strong>.</td>
</tr></table>

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#8](https://judge.softuni.bg/Contests/Practice/Index/659#8).


## Infinite loops and break operator

So far, we got acquainted with different types of loops and learned about their constructions and how they are applied. Now, we need to understand what an **infinite loop** is, when it occurs and how we can **terminate** its execution through the **`break`** operator.

### What is an Infinite loop?

An infinite loop is the one that **repeats infinitely** the execution of its body. An infinite loop is the one that **repeats infinitely** the execution of its body. Тhe end check of the **`while`** and **`do-while`** loops is a conditional expression that **always** returns **`true`**. An infinite **`for`** occurs when there is **no condition to end the loop**. 

Here is what an **infinite `while`** loop looks like:

![](assets/chapter-7-1-images/00.Infinite-while-loop-01.png)

And here is what an **infinite `for`** loop looks like:

![](assets/chapter-7-1-images/00.Infinite-for-loop-01.png)

### The break operator

We already know that the infinite loop executes a certain code to infinity, but what if we want to forcibly exit the loop under a given condition at some point? In this situation, the **`break`** operator comes in handy.

<table><tr><td><img src="assets/alert-icon.png" style="max-width:50px" /></td>
<td>The <b><code>break</code></b> operator stops the loop execution at the moment it is called and continues from the first line after the end of the loop. This means that the current iteration of the loop will not be completed and, accordingly the rest of the code in the body of the loop will not be executed. </td>
</tr></table>

### Example: Prime numbers

The next problem we are going to solve requires to conduct a **prime number check**. Before proceeding with it, let’s remember what prime numbers are.

**Definition**: an integer is **prime** if it is divisible without remainder only to itself and to 1. By definition, prime numbers are positive and greater than 1. The smallest prime number is **2**.

We can assume that an integer **n** is prime, if **n > 1** and **n** is not divisible by any of the numbers between **2** and **n-1**.

The first few prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, …

In contrast, **non-prime (composite) numbers** are such numbers that are composed of the product of prime numbers.

Here are a few examples of composite numbers:
* **10** = 2 * 5
* **42** = 2 * 3 * 7
* **143** = 13 * 11

**Verification algorithm** whether an integer is **prime**: we check if **n > 1** and **n** are divisible by **2**, **3**, …, **n-1** without remainder.
* If it is divisible by any of the numbers, it is **composite**.
* If it is not divisible by any of the numbers, then it is **prime**.

<table><tr><td><img src="assets/alert-icon.png" style="max-width:50px" /></td>
<td>We can optimize the algorithm by checking the divisors to <code><strong>√n</strong></code> instead to <code><strong>n-1</strong></code>. Think about the reason why.</td>
</tr></table>

### Example: Prime number verification. The break operator

Check if a number **n** is prime. To do so, we will check if **n** is divisible by the numbers between 2 and √n. 

Here is the algorithm for prime number verification, described in steps:

* We create the variable **`n`** to which we assign the **integer** value, obtained from the console input.
* We create a boolean variable - **`isPrime`** with an initial value **`true`** **if the number is equal or greater than two** (since by definition numbers such as 0, 1, -1 and -2 and non-prime).  We assume that a number is prime until proven otherwise.
* We create a **`for`** loop, we assign 2 as an initial value of the loop variable and **its current value `<= √n`** as a condition. The step of the loop is 1.
* In **the body of the loop** we check if **`n`** divided by **the current value** has a remainder. If there is no remainder, we change the value of **`isPrime`** to **`false`** and forcibly terminate the loop with a **`break`** operator.
* Depending on the **`isPrime`** value, we print whether the number is prime (**`true`**) or composite (**`false`**).

Here is a sample implementation of the described algorithm:

![](assets/chapter-7-1-images/10.Prime-numbers-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#9](https://judge.softuni.bg/Contests/Practice/Index/659#9).


### Example: Break operator in an infinite loop

Write a program that checks if a number **n** is even – if it is, print in on the screen. An even number is each number that is divisible by 2 without a remainder. In the case of an invalid number, it should be re-input and a message stating that the number is not even should be displayed. 

Here is an idea how to solve the problem:

* We create a variable **`n`**, wo which we assign an initial value of **0**.
* We create an infinite **`while`** loop and we put **`true`** as a condition.
* In **the body of the loop**:
   * We take the intiger obtained by the console input and assign it to **`n`**.
   * If **the number is even**, we exit the loop with a **`break`**. 
   * **Otherwise**, we display a message stating that **the number is not eveb**. The iterations continue until an even number is entered.
* We print the even number on the screen.

Here is a sample implementation of the idea:

![](assets/chapter-7-1-images/11.Enter-even-number-01.png)

Note: although the code above is correct, it will not work if the user enters text instead of numbers, for example "** Invalid number **". Then the parsing of the text to a number will break and the program will display **error message (exception)**. We will learn in a while how to deal with this problem and how to catch and handle exceptions using the **`try-catch` construct**.

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#10](https://judge.softuni.bg/Contests/Practice/Index/659#10).


## Вложени цикли и операторът break

След като вече научихме какво са **вложените цикли** и как работи операторът **`break`**, е време да разберем как работят двете заедно. За по-добро разбиране, нека стъпка по стъпка да напишем **програма**, която трябва да направи всички възможни комбинации от **двойки числа**. Първото число от комбинацията е нарастващо от 1 до 3, а второто е намаляващо от 3 до 1. Задачата трябва да продължи изпълнението си, докато **`i + j`** **не** е равно на 2 (т.е. **`i = 1`** и **`j = 1`**).

Желаният резултат е:

![](assets/chapter-7-1-images/00.Nested-and-break-desired-result-01.png)

Ето едно **грешно решение**, което изглежда правилно на пръв поглед:

![](assets/chapter-7-1-images/00.Nested-and-break-desired-result-02.png)

Ако оставим програмата ни по този начин, резултатът ни ще е следният:

![](assets/chapter-7-1-images/00.Nested-and-break-undesired-result-01.png)

Защо се получава така? Както виждаме, в резултата **липсва "1 1"**. Когато програмата стига до там, че **`i = 1`** и **`j = 1`**, тя влиза в **`if`** проверката и изпълнява **`break`** операцията. По този начин се **излиза от вътрешния цикъл**, но след това продължава изпълнението на външния. **`i`** нараства, програмата влиза във вътрешния цикъл и принтира резултата.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Когато във <b>вложен цикъл</b> използваме оператора <b><code>break</code></b>, той прекъсва изпълнението <b>само</b> на вътрешния цикъл.</td>
</tr></table>

Какво е **правилното решение**? Един начин за решаването на този проблем е чрез деклариране на **`bool` променлива**, която следи за това, дали трябва да продължава въртенето на цикъла. При нужда от изход (излизане от всички вложени цикли), се прави **`true`** променливата и се излиза от вътрешния цикъл с **`break`**, а при последваща проверка се напуска и външния цикъл. Ето и примерна имплементация на тази идея:

![](assets/chapter-7-1-images/00.Nested-and-break-undesired-result-02.png)

По този начин, когато **`i + j = 2`**, програмата ще направи променливата **`hasToEnd = true`** и ще излезе от вътрешния цикъл. При следващото завъртане на външния цикъл, чрез **`if`** проверката, програмата няма да може да стигне до вътрешния цикъл и ще прекъсне изпълнението си.

### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#11](https://judge.softuni.bg/Contests/Practice/Index/659#11).


## Справяне с грешни данни: try-catch

Последното, с което ще се запознаем в тази глава, е как да "улавяме" **грешни данни** чрез конструкцията **`try-catch`**.

### Какво е try-catch?

Програмната конструкция **`try-catch`** служи за **прихващане и обработка на изключения (грешки)** по време на изпълнението на програмата.

В програмирането **изключенията** представляват уведомление за дадено събитие, което нарушава нормалната работа на една програма. Такива изключителни събития **прекъсват изпълнението** на програмата ни и тя търси кой да обработи настъпилата ситуация. Ако не намери, изключението се отпечатва на конзолата (програмата “гърми”). Ако намери, **изключението се обработва** и програмата продължава нормалното си изпълнение без да “гърми”. След малко ще видим как точно става това.

Когато настъпи изключение, се казва, че изключението е било **"хвърлено" (throw exception)**. От там идва и изразът **"улавям изключение" (catch exception)**.

### Конструкция на try-catch

Конструкцията **`try-catch`** има различни варианти, но за сега ще се запознаем само с най-основния от тях, при който **`catch`** блокът ще прихване всяка грешка в променлива с име **`ex`**: 

 ![](assets/chapter-7-1-images/00.Try-catch-01.png)
 
В следващата задача ще видим нагледно, как да се справим в ситуация, в която потребителят въвежда вход, различен от число (например **`string`** вместо **`int`**), чрез **`try-catch`**.

### Пример: справяне с грешни числа чрез try-catch

Да се напише програма, която проверява дали едно число **n** е четно и ако е, да се отпечатва на екрана. При **невалидно въведено** число да се изписва съобщение, че въведения вход не е валидно число и въвеждането да продължи отново.

Ето как можем да решим задачата:

* Създаваме безкраен **`while`** цикъл, като за условие ще зададем **`true`**.
* В тялото на цикъла:
	* Създаваме **`try-catch`** конструкция.
	* В **`try`** блока пишем програмната логика за четене на потребителския вход, парсването му до число и проверката за четност.
	* При **четно число** го отпечатваме и излизаме от цикъла (с **`break`**). Програмата си е свършила работата и приключва.
	* При **нечетно число** отпечатваме съобщение, че се изисква четно число, без да излизаме от цикъла (защото искаме той да се повтори отново).
	* Ако **хванем изключение** при изпълнението на **`try`** блока, изписваме съобщение за невалидно въведено число (и цикълът съответно се повтаря, защото не излизаме изрично от него).

Ето и примерна имплементация на описаната идея:

![](assets/chapter-7-1-images/12.Valid-even-number-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#12](https://judge.softuni.bg/Contests/Practice/Index/659#12).

Сега вече решението трябва да работи винаги: независимо дали въвеждаме цели числа, невалидни числа (например твърде много цифри) или текстове, които не съдържат числа.


## Задачи с цикли

В тази глава се запознахме с няколко нови вида цикли, с които могат да се правят повторения с по-сложна програмна логика. Да решим няколко задачи, използвайки новите знания.

### Задача: числа на Фибоначи

Числата на Фибоначи в математиката образуват редица, която изглежда по следния начин: **1, 1, 2, 3, 5, 8, 13, 21, 34, …**

**Формулата** за образуване на редицата е:

```java
F0 = 1
F1 = 1
Fn = Fn-1 + Fn-2
```

#### Примерен вход и изход

|Вход (n)|Изход|Коментар|
|----|-----|---------|
|10|89|F(11) = F(9) + F(8)|
|5|8|F(5) = F(4) + F(3)|
|20|10946|F(20) = F(19) + F(18)|
|0|1| |
|1|1| |

Да се въведе **цяло** число **n** и да се пресметне **n-тото число на Фибоначи**.

#### Насоки и подсказки

Идея за решаване на задачата:

* Създаваме **променлива `n`**, на която присвояваме целочислена стойност от входа на конзолата.
* Създаваме променливите **`f0`** и **`f1`**, на които присвояваме стойност **1**, тъй като така започва редицата.
* Създаваме **`for`** цикъл с условие **текущата стойност `i < n - 1`**.
* В **тялото на цикъла:**
   * Създаваме **временна** променлива **`fNext`**, на която присвояваме следващото число в поредицата на Фибоначи.
   * На **`f0`** присвояваме текущата стойност на **`f1`**.
   * На **`f1`** присвояваме стойността на временната променлива **`fNext`**.
* Извън цикъла отпечатваме числото n-тото число на Фибоначи.

Примерна имплементация:

![](assets/chapter-7-1-images/13.Fibonacci-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#13](https://judge.softuni.bg/Contests/Practice/Index/659#13).


### Задача: пирамида от числа

Да се отпечатат **числата 1 … n в пирамида** като в примерите по долу. На първия ред печатаме едно число, на втория ред печатаме две числа, на третия ред печатаме три числа и т.н. докато числата свършат. На последния ред печатаме толкова числа, колкото останат докато стигнем до **n**.

#### Примерен вход и изход

|Вход |Изход                 |Вход |Изход          |Вход      |Изход                         |
|-----|----------------------|-----|---------------|----------|------------------------------|
|7    |1<br>2 3<br>4 5 6<br>7|5    |1<br>2 3<br>4 5|10        |1<br>2 3<br>4 5 6<br>7 8 9 10 |

#### Насоки и подсказки

Можем да решим задачата с **два вложени цикъла** (по редове и колони) с печатане в тях и излизане при достигане на последното число. Ето идеята, разписана по-подробно:

* Създаваме променлива **`n`**, на която присвояваме целочислена стойност от входа на конзолата.
* Създаваме променлива **`num`** с начална стойност 1. Тя ще пази броя на отпечатаните числа. При всяка итерация ще я **увеличаваме** с **1** и ще я принтираме.
* Създаваме **външен** **`for`** цикъл, който ще отговаря за **редовете** в таблицата. Наименуваме променливата на цикъла **`row`** и ѝ задаваме начална стойност 0. За условие слагаме **`row < n`**. Размерът на стъпката е 1.
* В тялото на цикъла създаваме **вътрешен** **`for`** цикъл, който ще отговаря за **колоните** в таблицата. Наименуваме променливата на цикъла **`col`** и ѝ задаваме начална стойност 0. За условие слагаме **`col < row`** (**`row`** = брой цифри на ред). Размерът на стъпката е 1.
* В тялото на вложения цикъл:
   * Проверяваме дали **`col > 1`**, ако да – принтираме разстояние. Ако не направим тази проверка, а директно принтираме разстоянието, ще имаме ненужно такова в началото на всеки ред.
   * **Отпечатваме** числото **`num`** в текущата клетка на таблицата и го **увеличаваме с 1**.
   * Правим проверка за **`num > n`**. Ако **`num`** е по-голямо от **`n`**, **прекъсваме** въртенето на **вътрешния цикъл**.
* Отпечатваме **празен ред**, за да преминем на следващия.
* Отново проверяваме дали **`num > n`**. Ако е по-голямо, **прекъсваме** изпълнението на **програмата ни** чрез **`break`**.

Ето и примерна имплементация:

![](assets/chapter-7-1-images/14.Number-pyramid-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#14](https://judge.softuni.bg/Contests/Practice/Index/659#14).


### Задача: таблица с числа

Да се отпечатат числата 1 … n в таблица като в примерите по-долу.

#### Примерен вход и изход

|Вход |Изход|Вход|Изход|
|--------|-----|-------|-----|
|3|1 2 3<br>2 3 2<br>3 2 1|4|1 2 3 4<br>2 3 4 3<br>3 4 3 2<br>4 3 2 1|

#### Насоки и подсказки

Можем да решим задачата с **два вложени цикъла** и малко изчисления в тях:

* Четем от конзолата размера на таблицата в целочислена променлива **`n`**.
* Създаваме **`for`** цикъл, който ще отговаря за редовете в таблицата. Наименуваме променливата на цикъла **`row`** и ѝ задаваме начална **стойност 0**. За условие слагаме **`row < n`**. Размерът на стъпката е 1.
* В **тялото на цикъла** създаваме вложен **`for`** цикъл, който ще отговаря за колоните в таблицата. Наименуваме променливата на цикъла **`col`** и ѝ задаваме начална **стойност 0**. За условие слагаме **`col < n`**. Размерът на стъпката е 1.
* В **тялото на вложения цикъл**:
   * Създаваме променлива **`num`**, на която присвояваме резултата от **текущият ред + текущата колона + 1** (+1, тъй като започваме броенето от 0).
   * Правим проверка за **`num > n`**. Ако **`num`** е **по-голямо** от n, присвояваме нова стойност на **`num`** равна на **два пъти n - текущата стойност за `num`**. Това правим с цел да не превишаваме **`n`** в никоя от клетките на таблицата.
    * Отпечатваме числото от текущата клетка на таблицата.
* Отпечатваме **празен ред** във външния цикъл, за да преминем на следващия ред.

![](assets/chapter-7-1-images/15.Number-table-01.png)

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/659#15](https://judge.softuni.bg/Contests/Practice/Index/659#15).


## What did we learn in this chapter?

We can use the **`for`** loops with a **step**:

```java
for (int i = 1; i <= n; i+=3) {
   System.out.println(i);
}
```

The **`while`** / **`do-while`** loops are repeated as long as a given **condition** is true:

```java
int num = 1;
while (num <= n) {
   System.out.println(num++);
}
```

If we need to **interrupt** the loop execution, we use the **`break`** operator:

```java
int n = 0;
while (true) {
   n = Integer.parseInt(scanner.nextLine());
   if (n % 2 == 0)  {
      break; // even number -> exit from the loop
   }
   System.out.println("The number is not even.");
}
System.out.println("Even number entered: {0}", n);
```

We already know how to catch **errors** during the execution of our program:

```java
try {
    System.out.println("Enter even number: ");
    int n = Integer.parseInt(scanner.nextLine());
} catch (Exception ex) {
    System.out.println("Invalid number.");
}
// If Integer.parseInt(…) fails, the catch { … } block will be executed
```
