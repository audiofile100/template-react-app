import {Link} from "react-router-dom";
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";

export const Login = () => {
    const [username, setUsername] = useState("");

    const handleSubmit = () => {
        console.log("LOGIN-FORM: CLICKED LOGIN BUTTON");
    }

    return (
        <Container maxWidth={"xs"} sx={{ paddingTop: "220px", alignItems: "center"}}>
            <Box
                component={"form"}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <TextField margin={"normal"} required fullWidth id={"username"} onChange={(e) => setUsername(e.target.value)} value={username} placeholder={"username"} />
                <Button type={"submit"} fullWidth variant={"contained"} sx={{ mt: 3 }} onClick={handleSubmit}>Login</Button>
            </Box>
            <Grid container sx={{ mt: 1 }} spacing={2}>
                <Grid item>
                    <Typography variant={"caption"}>Don't have an account yet?</Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"caption"}><Link to={"/register"}>Register</Link></Typography>
                </Grid>
            </Grid>
        </Container>
    )
}