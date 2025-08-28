1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ans: getElementById:it returns single element with specified id.
getElementsByClassName :it returns HTMLCollection(like array bt not array)
querySelector:it returns the first element that matches the css selector,
querySelectorAll:it returns all the elements that matches the css selector


2. How do you **create and insert a new element into the DOM**?

create: document.createElement(tagName)
set attribute: element.innertext
insert into the dom:appendChild

3. What is **Event Bubbling** and how does it work?
event bubling is the proccess where an event starts at the innermost terget and element and propagates to its parents and then grandparents and so on until it reaches the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is technique where instead of attaching event listenser to multiple child elements we attach one lisner to their common parents.

its use full:
1.fewer lisner use
2.less memory
3.clear code

5. What is the difference between **preventDefault() and stopPropagation()** methods?

ans:preventDefault(): stops the default browser behaviour of an element.does not stop the propagation or bubbling

stopPropagation():prevent the event from propagating
