import "./Price.css"

function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      
      <label className="sidebar-label-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>$0 - $30
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>$30 - $60
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span>$60 - $90
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2"/>
        <span className="checkmark"></span> Over $90
      </label>
    </div>
  )
}

export default Price
