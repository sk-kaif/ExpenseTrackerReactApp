import BalanceBg from './../assets/BalanceBg.jpg'
import React, { useState } from 'react'
import AddTransactionView from './AddTransactionView'

const Overview = ({addTransaction,income,expense,setTransactions}) => {
    const [isAddTranx, setIsAddTransx] = useState(true)

    const toggleAddTranx=()=>{
        setIsAddTransx(!isAddTranx)
    }
  return (
    <>

    <div className='max-w-6xl w-[90%] lg:flex '>
        <div className="left lg:w-2/4 md:flex flex-col justify-between">

            <div className='balanceCon mb-3 lg:h-32 md:h-28 h-20 px-3 text-white rounded-md flex items-center w-ful font-semibold'>
                <h1 className='lg:text-6xl md:text-4xl text-3xl'>Balance : ${income - expense}</h1>
            </div>

            <div className="ExpAndInc gap-3 ">
                <div className="lg:w-full p-2 expensenAmountCon rounded-md my-3">
                    <h1 className='md:text-2xl md:my-3 text-[#495057] font-semibold'>Expenses</h1>
                    <p className='font-bold text-2xl text-[#292538] '>${expense}</p>
                </div>
                <div className="lg:w-full p-2 incomeAmountCon rounded-md">
                    <h2 className='md:text-2xl md:my-3 text-[#495057] font-semibold'>Income</h2>
                    <p className='font-bold text-2xl text-[#292538]'>${income}</p>
                </div>
            </div>

        </div>
        <div className="rigth lg:w-2/4 rounded-md bg-white mt-6 lg:mt-0 lg:ml-4 shadow-xl">
            <AddTransactionView  addTransaction={addTransaction} setTransactions={setTransactions}/>
        </div>
    </div>
  

    </>
  )
}

export default Overview