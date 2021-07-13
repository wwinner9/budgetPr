//============================= Classes ==================================
    //Budget Class
    class Budget{

        constructor(budget){
            this.budget=Number(budget);
            this.leftBudget=budget;
        }

        displayBudget(){
            return this.budget
        }

        discount(value){
            return this.leftBudget= this.leftBudget-value
        }

    }

    
    // HTML Class
    class HtmlC{

        
        insertIntoFields(amount){
            $('#total').textContent=amount
            $('#left').textContent=amount
        }

        displaySms(sms,clasS){

            //Verify if the div is there insert
            const divExist= $(`.primary .${clasS}`)
            c(divExist)
            if(divExist!==null){
                divExist.remove();
            }
            
            const div = document.createElement('div')
            div.classList.add('text-center','alert',clasS)
            div.appendChild(document.createTextNode(sms))

            $('.primary').insertBefore(div,form)

            setTimeout(()=>{
                div.remove()
            },3000)
        }

        printIntoList(name,amount){

            const li = document.createElement('li')
            li.classList= 'list-group-item d-flex justify-content-between align-items-center'
            li.innerHTML=`
                ${name}
                <strong class="badge badge-primary badge-pill">${amount} kz</strong>
            `
            $('.list-group').appendChild(li);
        }

        updateLeftBudget(rest){
            $('#left').textContent=rest;
        }

    }

    const htmlC= new HtmlC()

//======================= Somes Default Syntax ===========================

    const c = console.log
    const $ = document.querySelector.bind(document)


//========================= Global Variables =============================

const form= $('#add-expense')
let total = $('#total').value;
const left = $('#left').value;
//let expense = $('#expense').value;
//let amount = $('#amount').value;

let budget , promptValue;


//============================= Listener ==================================
    listen()

    function listen(){
        document.addEventListener('DOMContentLoaded', init)
        form.addEventListener('submit', handleSubmit)
    }
    



//============================= Functions ================================

    function init(){
        // Display the prompt 
        promptValue= prompt('What\'s Your Budget?')
        
        if(promptValue==='' || promptValue===null || promptValue==='0' || isNaN(promptValue)){

            window.location.reload();
            //init()
        }else{

            budget= new Budget(promptValue)  
            htmlC.insertIntoFields(budget.displayBudget())
            
        }
    }

    function handleSubmit(e){

        let expense=$('#expense').value
        let amount=$('#amount').value

        e.preventDefault(); 
        if(expense==='' || amount===''){ 
            htmlC.displaySms('Please Complete All the FIELDS !!!','alert-danger')
        }else{

            // Create the New Expense 
            htmlC.printIntoList(expense,amount)
            let valueRest=budget.discount(Number(amount))
            htmlC.updateLeftBudget(valueRest)

        }
    }
