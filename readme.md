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
## 🧪 Challenges Part (10 Marks)

- On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)

- Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)

💡Hint: You can ask for Help from `ChatGPT` Mamma . Just copy the below prompt , generate answer. use it with your own way.

```bash
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step.
```

- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

💡Hint: Search Google with that below question

```bash
How to get current local time in js
```

---

## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules

- ✅ Minimum **5 meaningful commits** required
- ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit

- 📂 **GitHub Repository**
- 🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
