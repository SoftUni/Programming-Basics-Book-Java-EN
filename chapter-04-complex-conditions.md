# Chapter 4.1. Complex conditions

In **the following** chapter we are going to examie **nested conditional staements** in the **Java** language, by which our program can execute **conditional statements**, that contain other **nested contitionals**. We call them **"nested"**, because **we put one `if` statement** inside **another `if` statement**. We will also examine **more complex logical conditions** through relevant examples.

## Video: Chapter Overview
<div class="video-player">
  Watch a video lesson on this chapter here: <a target="_blank"
  href="https://www.youtube.com/watch?v=1ZXBO_fCZ4w">
  https://www.youtube.com/watch?v=1ZXBO_fCZ4w</a>.
</div>


## Nested If-Else Conditions

Pretty often the program logic requires the use of **`if`** ot **`if-else`** statements, which are contained one inside another. They are called **nested** **`if`** or **`if-else`** statements. As the word **"nested"** implies, these are **`if`** or **`if-else`** statements, which are placed inside other **`if`** or **`else`** statements.
  

```java
if (condition1) {
    if (condition2) {
	// body; 
    } else {
	// body;
    }
}
```

Nesting of more than three conditional statements inside each other is not considered a good practice and has to be avoided, mostly through optimization of the structure/the algorithm of the code and/or by using another type of conditional statement, which we are going to examine below in this chapter.

### Example: Personal Titles

Depending on **age** (decimal number) and **gender** (**m** / **f**), print a personal title:
* "**Mr.**" – a man (gender "**m**") 16 or over the age of 16.
* "**Master**" – a boy (gender "**m**") under the age of 16.
* "**Ms.**" – a woman (gender "**f**") 16 or over the age of 16.
* "**Miss**" – a girl (gender "**f**") under the age of 16.

#### Sample Input and Output

|Input|Output|Input|Output|
|----|----|----|----|
|12<br>f|Miss|17<br>m|Mr.|

|Input|Output|Input|Output|
|----|----|----|----|
|25<br>f|Ms.|13.5<br>m|Master|

#### Solution
We should notice that the **output** of the program **depends on a few things**. **First**, we need to check the **gender**  entered and **then** check the **age**. Respectively, we are going to usе **a few** **`if-else`** blocks. These blocks will be **nested**, meaning that from the **result** of the first we are going to **define** which one of the **others** to execute.

![](assets/chapter-4-1-images/01.Personal-titles-01.jpg)

After **reading the input data from the console** the following **program logic** should be executed:

![](assets/chapter-4-1-images/01.Personal-titles-02.png)

#### Testing the Solution:

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#0](https://judge.softuni.bg/Contests/Practice/Index/653#0).


### Example: Small Shop

A Bulgarian entrepreneur opens **small shops** in **a few different cities** with different **prices** for the following **products**:

|product / city|Sofia|Plovdiv|Varna|
|:-------:|:-------:|:-------:|:-------:|
|coffee<br>water<br>beer<br>sweets<br>peanuts|0.50<br>0.80<br>1.20<br>1.45<br>1.60<br>|0.40<br>0.70<br>1.15<br>1.30<br>1.50<br>|0.45<br>0.70<br>1.10<br>1.35<br>1.55|

Calculate the price by the given **city** (string), **product** (string) and **quantity** (decmal number).

#### Sample Input and Output

|Input|Output|Input|Output|
|-------|-------|-------|-------|
|coffee<br>Varna<br>2|0.9|peanuts<br>Plovidv<br>1|1.5|

|Input|Output|Input|Output|
|-------|-------|-------|-------|
|beer<br>Sofia<br>6|7.2|water<br>Plovdiv<br>3|2.1|

#### Solution

We **convert** all of the letters into **lower register** using the function **`.toLowerCase()`**, in order to compare products and cities **no matter** what the letters are - small or capital ones.

![](/assets/chapter-4-1-images/02.Small-shop-01.png)

