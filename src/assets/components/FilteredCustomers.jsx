// import React from 'react';
// import { Table } from 'reactstrap';
// import NoCustomers from './NoCustomers';
// import { Box } from '@mui/material';

// export default function FilteredCustomers = ({ filteredCustomers }) => {
//     return (
//         <Box className="bg-success bg-gradient bg-opacity-50 rounded-3 p-3 overflow-scroll mt-2" sx={{ height: '400px' }}>
//             {filteredCustomers.length > 0 ? (
//                 <Table className='table table-striped w-100'>
//                     <thead>
//                         <tr>
//                             <th>Customer ID</th>
//                             <th>Full Name</th>
//                             <th>Email</th>
//                             <th>Contact Number</th>
//                             <th>Selected Service</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredCustomers.map((info, index) => {
//                             return (
//                                 <tr key={info.customerId}>
//                                     <td>{info.customerId}</td>
//                                     <td>{`${info.serviceFirstName} ${info.serviceLastName}`}</td>
//                                     <td>{info.serviceEmail}</td>
//                                     <td>{info.serviceNumber}</td>
//                                     <td>{info.selectService}</td>
//                                     <td>
//                                         <Stack direction="row" spacing={1}>
//                                             <Button className='btn btn-success' onClick={() => toggleEdit(info, index)}><EditIcon/></Button>
//                                             <Button className='btn btn-danger' onClick={() => deleteMessage(index)}><DeleteForeverIcon/></Button>
//                                         </Stack>
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </Table>
//             ) : (
//                 <NoCustomers />
//             )}
//         </Box>
//     );
// };

// export default FilteredCustomers;