# Chapter 3.2. Simple Conditions – Exam tasks

In the previous chapter, we looked at conditional constructions in the Java language, used to perform various actions depending on a condition. We also mentioned the scope of a variable, as well as how to follow line by line the execution of our program (the so-called **debugging**). In this chapter we will practice working with conditional statements, and we'll be looking at some tasks given in actual exams. Let's first retrieve some of the newly acquired knowledge on how the conditional statement is constructed:

```java
if (boolean expression) {
    // body of the conditional block;
} else {
    // body of else-block;
}
```

**`if` statements** consist of:
  * **`if` clause**
  * boolean expression - a variable of boolean type (**`boolean`**) or boolean logical expression (expression that returns a result **`true / false`**)
  * body - contains any block with source code
  * **`else` clause** and its source code block (**optional**)
 
## Exam tasks

After recalling how to write conditional statements, let's solve a few problems to get practical experience with the ** `if-else` ** statement.

## Task: transportation price

A student must travel **n kilometers**. He has a choice between **three modes of transport**:
* **Taxi**. Starting fee: **0.70** BGN. Daily rate: **0.79** BGN/km. Nightly rate: **0.90** BGN/km.
* **Bus**. Daily/Nightly rate: **0.09** BGN/km. Can be used for distances minimum **20** km.
* **Train**. Daily/Nightly rate: **0.06** BGN/km. Can be used for distances at least **100** km

Write a program that enters the number of **kilometers n** and the **period of the day** (day or night) and computes ** the price of the cheapest transport **.

### Input data

**Two lines** are read from the console:
* The first line contains the number **n** - number of kilometers - integer in the interval [**1… 5000**].
* The second line contains the word "**day**" or "**night**" - trip during the day or at night.

### Output data

Print on the console **the lowest price** for the specified number of kilometers.

### Sample input and output

| Input        | Output       | Input        | Output       |
|----------|----------|----------|----------|
|5<br>day    |4.65        |7<br>night  |7           |

| Input        | Output       | Input        | Output       |
|----------|----------|----------|----------|
|25<br>day   |2.25        |180<br>night|10.8        |

### Guidelines and tips

We will read the input data and depending on the distance we will choose the cheapest transport. For this purpose we will use several conditional statements.

#### Input data processing

Our first step is to create an object of type **`java.util.Scanner`**. We pass in its constructor the "input stream" (**`System.in`**) that we are goind to read from. In the definition of the task we have **information about the input and output**. The first **two lines** of the solution will contain the declaration and initialization of the two **variables** that will store the **the values of the input data**.

**The first line is mentioned** to contain **an integer**, so the variable that will be declared is of type **`int`**. For the **second line** the instruction is that it contains a **word**, respectively the variable is of type **`String`**.

![](assets/chapter-3-2-images/01.Transport-price-01.png)

Before we begin with the conditional statements it's necessary to **declare** one **variable** that will store the value of the **transport price**.

![](assets/chapter-3-2-images/01.Transport-price-02.png)

#### Expression evaluation and computing the relevant calculations

Once we have **declared and initialized** the input data and the variable that will store the value of the price, we should assess which **conditions** of the task will be the first to **be checked**.

It is evident from the task that the rates of two of the vehicles **do not depend** on whether it is **day** or **night**, but the rate of the third transport (taxi) does. This is a reason to pick our **first condition** to verify whether it's **day or night** and determine which taxi rate will be **in effect**. To achieve that **we declare another variable** that will store the value of the **taxi fare**.

![](assets/chapter-3-2-images/01.Transport-price-03.png)

Computing the **taxi rate** is performed with an **`if-else`** statement. That's how we taxi price variable is assigned a **value**.

![](assets/chapter-3-2-images/01.Transport-price-04.png)

Once that's done, we can now proceed to the computation of the **full transportation price**. Another condition for the price defined in the task is about the **travelling distance** with a chosen vehicle. Naturally to do that we pick an **`if-else`** condition that we use to determine the **price** for the transport depending on the entered kilometers.

