import React, { useState , useEffect} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import img1 from '../images/remai.png'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
    width: "60%",
    margin: "auto",
    marginTop: "20px",
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  media: {
    height: 150,

  },
  
  paper: {
    margin: theme.spacing(18, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  btnGroup: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    width: "90%",
  },
  CardContent:{
    textAlign: "center"
  },
  card:{
    width: "60%",
    margin: "auto",
    marginTop: "20px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const initialState = {
  amount: "",
  status: "",
  errors: {
    amount: "",
    status: "",
  },
};

const Dashboad = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const { useState } = React;
  const [data, setData] = useState();
  const [count, setCount] = useState();
  const [sum, setSum] = useState();

  const [state, setState] = useState({
    amount: "",
    status: "",
    errors: {
      amount: "",
      status: "",
    },
  });
 const Lizard ="200";

 useEffect(() => {
  const getFileList = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/tokensum`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
      });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  getFileList();
}, );

useEffect(() => {
  const getFileList = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/tokenpaidcount`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
      });
      setCount(data);
    } catch (error) {
      console.log(error);
    }
  };

  getFileList();
}, );

useEffect(() => {
  const getFileList = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/tokenpaidsum`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
      });
      setSum(data);
    } catch (error) {
      console.log(error);
    }
  };

  getFileList();
  console.log(sum);
}, );

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <br />
          <Typography component="h1" variant="h5">
            Welcome to the Dashboard
          </Typography>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img1}
          title="Contemplative Reptile"
        />

      </CardActionArea>
      <br></br>
      <Button
            className={classes.navigat}
            fullWidth
            variant="contained"
            href="/signin"
          >
          Log Out
          </Button>
 
    </Card>
        </div>
      </Grid>
    </Grid>
  );
};

export default Dashboad;
