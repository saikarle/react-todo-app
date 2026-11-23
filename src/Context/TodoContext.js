import { createContext , useContext } from "react";

export const TodoContext=createContext({
    Todos : [
        {
            id:1,
            todo: "Todo msg",
            Completed:"false",
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggoleTodo:(id)=>{},
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider