import Card from "../components/Card";
import Headline from "../components/Headline";
import Input from "../components/Input";
import Button from "../components/Button";
import { useFormik } from "formik";
import { number, object, string } from 'yup'
import { useNavigate } from "react-router-dom";


function Signin () {
  
console.log("renderizando")

  const navigate = useNavigate()

    let SignInSchema = object({
        firstName:string('debe ser texto').required('debes ingresar un nombre'),
        email:string ('debe ser texto').email('debe ser un email valido').required('debes ingresar un email'),
        password:string()
            .required('debes ingresar una contraseña')
            .min(8, 'la contraseña debe tener al menos 8 caracteres')
            .max(40,'la contraseña no debe tener más de 40 caracteres')
    })
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: ''
        },
        validationSchema: SignInSchema,
        onSubmit (data){
            console.log('formik', formik)
            console.log('data', data)
        }
    })
    return (
        <div className="bg-gradient-to-t from-green-300 to-teal-300  h-screen">
        <Card>
          <Headline>
           Sign in
          </Headline>
          <Input error={formik.errors.firstName} type='name' name='name' value={formik.values.firstName} handleChange={formik.handleChange} placeholder="Name"/>
          <Input error={formik.errors.email} name='email' value={formik.values.email} handleChange={formik.handleChange}/>
          <Input error={formik.errors.password} type='password' name='password' value={formik.values.password} handleChange={formik.handleChange} placeholder="Password"/>
          <Button handleClick={formik.handleSubmit}> 
            Sign in
          </Button>
          <Button handleClick= {() => {
            navigate ("/login")
          }}> 
            Login
          </Button>
        </Card>
      </div>
    )
    
}

export default Signin;