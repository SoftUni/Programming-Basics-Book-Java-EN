# Chapter 6.2. Nested Loops – Exam Problems

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

We can see from the task that the **input data** will be only one line which will contains **an integer** within the range [**3 … 1000**]. Therefore, we will use a **variable** from type **`int`**.

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

From the task we can see that the **input data** will be only one line which will contains an **integer** within the range [**3 … 1000**]. That is why we will use **a variable** from type **`int`**.

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

От условието на задачата виждаме, че **входните данни** ще бъдат прочетени само от един ред, който ще съдържа в себе си едно **цяло число** в интервала [**3 … 1000**]. По тази причина ще използваме **променлива** от тип **`int`**.

![](assets/chapter-6-2-images/03.Stop-01.png)

Можем да **разделим** фигурата на **3 части** - горна, средна и долна. **Горната част** се състои от две подчасти - начален ред и редове, в които знака се разширява. **Началния ред** е съставен от начало **`.`**, среда **`_`** и край **`.`**. След разглеждане на примерите можем да кажем, че началото е с големина **`n + 1`** и е добре да отделим тази **стойност** в отделна **променлива**.

![](assets/chapter-6-2-images/03.Stop-02.png)
		
Трябва да създадем и втора **променлива**, в която ще пазим **стойността** на **средата на началния ред** и е с големина **`2 * n + 1`**.

![](assets/chapter-6-2-images/03.Stop-03.png)
		
След като вече сме декларирали и инициализирали двете променливи, можем да отпечатаме на конзолата началния ред. Нека не забравяме преминаването на нов ред на конзолата със **`System.out.println(…)`**.

![](assets/chapter-6-2-images/03.Stop-04.png)
		
За да начертаем редовете, в които знака се **"разширява"**, трябва да създадем **цикъл**, който да се завърти **`n`** брой пъти. Структурата на един ред се състои от начало **`.`**, **`//`** + среда **`_`** + **`\\`** и край **`.`**. За да можем да използваме отново създадените **променливи**, трябва да намалим **`dots`** с 1 и **`underscores`** с 2, защото ние вече сме **отпечатали** първия ред, а точките и долните черти в следващия ред от фигурата **намаляват**. 

![](assets/chapter-6-2-images/03.Stop-05.png)
		
На всяка следваща итерация **началото** и **краят** намаляват с 1, а **средата** се увеличава с 2.

![](assets/chapter-6-2-images/03.Stop-06.png)
		
**Средната част** от фигурата има начало **`//`** + **`_`**, среда **`STOP!`** и край **`_`** + **`\\`**. Броят на долните черти **`_`** е **`(underscores - 5) / 2`**.

![](assets/chapter-6-2-images/03.Stop-07.png)
		
**Долната част** на фигурата, в която знакът се **смалява**, можем да направим като отново създадем **цикъл**, който да се завърти **`n`** брой пъти. Структурата на един ред е начало **`.`** + **`\\`**, среда **`_`** и край **`//`** + **`.`**. Броят на **точките** при първата итерация на цикъла трябва да е 0 и на всяка следваща да се **увеличава** с едно. Следователно можем да кажем, че големината на **точките в долната част от фигурата** е равна на **`i`**.

![](assets/chapter-6-2-images/03.Stop-08.png)
		
За да работи нашата програма правилно, трябва на всяка итерация от **цикъла** да **намаляваме** броя на **`_`** с **2**.

![](assets/chapter-6-2-images/03.Stop-09.png)

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/658#2](https://judge.softuni.bg/Contests/Practice/Index/658#2).


## Задача: стрелка
Да се напише програма, която прочита от конзолата **цяло нечетно число n** и чертае **вертикална стрелка** с размери като в примерите по-долу.

### Входни данни
Входът е **цяло нечетно число n** в интервала [**3 … 79**].

### Изходни данни
Да се отпечата на конзолата вертикална стрелка, при която "**`#`**" (диез) очертава стрелката, а "**`.`**" - останалото.

### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|----|----|----|----|
|3|<code>.###.</code><br><code>.#.#.</code><br><code>##.##</code><br><code>.#.#.</code><br><code>..#..</code><br>|5|<code>..#####..</code><br><code>..#...#..</code><br><code>..#...#..</code><br><code>..#...#..</code><br><code>###...###</code><br><code>.#.....#.</code><br><code>..#...#..</code><br><code>...#.#...</code><br><code>....#....</code><br>|

|Вход|Изход|
|---|---|
|9|<code>....#########....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>....#.......#....</code><br><code>#####.......#####</code><br><code>.#.............#.</code><br><code>..#...........#..</code><br><code>...#.........#...</code><br><code>....#.......#....</code><br><code>.....#.....#.....</code><br><code>......#...#......</code><br><code>.......#.#.......</code><br><code>........#........</code><br>|

### Насоки и подсказки

От условието на задачата виждаме, че **входните данни** ще бъдат прочетени само от един ред, който ще съдържа в себе си едно **цяло число** в интервала [**3 … 79**]. По тази причина ще използваме **променлива** от тип **`int`**.

![](assets/chapter-6-2-images/04.Arrow-01.png)
		
Можем да разделим фигурата на **3 части** - горна, средна и долна. **Горната част** се състои от две подчасти - начален ред и тяло на стрелката. От примерите виждаме, че броят на **външните точки** в началния ред и в тялото на стрелката са **`(n - 1) / 2`**. Тази стойност можем да запишем в **променлива** **`outerDots`**. 

