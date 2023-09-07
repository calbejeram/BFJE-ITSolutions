import React, { useEffect, useState } from 'react';
import NoMessages from '../components/NoMessages';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EmailIcon from '@mui/icons-material/Email';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button, Col, Container, Row, Table, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form } from 'reactstrap';
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
                
                setTimeout(() => window.location.reload(), 1200)

                Swal.fire({
                    icon: "success",
                    text: "Successfully Deleted.",
                    showConfirmButton: false,
                    timer: 1200
                });
            };
        });
    };

    const listOfMessage = () => {
        return (
            <Table className='table table-striped w-100'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sender</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((info, index) => {
                        return (
                            <tr key={info}>
                                <td>{index}</td>
                                <td>{`${info.contactFirstName} ${info.contactLastName}`}</td>
                                <td>{info.emailAddress}</td>
                                <td>{info.contactNumber}</td>
                                <td>
                                    <Button className='btn btn-success' onClick={() => toggleMessage(info)}>View Message</Button>
                                </td>
                                <td>
                                    <Stack direction="row" spacing={1}>
                                        <Button className='btn btn-success' onClick={() => toggleEdit(info, index)}><EditIcon/></Button>
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
    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal);

    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const toggleViewModal = () => setViewModal(!viewModal);
    const toggleEditModal = () => setEditModal(!editModal);
    
    const [selectedMessage, setSelectedMessage] = useState(null); // State to track the selected message
    const [selectedIndex, setSelectedIndex] = useState(null); // State to track the selected message

    const toggleMessage = (message) => {
        setSelectedMessage(message); // Set the selected message
        console.log(message);
        setViewModal(!viewModal); // Open the modal
    };
    
    const [contactFirstName, setContactFirstName] = useState("");
    const [contactLastName, setContactLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [message, setMessage] = useState("");

    const toggleEdit = (details, index) => {
        setSelectedIndex(index); // Set all the details to the selected index
        setContactFirstName(details.contactFirstName);
        setContactLastName(details.contactLastName);
        setEmailAddress(details.emailAddress);
        setContactNumber(details.contactNumber);
        setMessage(details.message);
        setEditModal(!viewModal); // Open the modal
    };


    // Updating the data
    const handleUpdate = (e) => {
        e.preventDefault();

        // Find the selected message based on the selectedIndex
        const selectedMessage = emails[selectedIndex];

        // Check if any of the form fields have changed
        if (
            contactFirstName === selectedMessage.contactFirstName &&
            contactLastName === selectedMessage.contactLastName &&
            emailAddress === selectedMessage.emailAddress &&
            contactNumber === selectedMessage.contactNumber &&
            message === selectedMessage.message
        ) {
            // If nothing has changed, you can simply close the modal and return
            document.getElementById('btnUpdate').classList.add('disabled')
        }

         // Create a copy of the selected message
         const updatedMessage = { ...selectedIndex };

         // Update each form field in the copied message
         updatedMessage.contactFirstName = contactFirstName;
         updatedMessage.contactLastName = contactLastName;
         updatedMessage.emailAddress = emailAddress;
         updatedMessage.contactNumber = contactNumber;
         updatedMessage.message = message;
 
         // Update the data at the selected index
         const updatedEmails = [...emails]; 
         updatedEmails[selectedIndex] = updatedMessage;
         localStorage.setItem("ContactForm", JSON.stringify(updatedEmails));
         setEmails(updatedEmails);
 
         // Close the edit modal
         setEditModal(false);

         Swal.fire({
            icon: "success",
            text: "Successfully Updated the Sender Details.",
            showConfirmButton: false,
            timer: 1500
         });
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

            {/* Modal for viewing message */}
            <Box>
                <Modal isOpen={viewModal} toggle={toggleViewModal} {...args} centered={true}>
                    <ModalHeader toggle={toggleViewModal}>
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
                    <Button color="danger" onClick={toggleViewModal}>
                        Close
                    </Button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={editModal} toggle={toggleEditModal} {...args} centered={true}>
                    <ModalHeader toggle={toggleEditModal}>
                        Edit Sender
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleUpdate}>
                            <FormGroup className='mb-2'>
                                <Label for='firstName' className='form-label fw-bold text-black'>First Name:</Label>
                                <Input className='form-control' type='text' for='firstName' id='firstName' placeholder='e.g. Juan' value={contactFirstName} onChange={(e) => setContactFirstName(e.target.value)} ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='lastName' className='fw-bold text-black'>Last Name:</Label>
                                <Input type='text' for='lastName' id='firstName' placeholder='e.g. Dela Cruz' value={contactLastName} onChange={(e) => setContactLastName(e.target.value)} ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='email' className='fw-bold text-black'>Email Address:</Label>
                                <Input type='email' for='email' id='email' placeholder='e.g. JuanDelaCruz@youremail.com' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='mobileNumber' className='fw-bold text-black'>Contact number:</Label>
                                <Input type='number' for='mobileNumber' id='mobileNumber' placeholder='e.g. 09-123-456-789' maxLength="11" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}  ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='message' className='fw-bold text-black'>Message:</Label>
                                <Input type='textarea' for='message' id='message' placeholder='Type your message here...' value={message} onChange={(e) => setMessage(e.target.value)}  ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Button id='btnUpdate' className="btn btn-success">Update</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="danger" onClick={toggleEditModal}>
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