![](assets/chapter-3-2-images/01.Transport-price-05.png)

First we check if the kilometers are **below 20**, since it's specified in the task that the student could only use **taxi** for destinations that are **below 20** kilometers away. If the expression in the first conditional statement is evaluated to **true** then the variable that stores the transportation price (**`price`**) will be **assigned** the corresponding value. This value is equal to the **initial rate**, which we **sum up** with its **rate** **multiplied** by **the distance** that the student has to travel.

If the expression in the first conditional statement is evaluated to **false** then the next step of the program is to check if the distance is **below 100**. The reason we're doing that is because it's possible to use a **bus** as transportation vehicle in this distance range. **The price** per kilometer for the bus **is lower** than the taxi price. Therefore, the result of the expression evaluation is **true**, then here's the place to assign the **value** of the transportation price variable (**`price`**) which equals to the reasult of the **multiplication** of the **distance** and the **bus rate** .

In the case of the second check **not returning `true`** as a result, the program ends up in the **`else`** block and assigns a **value** equal to the **result** of the **multiplication** of the **distance** and the **train rate**. We do that because the train is the **cheapest** transportation vehicle for the given distance.

#### Printing the output data

We **have successfully computed the price of the cheapest transportation** so we're almost at the end of the task. The only thing left is to print out the result that we have to the console. In our task there's no requirement for the result output and that's why we choose to keep it simple and just print the **variable** (**`price`**).

![](assets/chapter-3-2-images/01.Transport-price-06.png)

### Test your code in the Judge system

You can test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/652#0](https://judge.softuni.bg/Contests/Practice/Index/652#0).

## Task: pipes in a pool

A Pool with **volume V** has **two filling pipes**. **Each pipe has a specified hourly flow rate** (liters of water that pass through one pipe per hour). The worker opens the pipes at the same time and leaves the sight for **N hours**. Your task is to write a program that prints out the state of the pool, **at the moment the worker comes back**.

### Input data

**Four lines** are read from the console:
* The first line contains the number **V - pool volume in liters** - integer in the range [**1… 10000**].
* The second line contains the number **P1 - hourly flow rate of the first tube** - integer in the interval [**1 … 5000**].
* The third line contains the number **P2 - hourly flow rate of the second tube** - integer in the range [**1 … 5000**].
* The fourth line contains the number **H - number of hours that the employee is absent** - a floating point number in the interval [**1.0 … 24.00**].

### Output data

Print on the console **one of two possible states**:
* How full is the pool and each pipe's percentage contribution. Use the whole number before the decimal point of a percentage (i.e. round down).
   * "The pool is **[x]**% full. Pipe 1: **[y]**%. Pipe 2: **[z]**%."
* If the pool has overflowed - how many liters over the pool's volume has the pool overflowed for the given time, floating point number.
   * "For **[x]** hours the pool overflows with **[y]** liters."
\ * **Have in mind** that due to **the percentage rounding** some data may be **lost** and it's okay for **the sum of the percentages to be 99% and not 100%**.

### Sample input and output

|Input|Output|Input|Output|
| ---- | ----- | ---- | ---- |
|1000<br>100<br>120<br>3 |The pool is 66% full. Pipe 1: 45%. Pipe2: 54%. |100<br>100<br>100<br>2.5|For 2.5 hours the pool overflows with 400 liters.|

### Guidelines and tips

To solve the task we'll read from the standart input stream, utilize several conditional statements and computations, and print our result to the console.

#### Input data processing

By definition our program has to have **four lines** that are going to read and store **the input data**. The first **three** are going to store **whole numbers** and this is a reason we pick the **`int`** type for those **variables**. On the **fourth** line we are supposed to get a floating point **number** and that's why the **variable** that we're going to use is of type **`double`**.

![](assets/chapter-3-2-images/02.Pipes-in-pool-01.png)

