Создать объектно-ориентированную архитектуру на Node.js, моделирующую структуру университета, с возможностью управлять данными
(создание, редактирование, удаление) и сохранять/загружать информацию в/из файла.

Основные сущности:
### **University (Университет)**
- Поля:
    - `name: string`
    - `faculties: Faculty[]`
    - `yearFounded`
    - ``
    - `buildings: Building[]`
    - `teachers: Teacher[]`
    - `students: Student[]`
    - `subjects: Subject[]`
- Методы:
    - Добавление/удаление факультета, преподавателя, студента, предмета, корпуса.

    Faculty (Факультет)
- Поля:
    - `name: string`
    - `departments: Department[]`
- Методы:
    - Добавление/удаление кафедры.

Department (Кафедра)
- Поля:
    - `name: string`
    - `teachers: Teacher[]`
- Методы:
    - Добавление/удаление преподавателя.

Building (Корпус)
- Поля:
    - `name: string`
    - `address: string`

Teacher (Преподаватель)
- Поля:
    - `name: string`
    - `subjects: Subject[]`
- Методы:
    - Добавление/удаление предметов.

    Subject (Предмет)
- Поля:
    - `name: string`
    - `teachers: Teacher[]`
- Методы:
    - Добавление преподавателя.

Student (Студент)
- Поля:
    - `name: string`
    - `course: number`
    - `group: string`
    - `subjects: Subject[]`
- Методы:
    - Записаться на предмет.

Класс управления: UserService
- Обязанности:
    - Управление объектами всех классов.
    - Сохранение/загрузка данных в файл (JSON).
    - В будущем: интерфейс командной строки/веб-интерфейс.
- Методы:
    - `saveToFile(filename)`
    - `static loadFromFile(filename)`

Примеры сценариев использования:

1. Создать университет и добавить факультет, кафедру, преподавателя, студента и предмет.
2. Назначить преподавателя на предмет.
3. Записать студента на предмет.
4. Сохранить всё в файл.
5. Загрузить структуру из файла и вывести данные.

```json
{
  "name": "My University",
  "faculties": [
    {
      "name": "Engineering",
      "departments": [
        {
          "name": "Computer Science",
          "teachers": [
            {
              "name": "Dr. Smith",
              "subjects": [ { "name": "Algorithms", "teachers": [] } ]
            }
          ]
        }
      ]
    }
  ],
  "buildings": [
    { "name": "Main Campus", "address": "123 University St" }
  ],
  "teachers": [ ... ],
  "students": [ ... ],
  "subjects": [ ... ]
}
```

---
const data = JSON.stringify(this.university, null, 2);
    fs.writeFileSync(filename, data);

fs.writeFileSync(filename, data);