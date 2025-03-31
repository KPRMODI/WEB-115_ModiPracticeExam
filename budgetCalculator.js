try {
    let monthlyincome = Number(window.prompt("What is your monthly income? (without commmas)")).toFixed(2) // prompts
let monthlyexpenses = Number(window.prompt("What is your monthly expenses? (without commmas)")).toFixed(2)
let months = window.prompt("How many months have you been working?")

console.log(typeof(monthlyincome))
let monthlyincometext = document.createElement("p")
document.getElementById("budgetResults").appendChild(monthlyincometext)
monthlyincometext.textContent = `Monthly Income: $`+ monthlyincome
    
let monthlyexpensestext = document.createElement("p")
document.getElementById("budgetResults").appendChild(monthlyexpensestext)
monthlyexpensestext.textContent = `Monthly Expenses: $`+ monthlyexpenses
    
if (monthlyincome < monthlyexpenses) {
    alert("Warning: Spending exceeds income!") // if you spend more than you make an alert appears 
}
    
let button = document.getElementById("calculateBudget")
    
button.addEventListener("click", function(){
    let savings = document.createElement("p")
    savingscalc = monthlyincome - monthlyexpenses
    document.getElementById("budgetResults").appendChild(savings)
    savings.innerHTML = `Monthly Savings: $`+ savingscalc
    
    let totalprojectedsavings = monthlyincome * months - monthlyexpenses * months
    let projectedsavings = document.createElement("p")
    document.getElementById("budgetResults").appendChild(projectedsavings)
    projectedsavings.innerHTML = `Total Savings: $`+totalprojectedsavings
    
    for (let i = 1 ; i < 13 ; i++) {
        console.log(i)
        let monthlysavings = savingscalc * i
        let monthlysavingstext = document.createElement("p")
        document.getElementById("budgetResults").appendChild(monthlysavingstext)
        monthlysavingstext.innerHTML = `Month `+i +`: $`+ monthlysavings
        }
    }) 
} catch (error) {
    alert("Error somewhere")
}