if(localStorage.getItem("loggedIn") !== "true"){
window.location.href = "login.html"
}
function logout(){

localStorage.removeItem("loggedIn")

window.location.href = "login.html"

}
let subjects = [
"Software_Engineering",
"Computer_Networks",
"Modern_Development_Tools",
"Data_Mining",
"Mobile_Computing",
"Numerical_Methods"
]
let quizzes = {

Software_Engineering:[

{q:"What does SDLC stand for?",a:["Software Development Life Cycle","System Design Level Code","Software Data Logic Code","None"],c:0},

{q:"Which phase collects system requirements?",a:["Testing","Design","Requirements","Maintenance"],c:2},

{q:"Who writes system requirements?",a:["Users","Developers","Analysts","Managers"],c:2},

{q:"Which model is iterative?",a:["Waterfall","Agile","Linear","None"],c:1},

{q:"Testing phase checks?",a:["Speed","Bugs","Design","Users"],c:1},

{q:"UML is used for?",a:["Drawing diagrams","Database","Networking","Gaming"],c:0},

{q:"Functional requirements describe?",a:["System services","Hardware","Users","Servers"],c:0},

{q:"Non-functional requirements describe?",a:["Performance","Functions","Buttons","Pages"],c:0},

{q:"Maintenance phase means?",a:["Fixing bugs","Designing","Coding","Testing"],c:0},

{q:"Requirement engineering means?",a:["Managing requirements","Coding","Testing","Designing"],c:0},

{q:"Stakeholder is?",a:["System user","Random person","Hardware","App"],c:0},

{q:"Software testing ensures?",a:["Quality","Speed","Memory","Hardware"],c:0},

{q:"Which diagram shows system actors?",a:["Use Case","Sequence","Class","State"],c:0},

{q:"Agile development is?",a:["Flexible","Slow","Fixed","Static"],c:0},

{q:"Bug means?",a:["Error","Animal","Tool","Device"],c:0}

],

Computer_Networks:[

{q:"What does LAN stand for?",a:["Local Area Network","Large Area Network","Long Area Network","None"],c:0},

{q:"Which layer handles routing?",a:["Transport","Network","Session","Application"],c:1},

{q:"OSI model has how many layers?",a:["5","6","7","8"],c:2},

{q:"Which protocol ensures reliable transfer?",a:["UDP","TCP","IP","HTTP"],c:1},

{q:"Which layer sends raw bits?",a:["Physical","Network","Transport","Session"],c:0},

{q:"IP address belongs to which layer?",a:["Network","Transport","Application","Physical"],c:0},

{q:"MAC address belongs to?",a:["Data link layer","Transport","Network","Application"],c:0},

{q:"Simplex communication means?",a:["One direction","Two directions","Multiple","None"],c:0},

{q:"Full duplex means?",a:["Two way same time","One way","Half time","None"],c:0},

{q:"Half duplex means?",a:["Both directions not same time","One direction","Continuous","None"],c:0},

{q:"Router works in?",a:["Network layer","Transport","Session","Physical"],c:0},

{q:"UDP is?",a:["Connectionless","Reliable","Slow","Hardware"],c:0},

{q:"TCP is?",a:["Reliable","Unreliable","Wireless","Analog"],c:0},

{q:"HTTP protocol used for?",a:["Web","Mail","Games","Audio"],c:0},

{q:"DNS converts?",a:["Domain to IP","IP to domain","File","Packet"],c:0}

],

Modern_Development_Tools:[

{q:"What is a software build?",a:["Process of compiling code","Database","Network","Hardware"],c:0},

{q:"CI/CD stands for?",a:["Continuous Integration / Continuous Delivery","Code Integration","Control Interface","None"],c:0},

{q:"Full build means?",a:["Compile all code","Compile some files","Delete code","Run code"],c:0},

{q:"Incremental build means?",a:["Compile changed files","Compile all files","Delete files","None"],c:0},

{q:"Which tool is for version control?",a:["Git","Photoshop","Chrome","Excel"],c:0},

{q:"GitHub is used for?",a:["Code hosting","Gaming","Video editing","Music"],c:0},

{q:"Visual Studio Code is?",a:["Code editor","Database","Network tool","Browser"],c:0},

{q:"Jira is used for?",a:["Project management","Gaming","Audio","Video"],c:0},

{q:"Build tools automate?",a:["Compilation","Typing","Drawing","Cooking"],c:0},

{q:"Maven is used for?",a:["Java projects","Networking","Design","Video"],c:0},

{q:"Automation helps?",a:["Reduce errors","Increase bugs","Slow work","None"],c:0},

{q:"Testing in CI/CD helps?",a:["Find bugs early","Delete code","Design UI","None"],c:0},

{q:"DevOps focuses on?",a:["Development and operations","Gaming","Graphics","Music"],c:0},

{q:"Repository stores?",a:["Code","Music","Videos","Images"],c:0},

{q:"Build pipeline means?",a:["Automated workflow","Database","Network","Hardware"],c:0}

],

Mobile_Computing:[

{q:"Mobile computing means?",a:["Computing on mobile devices","Desktop computing","Gaming","Networking"],c:0},

{q:"Example of mobile device?",a:["Smartphone","Printer","Router","Server"],c:0},

{q:"PDA stands for?",a:["Personal Digital Assistant","Program Device App","Private Data App","None"],c:0},

{q:"Smartphones combine?",a:["Phone and PDA","Printer and phone","Router","Server"],c:0},

{q:"Tablet devices use?",a:["Touch screen","Keyboard only","Mouse only","None"],c:0},

{q:"WiFi provides?",a:["Wireless internet","Cable internet","Power","Storage"],c:0},

{q:"Bluetooth used for?",a:["Short range communication","Power","Storage","Coding"],c:0},

{q:"Mobile OS example?",a:["Android","Windows 98","DOS","None"],c:0},

{q:"iOS developed by?",a:["Apple","Google","Microsoft","IBM"],c:0},

{q:"WAP stands for?",a:["Wireless Application Protocol","Web App Program","Wireless Access Program","None"],c:0},

{q:"SIM card stores?",a:["User information","Games","Videos","Apps"],c:0},

{q:"Mobile IP allows?",a:["Keep same IP while moving","Delete IP","Change phone","None"],c:0},

{q:"Cloud storage allows?",a:["Online data storage","Offline storage","Delete data","None"],c:0},

{q:"Mobile network example?",a:["GSM","USB","HDMI","VGA"],c:0},

{q:"Mobile computing needs?",a:["Wireless communication","Printer","Scanner","Camera"],c:0}

],

Data_Mining:[

{q:"Data mining means?",a:["Extracting patterns from data","Deleting data","Saving files","Networking"],c:0},

{q:"Data object represents?",a:["Entity","Program","Server","Device"],c:0},

{q:"Attributes are?",a:["Features","Programs","Networks","Files"],c:0},

{q:"Nominal attribute means?",a:["Category","Number","Binary","Ratio"],c:0},

{q:"Ordinal attribute means?",a:["Ordered values","Random values","Binary","None"],c:0},

{q:"Binary attribute has?",a:["Two states","Three states","Four states","Five"],c:0},

{q:"Numeric attribute represents?",a:["Quantity","Category","Color","Shape"],c:0},

{q:"Mean represents?",a:["Average","Max","Min","Mode"],c:0},

{q:"Median is?",a:["Middle value","First value","Last value","None"],c:0},

{q:"Mode is?",a:["Most frequent value","Average","Middle","None"],c:0},

{q:"Histogram shows?",a:["Data distribution","Code","Network","Hardware"],c:0},

{q:"Scatter plot shows?",a:["Relation between variables","Sound","Image","Video"],c:0},

{q:"Correlation means?",a:["Relationship","Difference","Size","Color"],c:0},

{q:"Similarity measure shows?",a:["How similar data objects are","Speed","Memory","Network"],c:0},

{q:"Dissimilarity means?",a:["How different objects are","Equal","Same","None"],c:0}

],

Numerical_Methods:[

{q:"Binary system base?",a:["2","8","10","16"],c:0},

{q:"Decimal system base?",a:["10","2","8","16"],c:0},

{q:"Octal system base?",a:["8","2","10","16"],c:0},

{q:"Hexadecimal system base?",a:["16","8","2","10"],c:0},

{q:"Binary uses digits?",a:["0 and 1","0-9","0-7","A-F"],c:0},

{q:"Hexadecimal uses?",a:["0-9 and A-F","0-9","0-7","0-1"],c:0},

{q:"Decimal to binary uses?",a:["Division by 2","Division by 10","Addition","Multiplication"],c:0},

{q:"Binary to decimal uses?",a:["Power of 2","Power of 10","Power of 8","None"],c:0},

{q:"Octal digits range?",a:["0-7","0-9","0-1","0-5"],c:0},

{q:"Example of binary number?",a:["1011","89","AB","78"],c:0},

{q:"LSB means?",a:["Least Significant Bit","Large Bit","Last Binary","None"],c:0},

{q:"MSB means?",a:["Most Significant Bit","Minimum Bit","Major Bit","None"],c:0},

{q:"Conversion between systems means?",a:["Changing base","Deleting number","Adding value","None"],c:0},

{q:"Hex A equals decimal?",a:["10","11","12","13"],c:0},

{q:"Binary 10 equals decimal?",a:["2","3","4","5"],c:0}

],

}
let current=0
let score=0
let subject=""
let timer
let time=30

