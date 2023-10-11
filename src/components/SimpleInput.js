import useInput from "../hook/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const enteredEmailIsInvalid = !enteredEmail && enteredEmailTouched;

  let formIsValid = false;

  // useEffect(()=>{
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //   }
  //   else{
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]
  // );

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler=(event) => {
  //   setEnteredName(event.target.value);
  //   // setEnteredNameIsValid(true);
  // };

  // const emailInputChangeHandler =(event) => {
  //     setEnteredEmail(event.target.value);
  // }

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);

  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    // setEnteredName('');
    // setEnteredNameTouched(false);

    resetNameInput();
    resetEmailInput();

    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
  };

  // const nameIputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  const nameIputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  // const emailIputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';

  const emailIputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameIputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">name must not be empty !</p>
        )}
      </div>

      <div className={emailIputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please Enter Valid Email!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
