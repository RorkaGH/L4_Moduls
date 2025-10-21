export class Department {
    #name;
    #employeeCount;
    #budget;

    constructor(name = "", employeeCount = 0, budget = 0) {
        this.#name = name;
        this.#employeeCount = employeeCount;
        this.#budget = budget;
    }

    // Геттеры
    get name() {
        return this.#name;
    }

    get employeeCount() {
        return this.#employeeCount;
    }

    get budget() {
        return this.#budget;
    }

    // Сеттеры
    set name(value) {
        if (typeof value === 'string') {
            this.#name = value;
        } else {
            console.error('Имя должно быть строкой');
        }
    }

    set employeeCount(value) {
        if (typeof value === 'number' && value >= 0) {
            this.#employeeCount = value;
        } else {
            console.error('Количество сотрудников должно быть неотрицательным числом');
        }
    }

    set budget(value) {
        if (typeof value === 'number') {
            this.#budget = value;
        } else {
            console.error('Бюджет должен быть числом');
        }
    }

    // Публичные методы
    show() {
        console.log(`Отдел: ${this.#name}`);
        console.log(`Количество сотрудников: ${this.#employeeCount}`);
        console.log(`Бюджет: ${this.#budget}`);
        console.log('---');
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        console.log('Экземпляр отдела удален');
    }

    copy() {
        return this;
    }

    // Условно-приватный метод
    #increaseBudget(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#budget += amount;
            console.log(`Бюджет увеличен на ${amount}`);
        }
    }

    // Публичный метод для доступа к приватному
    requestBudgetIncrease(amount) {
        this.#increaseBudget(amount);
    }

    // Статичный метод
    static clone(original) {
        if (original instanceof Department) {
            return new Department(original.name, original.employeeCount, original.budget);
        }
        return new Department();
    }
}