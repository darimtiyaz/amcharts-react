import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { Button } from '@mui/material';
import UserTable from './exportData';
import axios from 'axios';
const ExportCSV = () => {
    const fileName = "users-detail";
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    const headers = [
        { label: "Id", key: "id" },
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" }
    ];

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUserData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Error: ", err);
                setLoading(false);
            })
    }

    return (
        <div className='container'>
            <Button
                variant="contained"
                color="primary"
                className='export-btn'
            >
                <CSVLink
                    headers={headers}
                    data={userData}
                    filename={fileName}
                    style={{ "textDecoration": "none", "color": "#fff" }}
                >
                    {loading ? 'Loading csv...' : 'Export Data'}
                </CSVLink>
            </Button>

            <UserTable headers={headers} userData={userData} />
        </div>
    );
}

export default ExportCSV;