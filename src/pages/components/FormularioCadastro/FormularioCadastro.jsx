import React from "react"

function FormularioCadastro() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <form className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">

            <input
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
            <input type="checkbox" className="mx-3" />

            <button
              className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
