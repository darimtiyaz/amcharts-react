import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const UserTable = ({ headers, userData }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {headers.map(row => {
                            return (
                                <TableCell style={{ "fontWeight": "bold" }}>{row.label}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData.map(row => (
                        <TableRow
                            key={row.id}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;