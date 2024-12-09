import SignInCard from "../../components/SignInCard/SignInCard";
import FormBack from "../../components/FormBack/FormBack";
import './SignIn.scss';

function SignIn(){
    return(
        <>
        <FormBack />
        <div className="sign-in-body">
        <SignInCard />
        </div>
        </>
    );
}

export default SignIn;
