import {MdCancel} from 'react-icons/md'

const Transactions = ({transactions,setTransactions}) => {
  const remove=(id)=>{
    setTransactions((preState)=> preState.filter((item)=> item.id !== id))
  }

  


  return (    
    <>
    <div className='mt-4 w-[90%] max-w-6xl lg:flex flex-col'>
      <h1 className='text-2xl font-semibold text-center md:text-4xl mt-10 mb-6'>Transactions List</h1>
        {/* <input type="text" placeholder='Search...' className='b' /> */}
        {
          transactions.map((item)=>{
            return (
              <div className={`bg-white shadow-md p-2 my-3 lg:my-3 rounded-md ${item.type === 'EXPENSE' ? 'expenseB':'incomeB'}`} key={item.id}>
                  <div className='flex justify-between mb-2'>
                    <h1 className='text-xl font-semibold lg:text-2xl'>{item.desc}</h1>
                    <h1 className='font-bold text-xl md:text-2xl'>${item.amount}</h1>
                  </div>
                  <div className='flex justify-between items-center'>
                    <h1 className='text-sm'>{item.date}</h1>
                    <MdCancel className='hover:fill-red-800 cursor-pointer md:text-2xl text-xl fill-red-400' onClick={()=>remove(item.id)} />
                  </div>
              </div>
              
            )
          })
        }
    </div>
    </>
  )
}

export default Transactions