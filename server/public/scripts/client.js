$(document).ready(onReady);

function onReady() {
    getTask();
    $('#submit-task').on('click', handleSubmit)
}

function handleSubmit() {
    console.log('is this working?');
    let toDoSend = {
        task: $('#add-task').val(),
        status: 'false'
    }
    console.log('add', toDoSend);
    $.ajax({
        method: 'POST',
        url: '/todolist',
        data: toDoSend
    }).then(function(response) {
        //handle response
        console.log('back from post with', response);
        getTask();
    }).catch(function(err) {
        
        alert('Error adding task. Please try again later.')    
        console.log('error in to do post', err);    
    }); 
}


function getTask() {
    console.log('running getTask');
    $.ajax({
        method: 'GET',
        url: '/todolist'
    }).then(function(response) {
        console.log(response);
        renderTasks(response);
console.log('back from get', response);
    }).catch(function (error) {
        console.log('error in artist get', error);
        alert('trouble getting items');
    });
}
    
function renderTasks(list) {
    $('#task-table-body').empty();
    for(let task of list) {
        $('#task-table-body').append( `
            <tr>
                <td>${task.task}</td>
                <td>${task.status}</td>
            </tr>` );
    }}
