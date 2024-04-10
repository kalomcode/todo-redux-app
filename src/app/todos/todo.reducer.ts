import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.models';

export const stadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a tanos'),
  new Todo('Comprar galletas'),
  new Todo('Comerme las galletas'),
];

export const todoReducer = createReducer(
  stadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => state.map( todo => {
    if ( todo.id === id ){
      return {
        ...todo,
        completado: !todo.completado
      }
    } else {
      return {...todo}
    } 
  })),
  on(editar, (state, { id, texto }) => state.map( todo => {
    if ( todo.id === id ){
      return {
        ...todo,
        texto: texto
      }
    } else {
      return {...todo}
    } 
  })),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, {completado}) => state.map(todo => {
    return {
      ...todo,
      completado
    }
  })),
  on(limpiarCompletados, (state) => state.filter(todo => !todo.completado)),
);