![](assets/chapter-6-2-images/04.Arrow-02.png)
		
Броят на **вътрешните точки** в тялото на стрелката е **`(n - 2)`**. Трябва да създадем **променлива** с име **`innerDots`**, която  ще пази тази стойност.

![](assets/chapter-6-2-images/04.Arrow-03.png)
		
От примерите можем да видим структурата на началния ред. Трябва да използваме декларираните и инициализирани от нас **променливи** **`outerDots`** и **`n`**, за да отпечатаме **началния ред**. Не трябва да забравяме, че трябва да отидем на нов ред със **`System.out.println();`**.

![](assets/chapter-6-2-images/04.Arrow-04.png)

За да нарисуваме на конзолата **тялото на стрелката**, трябва да създадем **цикъл**, който да се повтори **`n - 2`** пъти.

![](assets/chapter-6-2-images/04.Arrow-05.png)

**Средата на фигурата** е съставена от начало **`#`**, среда **`.`** и край **`#`**. От примерите виждаме, че броят на **`#`** е равен на **`outerDots`**, увеличен с 1 и за това можем да използваме отново същата **променлива**.

![](assets/chapter-6-2-images/04.Arrow-06.png)

За да начертаем **долната част на стрелката**, трябва да зададем нови стойности на двете **променливи** **`outerDots`** и **`innerDots`**.

![](assets/chapter-6-2-images/04.Arrow-07.png)

**Цикъла**,  който ще направим, трябва да се завърти **`n - 2`** пъти и отделно ще отпечатаме последния ред от фигурата. На всяка итерация **`outerDots`** се увеличава с 1, а **`innerDots`** намалява с 2.

![](assets/chapter-6-2-images/04.Arrow-08.png)
		
**Последният ред** от нашата фигура е съставен от начало **`.`**, среда **`#`** и край **`.`**. Броят на **`.`** е равен на **`outerDots`**.
   
![](assets/chapter-6-2-images/04.Arrow-09.png)

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/658#3](https://judge.softuni.bg/Contests/Practice/Index/658#3).


## Задача: брадва

Да се напише програма, която прочита **цяло число n** и чертае брадва с размери, показани по-долу.
Ширината на брадвата е **`5 * N`**  колони.

### Входни данни

Входът е **цяло число n** в интервала [**2..42**].

### Изходни данни

Да се отпечата на конзолата **брадва**, точно както е в примерите.

### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|2|<code>------\*\*--</code><br><code>------\*-\*-</code><br><code>\*\*\*\*\*\*\*-\*-</code><br><code>------\*\*\*-</code><br>|5|<code>---------------\*\*--------</code><br><code>---------------\*-\*-------</code><br><code>---------------\*--\*------</code><br><code>---------------\*---\*-----</code><br><code>---------------\*----\*----</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----\*----</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----\*----</code><br><code>---------------\*----\*----</code><br><code>--------------\*\*\*\*\*\*\*\*---</code><br>|

|Вход|Изход|
|---|---|
|8|<code>------------------------\*\*--------------</code><br><code>------------------------\*-\*-------------</code><br><code>------------------------\*--\*------------</code><br><code>------------------------\*---\*-----------</code><br><code>------------------------\*----\*----------</code><br><code>------------------------\*-----\*---------</code><br><code>------------------------\*------\*--------</code><br><code>------------------------\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*-------\*-------</code><br><code>------------------------\*-------\*-------</code><br><code>-----------------------\*---------\*------</code><br><code>----------------------\*-----------\*-----</code><br><code>---------------------\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*----</code><br>|

### Насоки и подсказки

За решението на задачата е нужно първо да изчислим големината на **тиретата от ляво**, **средните тирета**, **тиретата от дясно** и цялата дължина на фигурата.

![](assets/chapter-6-2-images/05.Axe-01.png)

След като сме декларирали и инициализирали **променливите**, можем да започнем да изчертаваме фигурата като започнем с **горната част**. От примерите можем да разберем каква е структурата на **първия ред** и да създадем цикъл, който се повтаря **`n`** брой пъти. На всяка итерация от цикъла **средните тирета** се увеличават с 1, а **тиретата от дясно** се намаляват с 1.

![](assets/chapter-6-2-images/05.Axe-02.png)

За да можем да използваме отново създадените **променливи** при чертането на дръжката на брадвата, трябва да намалим **средните тирета** с 1,а **тиретата от дясно** да увеличим с 1.

![](assets/chapter-6-2-images/05.Axe-03.png)

**Дръжката на брадвата** можем да нарисуваме, като завъртим цикъл, който се повтаря **`n - 2`** пъти. От примерите можем да разберем, каква е нейната структура.

![](assets/chapter-6-2-images/05.Axe-04.png)

**Долната част** на фигурата, трябва да разделим на две подчасти - **глава на брадвата** и **последния ред от фигурата**. **Главата на брадвата** ще отпечатаме на конзолата, като направим цикъл, който да се повтаря **`n / 2 - 1`** пъти. На всяка итерация **тиретата от ляво** и **тиретата от дясно** намаляват с 1, а **средните тирета** се увеличават с 2.

![](assets/chapter-6-2-images/05.Axe-05.png)

За **последния ред** от фигурата, можем отново да използваме трите, вече декларирани и инициализирани променливи **`leftDashes`**, **`middleDashes`**, **`rightDashes`**.

![](assets/chapter-6-2-images/05.Axe-06.png)

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/658#4](https://judge.softuni.bg/Contests/Practice/Index/658#4).
