import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) || {};
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount * currencyInfo[to])
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-lg px-4">
        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/30 transition-all duration-300 hover:shadow-xl">
          <h1 className="text-2xl font-semibold text-white text-center mb-6">Currency Converter</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-8 flex justify-center">
              <button
                type="button"
                className="absolute bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium px-4 py-2 rounded-full border border-white/50 shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-4 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(newCurrency) => setTo(newCurrency)}
                selectCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App