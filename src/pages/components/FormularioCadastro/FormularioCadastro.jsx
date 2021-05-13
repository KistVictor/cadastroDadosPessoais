import React from "react";
import './src/styles/global.css';

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

      <button type="submit">Cadastrar</button>
      <div className="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </form>
  );
}

export default FormularioCadastro;
