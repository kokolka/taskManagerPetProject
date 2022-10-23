import {makeObservable, observable} from 'mobx';
import { Tasks, TasksClassType } from './tasks';

interface StoresClassType {
    tasks: TasksClassType
}

class Stores implements StoresClassType{
    tasks: TasksClassType;

    constructor(){
        this.tasks = new Tasks();
    }
}


export default new Stores();