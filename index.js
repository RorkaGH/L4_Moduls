import { ChildDepartment } from './child-department.js';

// Создаем массив из 2 экземпляров класса с разными значениями
const departments = [
    new ChildDepartment("IT отдел", 15, 50000, 8),
    new ChildDepartment("Маркетинг", 8, 25000, 12)
];

// Вызываем метод show для обоих экземпляров
console.log("Информация об отделах:");
departments.forEach(dept => dept.show());

// Демонстрация работы методов
console.log("Демонстрация работы методов:");

// Геттеры
console.log(`Название первого отдела: ${departments[0].name}`);

// Сеттеры
departments[0].name = "Технический отдел";
console.log(`Обновленное название: ${departments[0].name}`);

// Метод copy
const copyDept = departments[1].copy();
console.log("Копия создана:");
copyDept.show();

// Статичный метод clone
const clonedDept = ChildDepartment.clone(departments[0]);
console.log("Клонированный отдел:");
clonedDept.show();
console.log("Оригинал и клон одинаковы?", departments[0] === clonedDept);