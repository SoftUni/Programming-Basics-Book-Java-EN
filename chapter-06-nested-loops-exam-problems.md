# Chapter 6.2. Nested Loops – Exam Problems - Test

In the previous chapter we looked at **nested loops** and how to use them to **draw** different kinds of **figures on the console**. We learned how to print figures with different sizes, thinking of an appropriate logic to construct them using **single and nested `for`** loops in combination with various calculations and program logic:

```java
for (int row = 1; row <= 5; row++) {
    System.out.print("*");
    for (int col = 1; col < 5; col++) {
        System.out.print(" *");
    }
    System.out.println();
}
```

We also declared our own method **`repeatStr(…)`** which helps us to print **a given symbol** (or a series of characters) **certain** number of times:

![](assets/chapter-6-2-images/00.RepeatStr-custom-method-01.png)


## Exam Problems

Let's solve several exam problems related to nested loops to practice what we have learned and to further develop our algorithmic thinking.


## Problem: Drawing a Fort

Write a program that reads from the console **an integer n** and draws **a fortress** with width **2 * n columns** and height **n rows** like the examples below. The left and right columns on the inside are with width **n / 2**.

### Input Data

The input is an **integer n** in the range of [**3 … 1000**].

### Output Data

Print on the console **n** text rows, depicting **the fortress**, exactly like the examples.

### Sample Input and Output

|Input|Output|Input|Output|
|----|----|----|----|
|3|<code>&#47;&#94;&#92;&#47;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#47;&#92;&#95;&#47;</code>|4|<code>&#47;&#94;&#94;&#92;&#47;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#47;&#92;&#95;&#95;&#47;</code><br>|

|Input|Output|Input|Output|
|----|----|----|----|
|5|<code>&#47;&#94;&#94;&#92;&#95;&#95;&#47;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&#95;&#95;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#47;&nbsp;&nbsp;&#92;&#95;&#95;&#47;</code><br>|8|<code>&#47;&#94;&#94;&#94;&#94;&#92;&#95;&#95;&#95;&#95;&#47;&#94;&#94;&#94;&#94;&#92;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#95;&#95;&#95;&#95;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;</code><br><code>&#92;&#95;&#95;&#95;&#95;&#47;&nbsp;&nbsp;&nbsp;&nbsp;&#92;&#95;&#95;&#95;&#95;&#47;</code><br>|

### Hints and Guidelines

We can see from the task that the **input data** will be only one line which will contains **an integer** within the range [**3 … 1000**]. Therefore, we will use a **variable** of type **`int`**.

![](assets/chapter-6-2-images/01.Draw-fort-01.png)

After we have declared and initialized the input data, we must divide **the fort** into three parts:
* roof
* body
* base