Our next step is to **declare and initialize** a variable that will store the computed value for **the amount of water that the pool has filled up with while the worker has been away**. The calculation is made by **summing up the flow rate of the two pipes** and **multiplying them** by the input **hours H**.

![](assets/chapter-3-2-images/02.Pipes-in-pool-02.png)

#### Expression evaluation and computing the relevant calculations

Once we have the **the amount** of water that has passed through the **pipes**, the next step is to **compare** it with the volume of the pool.

We will do this with a simple **`if-else`** conditional statement, in which the condition will be whether **the amount of water is less than the volume of the pool**. If the check returns **`true`**, then we need to print a **line** that contains **the ratio** between **the amount of water that has passed through the pipes** and the volume of pool**, as well as **the ratio of the amount of water** from each pipe to **pool volume**.

Съотношението е нужно да бъде изразено в **проценти**, затова и всички изчисления до момента в този ред ще бъдат **умножени по 100**. Стойностите ще бъдат вмъкнати с **форматиращи низове** и тъй като има условие **резултата в проценти** да се форматира до **цяло число**, то за целта ще използваме метода **`Math.floor(…)`**.

The ratio needs to be expressed in **percentage** that's why we'll **multiply by 100** the result of all the prior calculations on this line. The values will be interpolated using **formatting strings** and rounded down to **integer** with **`Math.floor (…)`** (it's a requirement of the task).

![](assets/chapter-3-2-images/02.Pipes-in-pool-03.png)

Ако проверката обаче върне резултат **`false`**, то това означава, че количеството вода е **по-голямо** от **обема** на басейна, съответно той е **прелял**. Отново изхода трябва да е на **един ред**, но този път съдържа в себе си само **две стойности** - тази на **часовете**, в които работникът е отсъствал, и **количеството вода**, което е **разлика** между **влязлата вода** и **обема на басейна**.

However, if the check returns **`false`** it means that the amount of water is **greater** than **the volume** of the pool, respectively it has **overflowed**. Again, the output must be **one line** but this time it should contain only **two values** - **away time in hours** of the worker and **the amount of overflowed water**.

### Test your code in the Judge system

You can test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/652#1](https://judge.softuni.bg/Contests/Practice/Index/652#1).

## Задача: поспаливата котка Том

**Котката Том** обича по цял ден да спи, за негово съжаление стопанинът му си играе с него винаги когато има свободно време. За да се наспи добре, **нормата за игра** на Том е **30 000 минути в година**. Времето за игра на Том **зависи от почивните дни на стопанина му**:
* Когато е на **работа**, стопанинът му си играе с него **по 63 минути на ден**.
* Когато **почива**, стопанинът му си играе с него **по 127 минути на ден**.

Напишете програма, която въвежда **броя почивни дни** и отпечатва дали **Том може да се наспи добре** и колко е **разликата от нормата** за текущата година, като приемем че **годината има 365 дни**.
   
**Пример**: 20 почивни дни → работните дни са 345 (365 – 20 = 345). Реалното време за игра е 24 275 минути (345 \* 63 + 20 \* 127).  Разликата от нормата е 5 725 минути (30 000 – 24 275 = 5 725) или 95 часа и 25 минути.

### Входни данни

Входът се чете от конзолата и се състои от едно цяло число - **броят почивни дни** в интервала [**0 … 365**].

### Изходни данни

На конзолата трябва да се отпечатат **два реда**.
* Ако времето за игра на Том **е над нормата** за текущата година:
  * **На първия ред** отпечатайте: **"Tom will run away"**.
  * **На втория ред** отпечатайте разликата от нормата във формат:  
   **"{H} hours and {M} minutes more for play"**.
* Ако времето за игра на Том **е под нормата** за текущата година:
  * **На първия ред** отпечатайте: **"Tom sleeps well"**.
  * **На втория ред** отпечатайте разликата от нормата във формат:  
   **"{H} hours and {M} minutes less for play"**.

### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|----|-----|----|-----|
|20|Tom sleeps well<br>95 hours and 25 minutes less for play|113|Tom will run away<br>3 hours and 47 minutes for play|

### Насоки и подсказки

За да решим задачата, ще прочетем входа, ще извършим няколко проверки и изчисления и ще отпечатаме резултата.

#### Обработка на входните данни и прилежащи изчисления

От условието на задачата виждаме, че **входните данни** ще бъдат прочетени само от **един ред**, който ще съдържа в себе си **едно цяло число** в интервала [**0 … 365**]. По тази причина ще използваме променлива от тип **`int`**. 

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-01.png)

