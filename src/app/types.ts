export interface Courses {
CourseID: number,
course_num: string,
course_name: string,
course_description: string,
course_credit_hours: string,
course_pre_reqs_bool: boolean,
course_pre_reqs: string,
}

export interface Student{
    student_major: string,
    student_name: string,
    student_catalog_year: string,
    student_classes: JSON,
}