import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filtroActions from 'src/app/filtro/filtro.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActula: filtroActions.FiltrosValidos = 'todos';
  filtros: filtroActions.FiltrosValidos[] = ['completados', 'pendientes', 'todos'];

  pendientes = 0;
  
  constructor(private store: Store<AppState>) {}

  ngOnInit() {

    // this.store.select('filtro').subscribe( filtro => this.filtroActula = filtro)
    this.store.subscribe( state => {
      this.filtroActula = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    })
    
  }

  cambiarFiltro( filtro: filtroActions.FiltrosValidos ) {
    this.store.dispatch(filtroActions.setFiltro({filtro}))
  }

  limpiarCompletados(){
    this.store.dispatch(todoActions.limpiarCompletados())
  }

}
