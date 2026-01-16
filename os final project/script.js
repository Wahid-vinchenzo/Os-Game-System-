// QUESTIONS
let q=[
{q:"Which condition is necessary for deadlock?",
o:["Mutual exclusion","Preemption","Starvation","Thrashing"],a:0},

{q:"Which algorithm prevents deadlock?",
o:["FCFS","Banker's","LRU","RR"],a:1},

{q:"LRU is used in?",
o:["Scheduling","Memory","Cache","Deadlock"],a:2},

{q:"TLB is used for?",
o:["CPU","Cache","Virtual memory","Registers"],a:2},

{q:"Optimal page replacement?",
o:["FIFO","LRU","OPT","MRU"],a:2},

{q:"Thrashing occurs due to?",
o:["Deadlock","High paging","I/O","CPU"],a:1},

{q:"Virtual memory stores in?",
o:["RAM","Cache","Disk","TLB"],a:2},

{q:"Which avoids deadlock?",
o:["FCFS","Preemption","Circular wait","Hold & wait"],a:1},

{q:"Which memory fastest?",
o:["Cache","RAM","Disk","Virtual"],a:0},

{q:"TLB is?",
o:["Cache","Register","Memory","Disk"],a:0}
];

let i=0,score=0,life=5,answered=false;

// MENU
function openQuiz(){
hideAll();
document.getElementById("quiz").classList.remove("hide");
load();
}

function openDeadlock(){
hideAll();
document.getElementById("deadlock").classList.remove("hide");
}

function openMemory(){
hideAll();
document.getElementById("memory").classList.remove("hide");
}

function backHome(){
hideAll();
document.getElementById("home").classList.remove("hide");
}

function hideAll(){
document.getElementById("home").classList.add("hide");
document.getElementById("quiz").classList.add("hide");
document.getElementById("deadlock").classList.add("hide");
document.getElementById("memory").classList.add("hide");
}

// QUIZ
function load(){
answered=false;
document.getElementById("question").innerHTML=
`(${i+1}/${q.length}) `+q[i].q;

for(let j=0;j<4;j++){
document.getElementById("op"+j).innerHTML=q[i].o[j];
}

document.getElementById("life").innerHTML=life;
document.getElementById("score").innerHTML="Score: "+score;
}

function check(c){
if(answered) return;

if(c==q[i].a){
answered=true;
score++;
document.getElementById("score").innerHTML="Score: "+score;
setTimeout(()=>{next();},800);

}else{
life--;
document.getElementById("life").innerHTML=life;
alert("Wrong ❌ Try again 🤯");

if(life==0){
alert("GAME OVER 😢");
reset();
}
}
}

function next(){
i++;
if(i<q.length){
load();
}else{
alert("🤩Finished!🤩 Score: "+score);
reset();
}
}

function reset(){
i=0;score=0;life=5;
backHome();
}

// ================= DEADLOCK FIX =================

function detect(){

let A=document.getElementById("alloc").value.trim()
.split("\n").map(r=>r.trim().split(/\s+/).map(Number));

let R=document.getElementById("req").value.trim()
.split("\n").map(r=>r.trim().split(/\s+/).map(Number));

let V=document.getElementById("avail").value.trim()
.split(/\s+/).map(Number);

let n=A.length,m=V.length;
let finish=new Array(n).fill(false);
let work=[...V];

// step 1
for(let i=0;i<n;i++){
let zero=true;
for(let j=0;j<m;j++){
if(A[i][j]!=0){zero=false;break;}
}
if(zero) finish[i]=true;
}

// step 2
let progress=true;
while(progress){
progress=false;

for(let i=0;i<n;i++){
if(!finish[i]){
let can=true;

for(let j=0;j<m;j++){
if(R[i][j]>work[j]){can=false;break;}
}

if(can){
for(let j=0;j<m;j++)
work[j]+=A[i][j];

finish[i]=true;
progress=true;
}
}
}
}

// step 3
let dead=[];
for(let i=0;i<n;i++)
if(!finish[i]) dead.push("P"+(i+1));

if(dead.length==0)
document.getElementById("result").innerHTML="✅ No Deadlock detected ✅";
else
document.getElementById("result").innerHTML=
"❌ DEADLOCK in: "+dead.join(", ");
}

// ================= MEMORY FIX =================

function calculate(){

let holes=document.getElementById("holes").value
.split(",").map(Number);

let proc=document.getElementById("process").value
.split(",").map(Number);

let out="FIRST FIT\n";
out+=fit([...holes],proc,"first");

out+="\nBEST FIT\n";
out+=fit([...holes],proc,"best");

out+="\nWORST FIT\n";
out+=fit([...holes],proc,"worst");

document.getElementById("memResult").innerText=out;
}

function fit(mem,proc,type){

let res="";
for(let i=0;i<proc.length;i++){
let idx=-1;

for(let j=0;j<mem.length;j++){
if(mem[j]>=proc[i]){

if(type=="first"){idx=j;break;}

if(type=="best"){
if(idx==-1||mem[j]<mem[idx]) idx=j;
}

if(type=="worst"){
if(idx==-1||mem[j]>mem[idx]) idx=j;
}
}
}

if(idx!=-1){
res+=`P${i+1} -> Hole ${idx+1} (Remaining ${mem[idx]-proc[i]})\n`;
mem[idx]-=proc[i];
}else{
res+=`P${i+1} -> Not Allocated\n`;
}
}
return res;
}
