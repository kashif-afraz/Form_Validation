import useInput from "../hook/use-input";
  
const isNotEmpty = (value) => {
    value = value.trim() !== "";
  };

  const isEmail = (value) => {
    value = value.includes('@');
  };

  const BasicForm = (props) => {
  const {
    value: firstNamevalue,
    isValid: firstNameIsValid,
    hasError: firstNametHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNamevalue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLasttName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
   
  const submitHandler= (event) => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }
    
    console.log("Submit");
    console.log(firstNamevalue, lastNamevalue, emailValue);
    resetFirstName();
    resetLasttName();
    resetEmail();
  }
  
  const firstNameClasses = firstNametHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  



  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNamevalue}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            
          />
          {firstNametHasError && (<p className="error-text">Invalid First Name</p>)}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNamevalue}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            
          />
          {lastNameHasError && (<p className="error-text">Invalid Last Name</p>)}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          
        />
        {emailHasError && (<p className="error-text">Invalid Email </p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
