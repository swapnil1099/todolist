// delecration for total task

var total_num_task=0;
var position =document.querySelector('#total-no-task')
position.innerHTML=total_num_task  





// code for click event on add to do list

let insert = document.querySelector("#button-add");
insert.addEventListener("click",() =>{
    var subject =document.querySelector('#type-box');
   
    
    let cre_ele=document.createElement('p')
    let button_list=document.createElement('button')
    button_list.setAttribute("id","del_btn")
    button_list.innerText="Delete"
    let check_box=document.createElement('input')
    check_box.setAttribute('type','checkbox')
    check_box.setAttribute("class","check_btn")
    
    
    if(subject.value!=""){
        
        cre_ele.innerText=subject.value
        cre_ele.appendChild(check_box)
        cre_ele.appendChild(button_list)
        total_num_task=total_num_task+1;
        position.innerHTML=total_num_task
        
    //cre-ele
        output.appendChild(cre_ele)

      
    
    
    }
    subject.value=""
    //delet
    button_list.addEventListener("click",function() {
       output.removeChild(cre_ele)
       total_num_task=total_num_task-1;
       position.innerHTML=total_num_task

    })

   
 

    
}   );

//code for reset button
let reset1 = document.querySelector("#button-reset");
reset1.addEventListener("click",() =>{
    
       output.innerText=''
       total_num_task=0;
       position.innerHTML=total_num_task
}   );