We can see from the examples that **the roof** is made of **two towers** and **a middle part**. Each tower has a beginning **`/`**, middle part **`^`** and an end **`\`**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><strong><code>\</code></strong> is a special symbol in Java and using only it in the method <strong><code>System.out.println(…)</code></strong>, the console will not print it, that's why with <strong><code>\\</code></strong> we show on the console that we want to print exactly this symbol, without being interpreted as a special one (<b>екранираме го</b>, in English this is called “<b>character escaping</b>”).</td>
</tr></table>

The size of the middle part is **`n / 2`**, therefore we can write this value in a new **variable**. It will store the **size** of the **middle part of the tower**.

![](assets/chapter-6-2-images/01.Draw-fort-02.png)

Now we declare a second **variable**, in which we will store the **value** of the part **between the two towers**. The middle part of the roof has size of **`2 * n - 2 * colSize - 4`**.

![](assets/chapter-6-2-images/01.Draw-fort-03.png)

In order to print on the console the **roof**, we will use our method **`repeatStr(…)`**, which accepts two parameters **`(string, int)`** and concatenate a certain symbol (or series of characters) **n** times.

![](assets/chapter-6-2-images/01.Draw-fort-04.png)

**The body of the fort** contains a beginning **`|`**, middle part **`(white space)`** and an end **`|`**. **The middle part** is a blank space with size of **`2 * n - 2`**. The number of the **rows** used for walls could be found by the given parameters - **`n - 3`**.

![](assets/chapter-6-2-images/01.Draw-fort-05.png)

In order to draw the last row, which is a part of the base, we need to print the beginning **`|`**, the middle part **`(white space)_(white space)`** and an end **`|`**. In order to do this, we can use the already declared variables **`colSize`** and **`midSize`**, because we can see from the examples that they are equal to the **`_`** in the roof.

![](assets/chapter-6-2-images/01.Draw-fort-06.png)

We add to the values of the **blank spaces** **`+ 1`**, because we have in the examples **one** blank space more.

The structure of the **base of the fort** is the same as the one of the **roof**. It is made of **two towers** and a **middle part**. Each **tower** has a beginning **`\`**, middle part **`_`** and an end **`/`**.

![](assets/chapter-6-2-images/01.Draw-fort-07.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/658#0](https://judge.softuni.bg/Contests/Practice/Index/658#0).


## Problem: Butterfly

Write a program that reads from the console an **integer n** and draws a **butterfly** with width **2 * n - 1 columns** and a height **2 * (n - 2) + 1 rows** like the examples below. **The left and right** **parts** are with **width n - 1**.

### Input Data

The input is an **integer n** in the range of [**3 … 1000**].

### Output Data

Print on the console **2 * (n - 2) + 1**  text rows, depicting the **butterfly**, exactly like the examples.

### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|3|<code>&#42;&#92;&nbsp;&#47;&#42;</code><br><code>&nbsp;&nbsp;&#64;&nbsp;&nbsp;</code><br><code>&#42;&#47;&nbsp;&#92;&#42;</code><br>|5|<code>&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#92;&nbsp;&#47;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&#64;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#47;&nbsp;&#92;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;</code><br>|

|Input|Output|
|---|---|
|7|<code>&#42;&#42;&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#92;&nbsp;&#47;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#92;&nbsp;&#47;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#92;&nbsp;&#47;&#42;&#42;&#42;&#42;&#42;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#64;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#47;&nbsp;&#92;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;&#42;&#42;</code><br><code>&#45;&#45;&#45;&#45;&#45;&#47;&nbsp;&#92;&#45;&#45;&#45;&#45;&#45;</code><br><code>&#42;&#42;&#42;&#42;&#42;&#47;&nbsp;&#92;&#42;&#42;&#42;&#42;&#42;</code><br>|

### Hints and Guidelines

From the task we can see that the **input data** will be only one line which will contains an **integer** within the range [**3 … 1000**]. That is why we will use **a variable** of type **`int`**.

![](assets/chapter-6-2-images/02.Butterfly-01.png)

We can divide the figure into 3 parts - **upper wing**, **body** and **lower wing**. In order to draw the upper wing, we need to divide it into parts - a beginning **`*`**, middle part **`\ /`** and an end **`*`**. After looking at the examples we find out that the beginning is with size **`n - 2`**.

![](assets/chapter-6-2-images/02.Butterfly-02.png)

We can also see that the upper wing is with size **`n - 2`**, and that's why we can make a loop which repeats **`halfRowSize`** times.

![](assets/chapter-6-2-images/02.Butterfly-03.png)

We can see in the examples that on an **even** row we have a beginning **`-`**, middle part **`\ /`** and an end **`*`**, and on a **odd** - a beginning **`*`**, middle part **`\ /`** and an end **`-`**. Therefore, we have to do an **`if-else`** condition to check if the row is even or odd and then to draw one of the two types of rows.

![](assets/chapter-6-2-images/02.Butterfly-04.png)

In order to create the **body of the butterfly**, we can use the **variable** **`halfRowSize`** and to print on the console exactly **one** line. The structure of the body begins with **`(white spave)`**, middle part **`@`** and ends with **`(white space)`**.

![](assets/chapter-6-2-images/02.Butterfly-05.png)

Now we need to print the lower wing, which is the same as the upper one.

![](assets/chapter-6-2-images/02.Butterfly-06.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/658#1](https://judge.softuni.bg/Contests/Practice/Index/658#1).


## Problem: "Stop" Sign

Write a program that reads from the console an **integer n** and draws the **warning sign STOP** with size as in the example below.

### Input Data

The input is an **integer N** in the range of [**3 … 1000**].

### Output Data

Print on the console text lines which depict **the warning sign STOP** as in the examples below.

### Sample Input and Output

|Input|Output|Input|Output|
|----|----|----|----|
|3|<code>....\_\_\_\_\_\_\_....</code><br><code>...//\_\_\_\_\_\\\\...</code><br><code>..//\_\_\_\_\_\_\_\\\\..</code><br><code>.//\_\_\_\_\_\_\_\_\_\\\\.</code><br><code>//\_\_\_STOP!\_\_\_\\\\</code><br><code>\\\\\_\_\_\_\_\_\_\_\_\_\_//</code><br><code>.\\\\\_\_\_\_\_\_\_\_\_//.</code><br><code>..\\\\\_\_\_\_\_\_\_//..</code><br>|6|<code>.......\_\_\_\_\_\_\_\_\_\_\_\_\_.......</code><br><code>......//\_\_\_\_\_\_\_\_\_\_\_\\\\......</code><br><code>.....//\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.....</code><br><code>....//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\....</code><br><code>...//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\...</code><br><code>..//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\..</code><br><code>.//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.</code><br><code>//\_\_\_\_\_\_\_\_\_STOP!\_\_\_\_\_\_\_\_\_\\\\</code><br><code>\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//</code><br><code>.\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//.</code><br><code>..\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//..</code><br><code>...\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//...</code><br><code>....\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//....</code><br><code>.....\\\\_\_\_\_\_\_\_\_\_\_\_\_\_//.....</code><br>|

|Input|Output|
|---|---|
|7|<code>........\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_........</code><br><code>.......//\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.......</code><br><code>......//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\......</code><br><code>.....//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.....</code><br><code>....//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\....</code><br><code>...//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\...</code><br><code>..//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\..</code><br><code>.//\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\\\\.</code><br><code>//\_\_\_\_\_\_\_\_\_\_\_STOP!\_\_\_\_\_\_\_\_\_\_\_\\\\</code><br><code>\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//</code><br><code>.\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//.</code><br><code>..\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//..</code><br><code>...\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//...</code><br><code>....\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//....</code><br><code>.....\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//.....</code><br><code>......\\\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_//......</code><br>|

### Hints and Guidelines

We can see from the task explanation that **the input data** will come from only one line which contains an **integer** in the range of [**3 … 1000**]. Therefore, we will use a **variable** of type **`int`**.

![](assets/chapter-6-2-images/03.Stop-01.png)

We can **divide** the figure into **3 parts** - upper, middle and lower. **The upper part** contains two sub-parts -  first row and rows in which the sign widens. **The first row** is made of a beginning **`.`**, middle part **`_`** and an end **`.`**. After looking at the examples we can say that the beginning is with size **`n + 1`** so it is good to separate this **value** in a separate **variable**.

![](assets/chapter-6-2-images/03.Stop-02.png)
		
We must also create a second **variable**, in which we will store the **value** of the **middle of the first row** which has a size of **`2 * n + 1`**.

![](assets/chapter-6-2-images/03.Stop-03.png)
		
After we have declared and initialized the two variables, we can print the first row on the console. Let's not forget moving to a new line on the console with **`System.out.println(…)`**.

![](assets/chapter-6-2-images/03.Stop-04.png)
		
In order to draw the rows in which the sign is getting **"wider"**, we have to create **a loop**, to rotate **`n`** times. The structure of a row contains a beginning **`.`**, **`//`** + middle part **`_`** + **`\\`** and an end **`.`**. In order to reuse the already created **variables**, we have to decrease the **`dots`** with 1 and the **`underscores`** with 2, because we have already **printed** the first row, and the dots and underscores in the next rows of the figure are **decreasing**. 

