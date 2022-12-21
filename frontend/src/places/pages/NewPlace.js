import React, { useCallback } from "react";

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/UIElement/util/validators";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
   const titleInputHandler = useCallback(( id, value, isValid) => {

   },[])

   const descriptionInputHandler = useCallback(( id, value, isValid) => {

   },[])

  return (
    <form className="place-form">
      <Input
        id= "input"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id= "description"
        element="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
