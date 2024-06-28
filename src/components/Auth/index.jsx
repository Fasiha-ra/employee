import React, {useState} from "react";
import { SignUpWrapper } from "./SignUp.styles";
import Logo from "../../assets/authentication/Logo.png";
import bgImg from "../../assets/authentication/bg-img.png";
import TextField from "../TextField/TextField";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/signUp', { state: { email } });
    console.log("Email:", email);
  };
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <SignUpWrapper>
        <div className="imgHolder">
          <img src={bgImg} alt="" />
        </div>
        <div className="formHolder">
          <form action="">
            <div className="textHolder">
              <Link href="/">
                <img src={Logo} alt="logo" />
              </Link>
              <p>
                Welcome to our Evolve - X platform !<br /> Enhance your skills
                and broaden your knowledge.
              </p>
            </div>
            <div className="inputHolder">
              <TextField
              parentClass="emailWrapper"
                className="input-field"
                field_Name="email"
                type="email"
                placeholder="Enter Your Official Email-id"
                value={email}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
            </div>
            <Button width="208px" onClick={handleSubmit}>Continue</Button>
          </form>
        </div>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
