import React from "react";

class SearchBar extends React.Component {
    state = { term: " " };
    onInputChange = event => {
        this.setState({ term: event.target.value })
    };
    onFormSubmit = event => {
        event.preventDefault(); //it wont allow browser itself to submit form, first it will pass event to parent function as object
        this.props.onFormSubmit(this.state.term)
    }
    render() {

        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} name="" id="" placeholder="Type to search" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar