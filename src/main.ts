import {TodosComponent} from "./todoscomponent";
import {TodoListService} from "./todolistservice";

angular
  .module("todosApp", [])
  .component("todosComponent", new TodosComponent())
  .service("todoListService", TodoListService);

angular.bootstrap(document, ["todosApp"]);