function loadSubjects(){

let html=""

subjects.forEach(s=>{

html+=`<button onclick="startQuiz('${s}')">${s}</button>`

})

document.getElementById("subjects").innerHTML=html

}

function startQuiz(s){

subject=s
current=0
score=0
showQuestion()

}
function addTask(){

let input = document.getElementById("taskInput")

let task = input.value

if(task === "") return

let li = document.createElement("li")

let span = document.createElement("span")
span.innerText = task
span.onclick = function(){

span.classList.toggle("completed")

}
let del = document.createElement("button")
del.innerText = "❌"

del.onclick = function(){

li.remove()

}

li.appendChild(span)
li.appendChild(del)

document.getElementById("taskList").appendChild(li)

input.value = ""

}

function showQuestion(){

let q=quizzes[subject][current]

document.getElementById("question").innerText=q.q

let ans=""

q.a.forEach((a,i)=>{

ans+=`<button onclick="answer(${i})">${a}</button>`

})

document.getElementById("answers").innerHTML=ans

startTimer()

}

function answer(i){

if(i===quizzes[subject][current].c){

score++

}

next()

}

function next(){

clearInterval(timer)

current++

if(current < quizzes[subject].length){

showQuestion()

}else{

finish()

}

}

function finish(){

document.getElementById("quizBox").innerHTML=
`<h2>Your Score: ${score}/${quizzes[subject].length}</h2>`

saveGrade(score)

}

function startTimer(){

time=30

document.getElementById("timer").innerText=time

timer=setInterval(()=>{

time--

document.getElementById("timer").innerText=time

if(time<=0){

next()

}

},1000)

}
function saveGrade(score){

let grades = JSON.parse(localStorage.getItem("grades")) || []

grades.push({
subject: subject,
score: score
})

localStorage.setItem("grades", JSON.stringify(grades))

updateGrades()

}

function updateGrades(){

let grades = JSON.parse(localStorage.getItem("grades")) || []

let html = ""

let sum = 0

grades.forEach(g => {

let score = Number(g.score)

html += `<li>${g.subject} : ${score}/10</li>`

sum += score

})

document.getElementById("grades").innerHTML = html

updateDashboard(grades.length, sum)

}
function updateDashboard(count, sum){

document.getElementById("quizCount").innerText = count

let avg = 0

if(count > 0){

avg = (sum / (count * 10)) * 100

}

document.getElementById("avgGrade").innerText = Math.round(avg) + "%"

}
loadSubjects()
updateGrades()