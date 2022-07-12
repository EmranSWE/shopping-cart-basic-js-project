//Update product;
function updateProduct(count,isIncrease) {
    const increaseValue=document.getElementById(count);
    let plusIncreaseValue=increaseValue.value;
    if(isIncrease==true){
        plusIncreaseValue=parseInt(plusIncreaseValue)+1;  
    }
    else if(plusIncreaseValue > 0){
        plusIncreaseValue=parseInt(plusIncreaseValue)-1; 
    }
    increaseValue.value= plusIncreaseValue; 
    return plusIncreaseValue;  
}

//Product Price calculated
function productPrice(plusIncreaseValue,product) { 
    const caseTotal=document.getElementById(product);
    const subTotal=document.getElementById('sub-total');
    const Tax=document.getElementById('tax');
    const Total=document.getElementById('total');
    if (product=='phone-total') {
        caseTotal.innerText=plusIncreaseValue*1219;  
    }
    else{
        caseTotal.innerText=plusIncreaseValue*59; 
    }
    totalAmount();
}

//Total Amount calculated and display the amount
function totalAmount() {
  const phonePriceTotal=document.getElementById('phone-total').innerText;
  const casePriceTotal=document.getElementById('case-total').innerText;
  const subTot=parseFloat(phonePriceTotal)+parseFloat(casePriceTotal);
  const subTotalAmount=document.getElementById('sub-total');
  subTotalAmount.innerText=subTot;
  const totalTaxAmount=document.getElementById('tax');
  totalTaxAmount.innerText=parseFloat(subTot/10);
  const taxTotal=parseFloat(totalTaxAmount.innerText);
  const totalAmount=document.getElementById('total');
  totalAmount.innerText=subTot+taxTotal;
}

//Handled Case Details
document.getElementById('case-plus').addEventListener('click',function () {
   const casePlus= updateProduct('case-count',true);
   productPrice(casePlus,'case-total');
});
document.getElementById('case-minus').addEventListener('click',function () {
   const caseMinus=updateProduct('case-count',false);
   productPrice(caseMinus,'case-total');
});


//Handled Phone Details
document.getElementById('phone-plus').addEventListener('click',function () {
   const phonePlus= updateProduct('phone-count',true);
  productPrice(phonePlus,'phone-total');
});
document.getElementById('phone-minus').addEventListener('click',function () {
  const phoneMinus= updateProduct('phone-count',false);
  productPrice(phoneMinus,'phone-total')
});

//Update previous Price
document.getElementById('check-out').addEventListener('click',function () {
totalAmount();
  });
//Clear All Phone
document.getElementById('clear-all-phone').addEventListener('click',function () {
    const phoneClear=document.getElementById('phone-total');
    phoneClear.innerText= '00';
    const clearPhoneCount=document.getElementById('phone-count');
    clearPhoneCount.value= '0';
  });


//Clear All Case
document.getElementById('clear-all-case').addEventListener('click',function () {
    const phoneClear=document.getElementById('case-total');
    phoneClear.innerText= '00';
    const clearPhoneCount=document.getElementById('case-count');
    clearPhoneCount.value= '0';
  });