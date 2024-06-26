import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.models";
import { todoReducer } from "./todos/todo.reducer";
import { filtroReducer } from "./filtro/filtro.reducer";
import { FiltrosValidos } from "./filtro/filtro.actions";

export interface AppState {
  todos: Todo[],
  filtro: FiltrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}