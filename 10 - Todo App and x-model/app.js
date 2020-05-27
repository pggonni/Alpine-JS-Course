// Create a function that holds state and data of all todos
// Function also holds the addTodo and removeTodo functions
function addTodos() {
    // The function returns a todo object
    return {
        // Return an array of objects that will contain all todos
        todos: [
            // A hard coded todo to start, the array could also be empty
            {
            // id number of the todo
            id: 1,

            // The actual name of the todo
            title: 'Clean Roof',

            // isDone keeps track of the state of the object
            isDone: false
        }],

        // Set todoTitle and todoId as two pieces of state to keep track of the todos
        todoTitle: '',
        todoId: 2,

        // Initialize a function to add Todos
        addTodo(){

            // If the title is empty, return nothing to stop users from submitting and empty todo
            if (this.todoTitle.trim() == ''){
                return
            }

            // else, push .this to the todo array
            this.todos.push({
                id: this.todoId,
                title: this.todoTitle,
                isDone: false
            })

            // Increase the id count by one
            this.todoId++;
            // Set the title back to an empty string
            this.todoTitle = ''
        },

        // Initialize a function to remove todos
        removeTodo(id){
            // Filter the todo array to remove the current id
            // "Filter everything that doesn't have the current todo id"
            this.todos = this.todos.filter(todo => id !== todo.id)
        }
    }
}