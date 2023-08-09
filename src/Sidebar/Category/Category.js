import "./Category.css";

function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category </h2>

      <div>
        <label className="sidebar-label-container">
        <input type="radio" name="test"/>
        <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
        <input type="radio" name="test"/>
        <span className="checkmark"></span>Cacti
        </label>
        <label className="sidebar-label-container">
        <input type="radio" name="test"/>
        <span className="checkmark"></span>Ferns
        </label>
        <label className="sidebar-label-container">
        <input type="radio" name="test"/>
        <span className="checkmark"></span>Bamboo
        </label>
      </div>
    </div>
  )
}

export default Category;
