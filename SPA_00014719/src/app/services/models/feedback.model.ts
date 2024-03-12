import { Teacher } from "./teacher.model";

export class Feedback{
    id: number = 0;
    title: string = '';
    description: string = '';
    teacher: Teacher = {
        id: 0,
        firstName: '',
        lastName: ''
    };
}