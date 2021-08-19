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

### Входни данни

Входът се чете от конзолата и се състои от **два реда**:

- На **първия** ред получаваме **бюджета** - **реално число** в интервал [**10.00 … 5000.00**].
- На **втория** ред – **един** от двата възможни сезона: "**summer**" или "**winter**".

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


## Задача: операции между числа

Напишете програма, която чете **две цели числа (N1 и N2)** и **оператор**, с който да се извърши дадена **математическа операция** с тях. Възможните операции са: **събиране** (**`+`**), **изваждане** (**`-`**), **умножение** (**`*`**), **деление** (**`/`**) и **модулно деление** (**`%`**). При събиране, изваждане и умножение на конзолата трябва да се отпечата резултата и дали той е **четен** или **нечетен**. При обикновено деление – **единствено резултата**, а при модулно деление – **остатъка**. Трябва да се има предвид, че **делителят може да е равен на нула** (**`= 0`**), а на нула не се дели. В този случай трябва да се отпечата **специално съобщение**.

### Входни данни

От конзолата се прочитат **3 реда**:

- **N1** – **цяло число** в интервала [**0 … 40 000**].
- **N2** – **цяло число** в интервала [**0 … 40 000**].
- **Оператор** – **един символ** измежду: "**+**", "**-**", "**\***", "**/**", "**%**".

### Изходни данни

Да се отпечата на конзолата **един ред**:

- Ако операцията е **събиране**, **изваждaне** или **умножение**:
  - **"{N1} {оператор} {N2} = {резултат} – {even/odd}"**.
- Ако операцията е **деление**:
  - **"{N1} / {N2} = {резултат}"** – резултатът е **форматиран** до **втория символ след десетичния знак**.
- Ако операцията е **модулно деление**:
  - **"{N1} % {N2} = {остатък}"**.
- В случай на **деление на 0 (нула)**:
  - **"Cannot divide {N1} by zero"**.

### Примерен вход и изход

| Вход | Изход | Вход | Изход |
|---|---|---|---|
|123<br>12<br>/|123 / 12 = 10.25|112<br>0<br>/|Cannot divide 112 by zero|
|10<br>3<br>%|10 % 3 = 1|10<br>0<br>%|Cannot divide 10 by zero|

| Вход | Изход |
|---|---|
|10<br>12<br>+|10 + 12 = 22 - even|
|10<br>1<br>-|10 - 1 = 9 - odd|
|7<br>3<br>\*|7 * 3 = 21 - odd|

### Насоки и подсказки

Задачата не е сложна, но има доста редове код за писане.

#### Обработка на входните данни

След прочитане на условието разбираме, че очакваме **три** реда с входни данни. На първите **два** реда ни се подават **цели числа** (в указания от заданието диапазон), а на третия - **аритметичен символ**. 

![](assets/chapter-4-2-images/03.Operations-01.png)

#### Изчисления

Нека си създадем и инициализираме нужните за логиката и изчисленията променливи. В едната ще пазим **резултата от изчисленията**, а другата ще използваме за **крайния изход** на програмата.

![](assets/chapter-4-2-images/03.Operations-02.PNG)

Прочитайки внимателно условието разбираме, че има случаи, в които не трябва да правим **никакви** изчисления, а просто да изведем резултат.

Следователно първо може да проверим дали второто число е **`0`** (нула), както и дали операцията е **деление** или **модулно деление**, след което да инициализираме резултата.

![](assets/chapter-4-2-images/03.Operations-03.png)

Нека сложим резултата като стойност при инициализацията на **`output`** параметъра. По този начин може да направим само **една проверка** - дали е необходимо да **преизчислим** и **заменим** този резултат. 

Спрямо това кой подход изберем, следващата ни проверка ще бъде или обикновен **`else`** или единичен **`if`**. В тялото на тази проверка, с допълнителни проверки за начина на изчисление на резултата спрямо подадения оператор, можем да разделим логиката спрямо **структурата** на очаквания **резултат**. 

От условието можем да видим, че за **събиране** (**`+`**), **изваждане** (**`-`**) или **умножение** (**`*`**) очакваният резултат има еднаква структура: **"{N1} {оператор} {N2} = {резултат} – {even/odd}"**, докато за **деление** (**`/`**) и за **модулно деление** (**`%`**) резултатът има различна структура.

![](assets/chapter-4-2-images/03.Operations-04.png)

Завършваме с проверките за събиране, изваждане и умножение:

![](assets/chapter-4-2-images/03.Operations-05.PNG)

При кратки и ясни проверки, както в горния пример за четно и нечетно число, е възможно да се използва **тернарен оператор**. Нека разгледаме възможната проверка **с** и **без** тернарен оператор.

**Без използване на тернарен оператор** кодът е по-дълъг, но се чете лесно:

![](assets/chapter-4-2-images/03.Operations-06.png)

**С използване на тернарен оператор** кодът е много по-кратък, но може да изисква допълнителни усилия, за да бъде прочетен и разбран като логика:

