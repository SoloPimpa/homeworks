class TodosController {
    #collection = null;
    #listView = null;
    #formView = null;

    constructor($container) {

        this.#listView = new TodosListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.deleteTodo(id),
        });
        $container.append(this.#listView.$el);

        this.#collection = new TodosCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList(this.#collection.list);
        });

        this.#formView = new TodosFormView({
            addTodo:(data) => this.addTodo(data)
        });
        $container.append(this.#formView.$el);
    }

    toggleTodo(id) {
        this.#collection.toggleTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    deleteTodo(id) {
        this.#collection.deleteTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
    addTodo(data){
        this.#collection.addTodo(data).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

}