export const classrooms = [
    {
        roomNumber: 101,
        capacity: 30,
        students: [
            { name: "Alice", age: 18 },
            { name: "Bob", age: 19 },
            { name: "Charlie", age: 17 },
        ],
    },
    {
        roomNumber: 102,
        capacity: 25,
        students: [
            { name: "David", age: 20 },
            { name: "Eve", age: 18 },
        ],
    },
    {
        roomNumber: 103,
        capacity: 35,
        students: [
            { name: "Frank", age: 19 },
            { name: "Grace", age: 20 },
            { name: "Helen", age: 17 },
        ],
    },
];
//const roomNumber = [roomNumber1, roomNumber2, roomNumber3]
//1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
export function collectRoomNumbers(classrooms) {
    const roomNumbers = classrooms.map(room => room.roomNumber);
    //for(const  room of classrooms ){
    //   roomNumbers.push(room.roomNumber);
    //  // classrooms.map(room => room.roomNumber);
    // }
    return roomNumbers;
}
//2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
//string format:  [“101::30”, :102::25”, “103::35”].
export function collectRoomsAndCapacities(classrooms) {
    const capacity = [];
    for (const capa of classrooms) {
        let concatedstr = capa.roomNumber + "::" + capa.capacity;
        capacity.push(concatedstr);
    }
    return capacity;
}
export function collectLabeledRoomCaps(classrooms) {
    const roomcap = classrooms.map(room => {
        let result = { roomNumber: room.roomNumber, capacity: room.capacity };
        return result;
    });
    return roomcap;
}
//4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
//roomNumber as parameters and returns the number of students in the specified classroom.
export function countStudentsInClassroom(classrooms, roomNumber) {
    let count = 0;
    for (const room of classrooms) {
        if (room.roomNumber === roomNumber) {
            count += room.students.length;
        }
    }
    return count;
}
//5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
//minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
export function findClassroomsWithCapacity(classrooms, minCapacity) {
    // classrooms.filter(classroom => classroom.capacity >= minCapacity);
    const result = [];
    for (const room of classrooms) {
        if (room.capacity >= minCapacity) {
            result.push(room);
        }
    }
    return result;
}
//6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum 
//age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
export function findStudentsOlderThan(classrooms, minAge) {
    const result = [];
    for (const room of classrooms) {
        for (const stud of room.students) {
            if (stud.age > minAge) {
                result.push(stud);
            }
        }
    }
    return result;
}
/*
7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns
the average age of students across all classrooms.

 */
export function averageStudentAge(classrooms) {
    let total = 0;
    let avg = 0;
    for (const room of classrooms) {
        total = 0;
        for (const stud of room.students) {
            total += stud.age;
        }
        avg += total / room.students.length;
    }
    return avg / classrooms.length;
}
