import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function searchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="author">Author Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="author"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in an author's name to begin"
          id="author"
        />
        <datalist id="books">
          {props.books.map(books => (
            <option value={books} key={books} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default searchForm;
