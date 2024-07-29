export default function getListStudentIds(students) {
    result = [];
    if (students instanceof Array) {
        students.map((student) => {
            result.append(student.id);
        });
    }

    return result;
}
