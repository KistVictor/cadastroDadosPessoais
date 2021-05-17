import React, { useState } from "react"

function FormularioCadastro() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)


  return (
    <>
      <div className="min-h-screen bg-indigo-100 py-6 flex flex-col justify-center sm:py-12">
        <form
          onSubmit={event => {
            event.preventDefault()
            console.log(nome, sobrenome, cpf, promocoes, novidades)
          }}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
        >
          <div className="flex-shrink-0">
            <h1 className="text-indigo-600 text-center pb-3 text-3xl font-bold">
              Formulario de cadastro
            </h1>

            <input
              value={nome}
              onChange={event => {
                setNome(event.target.value)
              }}
              type="text"
              required
              placeholder="Nome"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mt-1 max-w-lg mx-auto"
            />

            <input
              value={sobrenome}
              onChange={event => {
                setSobrenome(event.target.value)
              }}
              type="text"
              required
              placeholder="Sobrenome"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 my-5 max-w-lg mx-auto"
            />

            <input
              value={cpf}
              onChange={event => {
                setCpf(event.target.value)
              }}
              type="text"
              required
              placeholder="CPF"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mb-5 max-w-lg mx-auto"
            />

            <label className="text-indigo-500">Promoções</label>

            <input
              type="checkbox"
              checked={promocoes}
              onChange={event => {
                setPromocoes(event.target.checked)
              }}
              className="mx-3"
            ></input>

            <label className="text-indigo-500">Novidades</label>

            <input
              type="checkbox"
              checked={novidades}
              onChange={event => {
                setNovidades(event.target.checked)
              }}
              className="mx-3"
            ></input>

            <button
              className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-md"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormularioCadastro
