export default function getListStudentIds(students) {
    result = [];
    if (students instanceof Object) {
        students.map((student) => {
            result.append(student.id);
        });
    }

    return result;
}
