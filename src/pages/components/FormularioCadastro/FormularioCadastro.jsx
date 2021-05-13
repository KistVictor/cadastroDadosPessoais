import React from "react";
import tw, { styled } from "twin.macro"

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`

function FormularioCadastro() {
  return (
    <form>
      <label>Nome</label>
      <input type="text"/>

      <label>Sobrenome</label>
      <input type="text"/>

      <label>CPF</label>
      <input type="text"/>

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit">Activate</Button>
    </form>
  );
}

export default FormularioCadastro;
