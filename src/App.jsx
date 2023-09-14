import './App.css'
import Header from './header/header'
import Products from './products/products'


function App() {

  return (
    <>
     <div className='max-w-screen-xl m-auto px-4 py-4'>
          <Header></Header>
          <div className='flex gap-5'>
          <Products></Products>
          </div>
      </div>
    </>
  )
}

export default App
