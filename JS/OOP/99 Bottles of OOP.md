# 99 Bottles of OOP



## 1

A “method” is defined on an object, and contains behavior. In the previous example, the Bottles class defines a method named song.

A “message” is sent by an object to invoke behavior. In the aforementioned example, the song method sends the verses message to the receiver this.

Therefore, methods are defined, and messages are sent.

Drawing a distinction between messages and methods improves your OO mindset. It allows you to isolate the intention of the sender from the implementation in the receiver. OO promises that if you send the right message, the correct behavior will occur, regardless of the names of the methods that eventually get invoked.

When you first write a piece of code, you obviously know what it does. Therefore, during initial development, the price you pay for poor names is relatively low. However, code is read many more times than it is written, and its ultimate cost is often very high and paid by someone else. Writing code is like writing a book; your efforts are for other readers. Although the struggle for good names is painful, it is worth the effort if you wish your work to survive to be read. Code clarity is built upon names.

Asking the following questions will give you insight into the potential expense of a bit of code:

1. **How difficult was it to write?**
2. **How hard is it to understand?**
3. **How expensive will it be to change?**



Code is easy to understand when it clearly reflects the problem it’s solving, and thus openly exposes that problem’s domain. A brief glance at the code would answer these questions:

1. **How many verse variants are there?**
2. **Which verses are most alike? In what way?**
3. **Which verses are most different, and in what way?**
4. **What is the rule to determine which verse comes next?**



#### Incomprehensibly Concise
- “ cares only for terseness”



#### Speculatively general
- “tries for extensibility but achieves unwarranted complexity”

You can be forgiven if you suspect that this is unduly complicated. It is. However, it’s curious that despite this complexity, Listing 1.2: Speculatively General does a much better job than Listing 1.1: Incomprehensibly Concise of answering the domain questions.This solution does a good job of exposing core concepts, but does a bad job of being worth its cost.



#### Concretely abstract
- “is in the right place, but it can’t get its feet out of the mud”

This solution is characterized by having many small methods. This is normally a good thing, but somehow in this case it’s gone badly wrong. 

The code is DRY, and DRYing out code should reduce costs. DRY promises that if you put a chunk of code into a method and then invoke that method instead of duplicating the code, you will save money later if the behavior of that chunk changes. Recognize, though, that DRYing out code is not free. It adds a level of indirection, and layers of indirection make the details of what’s happening harder to understand. DRY makes sense when it reduces the cost of change more than it increases the cost of understanding the code.

The Don’t Repeat Yourself principle, like all principles of object-oriented design, is completely true. However, despite that fact that the code above is DRY, there are many ways in which it’s expensive to change. It’s not just the names that are wrong, but the methods themselves. Many methods in this code *represent the wrong abstractions*.

When you choose beer as the name of a method that returns the string "beer," you’ve named the method after what it does right now. Unfortunately, when you name a method after its current implementation, you can never change that internal implementation without ruining the method name.

Therefore, one lesson to be gleaned from this solution is that **you should name methods after the concept they represent rather than how they currently behave**.



#### Shameless Green

“The most immediately apparent quality of this code is how very simple it is. There’s nothing tricky here. The code is gratifyingly easy to comprehend. Not only that, despite its lack of complexity, this solution does extremely well on the domain questions.

- **How many verse variants are there?**
  Clearly, four.

- **Which verses are most alike? In what way?**
  3-99, where only the verse number varies.

- Which verses are most different? In what way?
  0, 1 and 2 are different from 3-99, though figuring out how requires parsing strings with your eyes.

- **What is the rule to determine which verse should be sung next?**
  This is still not explicit. The 0 verse contains a deeply buried, hard-coded 99”

By the criteria that have been established, Shameless Green is clearly the best solution, yet almost no one writes it. It feels embarrassingly easy, and is missing many qualities that you expect in good code. It duplicates strings and contains few named abstractions.

The Shameless Green solution is disturbing because, although the code is easy to understand, it makes no provision for change.

