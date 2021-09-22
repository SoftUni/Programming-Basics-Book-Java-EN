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

## Task: the sleepy cat Tom

**The cat Tom** enjoys sleeping all day, unfortunately whenever his owner has some free time he comes to play with Tom. In order to have a good sleeping routine Tom's **norm for playtime** is **30 000 minutes per year***. Tom's playtime **is dependant on his owner's non-working days**:
* When Tom's owener is at **work**, Tom's playtime is **63 minutes a day**.
* When Tom's owener has a **day off**, Tom's playtime is **127 minutes a day**.

Your task is to write a program takes as input Tom's owner **number of days off** and prints out whether **Tom has a satisfactory sleeping routine** and how much is **the difference from Tom's norm for playtime** for the current year, assuming that **the year has 365 days**.

**Example**: 20 days off → 345 working days (365 - 20 = 345). The actual playing time is 24 275 minutes (345 \ * 63 + 20 \ * 127). The difference from the norm is 5 725 minutes (30 000 - 24 275 = 5 725) or 95 hours and 25 minutes.

### Input data

The input data is read from the console and consists of an integer - **Tom's owner number of days off**, number in the range [**0 … 365**].

### Output data

**Two lines** are to be printed on the console.
* If Tom's **playing time** is above the norm for the current year:
   * **On the first line** print: **"Tom will run away"**.
   * **On the second line** print the difference from the norm in the format:
    **"{H} hours and {M} minutes more for play"**.
* If Tom's **playing time** is below the norm for the current year:
   * **On the first line** print: **"Tom sleeps well"**.
   * **On the second line** print the difference from the norm in the format:
    **"{H} hours and {M} minutes less for play"**.

### Sample input and output

|Input|Output|Input|Output|
|----|-----|----|-----|
|20|Tom sleeps well<br>95 hours and 25 minutes less for play|113|Tom will run away<br>3 hours and 47 minutes for play|

### Guidelines and tips

To solve the task we'll read from the standart input stream, utilize several conditional statements and computations, and print our result to the console.

#### Input data processing and relevant calculations

The **input data** will be read in a **single line** that will contain a **whole number** in the range [**0 … 365**]. That's why the variable that'll store the value is going to be of type **`int`**.

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-01.png)

Our **first** step is to to calculate how many **minutes in total** has Tom and his master played together. The task states that not only has the sleepy cat played in **off of work days** but also in **working days**. **The number** that we read from the console is the number of **non-working days**.

Our next step is to use that number to **calculate** how many are the **working days** of Tom's owner. We need this number because without it we can not get the **total number of playtime minutes**. The total number of days in a year is **365**, the number of off of work days is **X**, it means that the number of working days is **365 - X**. **We will store the difference** in a new variable (**`workingDays`**), which we will use **only** for this **value**.

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-02.png)

Now that we have **the number of days to play**, we can now **calculate Tom's playing time** in minutes. Its **value is equal to** the **result of the multiplication of the working days by 63** minutes (in the task it's specified that on working days the playing time is 63 minutes per day) **added to the result of the multiplication of off of work days and 127** minutes (in the task it's specified that on off of work days the playing time is 127 minutes per day).

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-03.png)

We need to **print the difference** between **hours** and **minutes**. That's why we'll subtract from the **total** playing time Tom's playtime norm of **30 000** minutes and we'll **store** the result in **new** variable. After that we'll use that new variable to **divide without reminder** to 60 and that's how we'll get the **hours**. To get the number of **minutes** we'll utilize the **modulo operator `%`** and get the reminder of division by 60.

In the condition of the output problem we see that we will have to ** print the difference ** between the two values in ** hours ** and ** minutes **. For this purpose, from the ** total ** playing time we will ** subtract ** the norm of ** 30,000 ** minutes and we will ** save ** the obtained difference in ** new ** variable. Then we will ** divide this variable ** integer ** by 60 to get ** the hours **, and then to find out how many ** minutes ** we will use ** modular division with the operator `%` ** , again dividing the variable of the difference by 60.

Note that if Tom's resulting **playtime** is **less** than **30 000** when we **subtract** the norm we'll get **negative number**. We can **fix** that with the **method `Math.abs(…)`** when subtracting.

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-04.png)

#### Conditional expressions verification

The playing time is already calculated which leads us to **the next** step - Tom's **playtime** and Tom's **norm** **comparison**. We'll use **`if-else`** conditional statement. It'll verify in its **`if` clause** whether **the playtime is larger than 30 000 (norm)**.

#### Output data processing

