// $(document).ready(function(){
//     console.log('jQuery sourced.');
//     addClickHandlers();
//   }); 
  
//   function addClickHandlers() {
//     $('#submit-task').on('click', handleSubmit);
//   }

// function handleSubmit(){
// console.log('is this working?');

// }

$(document).ready(onReady);

function onReady() {
    $('#submit-task').on('click', handleSubmit)
}

function handleSubmit(){
    console.log('is this working?');
    let toDoSend = {
        task: $('#add-task').val()
    }
    console.log('add', toDoSend);
    
    }