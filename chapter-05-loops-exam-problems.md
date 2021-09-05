# Chapter 5.2. Loops – Exam Problems

In the previous chapter, we learned how to run a block of code **more than once**. That’s why we introduced **`for` loops** and we looked at some of its main use cases. This chapter aims to cement our knowledge by solving some more complex problems with loops, given at exams. We will show detailed solutions for some of the examples, and for the others, we will leave only guidance.
Before we get to work it’s best if we take another look at the construction of the **`for` loop**:

![](assets/chapter-5-2-images/00.For-construction.png)

**For loops** consist of:
 * Initialization block is run once in the beginning before the compiler checks the condition for the loop. In this case, the variable counter is declared (**`int i`**) and its initial value is set.
 * The repeat condition (**`i <= 10`**),  is run once before each iteration.
 * Counter update (**`i++`**) – this code runs after every iteration.
 * The loop body - can contain one line of code or a whole block of code.

 
## Exam Problems

Let’s solve some problems with loops from exams in SoftUni.


## Problem: Histogram
	
We are given **n whole numbers** within the range [**1 … 1000**]. Some percent of them **p1** are below 200, percent __p2__ are from 200 to 399, percent **p3** are from 400 to 599, percent **p4** are from 600 to 799 and the rest are **p5** percent from 800 and above. Let us write a program that calculates and prints the percentages in the console **p1**, **p2**, **p3**, **p4** and **p5**.

**Example**: we have n = **20** and the numbers: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. We get the following distribution and visualization:
                          
| **Group**   | **Numbers**                                       | **Number count** | **Percent**                     |
|-------------|-------------------------------------------------|:---------------|---------------------------------|
| < 200       | 53, 7, 56, 180, 12, 7, 150, 2, 199, 46, 128, 65 | 12             | p1 = 12 / 20 * 100 = 60.00%     |
| 200 … 399   | 250, 200                                        | 2              | p2 = 2 / 20 * 100 = 10.00%      |
| 400 … 599   | 450                                             | 1              | p3 = 1 / 20 * 100 = 5.00%       |
| 600 … 799   | 680, 600, 799                                   | 3              | p4 = 3 / 20 * 100 = 15.00%      |
| ≥ 800       | 920, 800                                        | 2              | p5 = 2 / 20 * 100 = 10.00%      |

### Input Data

In the first line of input, there must be a whole number **n** (1 ≤ **n** ≤ 1000), that represents how many lines of numbers we should enter. On each of the following **n lines** , we have **one whole number** in the range [**1 … 1000**] – those are the numbers we use to calculate the histogram.

### Output Data

Print on the console **a histogram of 5 lines**, each line should contain a percentage from 0% to 100%, and format it up to two digits after the decimal point (for example 25.00%, 66.67%, 57.14%).

### Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>3</strong><br>1<br>2<br>999</td>
<td valign="top">66.67%<br>0.00%<br>0.00%<br>0.00%<br>33.33%</td>
<td valign="top"><strong>4</strong><br>53<br>7<br>56<br>999</td>
<td valign="top">75.00%<br>0.00%<br>0.00%<br>0.00%<br>25.00%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>7</strong><br>800<br>801<br>250<br>199<br>399<br>599<br>799</td>
<td valign="top">14.29%<br>28.57%<br>14.29%<br>14.29%<br>28.57%</td>
<td valign="top"><strong>9</strong><br>367<br>99<br>200<br>799<br>999<br>333<br>555<br>111<br>9</td>
<td valign="top">33.33%<br>33.33%<br>11.11%<br>11.11%<br>11.11%</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>14</strong><br>53<br>7<br>56<br>180<br>450<br>920<br>12<br>7<br>150<br>250<br>680<br>2<br>600<br>200</td>
<td valign="top">57.14%<br>14.29%<br>7.14%<br>14.29%<br>7.14%</td>
</tr>
</tbody>
</table>

### Hints and Guidelines

The program that solves this problem can be split into three parts:

  * **Reading the input data** – in the current problem, this entails reading the number **n**, followed by **n count of whole numbers**, each on a separate line.
  * **Processing the input data** – in this case, that means allocating the numbers into groups and calculating the percentage by a group.
  * **Printing the final result** – printing the histogram in the console in the specified format.
  
