import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import FilteredCustomers from '../components/FilteredCustomers';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, FormGroup, Stack, Typography } from '@mui/material';
import { Button, Col, Container, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NoCustomers from './NoCustomers';

import InfoIcon from '@mui/icons-material/Info';
import NotFound from './NotFound';


const CustomersList = (args) => {
    document.title = "Customers List | Admin Dashboard";
    const Swal = require('sweetalert2');

    // Showing the list of customers stored in local storage
    const [customersDetails, setCustomersDetails] = useState(
        JSON.parse(localStorage.getItem("ServiceSection")) || []
    );

    useEffect(() => {
        // Save the customers data to localStorage whenever it changes
        localStorage.setItem("ServiceSection", JSON.stringify(customersDetails));
    }, [customersDetails]);

    // Updating the data
    const handleUpdateCustomer = (e) => {
        e.preventDefault();

        // Find the selected message based on the selectedIndex
        const selectedCustomer = customersDetails[selectedIndex];

        // Check if any of the form fields have changed
        if (
            serviceFirstName === selectedCustomer.serviceFirstName &&
            serviceLastName === selectedCustomer.serviceLastName &&
            serviceEmail === selectedCustomer.serviceEmail &&
            serviceNumber === selectedCustomer.serviceNumber &&
            selectService === selectedCustomer.selectService
        ) {
            // If nothing has changed, you can simply close the modal and return
            setEditModal(!editModal)
        } else {

            // Create a copy of the selected message
            const updatedCustomerInfo = { ...selectedIndex };
    
            // Update each form field in the copied message
            updatedCustomerInfo.serviceFirstName = serviceFirstName;
            updatedCustomerInfo.serviceLastName = serviceLastName;
            updatedCustomerInfo.serviceEmail = serviceEmail;
            updatedCustomerInfo.serviceNumber = serviceNumber;
            updatedCustomerInfo.selectService = selectService;
    
            // Update the data at the selected index
            const updatedCustomer = [...customersDetails]; 
            updatedCustomer[selectedIndex] = updatedCustomerInfo;

            updatedCustomer[selectedIndex].customerId = selectedCustomer.customerId;

            localStorage.setItem("ServiceSection", JSON.stringify(updatedCustomer));
            setCustomersDetails(updatedCustomer);
    
            // Close the edit modal
            setEditModal(false);
    
            Swal.fire({ 
               icon: "success",
               text: "Successfully Updated the Customer Details.",
               showConfirmButton: false,
               timer: 1500
            });
        }

    };

    // Function on deleting a data/item on local storage
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
                const updatedEmails = customersDetails.filter((_, i) => i !== index); // Create a new array without the deleted message
                setCustomersDetails(updatedEmails); // Update the state
                localStorage.setItem("ServiceSection", JSON.stringify(updatedEmails)); // Update localStorage
                
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

    const [searchInput, setSearchInput] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // New state for search query

    useEffect(() => {
        // Filter customers whenever the searchInput or customersDetails change
        const filtered = customersDetails.filter((customer) =>
            customer.serviceFirstName.toLowerCase().includes(searchInput.toLowerCase()) ||
            customer.serviceLastName.toLowerCase().includes(searchInput.toLowerCase()) ||
            customer.serviceEmail.toLowerCase().includes(searchInput.toLowerCase()) ||
            customer.serviceNumber.toLowerCase().includes(searchInput.toLowerCase()) ||
            customer.selectService.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredCustomers(filtered);
    }, [searchInput, customersDetails]);


    // Toggle Modals
    const [editModal, setEditModal] = useState(false);

    const toggleEditModal = () => setEditModal(!editModal);
    
    const [selectedIndex, setSelectedIndex] = useState(null); // State to track the selected message
    
    const [serviceFirstName, setServiceFirstName] = useState("");
    const [serviceLastName, setServiceLastName] = useState("");
    const [serviceEmail, setServiceEmail] = useState("");
    const [serviceNumber, setServiceNumber] = useState("");
    const [selectService, setSelectedService] = useState("");

    const toggleEdit = (details, index) => {
        setSelectedIndex(index); // Set all the details to the selected index
        setServiceFirstName(details.serviceFirstName);
        setServiceLastName(details.serviceLastName);
        setServiceEmail(details.serviceEmail);
        setServiceNumber(details.serviceNumber);
        setSelectedService(details.selectService);
        setEditModal(!editModal); // Open the modal
    };


    const FilteredCustomers = ({ filteredCustomers }) => {
        return (
            <Box className="bg-success bg-gradient bg-opacity-50 rounded-3 p-3 overflow-scroll mt-2" sx={{ height: '400px' }}>
                {filteredCustomers.length > 0 ? (
                    <Table className='table table-striped w-100'>
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Selected Service</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCustomers.map((info, index) => {
                                // Create a function to apply bold styling to matching text
                                const formatCustomerInfo = (text) => {
                                    const regex = new RegExp(searchInput, 'gi'); // Case-insensitive search
                                    return text.replace(regex, (match) => `<strong>${match}</strong>`);
                                };
                                return (
                                    <tr key={info.customerId}>
                                        <td>{info.customerId}</td>
                                        <td dangerouslySetInnerHTML={{ __html: formatCustomerInfo(`${info.serviceFirstName} ${info.serviceLastName}`) }}></td>
                                        <td dangerouslySetInnerHTML={{ __html: formatCustomerInfo(info.serviceEmail) }}></td>
                                        <td dangerouslySetInnerHTML={{ __html: formatCustomerInfo(info.serviceNumber) }}></td>
                                        <td dangerouslySetInnerHTML={{ __html: formatCustomerInfo(info.selectService) }}></td>
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
                ) : (
                    <NoCustomers />
                )}
            </Box>
        );
    };

    // Customers Table List
    // const listOfCustomers = () => {
    //     return (
    //         <Table className='table table-striped w-100'>
    //             <thead>
    //                 <tr>
    //                     <th>Customer ID</th>
    //                     <th>Full Name</th>
    //                     <th>Email</th>
    //                     <th>Contact Number</th>
    //                     <th>Selected Service</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {customersDetails.map((info, index) => {
    //                     return (
    //                         <tr key={info}>
    //                             <td>{info.customerId}</td>
    //                             <td>{`${info.serviceFirstName} ${info.serviceLastName}`}</td>
    //                             <td>{info.serviceEmail}</td>
    //                             <td>{info.serviceNumber}</td>
    //                             <td>{info.selectService}</td>
    //                             <td>
    //                                 <Stack direction="row" spacing={1}>
    //                                     <Button className='btn btn-success' onClick={() => toggleEdit(info, index)}><EditIcon/></Button>
    //                                     <Button className='btn btn-danger' onClick={() => deleteMessage(index)}><DeleteForeverIcon/></Button>
    //                                 </Stack>
    //                             </td>
    //                         </tr>
    //                     );
    //                 })}
    //             </tbody>
    //         </Table>
    //     );
    // };


  return (
    <>
        <Box className="mt-5">
        <Container className='container pt-5'>
            <Row>
                <Col className='d-flex align-items-center'>
                  <Stack className='d-flex justify-content-center w-100'>
                      <Typography className='fs-1 fs-lg-3 bg-success bg-opacity-50 p-3 rounded-3 fw-bold mb-2'><PeopleAltIcon fontSize='3rem' className='me-2'/>Customers List</Typography>
                      <Typography variant='body2' className='bg-success bg-opacity-50 p-3 rounded-3 fw-medium mb-3'><FormatListBulletedIcon className='me-1'/>You can view the list of customers here.</Typography>
                  </Stack>
                </Col>
            </Row>
            <Row>
                <Search searchInput={searchInput} setSearchInput={setSearchInput} />
                <FilteredCustomers filteredCustomers={filteredCustomers} />
                {searchQuery && (
                                <div className="search-query">
                                    <Typography variant="body2">
                                        Search Query: {searchQuery}
                                    </Typography>
                                </div>
                            )}
                {/* <Box className="bg-success bg-gradient bg-opacity-50 rounded-3 p-3 overflow-scroll mt-2" sx={{ height: '400px'}}>
                    {customersDetails.length > 0 ? listOfCustomers() : <NoCustomers/>}
                </Box> */}
            </Row>
        </Container>

        {/* Modal for viewing message */}
        <Box>
            {/* Modal for editing contacts details */}
            <Modal isOpen={editModal} toggle={toggleEditModal} {...args} centered={true}>
                <ModalHeader toggle={toggleEditModal}>
                    Edit Customer Details
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleUpdateCustomer}>
                        <FormGroup className='mb-2'>
                            <Label for='firstName' className='form-label fw-bold text-black'>First Name:</Label>
                            <Input className='form-control' type='text' for='firstName' id='firstName' placeholder='e.g. Juan' value={serviceFirstName} onChange={(e) => setServiceFirstName(e.target.value)} ></Input>
                        </FormGroup>
                        <FormGroup className='mb-2'>
                            <Label for='lastName' className='fw-bold text-black'>Last Name:</Label>
                            <Input type='text' for='lastName' id='firstName' placeholder='e.g. Dela Cruz' value={serviceLastName} onChange={(e) => setServiceLastName(e.target.value)} ></Input>
                        </FormGroup>
                        <FormGroup className='mb-2'>
                            <Label for='email' className='fw-bold text-black'>Email Address:</Label>
                            <Input type='email' for='email' id='email' placeholder='e.g. JuanDelaCruz@youremail.com' value={serviceEmail} onChange={(e) => setServiceEmail(e.target.value)} readOnly></Input>
                        </FormGroup>
                        <FormGroup className='mb-2'>
                            <Label for='mobileNumber' className='fw-bold text-black'>Contact number:</Label>
                            <Input type='number' for='mobileNumber' id='mobileNumber' placeholder='e.g. 09-123-456-789' maxLength="11" value={serviceNumber} onChange={(e) => setServiceNumber(e.target.value)} readOnly></Input>
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Label for='message' className='fw-bold text-black'>Service Type:</Label>
                            <Input type='select' value={selectService} onChange={(e) => setSelectedService(e.target.value)}>
                                <option readOnly>Select a service</option>
                                <option value="Frontend Web Development">Frontend Web Development</option>
                                <option value="Backend Web Development">Backend Web Development</option>
                                <option value="Fullstack Web Development">Fullstack Web Development</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className='mb-2 d-flex flex-row align-items-end justify-content-end'>
                            <Button className="btn btn-success w-25 me-2">Update</Button>
                            <Button className='btn btn-danger w-25' onClick={toggleEditModal}>
                                Close
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </Box>
      </Box>
    </>
  )
}

export default CustomersList;
