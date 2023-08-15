import Category from './Category/Category';
import Price from './Price/Price';
import './Sidebar.css'

function Sidebar() {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container'></div>

        <Category/>
        <Price/>
      </section>
    </>
  )
}

export default Sidebar