Before we continue, we will take a small detour from the current topic, namely, we will briefly mention, that in coding every variable is some kind of **data type**. We will use numeral data types **`int`** for **whole numbers** and **`double`** for **real numbers** in this problem.

Now we are going to proceed with the implementation of the above-made points.

#### Reading the input data
  
Before we move on to reading the input data we have to **declare the variables**, in which we are storing them. This      means that we have to choose the right data type and appropriate names.
  
![](assets/chapter-5-2-images/01.Histogram-01.png)

In the variable **`n`** , we will store the count of numbers, that we are going to read from the console. We choose **`int` type**, because in the condition is mentioned, that **`n` is a whole number** in the range from 1 to 1000. For the variables in which we will store the percentages, we chose the **`double` type**, because **we can’t expect that they are always going to be whole numbers**. Additionally, we declare the variables **`cntP1`**, **`cntP2`** and so on, in which we will store the count of numbers in the corresponding group, and for them, we chose again the **`int` type**.

After we have declared the needed variables, we can proceed with reading the number **`n`** from the console:

![](assets/chapter-5-2-images/01.Histogram-02.png)

#### Processing the input data
  
For the reading and distributing every number in its corresponding group, we will use a **`for` loop** from **0** to **`n`** (count of numbers).  Every iteration of the loop we’ll read and distribute **only one** number (**`currentNumber`**) in its corresponding group. For the compiler to determine if a number belongs to a group, **we perform a check in its range**. And if the above is true we add to the count of its corresponding group (**`cntP1`**, **`cntP2`** etc.) by one.  

![](assets/chapter-5-2-images/01.Histogram-03.png)

After we determine how many numbers each group has, we can move on to calculating the percentage, which is the main point of the problem. For this, we’ll use the following formula:

<p align="center"><strong>(group percentage) = (count of numbers in group) * 100 / (count of all numbers)</strong></p>

This formula in code looks like the following:

![](assets/chapter-5-2-images/01.Histogram-04.png)

If we divide by **100** (**`int`** number type) instead of **100.0** (**`double`** number type), we’ll perform the so-called **integer division** and in the variable will be stored only the whole part of the division, and this is not what we want as a result. For example: **5 / 2 = 2**, but **5 / 2.0 = 2.5**. Taking this in mind, the formula for the first number should look like this: 

![](assets/chapter-5-2-images/01.Histogram-05.png)

To make things even clearer, let’s take a look at this example:

|Input|Output|
|--------|---------|
|**3**<br>1<br>2<br>999|66.67%<br>0.00%<br>0.00%<br>0.00%<br>33.33%|

In the case of **`n = 3`**.
For the loop we have:
   -   	**`i = 0`** - we read the number 1, which is lesser than 200 and falls in the first group (**`p1`**), and we increment the group counter (**`cntP1`**) by 1.
   -   	**`i = 1`** – we read the number 2, which again falls in the first group (**`p1`**) and we increment the counter (**`cntP1`**) again by 1.
   -   	**`i = 2`** – we read the number 999, which falls in the last group (**`p5`**), because it is greater than 800, and we increment the group counter (**`cntP5`**) by 1.
   
After we read the numbers in group **`p1`** we have 2 numbers, and in **`p5`** we have 1 number. We have **no numbers** in the other groups. When applying the above-mentioned formula, we calculate the percentages of each group. When we multiply within the formula by **100**, instead of **100.0** we’ll attain for group **`p1`** 66%, and for group **`p5`** – 33% (we won’t have a fractional part).

#### Final Output
  
We are left with printing the results. The condition states, that the percentages must be **within two points after the decimal point**. We are going to achieve this by, as in the method **`String.format(…)`** we set the format “**`%.2f%%`**”:

![](assets/chapter-5-2-images/01.Histogram-06.png)

### Testing using the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/656#0](https://judge.softuni.bg/Contests/Practice/Index/656#0).


## Problem: Smart Lilly

