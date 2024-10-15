import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const Signup = () => {
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password too short').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
      }),
      onSubmit: values => {
        navigate('/login');
        console.log('working here')
      },
    });

   
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                className="w-full p-2 mt-1 border rounded focus:ring focus:ring-blue-200 focus:outline-none"
              />
              {formik.errors.username ? <div className="text-red-500 text-sm">{formik.errors.username}</div> : null}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full p-2 mt-1 border rounded focus:ring focus:ring-blue-200 focus:outline-none"
              />
              {formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="w-full p-2 mt-1 border rounded focus:ring focus:ring-blue-200 focus:outline-none"
              />
              {formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                className="w-full p-2 mt-1 border rounded focus:ring focus:ring-blue-200 focus:outline-none"
              />
              {formik.errors.confirmPassword ? <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div> : null}
            </div>
            <button 
            
            type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Sign Up
            </button>
            <div className="mt-4 text-sm text-center">
              <span>Already have an account? </span>
              <a href="/login" className="text-blue-500 hover:underline">Login</a>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signup
  