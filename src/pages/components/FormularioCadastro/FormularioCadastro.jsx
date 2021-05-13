import React from "react"
import tw, { styled } from "twin.macro"

const Button = tw.button`
  bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded
`

const Label = tw.label`
  text-indigo-600
`

const Input = tw.input`
  box-content h-5 w-5 text-gray-600
`

function FormularioCadastro() {
  return (
    <>
      <form>
        <Label>Nome</Label>
        <input type="text" />

        <Label>Sobrenome</Label>
        <input type="text" />

        <Label>CPF</Label>
        <input type="text" />

        <Label>Promoções</Label>
        <input type="checkbox" checked />

        <Label>Novidades</Label>
        <Input type="checkbox" checked />

        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  )
}

export default FormularioCadastro