Lilly is **N years old**. For her every **birthday** she receives a present. For each **odd** birthday (1, 3, 5, …, n), she receives **toys**, and for every **even** birthday (2, 4, 6, …, n), she receives **money**. For **her second birthday**, she received **10.00 USD.**, as **he amount of money increases by 10.00 USD. for each following even birthday** (2 -> 10, 4 -> 20, 6 -> 30 etc.). Over the years Lilly secretly saved her money. **Her brother** in the years when she **received money**, **he takes 1.00 USD** every time. Lilly **has sold the toys**, received over the years, **each for P USD** and added the money to her savings. With the money, she wanted to **buy a washing machine for X USD**. Write a program that calculates **how much money she has saved** and if the amount is enough **to buy a washing machine**.

### Input Data

Output Data **3 numbers** from the console, each on a separate line:

   - Lilly’s **age** – **whole number** in the range of [**1 … 77**].
   - **Price of the washing machine** – number in the range of [**1.00 … 10 000.00**].
   - **Unit price of each toy** – **whole number** in the range of [**0 … 40**].

### Output Data

Print on the console a single line:

  * If Lilly’s money is enough:
    * “**Yes! {N}**” – where **N** is the remaining money after the purchase.
  * If the money is not enough:
    * “**No! {М}**” – where **M** is the insufficient amount.
  * The numbers **N** and **M** must be **formatted up to the second digit after the decimal point**.

### Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">10<br>170.00<br>6</td>
<td valign="top">Yes! 5.00</td>
<td valign="top"><p><strong>For her first birthday,</strong> she receives <strong>a toy</strong>; <strong>2nd</strong> -> <strong>10 USD.</strong>; 3rd -> toy; <strong>4th</strong>  -> 10 + 10 = <strong>20 USD.</strong>; 5th -> toy; <strong>6th</strong> -> 20 + 10 = <strong>30 USD.</strong>; 7th -> toy; <strong>8th</strong> -> 30 + 10 = <strong>40 USD.</strong>; 9th -> toy; <strong>10th</strong> -> 40 + 10 = <strong>50 USD</strong>.<br>
<strong>She has saved</strong> -> 10 + 20 + 30 + 40 + 50 = <strong>150 USD.</strong>. She sold <strong>5 toys for 6 USD. each = 30 USD.</strong>.<br>
<strong>Her brother took 1 USD. 5 times = 5 USD</strong>. <strong>Remaining amount</strong> -> 150 + 30 – 5 = <strong>175 USD</strong>.
<strong>175 &gt;= 170</strong> (price of the washing machine) <strong>She was able</strong> to buy it and has a <strong>remaining amount of money</strong> 175-170 = <strong>5 USD</strong>.
</p></td>
</tr>
<tr>
<td valign="top">21<br>1570.98<br>3</td>
<td valign="top">No! 997.98</td>
<td valign="top"><p><strong>She has saved 550 USD.</strong>. <strong>She sold</strong> <strong>11 toys</strong> <strong>3 USD.</strong> each = <strong>33 USD</strong>. Her brother <strong>has taken for 10 years 1 USD each year</strong> = <strong>10USD</strong>. <strong>The remainder</strong> 550 + 33 – 10 = <strong>573 USD.</strong> <br>
<strong>573 &lt; 1570.98</strong> – <strong>she did not manage to</strong> buy a washing machine. <strong>The insufficiency amount is</strong> 1570.98–573 = <strong>997.98 USD.</strong></p></td>
</tr>
</tbody>
</table>    

### Hints and Guidelines

The solution to this problem, like the previous one can be split into three parts – **reading** the input data, **processing** them and **printing the output**.

![](assets/chapter-5-2-images/02.Smart-lilly-01.png)

We begin again by choosing the appropriate **data types** and names for the variables. For Lilly’s years (**`age`**) and the unit price of one toy (**`presentPrice`**), the condition states it has to be **whole numbers**. That’s why we’ll use the **`int` type**. For the washing machine price (**`priceOfWashingMachine`**) we know, that it is a **real number and we choose `double`**. In the code above we **declare** and **initialize** (assign the value) to the variables.

![](assets/chapter-5-2-images/02.Smart-lilly-02.png)

For us to solve the problem, we are going to need some helper variables – for the **toy count** (**`numberOfToys`**), for the **saved money** (**`savedMoney`**) and for the **money she receives each birthday** (**`moneyForBirthday`**). The initial value of **`moneyForBirthday`** is 10, because the description states the first sum Lilly gets is 10 USD.

