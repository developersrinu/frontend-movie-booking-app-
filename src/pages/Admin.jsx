


// Admin.js
import React from 'react';
import { Box } from '@mui/material';
import AuthForm from '../Components/AuthForm';
import { sendUserAdminRequest } from '../Apis/api-helper';
import { toast } from 'react-toastify';
import { adminLogin } from '../redux-store/store'; import { useDispatch } from 'react-redux';


const Admin = () => {

  const dispatch = useDispatch()
  const onResRecevied = (res) => {
    console.log(res);
    const isLogedin = res ? true : false;
    dispatch(adminLogin());
    localStorage.setItem('adminId', res.id);
    localStorage.setItem('token', res.token);
    console.log('isLogedin', isLogedin); 
  };


  const getData = (data) => {
    console.log('admin', data);

    sendUserAdminRequest(data)
      .then((res) => {
        onResRecevied(res)
        console.log('Response:', res);
        if (res && res.message) {
          dispatch(adminLogin())
          toast.success(res.message);
          window.location.href = '/movies'
        } else {
          toast.error('Unexpected response:', res);
        }
      })
      .catch((error) => {
        toast.error('Error:', error);
      });
  };


  return (
    <Box className=''>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </Box>
  );
};

export default Admin;

