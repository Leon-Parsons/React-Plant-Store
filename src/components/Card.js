import {AiFillStar} from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/bs';

function Card() {
  return (
    
    <section className="card">
          <img className='card-img'
          src="https://images.unsplash.com/photo-1509223197845-458d87318791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=949&q=80" 
          alt="plant-product"/>
        
          <div className="card-details">
            <h3 className="card-title">Product 1</h3>
            <section className="card-reviews">
              <AiFillStar className='ratings-start'/>
              <AiFillStar className='ratings-start'/>
              <AiFillStar className='ratings-start'/>
              <AiFillStar className='ratings-start'/>
              <span className='total-reviews'>12</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$35</del> 30
              </div>

              <div className='bag-icon'>
                <BsFillBagHeartFill />
              </div>
            </section>
          </div>
      </section>

  )
}

export default Card;
