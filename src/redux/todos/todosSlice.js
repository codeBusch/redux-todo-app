import {createSlice, nanoid} from "@reduxjs/toolkit";
export const  todosSlice = createSlice({
    name: "todos",
    initialState : {
        items :[
            {
                id: "1",
            title:"Learn React",
            completed:true,
            },
            {
                id: "2",
            title:"Learn Redux",
            completed:false,
            },
        ],
        activeFilter :'all',
    },
    reducers: {
        newTodo:{
            reducer:(state,action)=>{
                state.items.push(action.payload)
            },
            prepare:({ title})=>{
                return{
                    payload:{
                        id: nanoid(),
                        completed: false,
                        title,

                    }}
                
            }
        },
        handleCompleted:(state,action)=>{
            const {id}=  action.payload;
            const item = state.items.find((item)=> item = item.id === id)
            item.completed = item.completed ?  false : true;
        },
        deleteTodo:(state,action)=>{
            const id= action.payload;
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered;
        },
        changeActiveFilter:(state,action)=>{
            state.activeFilter = action.payload;
        },
        clearCompleted: (state)=>{
            const filtered = state.items.filter(item => item.completed === false);
            state.items = filtered
        }
    },

});
export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state)=>{
    if(state.todos.activeFilter === 'all'){
        return state.todos.items;
    }
    return state.todos.items.filter((todo)=>
    state.todos.activeFilter ==="active"? todo.completed===false:todo.completed=== true)
};
export const {newTodo, handleCompleted, deleteTodo, changeActiveFilter, clearCompleted, }= todosSlice.actions;

export default todosSlice.reducer;