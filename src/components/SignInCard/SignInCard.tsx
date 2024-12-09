import "./SignInCard.scss";

function SignInCard(){
    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
    }

    return(
        <div className="sign-in">
            <h2 className="sign-in__title">Sign In</h2>
            <form className="sign-in__form" onSubmit={handleSubmit}>
                <div className="sign-in__container">
                <label htmlFor="email" className="sign-in__label">Email</label>
                <input className="sign-in__input" type="email" id="email" />
                </div>

                <div className="sign-in__container">
                <label htmlFor="password" className="sign-in__label">Password</label>
                <input className="sign-in__input" type="password" id="password" />
                </div>

                <div className="sign-in__container">
                <button className="sign-in__button">Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default SignInCard;