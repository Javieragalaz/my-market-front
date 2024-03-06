import Headline from "../components/Headline"
import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card";
import { useFormik } from 'formik';
import { number, object, string } from 'yup'
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate()
  let loginSchema = object({
    email: string('debe ser texto').email('debe ser un email valido').required('debes ingresar un email'),
    //password:min 8, máx 40, >1 mayúscula
    password:  string()
                    .required('debes ingresar una contraseña')
                    .min(8, 'la contraseña debe tener al menos 8 caracteres')
                    .max(40,'la contraseña no debe tener más de 40 caracteres')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit(data) {
      navigate ('/dashboard')
      console.log('formik', formik)
      console.log('data', data)
    },
  })

  return (

    <div className="bg-gradient-to-t from-green-300 to-teal-300 h-screen">
      <Card>
        <Headline>
         Login
        </Headline>
        <Input error={formik.errors.email} name='email' value={formik.values.email} handleChange={formik.handleChange} />
        <Input error={formik.errors.password} type='password' name='password' value={formik.values.password} handleChange={formik.handleChange} placeholder="Password" />
        <Button handleClick={formik.handleSubmit}> 
          Login
        </Button>
        <Button handleClick={() => {
          console.log('on click')
          navigate('/signin')
        }}> sign in </Button>
      </Card>
    </div>
  )
}

export default Login;