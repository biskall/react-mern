import React, { useState, useContext, useEffect } from "react";

import Card from "../../shared/components/UIElement/Card";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/UIElement/util/validators";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/components/hooks/form-hook";
import { AuthContext } from "../../shared/components/context/auth-context";

import "./Auth.css";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const auth = useContext(AuthContext)

  useEffect(() => {
    fetch('http://localhost:4000/incomes',{
        'methods': 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  },[])

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if(!isLoginMode) {
        setFormData(
            {
                ...formState.inputs,
                name: undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid
        )
    } else {
        setFormData(
            {
                ...formState.inputs,
                name:{
                    value: '',
                    isValid: false
                }
            },
            false
        )
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login()
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            type="text"
            id="name"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter your name'
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid Password"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "SINGUP" : "LOGIN"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SINGUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
