import { Logo } from '../components/Logo'
import { useState } from 'react'
import { login } from '../services/login.service'
import { useSignIn } from 'react-auth-kit'

export function Login () {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = useSignIn()

  const handleSubmitForm = async () => {
    setLoading(true)
    try {
      const result = await login({ email, password })
      signIn({
        token: result.tokens.access.token,
        expiresIn: result.tokens.access.expires,
        tokenType: 'Bearer',
        authState: result.user,
      })
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div className="min-h-screen bg-white flex flex-col items-center">
        <div className="grid grid-cols-2 min-h-screen">
          <div className="flex">
            <div className="grid-rows-2 pt-10 px-5">
              <h1 className="text-[2.5rem] leading-tight text-gray-500">
                Monitore sua <strong className="text-gray-600">carteira de ações</strong> com o
                melhor app do mercado
              </h1>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Sincronize com as melhores corretoras, tenha o resultado da sua carteira em tempo
                real e descubra quais seus melhores resultados
              </p>
            </div>
          </div>

          <div className=" bg-gray-500 content-center items-center justify-center flex">
            <div className="p-8 bg-white border border-gray-200 rounded items-center justify-center w-[500px]">
              <div className="pb-5 flex items-center justify-center">
                <Logo />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <input
                  className="bg-white rounded px-5 h-14 border border-gray-200"
                  type="text"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder="Seu nome completo"
                />

                <input
                  className="bg-white rounded px-5 h-14 border border-gray-200"
                  type="password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  placeholder="Digite seu e-mail"
                />

                <button
                  type="submit"
                  disabled={loading}
                  onClick={async () => handleSubmitForm()}
                  className="mt-5 bg-gray-500 uppercasep py-4 rounded font-bold text-sm hover:bg-gray-700 transition-colors disabled:opacity-50"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
