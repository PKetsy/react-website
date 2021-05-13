import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import HireEats from "../images/HireEats.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            style={{ width: "80vh", height: "100%", objectFit: "cover" }}
            alt="brand"
          />
        </Grid>
        {/* creating flex container */}
        <Grid
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <img src={HireEats} width={250} alt="logo" />
            </Grid>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{
                startAdorment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              type="password"
              margin="normal"
              InputProps={{
                startAdorment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button color="primary" variant="contained">
              Log in!
            </Button>
            <div style={{ height: 20 }} />
            <Link to="/create-account">
              <Button color="red" variant="contained">
                Interested in Joining?
              </Button>
            </Link>
          </div>

          <div style={{ height: 20 }} />
          <Button color="red" variant="text">
            Forgot Password?
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
