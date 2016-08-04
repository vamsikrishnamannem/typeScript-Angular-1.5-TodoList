import {
    TodoListService
} from './todoslistservice';

class TodosController {
    todos: any[];
    newTask: any;
    constructor(private todoListService: TodoListService) {
        this.todoListService.getTodoItems()
            .then((todos) => {
                this.todos = todos;
            });
    }
    private addNewTask = function() {
        let obj = {
            "task": this.newTask,
            "isDone": false
        };
        this.todos.push(obj);
        this.newTask = '';

    }
};

export class TodosComponent {
    templateUrl: string = 'src/todoslist.html';
    controller = TodosController;
    // bindings: {
    //     newTask: '='
    // }
}