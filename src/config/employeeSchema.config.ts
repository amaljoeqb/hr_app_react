import * as Yup from "yup";

const employeeSchema = Yup.object({
  employeeId: Yup.number().required("Required"),
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  salary: Yup.number().min(0, "Salary can't be negative").required("Required"),
  designation: Yup.string().required("Required"),
  department: Yup.object().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  joiningDate: Yup.date().required("Required"),
  skills: Yup.array().required("Required"),
});

export default employeeSchema;
