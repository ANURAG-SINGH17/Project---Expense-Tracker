let budget = document.querySelector("#budget-e");

let title = document.querySelector("#title-e");

let amount = document.querySelector("#amount-e");

let btn = document.querySelector("#btn");

let list = document.querySelector(".list");


let totalBudget = document.querySelector('#tb-a');

let expense = document.querySelector("#e-a");

let balance = document.querySelector("#bal");



let addbudget = document.querySelector("#add-budget")

addbudget.addEventListener("click" , function (e) {
    e.preventDefault();
    if(budget.value == "" ){ 
        document.querySelector("#error").style.display="block";
        }else{
          totalBudget.innerText = parseInt(budget.value);
          budget.value ="";
          document.querySelector("#none").style.display = "none";
          document.querySelector("form").style.display="block";
        }    
})

let totalexpense = 0 ;

btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (title.value == "" || amount.value == "") {
        document.querySelector("#error-2").style.display = "block";
    } else{
        let sublist =document.createElement("div");
        sublist.className = "sublist";
        list.appendChild(sublist);
        sublist.innerHTML = `<div class = "list-c"> <p>${title.value}<?p> 
        <p>${amount.value}</p></div>` ;

        totalexpense += parseInt(amount.value);
        expense.innerText = totalexpense ;

        let bal = parseInt(totalBudget.innerText) - totalexpense ;
        balance.innerText = bal ;
        if(bal < 0){
            balance.style.color = "red";
        }
        title.value="";
        amount.value="";
    }
})