![](assets/chapter-4-2-images/03.Operations-07.png)

#### Отпечатване на резултата

Накрая ни остава да покажем изчисления резултат на конзолата:

![](assets/chapter-4-2-images/03.Operations-08.png)

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/654#2](https://judge.softuni.bg/Contests/Practice/Index/654#2).


## Задача: билети за мач

**Група запалянковци** решили да си закупят **билети за Евро 2016**. Цената на билета се определя спрямо **две** категории:

- **VIP** – **499.99** лева
- **Normal** – **249.99** лева

Запалянковците **имат определен бюджет**, a **броят на хората** в групата определя какъв процент от бюджета трябва **да се задели за транспорт**:

- **От 1 до 4** – 75% от бюджета
- **От 5 до 9** – 60% от бюджета
- **От 10 до 24** – 50% от бюджета
- **От 25 до 49** – 40% от бюджета
- **50 или повече** – 25% от бюджета

Напишете програма, която да **пресмята дали с останалите пари от бюджета** могат да си **купят билети за избраната категория**, както и **колко пари** ще им **останат или ще са им нужни**.

### Входни данни

Входът се чете от **конзолата** и съдържа **точно 3 реда**:

- На **първия** ред е **бюджетът** – реално число в интервала [**1 000.00 … 1 000 000.00**.
- На **втория** ред е **категорията** – "**VIP**" или "**Normal**".
- На **третия** ред е **броят на хората в групата** – цяло число в интервала [**1 … 200**].

### Изходни данни

Да се **отпечата** на конзолата **един ред**:

- Ако **бюджетът е достатъчен**:
  - "**Yes! You have {N} leva left.**" – където **N са останалите пари** на групата.
- Ако **бюджетът НЕ Е достатъчен**:
  - "**Not enough money! You need {М} leva.**" – където **М е сумата, която не достига**.

**Сумите** трябва да са **форматирани с точност до два символа след десетичния знак**.

### Примерен вход и изход

| Вход | Изход | Обяснения |
|---|---|---|
|1000<br>Normal<br>1|Yes! You have 0.01 leva left.|**1 човек: 75%** от бюджета отиват за **транспорт**.<br>**Остават:** 1000 – 750 = **250**.<br>Категория **Normal**: билетът **струва 249.99 * 1 = 249.99**<br>249.99 < 250: **остават му** 250 – 249.99 = **0.01**|

| Вход | Изход | Обяснения |
|---|---|---|
|30000<br>VIP<br>49|Not enough money! You need 6499.51 leva.|**49 човека: 40%** от бюджета отиват за **транспорт**.<br>Остават: 30000 – 12000 = 18000.<br>Категория **VIP**: билетът **струва** 499.99 * 49.<br>**24499.510000000002** < 18000.<br>**Не стигат** 24499.51 - 18000 = **6499.51**|

### Насоки и подсказки

Ще прочетем входните данни и ще извършим изчисленията, описани в условието на задачата, за да проверим дали ще стигнат парите.

#### Обработка на входните данни

Нека прочетем внимателно условието и да разгледаме какво се очаква да получим като **входни данни**, какво се очаква да **върнем като резултат**, както и кои са **основните стъпки** при разбиването **на логическата схема**.

Като за начало, нека обработим и запазим входните данни в **подходящи** за това **променливи**:

![](assets/chapter-4-2-images/04.Match-tickets-01.png)

#### Изчисления

Нека създадем и инициализираме нужните за изчисленията променливи:

![](assets/chapter-4-2-images/04.Match-tickets-02.png)

Нека отново прегледаме условието. Трябва да направим **две** различни блок изчисления. 

От първите изчисления трябва да разберем каква част от бюджета ще трябва да заделим за **транспорт**. За логиката на тези изчисления забелязваме, че има значение единствено **броят на хората в групата**. Следователно ще направим логическата разбивка спрямо броя на запалянковците.

Ще използваме условна конструкция - поредица от **`if-else`** блокове.

![](assets/chapter-4-2-images/04.Match-tickets-03.png)

От вторите изчисления трябва да намерим каква сума ще ни е необходима за закупуване на **билети за групата**. Според условието, това зависи единствено от типа на билетите, които трябва да закупим. 

Нека използваме **`switch-case`** условна конструкция.

![](assets/chapter-4-2-images/04.Match-tickets-04.png)

След като сме изчислили какви са **транспортните разходи** и **разходите за билети**, ни остава да изчислим крайния резултат и да разберем **ще успее** ли групата запалянковци да отиде на Евро 2016 или **няма да успее** при така подадените параметри. 

За извеждането на резултата, за да си спестим една **`else` проверка** приемаме, че групата по подразбиране ще може да отиде на Евро 2016.

![](assets/chapter-4-2-images/04.Match-tickets-05.png)

#### Отпечатване на резултата

Накрая ни остава да покажем изчисления резултат на конзолата.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/654#3](https://judge.softuni.bg/Contests/Practice/Index/654#3).


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
