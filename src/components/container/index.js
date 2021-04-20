import API from "../../utils/API";
import React, { Component } from "react"
import SearchName from "../searchName/index"
import TableData from "../tableData/index"

class Container extends Component {

    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""

    };

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }

    sortByName = () => {
        const filterUsers = this.state.filteredEmployees;
        if (this.state.order === "asc") {

            const sorts = filterUsers.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            // console.log(sorts);

            this.setState({
                filteredEmployees: sorts,
                order: "desc"
            })
        } else {

            const sorts = filterUsers.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            // console.log(sorts);

            this.setState({
                filteredEmployees: sorts,
                order: "asc"
            })

        }
    }

    handleInputChange = event => {

        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        )
        this.setState({

            filteredEmployees,

        });


    };


    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({

                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }

    handleSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Enter a name")
        }
        const { employees, search } = this.state;

        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
    }



    render() {

        return (
            <div>

                <SearchName
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <TableData results={this.state.filteredEmployees}
                    sortByName={this.sortByName}

                />
            </div >


        )
    }
}

export default Container