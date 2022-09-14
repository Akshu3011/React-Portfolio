import React, {useRef} from "react";
import "./Projects.css";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import "./Contact.css";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form=useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ex5e1qh', 'template_xqpqwv6', form.current, 'bgLvyCNGl1YAc15hJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <span className="line"></span>
        <div className="content">
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
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
                  name="from_name"
                />
                <TextField
                  id="standard-helperText"
                  helperText="Email"
                  variant="standard"
                  name="user_email"
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
                name="message"
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
