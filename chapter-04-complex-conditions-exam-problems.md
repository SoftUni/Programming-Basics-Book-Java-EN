# Chapter 4.2. More Complex Conditions – Exam Problems

The previous chapter introduced you to **nested conditions** in Java. Via nested conditions, the program logic in a particular application can be represented using **`if` conditional statements** that are nested one into another. We also explained the **`switch-case`** conditional statement that allows selecting from a list of options. Now we are going to solve some practical exercises and make sure we have in-depth understanding of the material, by discussing a number of more complex problems that had been given to students on exams. Before moving to the problems, let's first recall what nested conditions are:


## Nested Conditions

```java
if (condition1) {
    if (condition2) {
        // тяло; 
    } else {
        // тяло;
    }
}
```

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
    <td>Remember that <b>it is not a good practice</b> to write <b>deeply nested conditional statements</b> (with more than three levels of nesting). Avoid nesting of more than three conditional statements inside one another. This complicates the code and makes its reading and understanding difficult.</td>
</tr></table>


## Switch-case Conditions

When the program operation depends on the value of a variable, instead of doing consecutive checks with multiple **`if-else`** blocks, we can use the **`switch-case`** conditional statement.

```java
switch (селектор) {
    case стойност1:
        конструкция;
        break;
    case стойност2:
        конструкция;
        break;
    default:
        конструкция;
        break;
}
```

The structure consists of:
* Selector - an expression that calculates a particular value. The type of the selector can be **an integer**, **`string`** or **`enum`**.
* multiple **`case`** labels followed by commands after them, ending with **`break`**.


## Exam Problems

Now, after we refreshed our knowledge on how to use and nest conditional statements in order to implement more complex conditions and program logic, let's solve some exam problems.


## Problem: On Time for the Exam

A student must go **to the exam at a certain time** (for example at 9:30am). He arrives at the exam hall at a given **hour of arrival** (for example 9:40). It is considered that the student has arrived **on time**, if he arrive **at the time when the exam starts or up to half an hour earlier**. If the student arrive **more than 30 minutes earlier**, the student **has come too early**. If he arrive **after the time when the exam starts**, he is **late**. 

Write a program that has an input for the exam starting time and the time of the student arrival, and prints if the student has arrive **on time**, or if he has **arrive early** or if he is **late**, as well as **how many hours or minutes** the student has arrive too early or too late.

### Input Data

From the console are read **four integers** (one per line):

- The first line contains **exam starting time(hours)** – an integer from 0 to 23.
- The second line contains **exam starting time(minutes)** – an integers from 0 to 59.
- The third line contains **hour of arrival** – an integer from 0 to 23.
- The fourth line contains **minutes of arrival** – an integer from 0 to 59.

### Output Data

Print on the first line:

- "**Late**", if the student arrives **later** than the exam starting time.
- "**On time**", if the student arrives **on time** exactly at the exam starting time or up to 30 minutes earlier.
- "**Early**", if the student arrives more than 30 minutes **before** the exam starting time.

If the student arrives with more than one minute difference compared to the exam starting time, print on the next line:

- "**mm minutes before the start**" for arriving less than an hour earlier.
- "**hh:mm hours before the start**" for arriving 1 hour or earlier. Always print the minutes using 2 digits, for example "1:05".
- "**mm minutes after the start**" for arriving less than an hour late.
- "**hh:mm hours after the start**" for arriving late with 1 hour or more. Always print the minutes using 2 digits, for example "1:03".

### Sample Input and Output

| Вход | Изход | Вход | Изход |
|---|---|---|---|
|9<br>30<br>9<br>50|Late<br>20 minutes after the start|16<br>00<br>15<br>00|Early<br>1:00 hours before the start|
|9<br>00<br>8<br>30|On time<br>30 minutes before the start|9<br>00<br>10<br>30|Late<br>1:30 hours after the start|
|14<br>00<br>13<br>55|On time<br>5 minutes before the start|11<br>30<br>8<br>12|Early<br>3:18 hours before the start|

| Вход | Изход | 
|---|---|
|10<br>00<br>10<br>00|On time|
|11<br>30<br>10<br>55|Early<br>35 minutes before the start|
|11<br>30<br>12<br>29|Late<br>59 minutes after the start|

### Hints and Guidelines

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
    <td>It is recommended <b>to read a few more times the task</b> of a given problem by taking notes and sketching examples as you think about them before you start writing code.</td></tr></table>

