export class TodoListService {
  constructor(private $http,
    private $q){
    
  }
  
  getTodoItems(){
    return this.$http.get('data.json')
            .then((todosData) => {
              return todosData.data;
            });
  }
}