За да решим задачата, **първо** трябва да изчислим колко **общо минути** стопанинът на Том си играе с него. От условието виждаме, че освен в **почивните дни**, поспаливата котка трябва да си играе и в **работнитe** за стопанина му. **Числото**, което прочитаме от конзолата, е това на **почивните дни**. 

Следващата ни стъпка е с помощта на това число да **изчислим** колко са **работните дни** на стопанина, тъй като без тях не можем да стигнем до **общото количество минути за игра**. Щом общият брой на дните в годината е ***365***, а броят на почивните дни е **Х**, то това означава, че броят на работните дни е **365 - X**. **Разликата** ще запазим в нова променлива (**`workingDays`**), която ще използваме **само** за тази **стойност**.

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-02.png)

След като вече имаме **количествата дни за игра**, то вече можем да **изчислим времето за игра** на Том в минути. Неговата **стойност е равна** на **резултата от умножението на работните дни по 63** минути (в условието е зададено, че в работни дни, времето за игра е 63 минути на ден) **събран с резултата от умножението на почивните дни по 127** минути (в условието е зададено, че в почивните дни, времето за игра е 127 минути на ден).

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-03.png)

В условието на задачата за изхода виждаме, че ще трябва да **разпечатаме разликата** между двете стойности в **часове** и **минути**. За тази цел от **общото** време за игра ще **извадим** нормата от **30 000** минути и получената разлика ще **запишем** в **нова** променлива. След това тази променлива ще **разделим целочислено** на 60, за да получим **часовете**, а след това, за да открием колко са **минутите** ще използваме **модулно деление с оператора `%`**, като отново ще разделим променливата на разликата с 60. 

Тук трябва да отбележим, че ако полученото количество **време игра** на Том е **по-малко** от **30 000**, при **изваждането** на нормата от него ще получим **число с отрицателен знак**. За да **неутрализираме** знака в двете деления по-късно, ще използваме **метода `Math.abs(…)`** при намирането на разликата.

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-04.png)

#### Извършване на проверки

Времето за игра вече е изчислено, което ни води до **следващата** стъпка - **сравняване** на **времето за игра** на Том с **нормата**, от която зависи дали котката може да се наспива добре. За целта ще използваме **`if-else`** проверка, като в **`if` клаузата** ще проверим дали **времето за игра е по-голямо от 30 000** (нормата). 

#### Обработка на изходните данни

Какъвто и **резултат** да ни върне проверката, то трябва да разпечатаме колко е **разликата в часове и минути**. Това ще направим с **форматен спецификатор** и променливите, в които изчислихме стойностите на часовете и минутите. От дадените примери за изход виждаме, че часовете и минутите са форматирани като цяло число, закръглено до по-ниската стойност. Това ни подсказва, че трябва да използваме метода **`Math.floor(…)`**, когато разпечатваме резултата.

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-05.png)

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/652#2](https://judge.softuni.bg/Contests/Practice/Index/652#2).


## Задача: реколта

От лозе с **площ X кв. м.** се заделя **40% от реколтата** за производство на вино. От **1 кв.м. лозе** се изкарват **Y килограма грозде**. За **1 литър вино** са **нужни 2,5 кг. грозде**. Желаното количество вино **за продан е Z литра.**

Напишете програма, която **пресмята колко вино може да се произведе** и дали това количество **е достатъчно**. **Ако е достатъчно, остатъкът се разделя по равно между работниците на лозето.**

