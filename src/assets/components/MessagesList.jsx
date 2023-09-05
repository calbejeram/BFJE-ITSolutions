import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, Col, Container, Row, Table } from 'reactstrap';
import { Box, Stack, Typography } from '@mui/material';

const MessagesList = () => {
    document.title = "Messages List | Admin Dashboard";

    const [emails, setEmails] = useState(
        JSON.parse(localStorage.getItem("ContactForm")) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem('Footer', JSON.stringify(emails));
    }, [emails]);

  return (
    <>
        <Box>
            <Container className='container pt-5'>
                <Row>
                    <Col className='d-flex align-items-center'>
                    <Stack className='d-flex justify-content-center w-100'>
                        <Typography variant='h3' className='bg-warning bg-opacity-50 p-3 rounded-3 fw-bold mb-2'>Messages List</Typography>
                        <Typography variant='body2' className='bg-warning bg-opacity-50 p-3 rounded-3 fw-medium mb-3'>You can view the list of messages here.</Typography>
                    </Stack>
                    </Col>
                </Row>
                <Row>
                <Box className="bg-warning bg-gradient bg-opacity-50 rounded-3 p-3">
                <Table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Sender</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emails.map((info) => {
                                return (
                                    <tr key={info}>
                                        <td>{info.contactFirstName + info.contactLastName}</td>
                                        <td>{info.emailAddress}</td>
                                        <td>{info.contactNumber}</td>
                                        <td>{info.message}</td>
                                        <td>
                                            <Stack direction="row" spacing={2}>
                                                <Button className='btn btn-success'><EditIcon/></Button>
                                                <Button className='btn btn-danger'><DeleteForeverIcon/></Button>
                                            </Stack>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                  </Table>
                </Box>
                </Row>
            </Container>
        </Box>
    </>
  )
};

export default MessagesList;
