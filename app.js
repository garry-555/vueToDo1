

const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: '',
            isListEmpty: true,
            isEdit: false,
            updateIndex: null
        };
    },
    methods: {
        addTask() {
            this.isListEmpty = false;
            this.tasks.push(this.task);
            this.task = '';
        },
        editTask(index, task) {
            this.isEdit = true;
            this.task = task;
            this.updateIndex = index;
        },
        updateTask() {
            this.tasks.splice(this.updateIndex, 1, this.task);
            this.isEdit = false;
            this.task = '';

        },
        deleteTask() {
            this.tasks.splice(this.updateIndex, 1);
        }
    }

});

app.mount('#app');