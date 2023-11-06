let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
   
   // When does the PROG200 course start?
//    function courseStart(courseId) {
//         const course = courses.find(course => course.CourseId === courseId);
//         if (course) {
//         return course.StartDate;
//     }
   
// }

let prog200Course = courses.find((course) => course.CourseId === "PROG200")
console.log(prog200Course.StartDate)
// const startDatePROG200 = courseStart("PROG200");

// What is the title of the PROG500 course?

let prog500Title = courses.find((course) => course.CourseId === "PROJ500").Title;

console.log(prog500Title);

// What are the titles of the courses that cost $50 or less?

const cheapCourses = courses.filter((course) => course.Fee <= 50);

console.log(cheapCourses)

// What classes meet in "Classroom 1"?

const classroom1 = courses.filter((course) => course.Location === "Classroom 1");
const classroom1Titles = classroom1.map((course) => course.Title);

console.log(classroom1Titles)