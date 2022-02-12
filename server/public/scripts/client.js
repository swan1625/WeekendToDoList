$(document).ready(onReady);

function onReady() {
    $('#submit-task').on('click', handleSubmit)
}

function handleSubmit() {
    console.log('is this working?');
    let toDoSend = {
        task: $('#add-task').val(),
        status: 'not finished'
    }
    console.log('add', toDoSend);
    $.ajax({
        method: 'POST',
        url: '/todolist',
        data: toDoSend
    }).then(function(response) {
        //handle response
        console.log('back from post with', response);
        
    }).catch(function(err) {
        
        alert('Error adding task. Please try again later.')    
        console.log('error in to do post', err);    
    }); 
}

    
     