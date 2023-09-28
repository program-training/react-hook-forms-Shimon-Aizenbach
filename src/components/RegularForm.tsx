import "./RegularForm.css";
import { useForm } from "react-hook-form";

function RegularForm() {
  const { register, handleSubmit, formState: { errors} } = useForm()

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
        {...register(`userName`, {required: `User name is required`, minLength: {value: 2 , message: `You must enter at least two characters`}})}
          id="username"
          placeholder="Enter UserName"
        />
     </div>
     <p>{errors.userName?.message as string}</p>
      <div>
        <input
          {...register(`email`, { required: `Email is required`, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: `Invalid email`} })}
          type="email"
          id="email"
          placeholder="Enter Email"
        />
      </div>
      <p>{errors.email?.message as string}</p>
      <div>
        <input
        {...register(`password`, { required: `Password is required`, pattern: {value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/, message: `Invalid password`} })}
          type="password"
          id="password"
          placeholder="Enter Password"
        />
      </div>
      <p>{errors.password?.message as string}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;

