import {makeObservable, observable, action} from 'mobx';

type taskType = {
    id: number,
    task: string,
    note: string
}

export interface TasksClassType{
    tasks: Array<taskType>;
    addTask: (textOfTask: string, textOfNote: string) => void;
    deleteTask: (idOfTask: number) => void
}

export class Tasks implements TasksClassType{
    tasks: Array<taskType>; 

    constructor(){
        makeObservable(this, {
            tasks: observable,
            addTask: action,
            deleteTask: action
        });
        this.tasks = []
    }

    addTask(textOfTask: string, textOfNote: string = ''){
        if(this.tasks.length === 0){
            this.tasks.push({
                id: 0,
                task: textOfTask,
                note: textOfNote
            });
        }else{
            let lastNumberTask = this.tasks[this.tasks.length - 1].id + 1; //у новой задачи id будет на 1 больше чем у предыдущей
            this.tasks.push({
                id: lastNumberTask,
                task: textOfTask,
                note: textOfNote
            });
        }
    }

    deleteTask(idOfTask: number){
        this.tasks = this.tasks.filter(el => el.id !== idOfTask);
    }
}