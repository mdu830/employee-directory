import React from "react"

function searchName(props) {

    return (
        <div className="container-fluid pt-1">

            <header className="col-12 ml-5 m-3">
                <div className="row">
                    <h3 className="headerText">Employee Directory</h3>
                <div className="row ml-5"></div>
                <div className="row mb-3">
                    <div className=" col m4 input input-group ml-5">
                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className=" inputBox  "
                                placeholder="Search by name" />
                            </div>
                        <div className="col m4">
                            <button
                                type="submit"
                                value=""
                                className="btn btn-outline-info searchBtn"
                                onClick={props.handleSearch} >Search
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    )
}

export default searchName