#### Processing the Input Data

According to the assignment, we expect **four** lines in a row with different **integers**. Looking at the provided parameters, we can use the type **`int`**, as it is suitable for the expected values. We simultaneously **read** an input and **parse** the string value to the selected data type for **integer**.

![](assets/chapter-4-2-images/01.On-time-for-the-exam-01.png)

Looking at the expected output, we can create variables that contain the different output data types, in order to avoid using the so called **"magic strings"** in the code.

![](assets/chapter-4-2-images/01.On-time-for-the-exam-02.png)

#### Calculations

After reading the input data, we can now start writing the logic for calculating the result. Let's first calculate the **starting time** of the exam **in minutes** for easier and more accurate comparison.

![](assets/chapter-4-2-images/01.On-time-for-the-exam-03.png)

Let's also calculate the **arrival time** of the student.

![](assets/chapter-4-2-images/01.On-time-for-the-exam-04.png)

What remains is to calculate the difference between the two times, in order to determine **when** and **what time compared to the exam time** the student has arrived.

![](assets/chapter-4-2-images/01.On-time-for-the-exam-05.png)

Our next step is to do the required **checks and calculations**,and finally we will print the output. Let's separate the code into **two** parts: 

- First, let's show when the student arrived – is he **early**, **late** or **on time**. In order to do that, we will use an **`if-else`** statement.
- After that, we will show the **time difference**, if the student arrives in a **different time** from the starting **time of the exam**.

In order to spare one additional check (**`else`**), we can, by default, assume that the student was late. 

that, according to the condition, we will check whether the difference in times is **more than 30 minutes**. If this is true, we assume that the student is **early**. If we do not match the first condition, we need to check if the **difference is less than or equal to zero (**`<= 0`**)**, by which we are checking the condition whether the student arrived within the range of **0 to 30 minutes** before the exam. 

In all other cases we assume that the student is **late**, which we did **by default**. Therefore, no additional check is needed.

![](assets/chapter-4-2-images/01.On-time-for-the-exam-06.png)

Finally, we need to find out and print **what is the time difference between exam start time and student arrival time**, , as well as whether the time difference indicates the time of arrival **before or after the exam start**.

We check whether the time difference is **more than** one hour, in order to print hours and minutes in the required **format**, or if it is **less than** one hour,  in order to print **only minutes** as a format and description. 

We also need to do one more check – whether the time of the student arrival is **before** or **after** the exam start time.

![](assets/chapter-4-2-images/01.On-time-for-the-exam-07.png)

#### Printing the Result

Finally, what remains is to print the result on the console. According to the requirements, if the student arrived right on time (**not even a minute difference**), we do not need to print a second result. This is why we apply the following **condition**:

![](assets/chapter-4-2-images/01.On-time-for-the-exam-08.png)

Actually, for the purposes of the task, printing the result **on the console** can be done on a much earlier stage – during the calculations. This, however, is not a very good practice. **Why?**

Let's look at the idea that our code is not 10 lines, but 100 or 1000! One day, printing the result will not be done on the console, but will be written in a **file** or displayed as a **web aplication**. Then, on how many places in the code you will need to do changes? Are you sure you won't miss some places?

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Always consider the code that contains <b> logical calculations</b> as a <b>separate part</b> different from the part that processes the input and output data. It has to be able to work regardless of how the data is passed to it and where the result will be displayed.</td></tr></table>

### Testing in the Judge System

