import Headline from "../components/Headline"
import Input from "../components/Input"
import Button from "../components/Button"

function Login() {
  return (
    <div className="flex flex-col m-32">
      <Headline text="Login" />
      <Input />
      <Input placeholder="Password"/>
      <Button content= "Login" />
    </div>
  )
}

export default Login;