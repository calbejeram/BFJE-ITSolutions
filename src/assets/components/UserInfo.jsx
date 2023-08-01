import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AdminTable from './AdminTable';
import { Stack, Box, Container, Typography } from '@mui/material';
import { Col, Row } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import ClientServiceform from './ClientServiceform';



function UserInfo() {
    const LoadData = localStorage.getItem("userArr") ? JSON.parse(localStorage.getItem("userArr")) : [];
    const [userArr,setUserArr] = useState(LoadData);

    const [userName,setUserName] = useState();
    const [userEmail,setUserEmail] = useState();
    const [userContact,setContact] = useState();
    const [userWebpackage,setWebpackage] = useState();
    const [userPackagetitle,setPackagetitle] = useState();
    const [userPackagedescription,setPackagedescription] = useState();
    const [userPackageprice,setPackageprice] = useState();
    const [userImage,setImage] = useState();
    const [userStatus,setStatus] = useState();

    const handleUserName = (e) =>{
        setUserName(e.target.value)
    }
    const handleUserEmail = (e) =>{
        setUserEmail(e.target.value)
    }
    const handleContact = (e) =>{
        setContact(e.target.value)
    }
    const handleWebpackage = (e) =>{
        setWebpackage(e.target.value)
    }
    const handlePackagetitle = (e) =>{
        setPackagetitle(e.target.value)
    }
    const handlePackagedescription = (e) =>{
        setPackagedescription(e.target.value)
    }
    const handlePackageprice = (e) =>{
        setPackageprice(e.target.value)
    }
    const handleImage = (e) =>{
        setImage(e.target.value)
    }
    const handleStatus = (e) =>{
        setStatus(e.target.value)
    }
    

    const handleAvail = (e) => {
        e.preventDefault();
        if(userName !== ""){
            const userID = Date.now();
            const user = 
                {
                    userID,
                    userName,
                    userEmail,
                    userContact,
                    userWebpackage,
                    userPackagetitle,
                    userPackagedescription,
                    userPackageprice,
                    userImage,
                    userStatus
                };

        setUserArr([...userArr, user])
        
        setUserName("")
        setUserEmail("")
        setContact(0)
        setWebpackage(0)
        setPackagetitle("")
        setPackagedescription("")
        setPackageprice(0)
        setImage("")
        setStatus("")

        }else {alert("Incomplete Details!")}
    }
    useEffect(() => {
        localStorage.setItem("ClientDetails", JSON.stringify(userArr))
    }, [userArr])


    return (
        <div>

        <ClientServiceform
            userName={userName}
            userEmail={userEmail}
            userContact={userContact}
            userWebpackage={userWebpackage}
            userPackagetitle={userPackagetitle}
            userPackagedescription={userPackagedescription}
            userPackageprice={userPackageprice}
            userImage={userImage}
            userStatus={userStatus}
            handleUserName={handleUserName}
            handleUserEmail={handleUserEmail}
            handleContact={handleContact}
            handleWebpackage={handleWebpackage}
            handlePackagetitle={handlePackagetitle}
            handlePackagedescription={handlePackagedescription}
            handlePackageprice={handlePackageprice}
            handleImage={handleImage}
            handleStatus={handleStatus}
            handleAvail={handleAvail}
        />

        <ClientServiceform userArr={userArr} setUserArr={setUserArr} />
        
        <Box>
            <Container className='container pt-5'>
                <Row>
                    <Col className='d-flex align-items-center'>
                    <HomeIcon style={{ fontSize: '70'}}/>
                    <Stack className='d-flex justify-content-center'>
                        <Typography variant='h5' fontWeight='bold'>Client Details</Typography>
                        <Typography variant='body2'></Typography>
                        <AdminTable userArr={userArr}/>
                    </Stack>
                    </Col>
                </Row>
                <Row>
                    {/* <AccountInformation /> */}
                </Row>
            </Container>
        </Box>    


        
        
        
    </div>
  )
}

export default UserInfo;
