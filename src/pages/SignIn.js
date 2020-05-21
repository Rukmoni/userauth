import React, {useState} from "react";
import { Link } from "react-router-dom";
import { auth,provider} from '../firebase';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Container,
    Avatar,
    CssBaseline,
 
    Typography,
    FormControlLabel,
    Checkbox,
    Grid,
    Button,
    TextField
  } from '@material-ui/core';
  import { makeStyles } from '@material-ui/styles';
  import { Topbar } from '../layouts/Main/components';

  
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
const SignIn = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
               auth.createUserWithEmailAndPassword("ruk@gmail.com", "12345678")
               .then(res => {
                 if (res.user) auth.setLoggedIn(true);
               })
               .catch(e => {
                 console.log("Errpr om signup"+e)
               });
    };

    const classes = useStyles();
    const signInWithGoogle=(event)=>{
        event.preventDefault();
        auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          console.log(user);
        });

    }


      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

  return (
    <Container component="main" maxWidth="xs">
        <Topbar/>
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
            
          </Grid>
        </Grid>
      </form>
    </div>
   
  </Container>
  );
};
export default SignIn;