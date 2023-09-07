const todoList = [{ 
  name:'make dinner',
  dueDate: '2022-12-22'
}, { name:'wash dishes',
  dueDate:'2022-12-22'
}];

rendertodoList();


function rendertodoList(){let todoListhTML = '';


      todoList.forEach(function(todoObject,index){
        const { name,dueDate } = todoObject;
         const html = 
          `<div>${name}</div>
            <div>${dueDate}</div> 
            <button onclick="
            todoList.splice(${index},1)
            rendertodoList(); 
            "class="delete-button">Delete</button>`;
            
  
  
        todoListhTML += html;
      }


      )
    //   for(let i = 0; i < todoList.length; i++){
    //   const todoObject = todoList[i];
    //   const name = todoObject.name;
    //   const dueDate = todoObject.dueDate;
    //   const html = 
    //     `<div>${name}</div>
    //       <div>${dueDate}</div> 
    //       <button onclick="
    //       todoList.splice(${i},1)
    //       rendertodoList(); 
    //       "class="delete-button">Delete</button>`;
          


    //   todoListhTML += html;
    // }

       document.querySelector('.js-todo-list').innerHTML = todoListhTML;};


function addtodo(){
const inputElement =  document.querySelector('.js-name-input')
const name = inputElement.value;

const dateinputElement = document.querySelector('.js-due-date-input');
const dueDate = dateinputElement.value;


todoList.push({
  // name:name,
  // duedate:dueDate,
  name,
  dueDate
});
// console.log(todoList);


inputElement.value = '';

rendertodoList();

}


  