#### Testing the solution: 

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#1](https://judge.softuni.bg/Contests/Practice/Index/653#1).


## More Complex Conditions

Let us take a look at how we an implement more complex logical conditions. We can use the logical "**AND**" (**`&&`**), logical "**OR**" (**`||`**), logical **negation** (**`!`**) and **brackets** (**`()`**).

### Logical "AND"

As we saw, in some tasks we have to make **any chacks at once**. But what happens when in order to execute some code **more** conditions have to be executed and we **don't want to** make a **negation** (**`else`**) for each of them? The option with nested **`if` blocks** is valid, however the code would look very **disorganised** and surely - it would be **harder** to read and maintain.  

Logical "**AND**" (operator **`&&`**) means that a few conditions have to be **fulfilled simultaneously**. The following table of truthfulness is applicable:

|a|b|a && b|
|-----|-----|-----|
|true<br>true<br>false<br>false|true<br>false<br>true<br>false|true<br>false<br>false<br>false|

### How does the && opeartor work?

The **`&&`** operator accepts **a couple of Boolean** (conditional) statements, which have a **`true`** or **`false`** value, and returns **one** bool statement as a **result**. Using it **instead of** a couple of nested **`if`** blocks, makes the code **more readable**, **ordered** and **easy** to maintain. But how does it **work**, when we put **a couple of** one after another? As we saw above, the logical **"AND"** returns **`true`**, **only** when it accepts as **arguments statements** with value **`true`**. Respectively, when we have a **sequence** of arguments, the logical "AND" **checks** either **until the end of** the arguments listed, or until it **meets** an argument with value **`false`**. 

**Example**:

```java
boolean a = true;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a && b && c && d;
// false (where d is not being checked)
```

The program will run in the **following** way: **It starts** the check from **`а`**, **reads** it and accepts that it has a **`true`** valude, after which it **checks** **`b`**. After it has **accepted** that **`a`** and **`b`** return **`true`**, **it checks the next** argument. It gets ot **`c`** and sees that the argument has a **`false`** value. After the program accepts that the argument **`c`** has a **`false`** value, it calculates the expression **before `c`**, **regardless** of what the value of **`d`** is. That's why the evaluation of **`d`** is being **skipped** and the whole expression is calculated as **`false`**.

![](/assets/chapter-4-1-images/00.Logical-and-01.png)

### Example: Point in a Rectangle

Checks whether **point {x, y}** is located **inside the rectangle {x1, y1} – {x2, y2}**. The input data is read from the console and consists of 6 lines: the decimal numbers **x1**, **y1**, **x2**, **y2**, **x** and **y** (as it is guaranteed that **x1 < x2** and **y1 < y2**).

#### Sample Input and Output

|Input |Output |Visualization|
|-----|------|:------:|
|2<br>-3<br>12<br>3<br>8<br>-1|Inside|![shop](/assets/chapter-4-1-images/03.Point-in-rectangle-01.png)|

#### Solution

A point is internal for a given polygon, if the following four conditions are applied **at the same time**:

* The point is placed to the right from the left side of the rectangle.
* The point is placed to the left from the right side of the rectangle.
* The point is placed downwards from the upper side of the rectangle.
* The point is placed upwards from the down side of the rectangle.

![](/assets/chapter-4-1-images/03.Point-in-rectangle-02.png)

#### Testing the solution

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#2](https://judge.softuni.bg/Contests/Practice/Index/653#2).


## Logical "OR"

Логическо **"ИЛИ"** (оператор **`||`**) означава да е **изпълнено поне едно** измежду няколко условия. Подобно на оператора **`&&`**, логическото **"ИЛИ"** приема няколко аргумента от **булев** (условен) тип и връща **`true`** или **`false`**. Лесно можем да се досетим, че **получаваме** като стойност **`true`**, винаги когато поне **един** от аргументите има стойност **`true`**. Типичен пример за логиката на този оператор е следният:

