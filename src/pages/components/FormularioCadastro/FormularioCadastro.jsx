import React from "react"

function FormularioCadastro() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <form class="space-y-4">
          
          
          <label className="text-indigo-600 block">Nome</label>
          <input
            type="text"
            className="border rounded-md border-indigo-500 border-opacity-25 block"
          />

          <label className="text-indigo-600 block">Sobrenome</label>
          <input
            type="text"
            className="border rounded-md border-indigo-500 border-opacity-25 block"
          />

          <label className="text-indigo-600 block">CPF</label>
          <input
            type="text"
            className="border rounded-md border-indigo-500 border-opacity-25 block"
          />

          <label className="text-indigo-600">Promoções</label>
          <input type="checkbox" className="mx-3" />

          <label className="text-indigo-600">Novidades</label>
          <input type="checkbox" className="mx-3" />

          <button
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  )
}

export default FormularioCadastro
