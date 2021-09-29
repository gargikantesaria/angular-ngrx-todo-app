import Todo from './to-do.models';
import { ToDoState } from '../store/to-do.reducer';

export default interface AppState {
    toDo: ToDoState;
}