### Входни данни

Входът се чете от конзолата и се състои от **точно 4 реда**:
* 1-ви ред: **X кв.м е лозето** – цяло число в интервала [**10 … 5000**].
* 2-ри ред: **Y грозде за един кв.м.** – реално число в интервала [**0.00 … 10.00**].
* 3-ти ред: **Z нужни литри вино** – цяло число в интервала [**1 … 600**].
* 4-ти ред: **брой работници** – цяло число в интервала [**1 … 20**].

### Изходни данни

На конзолата трябва да се отпечата следното:
* Ако **произведеното** вино е **по-малко от нужното**:
  * **"It will be a tough winter! More {недостигащо вино} liters wine needed.**"  
   \* Резултатът трябва да е **закръглен към по-ниско цяло число**.
* Ако **произведеното** вино е **повече от нужното**:
  * **"Good harvest this year! Total wine: {общо вино} liters."**  
   \* Резултатът трябва да е **закръглен към по-ниско цяло число**.
  * **"{Оставащо вино} liters left -> {вино за 1 работник} liters per person."**  
   \* И двата резултата трябва да са **закръглени към по-високото цяло число**.

### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|----|-----|----|-----|
|650<br>2<br>175<br>3|Good harvest this year! Total wine: 208 liters.<br>33 liters left → 11 liters per person.|1020<br>1.5<br>425<br>4|It will be a tough winter! More 180 liters wine needed.|

### Насоки и подсказки

За да решим задачата, ще прочетем входа, ще извършим няколко проверки и изчисления и ще отпечатаме резултата.

#### Обработка на входните данни и прилежащи изчисления

Първо трябва да **проверим** какви ще са **входните данни** и да изберем какви **променливи** ще използваме. 

![](assets/chapter-3-2-images/04.Harvest-01.png)

За да решим задачата е нужно да **изчислим** колко **литра вино** ще получим на база **входните данни**. От условието на задачата виждаме, че за да **пресметнем** количеството **вино в литри**, трябва първо да разберем какво е **количеството грозде в килограми**, което ще се получи от тази реколта. За тази цел ще **декларираме** една **променлива**, на която ще присвоим **стойност**, равна на **40%** от резултата от **умножението** на площта на лозето и количеството грозде, което се получава от 1 кв. м.

След като сме извършили тези пресмятания, сме готови да **пресметнем** и **количеството вино в литри**, което ще се получи от тази реколта. За тази цел **декларираме** още една **променлива**, в която ще пазим това **количество**, а от условието стигаме до извода, че за да го пресметнем, е нужно да **разделим количеството грозде в килограми на 2.5**. 

![](assets/chapter-3-2-images/04.Harvest-02.png)

#### Извършване на проверки и обработка на изходните данни

Вече сме направили нужните пресмятания и **следващата стъпка** е да **проверим** дали **получените литри** вино са **достатъчни**. За целта ще използваме **проста условна конструкция** от типа **`if-else`**, като в условието ще **проверим** дали **литрите вино** от реколтата са **повече от** или **равни** на **нужните литри**. 

Ако проверката върне резултат **`true`**, от условието на задачата виждаме, че на **първия ред** трябва да разпечатаме **виното, което сме получили от реколтата**. За да спазим условието **тази стойност** да бъде **закръглена до по-ниското цяло число**, ще използваме метода **`Math.floor(…)`** при разпечатването й чрез **форматен спецификатор**. 

На втория ред има изискване да разпечатаме резултатите, като ги **закръглим към по-високото цяло число**, което ще направим с метода **`Math.ceil(…)`**. Стойностите, които трябва да разпечатаме, са на **оставащото количество вино** и **количеството вино, което се пада на един работник**. Оставащото количество вино е равно на **разликата** между **получените литри вино** и **нужните литри вино**. Стойността на това количество ще изчислим в нова променлива, която ще декларираме и инициализираме в **блок тялото** на **`if`**, **преди** разпечатването на първия ред. Количеството вино, което **се полага на един работник**, ще изчислим като **оставащото вино** го **разделим** на **броя** на работниците. 