Depending on **the result** of the evaluation of the boolean expression our objective is to print the **difference in hours and minutes**. We'll do that using the **formatting specifier** and the previously computed hour and minutes values. The given output examples show that the printed values are formatted as a rounded down whole number. This is a cue that we should be using **`Math.floor(…)`** when we're printing the result.

![](assets/chapter-3-2-images/03.Sleepy-tom-cat-05.png)

### Test your code in the Judge system

You can test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/652#2](https://judge.softuni.bg/Contests/Practice/Index/652#2).

## Task: harvest

There's a vineyard that has **area of X sq. M.**. **40% of the harvest** is allocated for wine production. The yield from **1sq.m. vineyard** is **Y kilograms of grapes**. To produce **1 liter of wine** is used **2.5kg grapes**. The desired amount of wine **for sale is Z liters**.

Your task is to write a program that **calculates the possible amount of produced wine** and validates if it's **enough**. **If the production is satisfying the expectations, then the remainder shall be distributed equally among the vineyard workers.**

### Input data

**Four lines** are read from the console:
* The first line contains the area of the vineyard **X sq.m** - integer in the interval [**10 … 5000**].
* The second line contains the grapes yield per square meter **Y** - real number in the interval [**0.00 … 10.00**].
* The third line contains the desired amount of wine **Z liters** - an integer in the range [**1 … 600**].
* The fourth line contains the **number of workers** - integer in the interval [**1 … 20**].

### Output data

The following is expected to be printed on the console:
* If the **produced** wine is **less than the required**:
   * **"It will be a tough winter! More {insufficient wine} liters wine needed.**"
      * The result should be **rounded down**.
* If the **produced** wine is **sufficient**:
   * **"Good harvest this year! Total wine: {total wine} liters."**
      * The result must be **rounded down**.
   * **"{Wine left} liters left -> {wine for 1 worker} liters per person."**
      * Both results must be **rounded up**.

### Sample input and output

|Input|Output|Input|Output|
|----|-----|----|-----|
|650<br>2<br>175<br>3|Good harvest this year! Total wine: 208 liters.<br>33 liters left → 11 liters per person.|1020<br>1.5<br>425<br>4|It will be a tough winter! More 180 liters wine needed.|

### Guidelines and tips

To solve the task we'll read from the standart input stream, utilize several conditional statements and computations, and print our result to the console.

#### Input data processing and related calculations

First we need to **check** what **input data** is expected and choose an adequate type for each of the **variables** that will store this data.

![](assets/chapter-3-2-images/04.Harvest-01.png)

To solve the task we need to **compute** the **amount of wine in liters** that the harvest will produce using the **input data**. The task defines a formula that requires the **weight of the yeilded grapes in kg.**. We can easily calculate this by **declaring** a **variable** that will store a **value** equal to **40%** of the result of the **multiplication** of the area of the vineyard and the amount of yeilded grapes per square meter.

Once we have made these calculations, we are ready to **insert** them in the task formula. We **declare** another **variable** that will store the **amount of wine in liters** and will be equal to **weight of the yeilded grapes in kg. divided by 2.5**.

![](assets/chapter-3-2-images/04.Harvest-02.png)

#### Expression evaluation and processing the output data

Our **next step** is to **check** if the **produced wine** is **enough**. We'll use a simple **`if-else` conditional statement** with a clause that **verifies** if the **amount of wine in liters** produced from the harves is **more than** or **equal** to the **desired liters**.

If the expression evaluation returns **`true`**, then on the **first line** we should print **the amount of wine produced by this harvers**. It's required that **this value** should be **rounded down**. To comply with the requirement we'll use the method **`Math.floor(…)`** when printing it using the **formatting specifier**.

The requirement for the second line is to print the interpolated values **rounded up**. We'll use the method **`Math.ceil(…)`**. The values that we have to print are **the wine that's left** and **the amount of wine that is to be given to each worker**. The wine that's left is equal to the **difference** between **the produced liters of wine** and **the desired liters of wine**. The result of this computation we'll store in a new variable that we'll declare and initialize in the **body block** of the **`if` statement** prior to printing the first line. The **amount of wine that is to be given to each worker** we'll get by **dividing** the **difference** to **the number of workers**.

![](assets/chapter-3-2-images/04.Harvest-03.png)

If the expression evaluation returns **`false`**, then we need to **print the difference** between **desired liters of wine** and **the produced liters of wine from this harvest**. It's required that **this value** should be **rounded down**. To comply with the requirement we'll use the method **`Math.floor(…)`** when printing it using the **formatting specifier**.

![](assets/chapter-3-2-images/04.Harvest-04.png)

### Test your code in the Judge system

You can test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/652#3](https://judge.softuni.bg/Contests/Practice/Index/652#3).


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