Test your solution here:  [https://judge.softuni.bg/Contests/Practice/Index/654#0](https://judge.softuni.bg/Contests/Practice/Index/654#0).


## Problem: Trip

Strange, but most people start planning their vacations in advance. A young programmer has a **certain budget** and spare time in a particula **season**.

Write a program that accepts **as an input the budget and the season**, and **as an output** to print **where will rest** the programmer and **the amount of money that he will spend**.

budget determines the destination, and the season determines what amount of the budget will be spent. If the season is  **summer**, he will go **camping**, and if it is **winter - in a hotel**. If it is in **Europe**, regardless of the season, the programmer will stay in a **hotel**. Each **camping** or **hotel**, according to the destination, has **its own price**, which corresponds to a particular **percentage of the budget**:

- If **100 lv. or less** – somewhere in **Bulgaria**.
  - **Summer** – **30%** of the budget.
  - **Winter** – **70%** of the budget.
- If **1000 lv. or less** – somewhere on the **Balkans**.
  - **Summer** – **40%** of the budget.
  - **Winter** – **80%** of the budget.
- If **more than 1000 lv**. – somewhere in **Europe**.
  - Upon traveling in Europe, regardless of the season, the programmer will spend **90% of the budget**.

### Input Data

The input data will be read from the console and will consist of **two lines**:

- On **the first** line we receive the **budget** - **a floating-point number** int the range of [**10.00 … 5000.00**].
- On **the second** line – **one** of the two possible seasons: "**summer**" or "**winter**".

### Input Data

On the console must be printed **two lines**.

- On the **first** line – "**Somewhere in {destination}**" between "**Bulgaria**", "**Balkans**" and "**Europe**".
- On the **second** line – "{**Vacation type**} – {**Spent money**}":
  - **The vacation** can be between "**Camp**" and "**Hotel**".
  - **The amount of money** has to be **rounded up to the second digit after the decimal point**.

### Sample Input and Output

| Вход | Изход |
|---|---|
|50<br>summer|Somewhere in Bulgaria<br>Camp - 15.00|
|75<br>winter|Somewhere in Bulgaria<br>Hotel - 52.50|
|312<br>summer|Somewhere in Balkans<br>Camp - 124.80|
|678.53<br>winter|Somewhere in Balkans<br>Hotel - 542.82|
|1500<br>summer|Somewhere in Europe<br>Hotel - 1350.00|

### Hints and Guidelines

Typically, as for the other tasks, we can separate the solution into the following parts: reading the input data, doing calculations, printing the result..

#### Processing the Input Data

While carefully reading the requirements, we understand that we expect **two** lines of input data. The first parameter is a **real number**, for which we need to pick an appropriate variable type. For higher level of calculation accuracy, we can pick **`BigDecimal`** as a variable for the budget and for the season - **`string`**. 

![](assets/chapter-4-2-images/02.Trip-01.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
    <td>Always take into consideration what <b>value type</b> is passed in the input data, as well as what type these need to be converted to, in order for the program conditions to work properly!</td>
</tr></table>

**Example**: When you need to do money calculations in a task, use **`BigDecimal`** for higher level of accuracy.

#### Calculations

Let's create and initialize the variables needed for applying the logic and calculations.

![](assets/chapter-4-2-images/02.Trip-02.png)

Similarly to the example in the previous task, we can initialize variables with some of the output results, in order to spare additional initialization.

When examining once again the problem requirements, we notice that the main distribution of where the vacation will take place is determined by the **value of the passed budget**, i.e. our main logic is divided into two cases: 
* If the budget is **less than** a particular value.
* If it is **less than** other value or is **more than** the specified border value. 

Based on the way we arrange the logical scheme (the order in which we will check the border values), we will have more or less conditions in the solution. **Think why!**

After that, we need to apply a condition to check the value of the **given season**. Based on it, we will determine what percentage of the budget will be spent, as well as where the programmer will stay – in a **hotel** or a **camp**.

Let's choose and create the needed format for the output data, which we will use further in the code:
```java
DecimalFormat formatter = new DecimalFormat("0.00");
```

This is a sample code that may be used to implement the above idea:

![](assets/chapter-4-2-images/02.Trip-03.png)

After, we continue with:

![](assets/chapter-4-2-images/02.Trip-04.png)

and finish the conditions with:

![](assets/chapter-4-2-images/02.Trip-05.png)

We always can initialize a given value of the parameter and then make only one check. **This saves us a logic step**.

For ecample, the following block:

![](assets/chapter-4-2-images/02.Trip-03.png)

can be shortened to this type:

![](assets/chapter-4-2-images/02.Trip-06.png)

#### Printing the result

It remains to print the obtained result on the console:

![](assets/chapter-4-2-images/02.Trip-07.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/654#1](https://judge.softuni.bg/Contests/Practice/Index/654#1).


## Problem: Operations Between Numbers

Write a program that reads **two integers (N1 и N2)** and **an operator** that performs a particular **mathematical operation** with them.  Possible operations are: **summing up** (**`+`**), **subtraction** (**`-`**), **multiplying** (**`*`**), **division** (**`/`**) and **modular division** (**`%`**). Upon summing up, subtracting and multiplying, the console must print the result and display whether it is **even** or **odd**. Upon regular division – **just the result**, and upon modular division – **the remainder**. You need to take into consideration the fact that **the divisor can be equal to zero** (**`= 0`**), and dividing by zero is not possible. In this case must be printed **a special notification**.

### Input Data

Are read from the console **3 lines**:

- **N1** – **integer** within the range [**0 … 40 000**].
- **N2** – **integer** within the range [**0 … 40 000**].
- **Operator** – **one character** among: "**+**", "**-**", "**\***", "**/**", "**%**".

### Output Data

Print on the console **one line**:

- If the operation is **summing up**, **subtraction** or **multiplying**:
  - **"{N1} {operator} {N2} = {output} – {even/odd}"**.
- If the operation is **division**:
  - **"{N1} / {N2} = {output}"** – the result is **formatted** up to the **second digit after the decimal point**.
- If the operation is **modular division**:
  - **"{N1} % {N2} = {remainder}"**.
- In case of **dividing by 0 (zero)**:
  - **"Cannot divide {N1} by zero"**.

### Sample Input and Output

| Input | Output | Input | Output |
|---|---|---|---|
|123<br>12<br>/|123 / 12 = 10.25|112<br>0<br>/|Cannot divide 112 by zero|
|10<br>3<br>%|10 % 3 = 1|10<br>0<br>%|Cannot divide 10 by zero|

| Input | Output |
|---|---|
|10<br>12<br>+|10 + 12 = 22 - even|
|10<br>1<br>-|10 - 1 = 9 - odd|
|7<br>3<br>\*|7 * 3 = 21 - odd|

### Hints and Guidelines

The problem is not complex, but there are a lot of code lines to write.

#### Processing the Input Data

After reading the requirements, we understand that we expect **three** lines of input data. On the first **two** lines we expect two **integers** (within the specified range), and on the third line - **an arithmetical symbol**. 

![](assets/chapter-4-2-images/03.Operations-01.png)

#### Calculations

Let's create and initialize the variables needed for the logic and calculations. In one variable we will store **the result from the calculations**, and the other one we will use for the **final output** of the program.

![](assets/chapter-4-2-images/03.Operations-02.PNG)

When carefully reading the requirements, we understand that there are cases where we don't need to do **any** calculations, and simply print the result.

Therefore, we can first check if the second number is **`0`** (zero), as well as whether the operation is **division** or **modular division**, and then initialize the output.

![](assets/chapter-4-2-images/03.Operations-03.png)

Let's place the output as a value upon initializing the **`output`** parameter. This way we can apply only **one condition** - whether it is needed to **recalculate** and **replace** this output. 

Based on the approach that we choose, our next condition will be either a simple **`else`** or a single **`if`**. In the body of this condition, using additional conditions regarding the manner of calculating the output based on the passed operator, we can separate the logic based on the **structure** of the expected **output**. 

From the requirements we can see that for **summing up** (**`+`**), **subtraction** (**`-`**) or **multiplying** (**`*`**) the expected output has the same structure: **"{N1} {operator} {N2} = {output} – {even/odd}"**, whereas for **division** (**`/`**) and **modular division** (**`%`**) the output has a different structure.

![](assets/chapter-4-2-images/03.Operations-04.png)

We finish the solution by applying conditions for summing up, subtraction and multiplying:

![](assets/chapter-4-2-images/03.Operations-05.PNG)

For short and clear conditions, such as the above example for even and odd number, you can use a **ternary operator**. Let's look at the possibility to apply a condition **with** and **without** ternary operator.

**Without using a ternary operator** the code is longer but easier to read:

![](assets/chapter-4-2-images/03.Operations-06.png)

**Upon using a ternary operator** he code is much shorter but may require additional efforts to read and understand the logic:

![](assets/chapter-4-2-images/03.Operations-07.png)

#### Printing the Output

Finally, what remains is to print the calculated result on the console:

![](assets/chapter-4-2-images/03.OperatioA group of football fansns-08.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/654#2](https://judge.softuni.bg/Contests/Practice/Index/654#2).


## Problem: Game Tickets

**A group of football fans** decided to buy **tickets for Euro Cup 2016**. The ticket price sis determine by **two** categories:

- **VIP** – **499.99** leva
- **Normal** – **249.99** leva

The fans **have a certain budget**, and **the number of people** in the group determines what percentage of the budget **should be set aside for transport**:

- **From 1 to 4** – 75% from the budget
- **From 5 to 9** – 60% from the budget
- **From 10 to 24** – 50% from the budget
- **From 25 to 49** – 40% from the budget
- **50 or more** – 25% from the budget

Write a program that **calculates whether the money left in the budget** will be enough for **buying tickets in the chosen category**, as well as **how much money** will be **left or they will need**.

### Input Data

The input is read from the **console** and contains **exactly 3 lines**:

- On the **first** line is the **budget** – a floating-point number in the range of [**1 000.00 … 1 000 000.00**.
- On the **second** line is the **category** – "**VIP**" or "**Normal**".
- On the **third** line is the **number of people in the group** – an integer in the range of [**1 … 200**].

### Output Data

**Print** on the console **one line**:

- If **the budget is enough**:
  - "**Yes! You have {N} leva left.**" – where **N is the remaining amount** of the group.
- If **the budget is not enough**:
  - "**Not enough money! You need {М} leva.**" – where **М is the amount that is insufficient**.

**The amounts** must be **formatted up to the second digit after the decimal point**.

### Sample Input and Output

| Input | Output | Explanations |
|---|---|---|
|1000<br>Normal<br>1|Yes! You have 0.01 leva left.|**1 person: 75%** of the budget are spent on **transport**.<br>**Remaining amount:** 1000 – 750 = **250**.<br>Category **Normal**: The ticket **price is 249.99 * 1 = 249.99**<br>249.99 < 250: **they remain to him** 250 – 249.99 = **0.01**|

| Input | Output | Explanations |
|---|---|---|
|30000<br>VIP<br>49|Not enough money! You need 6499.51 leva.|**49 people: 40%** of the budget are spent on **transport**.<br>Remaining amount: 30000 – 12000 = 18000.<br>Category **VIP**: The ticket **price is** 499.99 * 49.<br>**24499.510000000002** < 18000.<br>**Money needed** 24499.51 - 18000 = **6499.51**|

### Hints and Guidelines

We will read the input data and do the calculations described in the task requirements, in order to check if the money will be sufficient.

#### Processing the Input Data

Let's carefully read the requirements and look at what we expect to take as an **input data**, what is expected to **return as a result**, as well as what are the **main steps** when breaking the **logic circuit**.

For a start, let's process and save the input data in **appropriate** for this **variables**:

![](assets/chapter-4-2-images/04.Match-tickets-01.png)

#### Calculations

Let's create and initialize the needed variables for doing the calculations:

![](assets/chapter-4-2-images/04.Match-tickets-02.png)

Let's review the requirements once again. We need to do **two** blocks of calculations. 

From the first calculations we must understand what part of the budget has to be spent on **transport**. For the logic of these calculations we will notice that it only matters **the number of people in the group**. Therefore, we will create the logic according to the number of fans.

We will use a conditional construction - a series of **`if-else`** blocks.

![](assets/chapter-4-2-images/04.Match-tickets-03.png)

From the second calculations we need to find out what amount will be needed for purchasing **the tickets for the group**. According to the task, it only depends on the type of tickets which we need to buy. 

Let's use **`switch-case`** conditional construction.

![](assets/chapter-4-2-images/04.Match-tickets-04.png)

Once we have calculated the **transport costs** and **the tickets costs**, what remains is to calculate the final result and see **whether it will succeed** the group of fans to attend the Euro Cup 2016 or **not** with this parameters given. 

For printing the result, in order to skip one **`else` condition** we will assume that the group can, by default, attend Euro Cup 2016.

![](assets/chapter-4-2-images/04.Match-tickets-05.png)

#### Printing the Result

Finally, we need to print the calculated result on the console.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/654#3](https://judge.softuni.bg/Contests/Practice/Index/654#3).


## Задача: хотелска стая

Хотел предлага **два вида стаи**: **студио и апартамент**.

Напишете програма, която изчислява **цената за целия престой за студио и апартамент**. **Цените** зависят от **месеца** на престоя:

| **Май и октомври** | **Юни и септември** | **Юли и август** |
|---|---|---|
|Студио – **50** лв./нощувка|Студио – **75.20** лв./нощувка|Студио – **76** лв./нощувка|
|Апартамент – **65** лв./нощувка|Апартамент – **68.70** лв./нощувка|Апартамент – **77** лв./нощувка|

Предлагат се и следните **отстъпки**:

- За **студио**, при повече от **7** нощувки през **май и октомври**: **5%** намаление.
- За **студио**, при повече от **14** нощувки през **май и октомври**: **30%** намаление.
- За **студио**, при повече от **14** нощувки през **юни и септември**: **20%** намаление.
- За **апартамент**, при повече от **14** нощувки, **без значение от месеца: 10%** намаление.

### Входни данни

Входът се чете от **конзолата** и съдържа **точно два реда**:

- На **първия** ред е **месецът** – May, June, July, August, September или October.
- На **втория** ред е **броят на нощувките** – цяло число в интервала [**0 … 200**].

### Изходни данни

Да се **отпечатат** на конзолата **два реда**:

- На първия ред: "**Apartment: { цена за целият престой } lv.**"
- На втория ред: "**Studio: { цена за целият престой } lv.**"

**Цената за целия престой** да е форматирана с точност до **два символа след десетичния знак**.

### Примерен вход и изход

| Вход | Изход |Обяснения |
|---|---|---|
|May<br>15|Apartment: 877.50 lv.<br>Studio: 525.00 lv.| През **май**, при повече от **14 нощувки**, намаляме цената на **студиото с 30%** (50 – 15 = 35), а на **апартамента – с 10%** (65 – 6.5 =58.5).<br>Целият престой в **апартамент – 877.50** лв.<br>Целият престой **в студио – 525.00** лв.|

| Вход | Изход |
|---|---|
|June<br>14|Apartment: 961.80 lv.<br>Studio: 1052.80 lv.|
|August<br>20|Apartment: 1386.00 lv.<br>Studio: 1520.00 lv.|

### Насоки и подсказки

Ще прочетем входните данни и ще извършим изчисленията според описания ценоразпис и правилата за отстъпките и накрая ще отпечатаме резултата.

#### Обработка на входните данни

Съгласно условието на задачата очакваме да получим два реда входни данни - на първия ред **месеца, през който се планува престой**, а на втория - **броя нощувки**.

Нека обработим и запазим входните данни в подходящи за това параметри:

![](assets/chapter-4-2-images/05.Hotel-room-01.png)

#### Изчисления

След това да създадем и инициализираме нужните за изчисленията променливи:

![](assets/chapter-4-2-images/05.Hotel-room-02.png)

Разглеждайки отново условието забелязваме, че основната ни логика зависи от това какъв **месец** ни се подава, както и от броя на **нощувките**.

Като цяло има различни подходи и начини да се направят въпросните проверки, но нека се спрем на основна условна конструкция **`switch-case`**, като в различните **`case` блокове** ще използваме условни конструкции **`if`** и **`if-else`**.

Нека започнем с първата група месеци: **Май** и **Октомври**. За тези два месеца **цената на престой е еднаква** и за двата типа настаняване - в **студио** и в **апартамент**. Следователно е необходимо да направим вътрешна проверка спрямо **броят нощувки**, за да преизчислим **съответната цена** (ако се налага).

![](assets/chapter-4-2-images/05.Hotel-room-03.png)

За следващите месеци **логиката** и **изчисленията** ще са относително **идентични**. 

![](assets/chapter-4-2-images/05.Hotel-room-04.png)

![](assets/chapter-4-2-images/05.Hotel-room-05.png)

След като изчислихме какви са съответните цени и крайната сума за престоя - нека да си изведем резултата във форматиран вид, като преди това го запишем в изходните ни **променливи** - **`studioInfo`** и **`apartmentInfo`**.

![](assets/chapter-4-2-images/05.Hotel-room-06.png)

За изчисленията на изходните параметри използваме **метода** **`java.math.BigDecimal.setScale(int newScale, RoundingMode roundingMode)`**.
Този метод **закръгля десетично** число до **зададен брой цифри** след десетичния знак като съответно имаме и управление от какъв тип да е закръглението - **`RoundingMode`**. За целта, подаваме на метода цяло число (**`int`**) с което указваме до кой знак е нужно да бъде закръглението и стойност от дадена енумерация **`RoundingMode`** (**`UP`**, **`DOWN`**, **`CEILING`**, **`FLOOR`**, **`HALF_UP`**, **`HALF_DOWN`**, **`HALF_EVEN`**). В нашия случай ще закръглим десетичното число до **две цифри** след десетичната точка с тип на закръгление **`HALF_UP`**.

#### Отпечатване на резултата

Накрая остава да покажем изчислените резултати на конзолата.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/654#4](https://judge.softuni.bg/Contests/Practice/Index/654#4).