В училище учителят казва: "Иван или Петър да измият дъската". За да бъде изпълнено това условие (дъската да бъде измита), е възможно само Иван да я измие, само Петър да я измие или и двамата да го направят.

|a|b|a &#124;&#124; b|
|:-----:|:-----:|:-----:|
|true<br>true<br>false<br>false|true<br>false<br>true<br>false|true<br>true<br>true<br>false|


### Как работи операторът || ?

Вече научихме какво **представлява** логическото **"ИЛИ"**. Но как всъщност се реализира? Както при логическото **"И"**, програмата **проверява** от ляво на дясно **аргументите**, които са зададени. За да получим **`true`** от израза, е необходимо **само един** аргумент да има стойност **`true`**, съответно проверката **продължава** докато се срещне **аргумент** с **такава** стойност или докато **не свършат** аргументите.

Ето един **пример** за оператора **`||`** в действие:

```java
boolean a = false;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a || b || c || d;
// true (като c и d не се проверяват)
```

Програмата **проверява `а`**, отчита, че има стойност **`false`** и продължава. Стигайки до **`b`**, отчита, че има стойност **`true`** и целият **израз** получава стойност **`true`**, **без** да се проверява **`c`** и **`d`**, защото техните стойности **не биха променили** резултата на израза.

### Пример: плод или зеленчук

Нека проверим дали даден **продукт** е **плод** или **зеленчук**. Плодовете "**fruit**" са **banana**, **apple**, **kiwi**, **cherry**, **lemon** и **grapes**. Зеленчуците "**vegetable**" са **tomato**, **cucumber**, **pepper** и **carrot**. Всички останали са "**unknown**".

#### Примерен вход и изход

|Вход|Изход|
|----|----|
|banana<br>tomato<br>java|fruit<br>vegetable<br>unknown|

#### Решение

Трябва да използваме няколко условни проверки с логическо "**ИЛИ**" (**`||`**):

![](assets/chapter-4-1-images/04.Fruit-or-vegetable-01.png)

#### Тестване на решението

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/653#3](https://judge.softuni.bg/Contests/Practice/Index/653#3).


## Логическо отрицание

**Логическо отрицание** (оператор **`!`**) означава да **не е изпълнено** дадено условиe.

|a|!a|
|:----:|:----:|
|true|false|

Операторът **`!`** приема като **аргумент** булева променлива и **обръща** стойността ѝ.

### Пример: невалидно число

Дадено **число е валидно**, ако е в диапазона [**100 … 200**] или е **0**. Да се направи проверка за **невалидно** число.

#### Примерен вход и изход

|Вход|Изход|
|----|----|
|75|invalid|
|150| (няма изход)|
|220|invalid|

#### Решение

![](assets/chapter-4-1-images/05.Invalid-number-01.png)

#### Тестване на решението

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/653#4](https://judge.softuni.bg/Contests/Practice/Index/653#4).


## Операторът скоби **`()`**

Както останалите оператори в програмирането, така и операторите **`&&`** и **`||`** имат приоритет, като в случая **`&&`** е с по-голям приоритет от **`||`**. Операторът **`()`** служи за **промяна на приоритета на операторите** и се изчислява пръв, също както в математиката. Използването на скоби също така придава по-добра четимост на кода и се счита за добра практика. 


## По-сложни логически условия

Понякога условията може да са доста сложни, така че да изискват дълъг булев израз или поредица от проверки. Да разгледаме няколко такива примера.

### Пример: точка върху страна на правоъгълник

Да се напише програма, която проверява дали **точка {x, y}** се намира **върху някоя от страните на правоъгълник {x1, y1} - {x2, y2}**. Входните данни се четат от конзолата и се състоят от 6 реда: десетичните числа **x1**, **y1**, **x2**, **y2**, **x** и **y** (като се гарантира, че **x1 < x2** и **y1 < y2**). Да се отпечата "**Border**" (точката лежи на някоя от страните) или "**Inside / Outside**" (в противен случай).

