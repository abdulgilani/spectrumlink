import RegisterCard from "../../components/RegisterCard/RegisterCard";
import FormBack from "../../components/FormBack/FormBack";
import "./Register.scss";

function Register(){
    return(
        <>
        <FormBack />
        <div className = "register-body">
            <RegisterCard />
        </div>
        </>
    );
}

export default Register;