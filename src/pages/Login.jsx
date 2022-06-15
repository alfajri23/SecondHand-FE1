import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="d-flex flex-column flex-lg-row">
      <div className="w-50">
        <img className="w-fluid" src="images/imglogin.png" alt="" />
      </div>
      <LoginForm />
    </div>
  );
}