![](assets/chapter-5-2-images/02.Smart-lilly-03.png)

Using a **`for` loop** we iterate through each of Lilly’s birthdays. When the counter in our loop (which equates to Lilly’s age) is an **even number**, this means that Lilly **receives money** and we add it up to her savings. Simultaneously with this, we **subtract 1 USD** - the money her brother takes. After that, we **increase** the variable **`moneyForBirthday`**, i.e. we increase by 10 the sum she will get on her next birthday. The opposite of that when the counter (Lilly's age) is an **odd number**, we increase the **toy counter**. We do the parity check by **division with remainder** (**`%`**) **by 2** – when the remainder is 0, the number is even, when we have a remainder of 1 - it is odd.

We also add the money from the sold toys to Lilly’s savings:

![](assets/chapter-5-2-images/02.Smart-lilly-04.png)

And so we are left with printing the results, we have to take into consideration the formating specified in the description, i.e. sum needs to be **rounded up to 2 digits after the decimal point**:

![](assets/chapter-5-2-images/02.Smart-lilly-05.png)

In this case, we chose to use the **conditional operator (`?:`)** (also called the ternary operator), because it’s shorter to write. The syntax is as follows: **`operand1 ? operand2 : operand3`**. The first operand needs to be **boolean type** (i.e. to return **`true/false`**). If **`operand1`** returns **`true`**, **`operand2`** will be executed, and if it returns **`false`** – **`operand3`** will be executed. In our case, we check if the **saved money** by Lilly is enough for the washing machine. If they are more or equal to the price of the washing machine, the check **`savedMoney >= priceOfWashingMachine`** will return **`true`** and will print out „**Yes! …**“, and if they are less the result will be **`false`** and will print “**No! …**”. Of course, instead of the ternary operand, we can use **`if-else`** for checks.

More about the ternary operator: [https://www.programiz.com/java-programming/ternary-operator](https://www.programiz.com/java-programming/ternary-operator)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/656#1](https://judge.softuni.bg/Contests/Practice/Index/656#1).


## Problem: Back to the past

Ivan is **18 years old** and receives an inheritance, that consists of **X sum of money** and a **time machine**. He decides **to go back to the year 1800**, but he doesn’t know if **the money** is **enough** to live without the need to work. Write a **program that calculates** if Ivan is going to have **enough money**, so he won’t need to work **until a particular year (inclusive)**. Assuming that **for every even** (1800, 1802 etc.) year he will **spend 12 000 dollars**. For **every odd** (1801,1803 etc.) year he will spend **12 000 + 50 * [the age he reached in the given year]**.

### Input Data

The input is read from the console and **contains exactly 2 lines**:
  * **Inheritance money** – a real number in the range of [**1.00 … 1 000 000.00**].
  * **The year he needs to live in the past (inclusive)** – a whole number in the range of [**1801 … 1900**].

### Output Data

**Print** on the console **1 line**. The **sum** must be **formatted** up to **two symbols after the decimal point**:
  * If the **money is enough**:
    * „**Yes! He will live a carefree life and will have {N} dollars left.**“ – where **N** is the money, which he will remain with.
  *	If the **money is NOT enough**:
    * „**He will need {М} dollars to survive.**“ – where **M** is the amount that is **NOT enough**.

### Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Explanations</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">50000<br>1802</td>
<td valign="top">Yes! He will live a carefree life and<br> will have 13050.00 dollars left.</td>
<td valign="top"><p>1800 &rarr; <strong>even</strong><br> 
 	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spends 12000</strong> dollars <br>
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Remain 50000 – 12000 = <strong>38000</strong><br>
1801 &rarr; <strong>odd</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spends</strong> 12000 + <strong>19*50</strong> = 12950 dollars<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remaining</strong> 38000 – 12950 = <strong>25050</strong><br>
1802 &rarr; <strong>even</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Spends</strong> 12000 dollars<br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remaining</strong> 25050 – 12000 = <strong>13050</strong></p></td>
</tr>
<tr>
<td valign="top">100000.15<br>1808</td>
<td valign="top">He will need 12399.85 dollars<br> to survive.</td>
<td valign="top"><p>1800 &rarr; <strong>even</strong><br> 
  &nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; Remaining 100000.15 – 12000 = <strong>88000.15</strong><br>
1801 &rarr; <strong>odd</strong> <br>
	&nbsp;	&nbsp;	&nbsp;	&nbsp;  &rarr; <strong>Remaining</strong> 88000.15 – 12950 = <strong>75050.15</strong><br>
<strong>…</strong><br>
1808 &rarr; <strong>even</strong> &rarr; -399.85 - 12000 = -12399.85<br>
<strong>12399.85 insufficient amount</strong>
</p></td>
</tr>
</tbody>
</table>    

### Hints and Guidelines

The method for solving this problem isn’t much different from the last one, we begin by **declaring and initializing** the needed variables:

![](assets/chapter-5-2-images/03.Back-to-the-past-01.png)

The condition states, that Ivan is 18 years old, so when we declare the variable **`years`** we assign its initial value of **18**. The rest of the variables we read from the console. 

![](assets/chapter-5-2-images/03.Back-to-the-past-02.png)

With the help from the **`for` loop**, we’ll iterate through all the years. **We begin from 1800** – the year that Ivan goes back to, and we go to **the year he must live in the past**. In the loop, we check if the current year is **even** or **odd**. We achieve this by **division with remainder** (**`%`**) by 2. If the year is **even**, we subtract from the inheritance (**`heritage`**) **12000**, and if it's **odd**, we subtract from the inheritance (**`heritage`**) **12000 + 50 * (Ivan's years)**.

Finally, we are left with printing the results, by performing a **check if the inheritance** (**`heritage`**) was enough for him to live without the need to work or not. If the (**`heritage`**) is a **positive number**, we print: „**`Yes! He will live a carefree life and will have {N} dollars left.`**“, and if it's a **negative number**: „**`He will need {М} dollars to survive.`**“. Do not forget to format the sum up to the second symbol after the decimal point.

**Hint**: Consider using the **`Math.abs(…)`** function when printing the output if the inheritance isn’t enough.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/656#2](https://judge.softuni.bg/Contests/Practice/Index/656#2).


## Problem: Hospital

For the given time period, every day patients arrive at the hospital for an examination. The hospital **initially has 7 doctors**. Each doctor can treat **only one patient per day**, but sometimes there is a shortage of doctors, so **the untreated patients are sent to other hospitals**. **Every third day** the hospital makes calculations and **if the number of untreated patients is greater than the treated patients, they hire one more doctor**. The hire happens before the daily acceptance begins.

Write a program, that calculates **for a given period the number of treated and untreated patients**.

### Input Data

The input is read from **the console** and contains:
  * On the first row – **the period**, for which you need to make the calculations. **Whole number** in the range of [**1 … 1000**].
  * On the next lines (equal to the number of days) – **patient count**, who arrive for treatment the **current day**. Whole number in the range of [**0 … 10 000**].

### Output Data

**Print** on the console **2 lines**:

* On **the first line**: “**Treated patients: {number of treated patients}.**”
* On **the second line**: “**Untreated patients: {number of untreated patients}.**”

### Sample Input and Output

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
<th align="left"><strong>Explanations</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">4<br>7<br>27<br>9<br>1</td>
<td valign="top">Treated patients: 23.<br>Untreated patients: 21.</td>
<td valign="top"><p><strong>Day 1</strong>: 7 treated and 0 untreated patients for the day<br>
<strong>Day 2</strong>: 7 treated and 20 untreated patients for the day<br>
<strong>Day 3</strong>: To this moment the treated patients are 14,<br> and the untreated – 20 –> New doctor is hired <br>–>
8 treated and 1 untreated patients for the day<br>
<strong>Day 4</strong>: 1 treated and 0 untreated patients for the day<br>
<strong>In total: 23 treated and 21 untreated patients.</strong></p></td>
</tr>
</tbody>
</table>    

<table>
<thead>
<tr>
<th align="left"><strong>Input</strong></th>
<th align="left"><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">6<br>25<br>25<br>25<br>25<br>25<br>2</td>
<td valign="top">Treated patients: 40.<br>Untreated patients: 87.</td>
</tr>
<tr>
<td valign="top">3<br>7<br>7<br>7</td>
<td valign="top">Treated patients: 21.<br>Untreated patients: 0.</td>
</tr>
</tbody>
</table>    

### Hints and Guidelines
So we begin again, by **declaring and initializing** the necessary variables: 

![](assets/chapter-5-2-images/04.Hospital-01.png)

The period which we have to make the calculations is read from the console and we store it in the variable **`period`**. We are going to need also some helper variables: number of treated patients (**`treatedPatients`**), number of untreated patients (**`untreatedPatients`**) and the number of doctors (**`countOfDoctors`**), which by default is 7.

![](assets/chapter-5-2-images/04.Hospital-02.png)

С помощта на **`for` цикъл** обхождаме всички дни в дадения период (**`period`**). За всеки ден прочитаме от конзолата броя на пациентите (**`currentPatients`**). Увеличаването на докторите по условие може да стане **всеки трети ден**, **НО** само ако броят на непрегледаните пациенти е **по-голям** от броя на прегледаните. За тази цел проверяваме дали денят е трети – чрез аритметичния оператор за деление с остатък (**`%`**): **`day % 3 == 0`**.

Например:
 * Ако денят е **трети**, остатъкът от делението на **3** ще бъде **0** (**`3 % 3 = 0`**) и проверката **`day % 3 == 0`** ще върне **`true`**.
 * Ако денят е **втори**, остатъкът от делението на **3** ще бъде **2** (**`2 % 3 = 2`**) и проверката ще върне **`false`**.
 * Ако денят е **четвърти**, остатъкът от делението ще бъде **1** (**`4 % 3 = 1`**) и проверката отново ще върне **`false`**.

Ако проверката **`day % 3 == 0`** върне **`true`**, ще се провери дали и броят на неизлекуваните пациенти е по-голям от този на излекуваните: **`untreatedPatients > treatedPatients`**. Aко резултатът отново е **`true`**, тогава ще се увеличи броят на лекарите (**`countOfDoctors`**).

След това проверяваме броя на пациентите за деня (**`currentPatients`**) дали е по-голям от броя на докторите (**`countOfDoctors`**). Ако броят на пациентите е **по-голям**:
 - Увеличаваме стойността на променливата **`treatedPatients`** с броя на докторите (**`countOfDoctors`**).
 - Увеличаваме стойността на променливата **`untreatdPatients`** с броя на останалите пациенти, който изчисляваме, като от всички пациенти извадим броя на докторите (**`currentPatients - countOfDoctors`**).
 
Ако броят на пациентите **не е по-голям**, увеличаваме само променливата **`treatedPatients`** с броя на пациентите за деня (**`currentPatients`**).

Накрая трябва само да отпечатаме броя на излекуваните и броя на неизлекуваните пациенти.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/656#3](https://judge.softuni.bg/Contests/Practice/Index/656#3).


## Задача: деление без остатък

Дадени са **n цели числа** в интервала [**1 … 1000**]. От тях някакъв **процент p1 се делят без остатък на 2**, **процент p2** се **делят без остатък на 3**, **процент p3** се **делят без остатък на 4**. Да се напише програма, която изчислява и отпечатва процентите p1, p2 и p3.
**Пример:** имаме **n = 10** числа: 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. Получаваме следното разпределение и визуализация:
<table>
<thead>
<tr>
<th align="left"><strong>Деление без остатък на:</strong></th>
<th align="left"><strong>Числа</strong></th>
<th align="left"><strong>Брой</strong></th>
<th align="left"><strong>Процент</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">2</td>
<td valign="top">680, 2, 600, 200, 800, 46, 128</td>
<td valign="top">7</td>
<td valign="top">p1 = (7 / 10) * 100 = <strong>70.00%</strong></td>
</tr>
<tr>
<td valign="top">3</td>
<td valign="top">600</td>
<td valign="top">1</td>
<td valign="top">p2 = (1 / 10) * 100 = <strong>10.00%</strong></td>
</tr>
<tr>
<td valign="top">4</td>
<td valign="top">680, 600, 200, 800, 128</td>
<td valign="top">5</td>
<td valign="top">p3 = (5 / 10) * 100 = <strong>50.00%</strong></td>
</tr>
</tbody>
</table>   

### Входни данни

На първия ред от входа стои цялото число **n** (1 ≤ **n** ≤ 1000) – брой числа. На следващите **n реда** стои **по едно цяло число** в интервала [**1 … 1000**] – числата, които да бъдат проверени на колко се делят.

### Изходни данни

Да се отпечатат на конзолата **3 реда**, всеки от които съдържа процент между 0% и 100%, с точност две цифри след десетичния знак, например 25.00%, 66.67%, 57.14%.
 * На **първия ред** – процентът на числата, които **се делят на 2**.
 * На **втория ред** – процентът на числата, които **се делят на 3**.
 * На **третия ред** – процентът на числата, които **се делят на 4**.

### Примерен вход и изход

<table>
<thead>
<tr>
<th align="left"><strong>Вход</strong></th>
<th align="left"><strong>Изход</strong></th>
<th align="left"><strong>Вход</strong></th>
<th align="left"><strong>Изход</strong></th>
<th align="left"><strong>Вход</strong></th>
<th align="left"><strong>Изход</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>10</strong><br>680<br>2<br>600<br>200<br>800<br>799<br>199<br>46<br>128<br>65</td>
<td valign="top">70.00%<br>10.00%<br>50.00%</td>
<td valign="top"><strong>3</strong><br>3<br>6<br>9</td>
<td valign="top">33.33%<br>100.00%<br>0.00%</td>
<td valign="top"><strong>1</strong><br>12</td>
<td valign="top">100.00%<br>100.00%<br>100.00%</td>
</tr>

</tbody>
</table>   

### Насоки и подсказки

За тази и следващата задача ще трябва сами да напишете програмния код, следвайки дадените напътствия.

Програмата, която решава текущия проблем, е аналогична на тази от задача **Хистограма**, която разгледахме по-горе. Затова можем да започнем с декларацията на нужните ни променливи:
Примерни имена на променливи може да са: **`n`** – брой на числата (който трябва да прочетем от конзолата) и **`divisibleBy2`**, **`divisibleBy3`**, **`divisibleBy4`** – помощни променливи, пазещи броя на числата от съответната група.

За да прочетем и разпределим всяко число в съответната му група, ще трябва да завъртим **`for` цикъл** от **`0`** до **`n`** (броя на числата). Всяка итерация на цикъла трябва да прочита и разпределя **едно единствено число**. Различното тук е, че **едно число може да попадне в няколко групи едновременно**, затова трябва да направим **три отделни `if` проверки за всяко число** – съответно дали се дели на 2, 3 и 4 (**`if-else`** конструкция в този случай няма да ни свърши работа, защото след като намери съвпадение се прекъсва по-нататъшното проверяване на условията) и да увеличим стойността на променливата, която пази броя на числата в съответната група.

Накрая трябва да отпечатате получените резултати, като спазвате посочения формат в условието.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/656#4](https://judge.softuni.bg/Contests/Practice/Index/656#4).


## Задача: логистика

Отговаряте за логистиката на различни товари. **В зависимост от теглото** на всеки товар е нужно **различно превозно средство** и струва **различна цена на тон**:

 * До **3 тона** – **микробус** (200 лева на тон).
 * От **над 3 и до 11 тона** – **камион** (175 лева на тон).
 * **Над 11 тона – влак** (120 лева на тон).

Вашата задача е да изчислите **средната цена на тон превозен товар**, както и **колко процента от товара** се превозват с **всяко превозно средство**.

### Входни данни

От конзолата се четат **поредица от числа**, всяко на отделен ред:
 * **Първи ред**: **брой на товарите** за превоз – **цяло число** в интервала [**1 … 1000**].
 * На всеки следващ ред се подава **тонажът на поредния товар** – **цяло число** в интервала [**1 … 1000**].

### Изходни данни

Да се отпечатат на конзолата **4 реда**, както следва:
 * **Ред #1** – **средната цена на тон превозен товар** (закръглена до втория знак след десетичната точка).
 * **Ред #2** – **процентът** товар, превозван с **микробус** (между 0.00% и 100.00%, закръглен до втория знак след десетичната точка).
 * **Ред #3** – **процентът** товар, превозвани с **камион** (между 0.00% и 100.00%).
 * **Ред #4** – **процентът** товар, превозвани с **влак** (между 0.00% и 100.00%).
 
### Примерен вход и изход

<table>
<thead>
<tr>
<th align="left"><strong>Вход</strong></th>
<th align="left"><strong>Изход</strong></th>
<th align="left"><strong>Обяснения</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">4<br>1<br>5<br>16<br>3</td>
<td valign="top">143.80<br>16.00%<br>20.00%<br>64.00%</td>
<td valign="top">
С <b>микробус</b> се превозват два от товарите <b>1</b> + <b>3</b>, общо <b>4</b> тона.<br>
С <b>камион</b> се превозва един от товарите: <b>5</b> тона.<br>
С <b>влак</b> се превозва един от товарите: <b>16</b> тона.<br>
<b>Сумата</b> от всички товари е: 1 + 5 + 16 + 3 = <b>25</b> тона.<br>
Процент товар <b>с микробус</b>: 4/25*100 = <b>16.00%</b><br>
Процент товар <b>с камион</b>: 5/25*100 = <b>20.00%</b><br>
Процент товар <b>с влак</b>: 16/25*100 = <b>64.00%</b><br>
<b>Средна цена</b> на тон превозен товар: (4 * 200 + 5 * 175 + 16 * 120) / 25 = <b>143.80</b>
</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="left"><strong>Вход</strong></th>
<th align="left"><strong>Изход</strong></th>
<th align="left"><strong>Вход</strong></th>
<th align="left"><strong>Изход</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">5<br>2<br>10<br>20<br>1<br>7</td>
<td valign="top">149.38<br>7.50%<br>42.50%<br>50.00%</td>
<td valign="top">4<br>53<br>7<br>56<br>999</td>
<td valign="top">120.35<br>0.00%<br>0.63%<br>99.37%</td>
</tr>
</tbody>
</table>

### Насоки и подсказки

Първо **ще прочетем теглото на всеки товар** и ще **сумираме** колко тона се превозват съответно с **микробус**, **камион** и **влак** и ще изчислим и **общите тонове** превозени товари. Ще пресметнем **цените за всеки вид транспорт** според превозените тонове и **общата цена**. Накрая ще  пресметнем и отпечатаме **общата средна цена на тон** и **каква част от товара е превозена с всеки вид транспорт процентно**.

Декларираме си нужните променливи, например: **`countOfLoads`** – броя на товарите за превоз (прочитаме ги от конзолата), **`sumOfTons`** – сумата от тонажа на всички товари, **`microbusTons`**, **`truckTons`**, **`trainTons`** – променливи, пазещи сумата от тонажа на товарите, превозвани съответно с микробус, камион и влак.

Ще ни трябва **`for` цикъл** от **`0`** до **`countOfLoads-1`**, за да обходим всички товари. За всеки товар **прочитаме теглото му** (в тонове) от конзолата и го запазваме в променлива, например **`tons`**. Прибавяме към сумата от тонажа на всички товари (**`sumOfTons`**) теглото на текущия товар (**`tons`**). След като сме прочели теглото на текущия товар, **трябва да определим кое превозно средство ще се ползва за него** (микробус, камион или влак). За целта ще ни трябват **`if-else`** проверки:

 * Ако стойността на променливата **`tons`** е **по-малка от 3**, увеличаваме стойността на променливата **`microbusTons`** със стойността на **`tons`**: 
 
   ```java
   microbusTons += tons;
   ```
   
 * Иначе, ако стойността **`tons`** е **до 11**, увеличаваме **`truckTons`** с **`tons`**.
 * Ако **`tons`** e **повече от 11**, увеличаваме **`trainTons`** с **`tons`**.

Преди да отпечатаме изхода трябва да **изчислим процента на тоновете, превозвани с всяко превозно средство** и **средната цена на тон**. За средната цена на тон ще си декларираме още една помощна променлива **`totalPrice`**, в която ще **сумираме общата цена на всички превозвани товари** (с микробус, камион и влак). Средната цена ще получим, разделяйки **`totalPrice`** на **`sumOfTons`**. Остава **сами да изчислите** процента на тоновете, превозвани с всяко превозно средство, и да отпечатате резултатите, спазвайки формата в условието.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/656#5](https://judge.softuni.bg/Contests/Practice/Index/656#5).
