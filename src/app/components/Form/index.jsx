import React, { useState } from "react";
import Option from "../Ui/Option";
import Button from "../Ui/Button";
import { FormAction, FormContainer, FormInput } from "./styles";

const Form = () => {
  const [type, setType] = useState(1);

  const handlleSubmit = (e) => {
    e.preventDefault();
    alert('ok');
  }
  return(
    <FormContainer onSubmit={handlleSubmit}>
      <FormAction>
        <FormInput>
          <Option type={type} setType={setType} />
        </FormInput>
        <FormInput>
          <Option />
        </FormInput>
        <FormInput>
          <Button>Pesquisar</Button>
        </FormInput>
      </FormAction>
    </FormContainer>
  );
}

export default Form;