![](assets/chapter-3-2-images/04.Harvest-03.png)

Ако проверката ни върне резултат **`false`** от условието на задачата виждаме, че трябва да **разпечатаме разликата** от **нужните литри** и **получените от тази реколта литри вино**. Има условие резултата да е **закръглен към по-ниското цяло число**, което ще направим с метода **`Math.floor(…)`**.

![](assets/chapter-3-2-images/04.Harvest-04.png)

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/652#3](https://judge.softuni.bg/Contests/Practice/Index/652#3).


## Задача: фирма

Фирма получава заявка за изработването на проект, за който са необходими определен брой часове. Фирмата разполага с **определен брой дни**. **През 10% от дните** служителите са на обучение и **не могат да работят** по проекта. Един нормален **работен ден във фирмата е 8 часа**. Проектът е важен за фирмата и всеки **служител задължително работи** по проекта в **извънработно време по 2 часа** на ден.

**Часовете** трябва да са **закръглени към по-ниско цяло число** (например → **6.98 часа** се закръглят на **6 часа**).

Напишете програма, която изчислява дали **фирмата може да завърши проекта навреме** и **колко часа не достигат или остават**.

### Входни данни

Входът се чете от **конзолата** и съдържа **точно 3 реда**:
* На първия ред са **необходимите часове** – цяло число в интервала [**0 … 200 000**].
* На втория ред са **дните, с които фирмата разполага** – цяло число в интервала [**0 … 20 000**].
* На третия ред е **броят на всички служители** – цяло число в интервала [**0 … 200**].

### Изходни данни

Да се **отпечата** на конзолата **един ред**:
* Ако **времето е достатъчно**:
  * **"Yes!{оставащите часове} hours left."**.
* Ако  **времето НЕ Е достатъчно**:
  * **"Not enough time!{недостигащите часове} hours needed."**.

### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|----|-----|----|-----|
|90<br>7<br>3<br>|Yes!99 hours left.|99<br>3<br>1|Not enough time!72 hours needed.|

### Насоки и подсказки

За да решим задачата, ще прочетем входа, ще извършим няколко проверки и изчисления и ще отпечатаме резултата.

#### Обработка на входните данни

За решението на задачата е нужно **първо** да преценим какви **типове променливи** ще използваме за **входните данни**. 

![](assets/chapter-3-2-images/05.Firm-01.png)

#### Помощни изчисления

Следващата стъпка е да изчислим **количеството на работните часове** като умножим работните дни по 8 (всеки ден се работи по 8 часа) с броя на работниците и ги съберем с извънработното време. **Работните дни** са равни на **90% от дните**, с които фирмата разполага. **Извънработното време** е равно на резултата от умножението на броя на служителите с 2 (възможните часове извънработно време), като това също се умножава по броя на дните, с които фирмата разполага. От условието на задачата виждаме, че има условие **часовете** да са **закръглени към по-ниско цяло число**, което ще направим с метода **`Math.floor(…)`**.

![](assets/chapter-3-2-images/05.Firm-02.png)

#### Извършване на проверки

След като сме направили изчисленията, които са ни нужни за да разберем стойността на **работните часове**, следва да направим проверка дали тези часове **достигат или остават допълнителни** такива. 

Ако **времето е достатъчно**, разпечатваме резултата, който се изисква в условието на задачата, а именно разликата между **работните часове и необходимите часове** за завършване на проекта. 

Ако **времето не е достатъчно**, разпечатваме допълнителните часове, които са нужни за завършване на проекта и са равни на разликата между **часовете за проекта** и **работните часове**. 

![](assets/chapter-3-2-images/05.Firm-03.png)

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/652#4](https://judge.softuni.bg/Contests/Practice/Index/652#4).
