 
  function generaeName(elementname){
    const names = document.getElementById(elementname);
    const namesValue = names.innerText;
    
    
    const olList = document.getElementById('ol-list')
    const olListValue = olList.innerText;
    
    const newli = document.createElement('li')
    newli.innerText=namesValue;
     
    olList.appendChild(newli)
  return olListValue;
  }
 
document.getElementById('buttons1').addEventListener('click', function(){
    

 generaeName('name1')

})
document.getElementById('buttons2').addEventListener('click', function(){
    

 generaeName('name2')

})
document.getElementById('buttons3').addEventListener('click', function(){
    

 generaeName('name3')

})
document.getElementById('buttons4').addEventListener('click', function(){
    

 generaeName('name4')

})
document.getElementById('buttons5').addEventListener('click', function(){
    

 generaeName('name5')

})
document.getElementById('buttons6').addEventListener('click', function(){
    

 generaeName('name6')

})

// calculate player budget

document.getElementById('perPlayer-amount').addEventListener('click', function(){
    


    const perPlayerField= document.getElementById('perPlayer-field')
    const perPlayerFieldValue = perPlayerField.value;
    console.log(perPlayerFieldValue)
   
     const playerList = document.getElementById('ol-list');
     
      
      const  playerNumbertotal = playerList.childElementCount;
      console.log(playerNumbertotal)

     const totalcost =perPlayerField.value * playerNumbertotal;

     const playerExpense = document.getElementById('cost');
     const playerExpenseValue = playerExpense.innerText;
     playerExpense.innerText= totalcost
     //console.log(playerExpenseValue)

     perPlayerField.value =" ";

//calculate total budget
document.getElementById('calculate-total').addEventListener('click', function(){
    // const totalcost =perPlayerField.value * playerNumbertotal;
    //manager field accessed
    const managerField =document.getElementById('manager-field')
    const managerFieldValueString = managerField.value;
    const managerFieldValue = parseFloat(managerFieldValueString)
  

    //coach field accessed
    const coachField =document.getElementById('coach-field')
    const coachFieldValueString = coachField.value;
    const coachFieldValue = parseFloat(coachFieldValueString)

   
    //total 
    const totalExpense =  totalcost  +  managerFieldValue  +  coachFieldValue
    
    //total amaount accessed
    const totalAmount = document.getElementById('total-amount');
    let totalAmountValue = totalAmount.innerText;
    totalAmount.innerText=totalExpense
    console.log(totalAmountValue)

    //clear
    managerField.value= " ";
    coachField.value= " ";
})

})