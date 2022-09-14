import React from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import "./Contact.css";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <span className="line"></span>
        <div className="content">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 }, '& .MuiTextField-root': { m: 1, width: '25ch' },
              
            }}
            noValidate
            autoComplete="off"
          >
            <div>
            <div>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  id="standard-helperText"
                  helperText="Name"
                  variant="standard"
                />
                <TextField
                  id="standard-helperText"
                  helperText="Email"
                  variant="standard"
                />
              </Stack>
              </div>
              <div>
                <Stack sx={{ '& .MuiTextField-root': { m: 1, width: '52ch' }}}
                spacing={2}
                justifyContent="center"
                alignItems="center">
                <TextField
                fullWidth
                helperText="Message"
                id="fullWidth"
                multiline
                rows={4}
                variant="standard"
              />
               <Link to='about' spy={true} smooth={true} offset={0} duration={500}>
                <button  className='button'>Send Message</button>
                </Link>
 
                </Stack>
              </div>
              </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contact;
