const addMessage = document.querySelector('.message'),
addButton = document.querySelector('.add');
let todoList = [],
todo = document.querySelector('.todo');
if(localStorage.getItem('todo')){
	todoList = JSON.parse(localStorage.getItem('todo'));
	showMessages ();
};

addButton.addEventListener('click', function(){
let todoObject = {
	todo: addMessage.value,
	checked: false,
	important: false,
};
todoList.push(todoObject);
showMessages ();
});

function showMessages (){
	let todoListHtml = '';
	if(todoList.length === 0) todo.innerHTML = '';
	if(todo.innerHTML)
	todoList.forEach(function(item,index){
		if (item.todo === ''){
			return
		} else {
			todoListHtml += `
		<li>
		<div class="todo__main">
			<div class="todo__main-input">
				<input type="checkbox" id="item_${index}" ${item.checked ? 'checked' : ''}>
				<lable for="item_${index}" class="${item.important ? 'important' : ''}">${item.todo}</lable>
			</div>
			<button class="liBefore">Del</button>
		</div>
		</li>
		`
		todo.innerHTML = todoListHtml;
		localStorage.setItem('todo', JSON.stringify(todoList));
		}
	});
};

todo.addEventListener('change', function(event){
	todoList.forEach(function(item){
		let inputId = event.target.getAttribute('id');
		let lableId = todo.querySelector('[for=' + inputId + ']');
		let lableHtml = lableId.innerHTML;
		if(item.todo === lableHtml){
			item.checked = !item.checked;
		};
		localStorage.setItem('todo', JSON.stringify(todoList));
	});
});
todo.addEventListener('contextmenu', function(event){
	event.preventDefault();
	todoList.forEach(function(item, index){
		if(item.todo === event.target.innerHTML){
			if(event.ctrlKey || event.metaKey){
				todoList.splice(index, 1);
			} else{
				item.important = !item.important;
			}
			showMessages ();
			localStorage.setItem('todo', JSON.stringify(todoList));
		};
	});
});


/* let liBefore = document.querySelectorAll('.liBefore');

liBefore.forEach(function(item){
	item.addEventListener("click", function(e){
		if(e.target){
			// КАК РЕАЛИЗОВАТЬ УДАЛЕНИЕ ЭЛЕМЕНТА ПО КЛИКУ НА КНОПКУ "dEL"???
		}
	});
}) */