**When you DRY out duplication or create a method to name a bit of code, you add levels of indirection that make it more abstract.** In theory these abstractions make code easier to understand and change, but in practice they often achieve the opposite. One of the biggest challenges of design is knowing when to stop, and deciding well requires making judgments about code.



## 1.2 Judging Code

### 1.2.1. Evaluating Code Based on Opinion

Just as "Everybody complains about the weather but nobody does anything about it,"[4] everyone has an opinion about what good code looks like, but those opinions usually don’t tell us what action to take to create it.

It would be extremely handy to have agreed-upon facts with which to compare code. In search of these facts, this section examines three different metrics: Source Lines of Code, Cyclomatic Complexity, and ABC.



#### Source Lines of Code

- “Using SLOC to predict the development effort needed for a new project is done by counting the SLOC of existing projects for which total effort is known, deciding which of those existing projects the new project most resembles, and then running a cost estimation model to make the prediction.

  

#### Cyclomatic Complexity

- Cyclomatic complexity neither predicts application development time nor measures programmer productivity. Its desire to identify code that is difficult to test or maintain aims directly at code quality.

- First, you can use it to compare code. If you have two variants of the same method, you can choose between them based on their cyclomatic complexity. Lower scores are better and so by extension the code with the lowest score is the best.

- Next, you can use it to limit overall complexity. You can set standards for how high a score you’re willing to accept, and require explicit dispensation before allowing code to exceed this maximum.

- You can use it to determine if you’ve written enough tests. Cyclomatic complexity tells you the minimum number of tests needed to cover all of the logic in the code. If you have fewer tests than cyclomatic complexity recommends, you don’t have complete test coverage.

  

#### Assignments, Branches and Conditions (ABC) Metric

- “think of ABC scores as reflecting cognitive as opposed to physical size. High ABC numbers indicate code that takes up a lot of mental space. In this sense, ABC is a measure of complexity. Highly complex code is difficult to understand and change, therefore ABC scores are a proxy for code quality.
- “The JavaScript landscape changes quickly, so regardless, consider looking for tools to run against your code.



Infinitely experienced programmers do not write infinitely complex code; they write code that’s blindingly simple.

Shameless Green is defined as the solution that quickly reaches green while prioritizing understandability over changeability. It uses tests to drive comprehension, and patiently accumulates concrete examples while awaiting insight into underlying abstractions. It doesn’t dispute that DRY is good, rather, it believes that it is cheaper to manage temporary duplication than to recover from incorrect abstractions.



## 2. Test Driven Development

