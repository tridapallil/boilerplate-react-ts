export function Dashboard () {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="min-h-screen bg-white flex flex-col items-center">
        <div className="grid grid-cols-2 min-h-screen">
          <div className="flex">
            <div className="grid-rows-2 pt-10 px-5 max-w-[640px] max-h-[300px] grid justify-between">
              <div>
                <h1 className="text-[1.25rem] text-gray-500">Saldo da carteira</h1>
                <h2 className="text-[2.00rem] text-green-500">R$ 1090,91</h2>
              </div>
              <div>
              <h1 className="text-[1.25rem] text-gray-500">Maiores altas do dia</h1>
                <table className="table-fixed w-full text-gray-500">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left">Ação</th>
                      <th className="text-left">Preço</th>
                      <th className="text-left">Variação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td>IVVB11</td>
                      <td>R$ 30,10</td>
                      <td>1,5%</td>
                    </tr>
                    <tr className="border-b">
                      <td>IRBR3</td>
                      <td>R$ 30,10</td>
                      <td>1,5%</td>
                    </tr>
                    <tr className="border-b">
                      <td>Shining Star</td>
                      <td>Earth, Wind, and Fire</td>
                      <td>1975</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
