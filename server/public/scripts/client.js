$(document).ready(onReady);

function onReady() {
    getTask();
    $('#submit-task').on('click', handleSubmit);
    $('#task-table-body').on('click', '.delete-btn', deleteTask);
    $('#task-table-body').on('click', '.complete-btn', completeTask);
    // $('#task-table-body').on('click', '.complete-btn', toggleColor)
}

// function toggleColor() {
    
// }





function handleSubmit() {
    console.log('is this working?');
    let toDoSend = {
        task: $('#add-task').val(),
        status: false
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
        console.log('error in task get', error);
        alert('trouble getting items');
    });
}
    
function renderTasks(list) {
    $('#task-table-body').empty();
    for(let task of list) {
       
        if (task.status === true ){
        $('#task-table-body').append( `
            <tr class="done" data-id = ${task.id} data-status= ${task.status}>
          
                <td>${task.task}</td>
                <td>finished, good job! </td>
                <td><button type="button" class="complete-btn" data-id=${task.id}> Mark complete</button></td>
                <td><button class="delete-btn" data-id=${task.id} >Delete task</button></td>
           
            </tr>` );
        }else {
            $('#task-table-body').append( `
            <tr class="notdone" data-id = ${task.id} data-status= ${task.status}>
          
                <td>${task.task}</td>
                <td>not done =[</td>
                <td><button type="button" class="complete-btn" data-id=${task.id}> Mark complete</button></td>
                <td><button class="delete-btn" data-id=${task.id} >Delete task</button></td>
           
            </tr>` );





        }
    }}


function deleteTask() {
        let taskId = $(this).data().id;
        $.ajax({
            method: 'DELETE',
            url: `/todolist/${taskId}`
        })
        .then(function(response) {
            console.log('Deleted it!');
            getTask();
        })
        .catch(function(error) {
            console.log('Error DELETEing', error);
        })
      }

function completeTask() {
    let taskId = $(this).closest('tr').data().id;
    let check = $(this).closest('tr').data().status;
    console.log('in completed task', taskId, check);
        $.ajax({
          method: 'PUT',
          url: `/todolist/${taskId}`,
          data: {
            newCheck: !check
          }
        }).then(function(response){
            console.log(response);
            getTask();
            toggleColor();
        }).catch(function(err){
          console.log('Error client PUT',err);
        })
      }
function toggleColor() { 
    console.log('in toggle colo');
    let test = $(this).closest('tr');
    test.toggleClass("highlight")
}
