Vue.component('to-do',{
    template:'<div> <div class="Title"> <h1>To-Do List</h1> <span>----------------------</span> <p>...</p> </div><div align="center">   <form v-on:submit.prevent="onSubmit">      <input v-model="taskToDo" placeholder="Add a Task here">             <button  class="size-box1">Add</button>        </form>       </div>       <div align="left" class="Align">        <p>            <span style="font-size: 25px">TASKS TO DO</span>   <button class="size-box2" v-on:click="Clicked=!Clicked"><h3>Toggle/Show ToDO</h3></button></p> </div>  <div v-show="Clicked">    <ul> <li v-for="(Task,index) in Tasks">{{Task.title}}</li></ul></div> </div>',
data(){
    return{
    taskToDo:null,
    Tasks:[],
    nextIndex:1,
    impTasks:[],
    Clicked:false,
    }
},
methods:{
    onSubmit:function(){
        this.Tasks.push({
            index:this.nextIndex++,
            title:this.taskToDo
        }),
        this.taskToDo=null
    }
}
});
new Vue({
    el:"#app"
    
});