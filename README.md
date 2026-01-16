# 🖥️ OS Simulator Project

This project is a **Web-Based Operating System Simulator** developed using  
**HTML, CSS, and Vanilla JavaScript**.  
It is designed to help students understand core Operating System concepts  
through **interactive simulation and visualization**.

The system currently supports:

- 🔴 Deadlock Detection  
- 🟢 Memory Allocation Algorithms  
- 🎮 OS Quiz System  

This project is suitable for **academic purposes, lab demonstrations, and learning**.

---

## 📌 Project Description

Operating System concepts are often difficult to understand theoretically.  
This project provides a **practical simulation environment** where users can:

- Detect deadlock situations using resource allocation matrices  
- Perform memory allocation using:
  - First Fit
  - Best Fit
  - Worst Fit  
- Test OS knowledge through an interactive quiz system  

All calculations are performed dynamically using JavaScript  
and results are shown instantly in the browser.

---

## 🎯 Objectives

- Visualize deadlock conditions  
- Demonstrate memory allocation strategies  
- Provide an interactive learning experience  
- Help students prepare for OS exams  

---

## 🚀 Features

### 🔴 Deadlock Detection
- Accepts Allocation, Request, and Available matrices  
- Detects circular wait condition  
- Displays exact deadlocked processes  
- Handles multiple processes and resources  
- Implements Banker-style detection logic  

### 🟢 Memory Allocation
- Supports:
  - First Fit
  - Best Fit
  - Worst Fit  
- Shows:
  - Allocated block
  - Remaining memory  
- Handles:
  - Fragmentation
  - Insufficient memory cases  

### 🎮 Quiz System
- 10 MCQ questions  
- Life system  
- Score tracking  
- Auto reset after completion  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  

---

---

## ▶️ How to Run

1. Clone repository

2. Open the project folder  

3. Double click `index.html`  
   OR  
   Open it using any browser  

---

## 🔢 Input Format

### Deadlock Detection

**Allocation Matrix**

1 0 0

0 1 0

0 0 1

**Request Matrix**

0 1 0

0 0 1

1 0 0


**Available Resources**

0 0 0


---

### Memory Allocation

**Memory Blocks**

100,500,200,300,600


**Process Sizes**

212,417,112,426


---

## 🧪 Test Cases

- Positive deadlock cases  
- Negative (safe state) cases  
- Exact fit  
- Fragmentation  
- Insufficient memory  
- Stress tests  

---

## 📸 Screenshots
![UI](https://i.postimg.cc/B6S5jM96/Screenshot-1.png)

(Add project screenshots here)

---

## 🚀 Future Improvements

- Banker's Algorithm  
- Graphical memory visualization  
- Process animation  
- Timer based quiz  
- Responsive mobile design  

---

## 👨‍💻 Author

**Name:** Wahid_Vinchenzo 
 

---

## ⭐ Contribution

Contributions are welcome!  
Feel free to fork this repository and submit pull requests.

---

## 📜 License

This project is open-source  
and free to use for educational purposes.