![](assets/chapter-4-1-images/06.Point-on-rectangle-border-01.png)

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|-----|-----|-----|-----|
|2<br>-3<br>12<br>3<br>12<br>-1|Border|2<br>-3<br>12<br>3<br>8<br>-1|Inside / Outside|

#### Решение

Точка лежи върху някоя от страните на правоъгълник, ако:
* **x** съвпада с **x1** или **x2** и същевременно **y** е между **y1** и **y2** или
* **y** съвпада с **y1** или **y2** и същевременно **x** е между **x1** и **x2**.

![](assets/chapter-4-1-images/06.Point-on-rectangle-border-02.png)


#### Тестване на решението

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/653#5](https://judge.softuni.bg/Contests/Practice/Index/653#5).


### Пример: магазин за плодове

Магазин за плодове в **работни дни** продава на следните **цени**:

|Плод|Цена|
|:-----:|:-----:|
|banana<br>apple<br>orange<br>grapefruit<br>kiwi<br>pineapple<br>grapes|2.50<br>1.20<br>0.85<br>1.45<br>2.70<br>5.50<br>3.85|

В почивни дни цените са **по-високи**:

|Плод|Цена|
|:-----:|:-----:|
|banana<br>apple<br>orange<br>grapefruit<br>kiwi<br>pineapple<br>grapes|2.70<br>1.25<br>0.90<br>1.60<br>3.00<br>5.60<br>4.20|

Напишете програма, която **чете** от конзолата **плод** (banana / apple / …), **ден от седмицата** (Monday / Tuesday / …) и **количество** (десетично число) и **пресмята цената** според цените от таблиците по-горе. Резултатът да се отпечата **закръглен с 2 цифри след десетичния знак**. При **невалиден ден** от седмицата или **невалидно име** на плод да се отпечата **"error"**.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|----|----|----|----|
|orange<br>Sunday<br>3|2.70|kiwi<br>Monday<br>2.5|6.75|

|Вход|Изход|Вход|Изход|
|----|----|----|----|
|grapes<br>Saturday<br>0.5|2.10|tomato<br>Monday<br>0.5|error|

#### Решение

![](assets/chapter-4-1-images/07.Fruit-shop-01.png)

#### Тестване на решението

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/653#6](https://judge.softuni.bg/Contests/Practice/Index/653#6).


### Пример: търговски комисионни

Фирма дава следните **комисионни** на търговците си според **града**, в който работят и **обема на продажбите s**:

|Град|0 <= s <= 500|500 < s <= 1000|1000 < s <= 10000|s > 10000|
|:----:|:----:|:----:|:----:|:----:|
|Sofia<br>Varna<br>Plovdiv|5%<br>4.5%<br>5.5%|7%<br>7.5%<br>8%|8%<br>10%<br>12%|12%<br>13%<br>14.5%|

Напишете **програма**, която чете име на **град** (стринг) и обем на **продажбите** (десетично число) и изчислява размера на  комисионната. Резултатът да се изведе закръглен с **2 десетични цифри след десетичния знак**. При **невалиден град или обем на продажбите** (отрицателно число) да се отпечата "**error**".

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|Вход|Изход|
|-----|-----|-----|-----|-----|-----|
|Sofia<br>1500|120.00|Plovidv<br>499.99|27.50|Kaspichan<br>-50|error|

#### Solution

При прочитането на входа можем да обърнем града в малки букви (с функцията **`.toLowerCase()`**). Първоначално задаваме комисионната да е **`-1`**. Тя ще бъде променена, ако градът и ценовият диапазон бъдат намерени в таблицата с комисионните.
За да изчислим комисионната според града и обема на продажбите се нуждаем от няколко вложени **`if` проверки**, както е в примерния код по-долу:

![](assets/chapter-4-1-images/08.Trade-comissions-01.png)

