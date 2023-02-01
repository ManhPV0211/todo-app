import "./filter.css";

function Filter() {
    return (
        <div className="filter">
            <form className="filter-search">
                <h3>Search</h3>
                <input type="text"/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>

            <form className="filter-status">
                <h3>Filter By Status</h3>
                <input type="radio" id="all" value="all" name="status"/>
                <label htmlFor="all">All</label>

                <input type="radio" id="completed" value="completed" name="status"/>
                <label htmlFor="completed">Completed</label>

                <input type="radio" id="todo" value="todo" name="status"/>
                <label htmlFor="todo">To do</label>
            </form>

            <form className="filter-priority">
                <h3>Filter By Priority</h3>
            </form>

        </div>
    )
};

export default Filter;