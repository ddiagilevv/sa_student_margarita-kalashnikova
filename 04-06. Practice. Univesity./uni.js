class University {
    constructor(name, yearFounded, isPublic) {
        this.name = name;
        this.faculties = [];
        this.yearFounded = yearFounded;
        this.isPublic = isPublic;
        this.buildings = [];
        this.teachers = [];
        this.students = [];
        this.subjects = [];
    }

    addFaculties(faculties) {
        this.faculties.push(faculties);
    }

    addBuildings(buildings) {
        this.buildings.push(buildings);
    }

    addTeachers(teachers) {
        this.teachers.push(teachers);
    }

    addStudents(students) {
        this.students.push(students);
    }

    addSubjects(subjects) {
        this.subjects.push(subjects);
    }
}

class Faculty {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartments(departments) {
        this.departments.push(departments);
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.teachers = [];
    }

    addTeachers(teachers) {
        this.teachers.push(teachers);
    }
}

class Building {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Teacher {
    constructor(name, subjects) {
        this.name = name;
        this.subjects = subjects;
    }
}

class Subject {
    constructor(name) {
        this.name = name;
        this.teachers = [];
    }

    addTeachers(teachers) {
        this.teachers.push(teachers);
    }
}

class Student {
    constructor(name, course, group) {
        this.name = name;
        this.course = course;
        this.group = group;
        this.subjects = [];
        this.status = "enrolled"; // enrolled, expelled, academic_leave, sick_leave
    }

    addSubjects(subjects) {
        if(this.status === "enrolled") {
            this.subjects.push(subjects);
        } else {
            if(subjects.length === 1) {
                console.log(`Предмет ${subjects} не может быть добавлен студенту ${this.name} , так как его статус: ${this.status} `)
            } else if(subjects.length > 1) {
                console.log(`Предметы ${subjects} не могут быть добавлены студенту ${this.name} , так как его статус: ${this.status} `)
            } 
        }
    }

    deleteSubjects(subjects) {
        if(this.status === "enrolled" && this.subjects) {
            if(subjects)
            this.subjects.pop(subjects);
        } else {
            if(subjects.length === 1) {
                console.log(`Предмет ${subjects} не может быть удален у студента ${this.name} , так как его статус: ${this.status} `)
            } else if(subjects.length > 1) {
                console.log(`Предметы ${subjects} не могут быть удалены у студента ${this.name} , так как его статус: ${this.status} `)
            } 
        }
    }

    reinstate
    expell
    changeStatus
    changeGroup
}

class UserService{
    constructor(university) {
        this.university = university;
    }
}