the <span style="color:red">**Red**</span>/<span style="color:green">**Green**</span>/**Refactor** cycle: "the TDD mantra”

**TDD** works like this:

- *Write a test.*
  Because the code does not yet exist, this test fails. Test runners usually display failing tests in red.

- *Make it run.*
  Write the code to make the test pass. Test runners commonly display passing tests in green.

- *Make it right.*
  Each time you return to green, you can refactor any code into a better shape, confident that it remains correct if the tests continue to pass.

> “Quick green excuses all sins.
> — Kent Beck
> Test-Driven Development by Example

Green means safety. Green indicates that, at least as evidenced by the tests at hand, you understand the problem. Green is the wall at your back that lets you move forward with confidence. Getting to green quickly simplifies all that follows.



### 2.2. Writing the First Test

Despite its apparent import, the choice you make here hardly matters. In the beginning, you have ideas about the problem but actually know very little. Your ideas may turn out to be correct, but it’s just as possible that time will prove them wrong. You can’t figure out what’s right until you write some tests, at which time you may realize that the best course of action is to throw everything away and start over. Therefore, the purpose of some of your tests might very well be to prove that they represent bad ideas. Learning which ideas won’t work is forward progress, however disappointing it may be in the moment.

So, while it is important to consider the problem and to sketch out an overall plan before writing the first test, don’t overthink it. Find a starting place and get going, in faith that as you proceed, the fog will clear.

You as the writer of tests know that the verse method must eventually take the value of its argument into account, but you as the writer of code must act in ignorance of this fact. When doing TDD, you toggle between wearing two hats. While in the "writing tests" hat, you keep your eye on the big picture and work your way forward with the overall plan in mind. When in the "writing code" hat, you pretend to know nothing other than the requirements specified by the tests at hand. Thus, although each individual test is correct, until all are written, the code is incomplete.

> “Separate the things that change from the things that remain the same”



Code like this pluralize method gets written when programmers take the DRY principle to extremes, as if they’re allergic to duplication. DRY is important but if applied too early, and with too much vigor, it can do more harm than good. When faced with a situation like this, ask these questions:

- *Does the change I’m contemplating make the code harder to understand?*
  When abstractions are correct, code is easy to understand. Be suspicious of any change that muddies the waters; this suggests an insufficient understanding of the problem.

- *What is the future cost of doing nothing now?*
  Some changes cost the same regardless of whether you make them now or delay them until later. If it doesn’t increase your costs, delay making changes. The day may never come when you’re forced to make the change, or time may provide better information about what the change should be. Either way, waiting saves you money.

- *When will the future arrive, or how soon will I get more information?*
  If you’re in the middle of writing a test suite, better information is as close as the next test. Squeezing all duplication out at the end of every test is not necessary. It’s perfectly reasonable to tolerate a bit of duplication across several tests, **hoping that coding up a number of slightly duplicative examples will reveal the correct abstraction**. It’s better to tolerate duplication than to anticipate the wrong abstraction.



The Shameless Green solution is optimized to be straightforward and intention-revealing, and it doesn’t much concern itself with changeability or future maintenance. The goal is to use green to maximize your understanding of the problem and to unearth all available information before committing to abstractions.

Use of **if / else** if implies that each subsequent condition varies in a meaningful way. Because else if is often used to test wildly different conditions, future readers will feel obliged to closely examine each one.

In contrast, use of **switch** implies that every condition checks for equality against an explicit value. Readers of switch statements expect conditions to be fundamentally the same.

In the 99 Bottles case above, the conditions are fundamentally the same. Switching from if to switch when you add the code for verse 1 implies this sameness, and so is an act of kindness towards your reader. **Intention-revealing code is built from the accumulation of such thoughtful acts.**



#### “Green Bar Patterns":

- **Fake It **("Til You Make It")
- **Obvious Implementation**
- **Triangulate**



Fake It style TDD may initially seem awkward and tedious, but with practice it becomes both natural and speedy. Developing the habit of writing just enough code to pass the tests forces you to write better tests. It also provides an antidote for the hubris of thinking you know what’s right when you’re actually wrong. 

**Triangulate**: a way to "conservatively drive abstraction with tests." 

Triangulation requires writing several tests at once, which means you’ll have multiple simultaneous broken tests. The idea is to write one bit of code which makes all of the tests pass. Triangulation is meant to force you to converge upon the correct abstraction in your code.

Excerpt From: Metz, Sandi. “99 Bottles of OOP”. Apple Books. 



#### **Considering Options**

1. Assert that the expected output matches that of some other method.
2. Assert that the expected output matches a dynamically generated string.
3. Assert that the expected output matches a hard-coded string.


Of these three choices, only the third is independent of the current implementation and so guaranteed to survive changes to Bottles. It may be difficult to reconcile yourself to writing down the entire lyrics string, but remember, DRYing out the lyrics in the test would force you to introduce an abstraction. **Tests are not the place for abstractions—they are the place for concretions.** Abstractions belong in code. If you insist on reducing duplication by adding logic to your tests, this logic by necessity must mirror the logic in your code. This binds the tests to implementation details and makes them vulnerable to breaking every time you change the code.

DRY is a very good idea in code, but much less useful in tests. When testing, the best choice is very often just to write it down.



## 3. Unearthing Concepts

Code is expensive. Writing it costs time or money. It therefore behooves you to be as efficient as possible. The most cost-effective code is as good as necessary, but no better.

If the problem is solved, and you choose to refactor now rather than later, you pay the opportunity cost of not being able to work on other problems. Spending time "improving" code based purely on aesthetics may not be the best use of your precious time.

A good way to know that you’re using limited time wisely is to be driven by changes in requirements. The arrival of a new requirement tells you two things, one very specific, the other more general.



_______

### SOLID Design Principles

The SOLID acronym was coined by Michael Feathers and popularized by Robert Martin. Each letter stands for a well-known principle in object-oriented design. Here’s a formal definition of each one:

- **S - Single Responsibility**
  The methods in a class should be cohesive around a single purpose.

- **O - Open-Closed**
  Objects should be open for extension, but closed for modification.

- **L - Liskov Substitution**
  Subclasses should be substitutable for their superclasses.

- **I - Interface Segregation**
  Objects should not be forced to depend on methods they don’t use.

- **D - Dependency Inversion**
  Depend on abstractions, not on concretions.

If you find the above definitions less than enlightening, don’t despair. As principles are referenced in this book, plain language explanations (like the one below) will follow.

__________



#### open-closed

The "**open**" principle says that you should not conflate the process of moving code around, of refactoring, with the act of adding new features. You should instead separate these two operations. When faced with a new requirement, first rearrange the existing code such that it’s open to the new feature, and once that’s complete, then add the new code.

![Screenshot 2021-02-04 at 17.11.27](/Users/kdengl/Documents/_docs/JS/OOP/Screenshot 2021-02-04 at 17.11.27.png)

Before undertaking this refactoring, it must be admitted that there is no direct connection between removing the duplication, and succeeding in making the code open to the six-pack requirement. That, however, is the beauty of this technique. You don’t have to know how to solve the whole problem in advance. The plan is to nibble away, one code smell at a time, in faith that the path to openness will be revealed.

> “Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure.”

If you rearrange code without changing behavior and tests begin to fail, then the tests themselves are flawed. Tests that make assertions about how things are done, rather than what actually happens, are the prime contributors to this predicament. For example, a test that makes assertions about how a method is implemented will obviously break if you change that method’s implementation, even if its output is unchanged. When in this situation, there’s no alternative other than to improve the tests before embarking upon a refactoring.



### Flocking Rules

1. Select the things that are most alike.
2. Find the smallest difference between them.
3. Make the simplest change that will remove that difference.



Changes to code can be subdivided into four distinct steps:

1. parse the new code
2. parse and execute it
3. parse, execute and use its result
4. delete unused code



As you’re following the rules:

- **For now, change only one line at a time.**
- **Run the tests after every change.**
- **If the tests fail, undo and make a better change.**



### Focusing on Difference

While it’s true that there are problems for which the solution is obvious, those of any interesting size aren’t tractable to instant understanding. They’re too big or have too many parts.

When examining complicated problems, the eye is first drawn towards sameness. However, despite the fact that sameness is easier to identify, difference is more useful because it has more meaning. DRYing out sameness has some value, but DRYing out difference has more.

Difference holds the key to understanding. If two concrete examples represent the same abstraction and they contain a difference, that difference must represent a smaller abstraction within the larger one. If you can name the difference, you’ve identified that smaller abstraction.

The good news is that a systematic application of the rules of refactoring converts difference to sameness, decomposing a problem into its constituent parts. The even better news is that this happens automatically. You don’t have to identify the underlying abstractions in advance of refactoring. If you merely write the code dictated by the rules, the abstractions will follow.

There are **two** pieces of information that can help in the struggle for a name. One is a general rule and the other is the new requirement.

First, the **new requirement**. Recall that the impetus for this refactoring was the need to say "six-pack" instead of "bottle/bottles" when there are 6 bottles. The string "six-pack" is one more concrete example of the underlying abstraction. This suggests that if you name the method "bottle," you will regret this decision in short order.

The general rule is that the name of a thing should be one level of abstraction higher than the thing itself. The strings "bottle/bottles/six-pack" are instances of some category, and the task is to name that category using language of the domain.

When you’re struggling to find a good name but have only a few concrete instances to guide you, it can be illuminating to imagine other things that would also be in the same category.[11] For example, if the song were about wine, the wine might come in a carafe. Juice sometimes comes in small boxes. Soft drinks often come in cans.”



#### Refactoring Gradually

In the current example, you ought not to edit all of the senders simultaneously. Therefore, to do a gradual cutover refactoring, you have to figure out how to allow some senders to pass the new argument while others remain unchanged.



## 4. Practicing Horizontal Refactoring

The challenge, as always, is identifying the current concept and coming up with a good name. The words "it" and "one" are so innately generic that naming the underlying concept is particularly tough. Names should neither be too general nor too specific. For example, `thing` is too broad, and `itOrOne` too narrow.



a hlepful way of finding good names for abstractions is to write it down as a two column table:

 **XXX Column Header** 

| Number | XXX? ← your abstraction |
| ------ | ---- |
| 99     | '99' |
|50| '50' |
| 6 | 'six-pack' |
|1 | '1' |
|0 | 'no more' |
Don't think too far ahead. While you are allowed to use common sense, it’s usually best to stay horizontal and concentrate on the current goal. When creating an abstraction, first describe its responsibility as you understand it at this moment, then choose a name which reflects that responsibility. The effort you put into selecting good names right now pays off by making it easier to recognize perfect names later.

The *quantity method* differs in that it initially returns the value from the 1, or non-default case. → you'll need to add a default value to your argument in that case: 
```js
function quantity(number = 0) {
  if (number === 0) {
    return 'no more';
  } else {
    return number;
  }
}
```

When the default branch is implemented first, undefined can always be used for the default. If the non-default branch is implemented first, the default has to be set to something that actually meets the condition and so makes the true branch execute. Therefore, implementing the non-default branch first places a slightly greater burden on you. You have to use a specific, real value for the default, and then remember to remove the default once the transition is complete.



**Refactoring rules: The rules lead to consistent code, and consistency matters deeply.**

1. it makes code easy to understand. Code is read many more times than it is written, so anything that increases understandability lowers costs. 
2.  and just as important, consistent code enables future refactorings.



### Liskov Substitution Principle

> “subtypes must be substitutable for their supertypes.”
>

Liskov, in plain terms, requires that objects be what they promise they are. When using inheritance, you must be able to freely substitute an instance of a subclass for an instance of its superclass. Subclasses, by definition, are all that their superclasses are, plus more, so this substitution should always work.

Liskov prohibits you from doing anything that would force the sender of a message to test the returned result in order to know how to behave. Receivers have a contract with senders, and despite the implicit nature of this contract in dynamically typed, object-oriented languages, it must be fulfilled.



```js
{
  successor(number) {
    if (number === 0) {
      return 99;
    }
    return number - 1;
  }
}
```

**Successor** is important, and separating it from quantity gives both methods a single responsibility. If you conflate choosing-what-to-sing-for-any-number (quantity) with deciding-what-verse-to-sing-next (successor), the resulting method would be harder to understand, future refactorings would be more difficult, and attempts to change the code for one idea might accidentally break it for the other.



## 5. Separating Responsibilities

The following questions draw attention to a number of interesting characteristics of the code as it’s written so far:

- Do any methods have the same shape?
- Do any methods take an argument of the same name?
- Do arguments of the same name always mean the same thing?
- If you were going to break this class into two pieces, where’s the dividing line?


For those methods created by the Flocking Rules (quantity, container, action, pronoun and successor, hereafter referred to as the "flocked five"):

- Do the tests in the conditionals have anything in common?
- How many branches do the conditionals have?
- Do the methods contain any code other than the conditional?
- Does each method depend more on the argument that got passed, or on the class as a whole?



### Various Conditional Forms
```js
 1 // verbose conditional
 2 container(number) {
 3   if (number === 1) {
 4    return 'bottle';
 5   } else {
 6    return 'bottles';
 7   }
 8 }
 9 
10 // guard clause
11 quantity(number) {
12   if (number === 0) {
13     return 'no more';
14   }
15 
16   return number.toString();
17 }
18 
19 // ternary expression
20 pronoun(number) {
21   return number === 1 ? 'it' : 'one';
22 }
```

 



