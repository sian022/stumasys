import React, {useEffect, useState} from "react";
import {Button, ButtonToolbar, Table} from "react-bootstrap";
import '../App.css';
import AddStudentModal from "../components/AddStudentModal";
import axios from "axios";

function ManageScreen() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        async function fetchStudents(){
            const{data} = await axios.get('/students/')
            setStudents(data)
        }

        fetchStudents()
    },[ ])

    return(
        <div className="container-fluid side-container">
            <div className="row table-row">
                <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student._id}>
                                <td>{student._id}</td>
                                <td>{student.lastName}</td>
                                <td>{student.firstName}</td>
                                <td>{student.middleName}</td>
                                <td>{student.email}</td>
                                <td>{student.course}</td>
                                <td>
                                    <Button title='Delete' className='mr-2' variant="danger">
                                        <i class="fa-solid fa-trash"></i>
                                    </Button>
                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                    <Button title='Edit' className="mr-2">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
                <ButtonToolbar>
                    <Button variant="primary" onClick={AddStudentModal}>Add Student</Button>
                </ButtonToolbar>
            </div>
        </div>
    )
}

export default ManageScreen