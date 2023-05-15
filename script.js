const resetBtn = document.querySelector(".rstBtn");
const totalBill = document.querySelector(".total-bill");
const numOfPeople = document.querySelector(".total-people");
const customTipBtn = document.querySelector(".custom-btn");
const customTipInput = document.querySelector(".hidden-custom-tip");
const customTipId = document.getElementById("customTipId");


// Validators
const peopleValidate = document.querySelector(".people-validate");
const hiddenBorderPeople = document.querySelector(".hidden-border");

let totalTip = 0;
let tipPerPerson = 0;
let totalBillPerPerson = 0;

const allTipBtn = document.querySelectorAll(".tip-button");




for(let i = 0; i < allTipBtn.length; i++){
    allTipBtn[i].addEventListener("click", function(){
        if(totalBill.value == 0 && numOfPeople.value ==0){
            peopleValidate.classList.remove("hidden")
        }
        else{
            totalTip = (parseInt(allTipBtn[i].textContent) / 100) * parseInt(totalBill.value);
            console.log(`The total tip is ${totalTip}`)
            tipPerPerson = totalTip / numOfPeople.value;
            console.log(`Each person pays ${tipPerPerson}`)
            totalBillPerPerson = (totalTip + parseInt(totalBill.value)) / numOfPeople.value;
            console.log(`The total bill per person is ${totalBillPerPerson}`);

            document.querySelector(".total-tip-amount").textContent = tipPerPerson;
            document.querySelector(".total-bill-per-person").textContent = totalBillPerPerson;
        }
    })
}

customTipBtn.addEventListener("click", function(){
    customTipInput.classList.remove("hidden-custom-tip");
    customTipId.classList.add("slide");
})


resetBtn.addEventListener("click", function(){
    totalBill.value = 0;
    numOfPeople.value = 0;
    totalTip = 0;
    tipPerPerson = 0;
    document.querySelector(".total-tip-amount").textContent = 0;
    document.querySelector(".total-bill-per-person").textContent = 0;
    peopleValidate.classList.add("hidden");
    customTipInput.classList.add("hidden-custom-tip");

})



