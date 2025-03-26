import { student } from "@/data/student.interface";
import { reactive } from "vue";

const students: student[] = reactive<student[]>([
    {
        id: 1,
        name: "John Doe",
        city: "New York"
    },
    {
        id: 2,
        name: "Jane Doe",
        city: "San Francisco"
    },
    {
        id: 3,
        name: "Bob Smith",
        city: "Los Angeles"
    }
]);
export default students;