![](assets/chapter-6-2-images/03.Stop-05.png)
		
In each following iteration the **beginning** and the **end** are decreasing with 1, and the **middle part** increases by 2.

![](assets/chapter-6-2-images/03.Stop-06.png)
		
**The middle part** of the figure has a beginning **`//`** + **`_`**, middle part **`STOP!`** and an end **`_`** + **`\\`**. The count of the underscores **`_`** is **`(underscores - 5) / 2`**.

![](assets/chapter-6-2-images/03.Stop-07.png)
		
**The lower part** of the figure where the sign **decreases**, can by done again by creating a **loop**, which rotates **`n`** times. The structure of a single line is a beginning **`.`** + **`\\`**, middle part **`_`** and an end **`//`** + **`.`**. The number of the **dots** in the first iteration should be 0 and in each following one it **increases** by one. Therefore, we can say that the size of the **dots in the lower part of the figure** is equals to **`i`**.

![](assets/chapter-6-2-images/03.Stop-08.png)
		
In order for our program to work properly, in each iteration of the **loop** we need to **decrease** the number of **`_`** with **2**.

![](assets/chapter-6-2-images/03.Stop-09.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/658#2](https://judge.softuni.bg/Contests/Practice/Index/658#2).


## Problem: Arrow

Write a program that has an input from the console **an odd integer n** and draws a **vertical arrow** with size as in the examples below.

### Input Data

The input is an **integer odd number n** in the range of [**3 … 79**].

### Output Data

Print a vertical arrow on the console, in which "**`#`**" (sharp) marks the outline of the arrow, and the "**`.`**" - the rest.

### Sample Input and Output

|Input|Output|Input|Output|
|----|----|----|----|
|3|<code>.###.</code><br><code>.#.#.</code><br><code>##.##</code><br><code>.#.#.</code><br><code>..#..</code><br>|5|<code>..#####..</code><br><code>..#...#..</code><br><code>..#...#..</code><br><code>..#...#..</code><br><code>###...###</code><br><code>.#.....#.</code><br><code>..#...#..</code><br><code>...#.#...</code><br><code>....#....</code><br>|

|Input|Output|
|---|---|
|9|<code>....#########....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>#####.......#####</code><br><code>.#.............#.</code><br><code>..#...........#..</code><br><code>...#.........#...</code><br><code>....#.......#....</code><br><code>.....#.....#.....</code><br><code>......#...#......</code><br><code>.......#.#.......</code><br><code>........#........</code><br>|

### Hints and Guidelines

We can see from the task explanation that **the input data** will come from only one line which contains an **integer** in the range of [**3 … 79**]. Therefore, we will use a **variable** of type **`int`**.

![](assets/chapter-6-2-images/04.Arrow-01.png)
		
We can divide the figure into **3 parts** - upper, middle and lower. **The upper part** consists of two subparts - starting row and body of the arrow. We can see from the examples that the number of the **external dots** in the starting row and in the body of the arrow are **`(n - 1) / 2`**. We can write this value in a **variable** **`outerDots`**. 

![](assets/chapter-6-2-images/04.Arrow-02.png)
		
The number of the **internal dots** in the body of the arrow is **`(n - 2)`**. We need to create a **variable** with name **`innerDots`**, which will store this value.

![](assets/chapter-6-2-images/04.Arrow-03.png)
		
We can see from the examples the structure of the first row. We must use the declared and initialized **variables** **`outerDots`** and **`n`**, in order to print the **starting row**. We must not forget that we have to move to a new line with **`System.out.println();`**.

![](assets/chapter-6-2-images/04.Arrow-04.png)

In order to draw on the console the **body of the arrow**, we have to create a **loop**, which rotates **`n - 2`** times.

![](assets/chapter-6-2-images/04.Arrow-05.png)

**The middle part of the figure** consists of a beginning **`#`**, middle part **`.`** and an end **`#`**. We see from the examples that the number of the **`#`** is equals to **`outerDots`** increased by 1 and that is why we can use again the same **variable**.

![](assets/chapter-6-2-images/04.Arrow-06.png)

To draw the **lower part of the arrow**, we need to assign new values to the **variables** **`outerDots`** and **`innerDots`**.

![](assets/chapter-6-2-images/04.Arrow-07.png)

**The loop**,  we are going to make must rotate **`n - 2`** times and we need to print the last row of the figure separately. On each iteration **`outerDots`** increases by 1, and **`innerDots`** decreases by 2.

![](assets/chapter-6-2-images/04.Arrow-08.png)
		
**The last row** of our figure is made of a beginning **`.`**, middle part **`#`** and an end **`.`**. The number of the **`.`** is equals to **`outerDots`**.
   
![](assets/chapter-6-2-images/04.Arrow-09.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/658#3](https://judge.softuni.bg/Contests/Practice/Index/658#3).


## Problem: Axe

Write a program that takes as an input an **integer n** and draws an axe with size as shown below.
The width of the axe is **`5 * N`** columns.

### Input Data

The input is an **integer n** in the range of [**2..42**].

### Output Data

Print on the console an **axe**, exactly like the examples.

### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|2|<code>------\*\*--</code><br><code>------\*-\*-</code><br><code>\*\*\*\*\*\*\*-\*-</code><br><code>------\*\*\*-</code><br>|5|<code>---------------\*\*--------</code><br><code>---------------\*-\*-------</code><br><code>---------------\*--\*------</code><br><code>---------------\*---\*-----</code><br><code>---------------\*----\*----</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----\*----</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----\*----</code><br><code>---------------\*----\*----</code><br><code>--------------\*\*\*\*\*\*\*\*---</code><br>|

|Input|Output|
|---|---|
|8|<code>------------------------\*\*--------------</code><br><code>------------------------\*-\*-------------</code><br><code>------------------------\*--\*------------</code><br><code>------------------------\*---\*-----------</code><br><code>------------------------\*----\*----------</code><br><code>------------------------\*-----\*---------</code><br><code>------------------------\*------\*--------</code><br><code>------------------------\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>------------------------\*-------\*-------</code><br><code>-----------------------\*---------\*------</code><br><code>----------------------\*-----------\*-----</code><br><code>---------------------\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----</code><br>|

### Hints and Guidelines

In order to solve the problem, first we need to calculate the **dashes on the left**, **the middle dashes**, **the dashes on the right** and the whole length of the figure.

![](assets/chapter-6-2-images/05.Axe-01.png)

After we have declared and initialized the **variables**, we can begin drawing the figure by starting with the **upper part**. We can see from the examples what is the structure of the **first row** and to create a loop which rotates **`n`** times. On each iteration the **middle dashes** increase by 1, and the **dashes on the right** decrease by 1.

![](assets/chapter-6-2-images/05.Axe-02.png)

In order to use the created **variables** when drawing the handle of the ax you need to decrease the **middle dashes** by 1, and the **dashes on the right** to increase by 1.

![](assets/chapter-6-2-images/05.Axe-03.png)

**The handle of the axe** we can draw by rotating the loop **`n - 2`** times. We can see in the examples what its structure is.

![](assets/chapter-6-2-images/05.Axe-04.png)

**The lower part** of the figure we have to divide into 2 subparts - **the head of the axe** and the **last row from the axe**. **The head of the axe** we will print on the console as we create a loop which rotates **`n / 2 - 1`** times. On each iteration the **dashes on the left** and **the dashes on the right** decrease by 1, and the **middle dashes** increase by 2.

![](assets/chapter-6-2-images/05.Axe-05.png)

For the **last row** of the figure we can use the three declared and initialized variables **`leftDashes`**, **`middleDashes`**, **`rightDashes`**.

![](assets/chapter-6-2-images/05.Axe-06.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/658#4](https://judge.softuni.bg/Contests/Practice/Index/658#4).
