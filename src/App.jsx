import HomeCompo from './components/HomeCompo'

const App = () => {
  return (
    <>
    <div className='text-center mt-10 mb-6'>
      <h1 className='text-4xl md:text-6xl font-semibold'>Expense Tracker</h1>
    </div>
    <HomeCompo />
    <footer className='text-center hidden md:block border-t border-[#555] mt-16 w-full p-3'>
        Designed & Developed by ~ <a href="https://github.com/sk-kaif" target='_blank'>Shaikh Mohammed Kaif</a>✨
    </footer>
    </>
  )
}

export default App