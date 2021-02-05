import React from "react";
import "./style.css";

// datalist element will give autofill suggestions based on array

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="breed"> Breed Name: </label>
                <input
                value={props.Search}
                onChange={props.handleInputChange}
                name="breed"
                list="breeds"
                type="text"
                className="form-control"
                placeholder="Type in a dog breed"
                id="breed"
                />
            <datalist id="breeds">
                {props.breeds.map(breed => (
                    <option value={breed} key={breed} />
                ))}
            </datalist>
            <button type="submit" onClick={props.handleFormsSubmit} className="btn btn-success">
                Search
            </button>
            </div>
        </form>
    );
}

export default SearchForm;