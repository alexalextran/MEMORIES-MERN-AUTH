import React, { useState } from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, Icon} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input';
import {GoogleLogin} from '@react-oauth/google'
import { useDispatch } from 'react-redux';


const Auth = () => {
    const classes = useStyles()
    const [showPassword, setshowPassword] = useState(false);
    const [isSignup, setisSignup] = useState(false);
    const handleSubmit = () => {

    }

    const handleShowPassword = () => {
        setshowPassword(!showPassword)
    }

    const handleChange = () => {
    }

    const googleSuccess = async (res) => {
        console.log(res)
    }
    const googleFailure = (error) => {
        console.log(error)
        console.log("sign in was unsuccsessful")
    }

    
    return (
        <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              { isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              { isSignup ? 'Sign Up' : 'Sign In' }
            </Button>
            <GoogleLogin render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth={true} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"/>
            <Grid container justifyContent="flex-end" >
                <Grid item>
                    <Button onClick={() => {setisSignup(!isSignup)}}>{
                        isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"
                    }</Button>
                </Grid>

            </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;