#### Testing the Solution

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#7](https://judge.softuni.bg/Contests/Practice/Index/653#7).


<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Добра практика е да използваме <b>блокове</b>, които <b>заграждаме</b> с къдрави скоби <b><code>{ }</code></b> след <b><code>if</code></b> и <b><code>else</code></b>. Също така, препоръчително e при писане да <b>отместваме</b> кода <b>след <code>if</code> и <code>else</code></b> с една табулация навътре, за да направим кода по-лесно четим.</td>
</tr></table>

## Условна конструкция switch-case

Конструкцията **`switch-case`** работи като поредица от **`if-else`** блокове. Когато работата на програмата ни зависи от стойността на **една променлива**, вместо да правим последователни проверки с **`if-else`** блокове, можем да **използваме** условната конструкция **`switch`**. Тя се използва за **избор измежду списък с възможности**. Конструкцията сравнява дадена стойност с определени константи и в зависимост от резултата предприема действие.

**Променливата**, която искаме да **сравняваме**, поставяме в **скобите след оператора `switch`** и се нарича "**селектор**". Тук **типът трябва да е сравним** (числа, стрингове). **Последователно** започва **сравняването** с всяка една **стойност**, която **се намира** след **`case` етикетите**.
При **съвпадение** започва изпълнението на кода от съответното място и продължава, докато стигне оператора **`break`**. В някои програмни езици (като C# например) наличието на **`break`** е **задължително** за **всеки `case`**, който съдържа изпълнение на програмна логика. В **Java** операторът **`break`** може да се изпуска, за да се изпълнява код от друга **`case`** конструкция, докато не се стигне до следващия **`break`** оператор. Макар и позволено от езика **Java**, изпускането на оператор **`break`** след етикет **`case`** се налага изключително рядко и не е добра практика, тъй като води до така нареченото **пропадане** на програмния код. 
При **липса** на **съвпадение**, се изпълнява **`default`** конструкцията, **ако** такава **съществува**.

```java
switch (селектор) {

    case стойност1:
        конструкция;
        break;
    case стойност2:
        конструкция;
        break;
    case стойност3:
        конструкция;
        break;
    …
    default:
        конструкция;
        break;
}
```

### Пример: ден от седмицата

Нека напишем програма, която принтира **деня от седмицата** (на английски) според **въведеното число** (1 … 7) или "**Error!**", ако е подаден невалиден ден.

#### Sample Input and Output

|Input|Output|
|-----|-----|
|1<br>7<br>-1|Monday<br>Sunday<br>Error!|

#### Solution

![](assets/chapter-4-1-images/09.Day-of-week-01.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><b>Добра практика</b> е на <b>първо</b> място да поставяме онези <b><code>case</code> случаи</b>, които обработват <b>най-често случилите се ситуации</b>, а <b><code>case</code> конструкциите</b>, обработващи <b>по-рядко възникващи ситуации</b>, да оставим в <b>края преди <code>default</code> конструкцията</b>. Друга <b>добра практика</b> е да <b>подреждаме <code>case</code> етикетите</b> в <b>нарастващ ред</b>, без значение дали са целочислени или символни.</td>
</tr></table>

#### Testing the solution

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#8](https://judge.softuni.bg/Contests/Practice/Index/653#8).


### Множество етикети в switch-case

В **Java** имаме възможността да **използваме множество `case`** етикети, когато те трябва да изпълняват **един и същи** код. При този начин на записване, когато **програмата** ни намери **съвпадение**, ще изпълни **следващия** срещнат код, тъй като **след** съответния **`case`** етикет **липсва код** за изпълнение и **`break`** оператор.

```java
switch (селектор) {

    case стойност1:
    case стойност2:
    case стойност3:
        конструкция;
        break;
    case стойност4:
    case стойност5:
        конструкция;
        break;
    …
    default:
        конструкция;
        break;
}
```

### Пример: вид животно

Напишете програма, която принтира вида на животно според името му: 

* dog -> **mammal**
* crocodile, tortoise, snake -> **reptile**
* others -> **unknown**

#### Sample Input and Output

|Input|Output|Input|Output|Input|Output|
|-----|-----|-----|-----|-----|-----|
|tortoise|reptile|dog|mammal|elephant|unknown|

#### Solution

Можем да решим задачата чрез **`switch`**-**`case`** проверки с множество етикети по следния начин:

![](assets/chapter-4-1-images/10.Animal-type-01.png)

#### Testing the Solution

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#9](https://judge.softuni.bg/Contests/Practice/Index/653#9).


## Какво научихме от тази глава?

В настоящата глава научихме как можем да използваме **по-сложни условия и проверки**, логически оператори в условията и **вложени `if`-конструкции**.

### Вложени проверки

```java
if (условие1) {
    if (условие2) {	
        // тяло;		
    } else {	
        // тяло;
    }
}
```

### По-сложни проверки с &&, ||, ! и ()

```java
if ((x == left || x == right) && y <= top && y >= bottom)
    System.out.println (…); 
```

#### Switch-case проверки

```java
switch (селектор) {
    case стойност1:
        конструкция;
        break;
    case стойност2:
    case стойност3:
        конструкция;
        break;
    …
    default:
        конструкция;
        break;
}
```


## Упражнения: по-сложни проверки

Нека сега да упражним работата с по-сложни проверки. Да решим няколко практически задачи.

### Задача: кино

В една кинозала столовете са наредени в **правоъгълна** форма в **r** реда и **c** колони. Има три вида прожекции с билети на **различни** цени:

* **Premiere** – премиерна прожекция, на цена **12.00** лева.
* **Normal** – стандартна прожекция, на цена **7.50** лева.
* **Discount** – прожекция за деца, ученици и студенти на намалена цена от **5.00** лева.

Напишете програма, която въвежда **тип прожекция** (стринг), брой **редове** и брой **колони** в залата (цели числа) и изчислява **общите приходи** от билети при **пълна зала**. Резултатът да се отпечата във формат като в примерите по-долу - с 2 цифри след десетичния знак.

#### Sample Input and Output

|Input|Output|Input|Output|
|----|-----|----|-----|
|Premiere<br>10<br>12|1440.00 leva|Normal<br>21<br>13|2047.50 leva|

#### Насоки и подсказки 

При прочитането на входа можем да обърнем типа на прожекцията в малки букви (с функцията **`.toLowerCase()`**). Създаваме и инициализираме променлива, която ще ни съхранява изчислените приходи. В друга променлива пресмятаме пълния капацитет на залата. Използваме **`switch-case`** условна конструкция, за да изчислим прихода в зависимост от вида на прожекцията и отпечатваме резултата на конзолата в зададения формат (потърсете нужната **Java** функционалност в интернет). 

Примерен код (части от кода са замъглени с цел да се стимулира самостоятелно мислене и решение):

![](assets/chapter-4-1-images/11.Cinema-01.png)

#### Testing the Solution

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#10](https://judge.softuni.bg/Contests/Practice/Index/653#10).


### Задача: волейбол

Влади е студент, живее в София и си ходи от време на време до родния град. Той е много запален по волейбола, но е зает през работните дни и играе **волейбол** само през **уикендите** и в **празничните дни**. Влади играе **в София** всяка **събота**, когато **не е на работа** и **не си пътува до родния град**, както и в **2/3 от празничните дни**. Той пътува до **родния си град h пъти** в годината, където играе волейбол със старите си приятели в **неделя**. Влади **не е на работа 3/4 от уикендите**, в които е в София. Отделно, през **високосните години** Влади играе с **15% повече** волейбол от нормалното. Приемаме, че годината има точно **48 уикенда**, подходящи за волейбол. 
Напишете програма, която изчислява **колко пъти Влади е играл волейбол** през годината. **Закръглете резултата** надолу до най-близкото цяло число (напр. 2.15 -> 2; 9.95 -> 9).

Входните данни се четат от конзолата:

* Първият ред съдържа думата "**leap**" (високосна година) или "**normal**" (нормална година с 365 дни).
* Вторият ред съдържа цялото число **p** – брой празници в годината (които не са събота или неделя).
* Третият ред съдържа цялото число **h** – брой уикенди, в които Влади си пътува до родния град.

#### Sample Input and Output

|Input|Output|Input|Output|
|-----|-----|-----|-----|
|leap<br>5<br>2|45|normal<br>3<br>2|38|

|Input|Output|Input|Output|
|-----|-----|-----|-----|
|normal<br>11<br>6|44|leap<br>0<br>1|41|

#### Насоки и подсказки

Стандартно прочитаме входните данни от конзолата като за избягване на грешки при въвеждане обръщаме текста в малки букви с функцията **`.toLowerCase()`**. Последователно пресмятаме **уикендите прекарани в София**, **времето за игра в София** и **общото време за игра**. Накрая проверяваме дали годината е **високосна**, правим допълнителни изчисления при необходимост и извеждаме резултата на конзолата **закръглен надолу** до най-близкото **цяло число** (потърсете **Java** клас с такава функционалност в интернет).

Примерен код (части от кода са замъглени с цел да се стимулира самостоятелно мислене и решение):

![](assets/chapter-4-1-images/12.Volleyball-01.png)

#### Testing the Solution

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#11](https://judge.softuni.bg/Contests/Practice/Index/653#11).


### Задача: * точка във фигурата

Фигура се състои от **6 блокчета с размер h \* h**, разположени като на фигурата. Долният ляв ъгъл на сградата е на позиция {0, 0}. Горният десен ъгъл на фигурата е на позиция {**2\*h**, **4\*h**}. На фигурата координатите са дадени при **h = 2**:

![](assets/chapter-4-1-images/13.Point-in-the-figure-01.png)

Да се напише програма, която въвежда цяло число **h** и координатите на дадена **точка {x, y}** (цели числа) и отпечатва дали точката е вътре във фигурата (**inside**), вън от фигурата (**outside**) или на някоя от стените на фигурата (**border**).

#### Sample Input and Output

|Input|Output|Input|Output|
|-----|-----|-----|-----|
|2<br>3<br>10|outside|2<br>3<br>1|inside|

|Input|Output|Input|Output|
|-----|-----|-----|-----|
|2<br>2<br>2|border|2<br>6<br>0|border|

|Input|Output|Input|Output|
|----|-----|-----|-----|
|2<br>0<br>6|outside|15<br>13<br>55|outside|

|Input|Output|Input|Output|
|-----|-----|-----|-----|
|15<br>29<br>37|inside|15<br>37<br>18|outside|

|Input|Output|Input|Output|
|-----|-----|-----|-----|
|15<br>-4<br>7|outside|15<br>30<br>0|border|

#### Насоки и подсказки

Примерна логика за решаване на задачата (не е единствената правилна):

* Може да разделим фигурата на **два правоъгълника** с обща стена:

<p align="center"><img src="assets/chapter-4-1-images/13.Point-in-the-figure-02.png" /></p>

* Една точка е **външна (outside)** за фигурата, когато е едновременно **извън** двата правоъгълника.
* Една точка е **вътрешна (inside)** за фигурата, ако е вътре в някой от правоъгълниците (изключвайки стените им) или лежи върху общата им стена.
* В **противен случай** точката лежи на стената на правоъгълника (**border**).

Примерен код (части от кода са замъглени с цел да се стимулира самостоятелно мислене и решение):

![](assets/chapter-4-1-images/13.Point-in-the-figure-03.png)

#### Testing the Solution

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/653#12](https://judge.softuni.bg/Contests/Practice/Index/653#12).
