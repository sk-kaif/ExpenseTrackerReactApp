import { useEffect, useState } from 'react'
import Overview from './Overview'
import Transactions from './Transactions'

const HomeCompo = () => {
    const [transactions, setTransactions] = useState([])

    const [expense, SetExpense] = useState(0)
    const [income, setIncome] = useState(0)

    const addTransaction=(payload)=>{
      setTransactions(prevSt => [...prevSt,payload])
    }

    const reset=()=>{
      setTransactions([])
    }


    const calculateBal=()=>{
      let exp = 0;
      let inc = 0;

      transactions.map((item)=>{
        item.type === 'EXPENSE' ?
        (exp = exp + item.amount):
        (inc = inc + item.amount)
      })
      setIncome(inc)
      SetExpense(exp)
    }

    useEffect(()=>{
      calculateBal()
    },[transactions])

  return (
    <>
      
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between my-4 items-center w-[90%]'>
        <div className='mb-3 text-center md:text-left'>
          <h1 className='text-2xl font-semibold'>Dashboard</h1>
          <p className='text-xl'>Hello, Welcome Back.</p>
        </div>
        <div onClick={()=>reset()} className='w-fit lg:px-6 px-4 py-2 bg-white rounded-lg lg:text-lg font-medium text-center hover:shadow-md cursor-pointer'>Reset</div>
      </div>
      <div className='C flex flex-col items-center'>
        <Overview addTransaction={addTransaction} expense={expense} income={income} />
          {
            transactions.length > 0 ? <Transactions transactions={transactions} setTransactions={setTransactions}/> : null
          }       
      </div>
    </>
  )
}

export default HomeCompo