import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import '../App.css';
import axios from 'axios';

function StudentScreen() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        async function fetchStudents(){
            const{data} = await axios.get('/students/')
            setStudents(data)
        }

        fetchStudents()
    }, [])

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
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default StudentScreen