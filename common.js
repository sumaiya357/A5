 
  function generateName(elementname){
    // let olLists;
    // if(olLists = document.querySelectorAll('#ol-list li').length>5){
    //   alert('not more than 5')
    // }
    const names = document.getElementById(elementname);
    const namesValue = names.innerText;
    
    
    const olList = document.getElementById('ol-list')
    const olListValue = olList.innerText;
    const listNumber =document.querySelectorAll('#ol-list li').length
    if( listNumber > 4){
  alert('Only 5 memebers allowed!!')
   return false;
 }
    
    const newli = document.createElement('li')
    newli.innerText=namesValue;
  
    
  
    olList.appendChild(newli)
    return olListValue;
   
  }

  
//  1
document.getElementById('buttons1').addEventListener('click', function(){
    

 generateName('name1')

document.getElementById("buttons1").disabled = true;
})

// 2
document.getElementById('buttons2').addEventListener('click', function(){
    

 generateName('name2')
 document.getElementById("buttons2").disabled = true;
})

// 3
document.getElementById('buttons3').addEventListener('click', function(){
    

 generateName('name3')
 document.getElementById("buttons3").disabled = true;
})

// 4
document.getElementById('buttons4').addEventListener('click', function(){
    

 generateName('name4')
 document.getElementById("buttons4").disabled = true;
})

// 5
document.getElementById('buttons5').addEventListener('click', function(){
    

 generateName('name5')
 document.getElementById("buttons5").disabled = true;
})

// 6
document.getElementById('buttons6').addEventListener('click', function(){
    

 generateName('name6')
 document.getElementById("buttons6").disabled = true;
})



//player budget

   
    
document.getElementById('perPlayer-amount').addEventListener('click', function(){
    
     
    const perPlayerField= document.getElementById('perPlayer-field');
    if( perPlayerField.value.length == " "){
      alert('please give a value')
      return false;
     }
    const perPlayerFieldValue = perPlayerField.value;
   
    //console.log(perPlayerFieldValue)
    
    
     const playerList = document.getElementById('ol-list');
     
      
      const  playerNumbertotal = playerList.childElementCount;
      //console.log(playerNumbertotal)
     

     const totalcost =perPlayerField.value * playerNumbertotal;

     const playerExpense = document.getElementById('cost');
     const playerExpenseValue = playerExpense.innerText;
     playerExpense.innerText= totalcost
    
     //console.log(playerExpenseValue)

     perPlayerField.value =" ";

//calculate total budget
document.getElementById('calculate-total').addEventListener('click', function(){
  

    //manager field accessed
    const managerField =document.getElementById('manager-field')

    if( managerField.value.length == " "){
      alert('please give a value')
      return false;
     }
  
    const managerFieldValueString = managerField.value;
    
    const managerFieldValue = parseFloat(managerFieldValueString)
   
    //coach field accessed
    const coachField =document.getElementById('coach-field')
    if(coachField.value.length == " "){
      alert('please give a value')
      return false;
     }

    const coachFieldValueString = coachField.value;
    const coachFieldValue = parseFloat(coachFieldValueString)
   
   
    //total 
    const totalExpense =  totalcost  +  managerFieldValue  +  coachFieldValue
   
    // if(coachFieldValue == " "){
    //     alert(' please give value')
    // }

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