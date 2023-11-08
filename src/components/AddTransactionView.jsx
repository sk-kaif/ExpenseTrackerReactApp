import React, { useState } from 'react'
import uuid from 'react-uuid'
const AddTransactionView = ({addTransaction}) => {

    const [amount,setAmount] =useState('')
    const [desc,setDesc] =useState('')
    const [date,setDate] =useState('')
    const [type,setType] =useState('EXPENSE')

    const AddTransactionHistory=()=>{
        if(amount,date,desc){
            addTransaction({amount:Number(amount),desc,type,id:uuid(),date});
            setAmount('')
            setDate('')
            setDesc('')
            setType('')
        }
        else{
            return null
        }
    }

  return (
    <>
        <div className='flex flex-col gap-3 p-4 lg:max-w-xl w-full'>

            <h1 className='text-center font-semibold text-2xl'>Add Bugdet</h1>

            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Amount' className='border-2 p-2 w-full rounded-md input-feild' />
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder='Description' className='border-2 p-2 w-full rounded-md input-feild' />
            <input type="date" value={date} id="date" onChange={e=>setDate(e.target.value)} className='border-2 p-2 w-full rounded-md input-feild opacity-70 cursor-pointer'/>

            <div className="flex justify-between my-3">
                <div>
                    <input  className='m-2' type="radio" id="income" name='type' value='INCOME' checked={type==='INCOME'} onChange={e=>setType(e.target.value)}/>
                    <label htmlFor="income" className='font-semibold text-xl cursor-pointer text-green-400'>Income</label>
                </div>
                <div>
                    <input className='m-2' type="radio" id="expense" name='type' value='EXPENSE' checked={type==='EXPENSE'} onChange={e=>setType(e.target.value)} />
                    <label htmlFor="expense" className='font-semibold text-xl cursor-pointer text-red-400'>Expense</label>
                </div>
            </div>

            <div className="text-center md:text-xl p-2 md:p-4 lg:p-5 bg-[#5D42BF] hover:shadow-xl text-white cursor-pointer rounded-md" onClick={()=>AddTransactionHistory()}>
                Add Transactions
            </div>


        </div>

    </>
  )
}

export default AddTransactionView