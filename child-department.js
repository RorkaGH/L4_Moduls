import { Department } from './department.js';

export class ChildDepartment extends Department {
    #projectCount;

    constructor(name = "", employeeCount = 0, budget = 0, projectCount = 0) {
        super(name, employeeCount, budget);
        this.#projectCount = projectCount;
    }

    // Новый геттер и сеттер
    get projectCount() {
        return this.#projectCount;
    }

    set projectCount(value) {
        if (typeof value === 'number' && value >= 0) {
            this.#projectCount = value;
        } else {
            console.error('Количество проектов должно быть неотрицательным числом');
        }
    }

    // Перезаписанные методы
    show() {
        console.log(`Дочерний отдел: ${this.name}`);
        console.log(`Количество сотрудников: ${this.employeeCount}`);
        console.log(`Бюджет: ${this.budget}`);
        console.log(`Количество проектов: ${this.#projectCount}`);
        console.log('---');
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        console.log('Экземпляр дочернего отдела удален');
    }

    copy() {
        return new ChildDepartment(this.name, this.employeeCount, this.budget, this.#projectCount);
    }

    // Статичный метод clone перезаписан
    static clone(original) {
        if (original instanceof ChildDepartment) {
            return new ChildDepartment(
                original.name, 
                original.employeeCount, 
                original.budget, 
                original.projectCount
            );
        }
        return new ChildDepartment();
    }
}