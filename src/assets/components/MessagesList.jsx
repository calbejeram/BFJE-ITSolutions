import React, { useEffect, useState } from 'react';
import NoMessages from '../components/NoMessages';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EmailIcon from '@mui/icons-material/Email';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button, Col, Container, Row, Table, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Box, FormGroup, Stack, Typography } from '@mui/material';

const MessagesList = (args) => {
    // Showing the list of Messages stored in storage
    document.title = "Messages List | Admin Dashboard";
    const Swal = require('sweetalert2');

    const [emails, setEmails] = useState(
        JSON.parse(localStorage.getItem("ContactForm")) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem("ContactForm", JSON.stringify(emails));
    }, [emails]);

    // Updating the messages data
    const updateMessage = (index) => {
        alert("hi")
    }

    // Delete an item to the local storage
    const deleteMessage = (index) => {

        Swal.fire({
            icon: "warning",
            title: "Are you sure, you want to delete this?",
            text: "You won't be able to revert this.",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedEmails = emails.filter((_, i) => i !== index); // Create a new array without the deleted message
                setEmails(updatedEmails); // Update the state
                localStorage.setItem("ContactForm", JSON.stringify(updatedEmails)); // Update localStorage
                window.location.reload();

                Swal.fire({
                    icon: "success",
                    text: "Successfully Deleted."
                });
            };
        });
    };

    const listOfMessage = () => {
        return (
            <Table className='table table-striped w-100'>
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Email Address</th>
                        <th>Contact</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((info, index) => {
                        return (
                            <tr key={info}>
                                <td>{`${info.contactFirstName} ${info.contactLastName}`}</td>
                                <td>{info.emailAddress}</td>
                                <td>{info.contactNumber}</td>
                                <td>
                                    <Button className='btn btn-success' onClick={() => toggleMessage(info)}>View Message</Button>
                                </td>
                                <td>
                                    <Stack direction="row" spacing={1}>
                                        <Button className='btn btn-success' onClick={() => updateMessage(index)}><EditIcon/></Button>
                                        <Button className='btn btn-danger' onClick={() => deleteMessage(index)}><DeleteForeverIcon/></Button>
                                    </Stack>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        )
    };

    // Message Modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const [selectedMessage, setSelectedMessage] = useState(null); // State to track the selected message
    const toggleMessage = (message) => {
        setSelectedMessage(message); // Set the selected message
        setModal(!modal); // Open the modal
    };
    const closeModal = () => {
        setSelectedMessage(null); // Clear the selected message
        setModal(false); // Close the modal
    };

  return (
    <>
        <Box className="mt-5">
            <Container className='container pt-5'>
                <Row>
                    <Col className='d-flex align-items-center'>
                        <Stack className='d-flex justify-content-center w-100'>
                            <Typography className='fs-1 fs-lg-3 bg-warning bg-opacity-50 p-3 rounded-3 fw-bold mb-2'><EmailIcon fontSize='3rem' className='me-2'/>Messages List</Typography>
                            <Typography variant='body2' className='bg-warning bg-opacity-50 p-3 rounded-3 fw-medium mb-3'><FormatListBulletedIcon className='me-1'/>You can view the list of messages here.</Typography>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Box className="bg-warning bg-gradient bg-opacity-50 rounded-3 p-3 overflow-scroll" sx={{ height: '440px'}}>
                        {emails.length > 0 ? listOfMessage() : <NoMessages/>}
                    </Box>
                </Row>
            </Container>

            {/* Modal */}
            <Box>
                <Modal isOpen={modal} toggle={toggle} {...args} centered={true}>
                    <ModalHeader toggle={toggle}>
                        Inbox
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup className='mb-3'>
                                <Label name="send" id='sender' className='form-label'>
                                    Sender:
                                </Label>
                                <Input className='form-control' name='sender' id='sender' value={selectedMessage && selectedMessage.emailAddress} readOnly></Input>
                            </FormGroup>
                        <FormGroup>
                            <Label name="message" id='message' className='form-label'>
                                    Message:
                            </Label>
                            <Input type='textarea' className='form-control' value={selectedMessage && selectedMessage.message} name="message" id="message" cols="30" rows="5" readOnly></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Close
                    </Button>
                    </ModalFooter>
                </Modal>
            </Box>
        </Box>
    </>
  )
};

export default MessagesList;
