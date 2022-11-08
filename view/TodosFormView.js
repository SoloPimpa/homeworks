class TodosFormView{
    static  formTemplate =` <form>
    <div class="list">
        <div class="input-container">
            <label for="taskNameInput"></label>
            <input type="text" name= "title" class="u-full-width">

        </div>
        <div class="btn-container">
            <input type="submit" class="u-full-width" value="Add">
        </div>
    </div>
    </form>`;

    #config = null;

    constructor(config) {
        this.#config = config;
        this.#initForm();
    }

    #initForm() {
       this.$el = $(TodosFormView.formTemplate);
       this.$el.on('submit' ,(e)=>{
           e.preventDefault();
           const data = this.#getFormData();
           this.#resetFormData();
           this.#config.addTodo(data);
       })
    }

    #getFormData() {
return{
    title: this.$el[0].elements.title.value,
}
    };

    #resetFormData(){
        this.$el[0].elements.title.value = '';
    }
}

function htmlToElement(html){
const container = document.createElement('div');
container.innerHTML = html;
return container.children[0];
}