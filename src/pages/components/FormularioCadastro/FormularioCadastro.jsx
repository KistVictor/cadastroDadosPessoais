import React, { useState } from "react"

function FormularioCadastro() {

  const [nome,setNome] = useState("Victor")

  return (
    <>
      <div className="min-h-screen bg-indigo-100 py-6 flex flex-col justify-center sm:py-12">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            console.log(nome)
          }}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">

            <h1 className="text-indigo-600 text-center pb-3 text-3xl font-bold">Formulario de cadastro</h1>

            <input
              value={nome}
              onChange={(event) => {
                setNome(event.target.value)
                if (nome.length >= 3)
                  setNome(nome.substring(0, 3))
              }}
              type="text"
              required
              placeholder="Nome"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mt-1 max-w-lg mx-auto"
            />

            <input
              type="text"
              required
              placeholder="Sobrenome"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 my-5 max-w-lg mx-auto"
            />

            <input
              type="text"
              required
              placeholder="CPF"
              className="border shadow rounded-md border-indigo-700 border-opacity-50 block px-2 mb-5 max-w-lg mx-auto"
            />

            <label className="text-indigo-500">Promoções</label>
            <input type="checkbox" className="mx-3"></input>

            <label className="text-indigo-500">Novidades</label>
            <input type="checkbox" className="mx-3"></input>

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
