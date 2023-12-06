
import useRegister from "./useRegister";
import { Twitter } from "@mui/icons-material";
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';

const Register = () => {
  const {
    firstName,
    email,
    password,
    error,
    handleFirstNameChange,
    handleEmailChange,
    handlePasswordChange,
    clearError,
    handleSubmit,
  } = useRegister();


  const saveUserDataToLocal = () => {
    const userData = { email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Twitter />
        <form onSubmit={(e) => {
          handleSubmit(e);
          saveUserDataToLocal();
        }}>
          <div className="form-group">
        
            <input
              type="text"
         placeholder="You Username"
              onChange={handleFirstNameChange}
              onFocus={clearError}
              value={firstName}
              className="form-control"
              style={{ width: '670px', height: '70px' }}
            />
            {error.firstName && <p className="errorTitle">{error.firstName}</p>}
          </div>
          <div className="form-group">
           
            <input
       placeholder="Phone number, email address"
              type="email"
              onChange={handleEmailChange}
              onFocus={clearError}
              value={email}
              className="form-control"
              style={{ width: '670px', height: '70px' }}
            />
            {error.email && <p className="errorTitle">{error.email}</p>}
          </div>
          <div className="form-group">
            
            <input
            placeholder="Password"
              type="password"
              onChange={handlePasswordChange}
              onFocus={clearError}
              value={password}
              className="form-control"
              style={{ width: '670px', height: '70px' }}
            />
            {error.password && <p className="errorTitle">{error.password}</p>}
          </div>
          <button type="submit" style={{ width: '670px', height: '70px' }} className="Btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
