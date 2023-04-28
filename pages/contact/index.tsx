import Paper from '@mui/material/Paper';
import * as React from 'react';

import style from './contact.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Contact() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        reason: "",
        message: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const resetForm = (e: any) => {
        const defaultForm = {
            name: "",
            email: "",
            reason: "",
            message: ""
        }
        setFormData(defaultForm);
    }
    

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        console.log("Hello");
    }

    return(
        <>
            <section className='contact-container grid grid-cols-12 gap-4 m-8'>
                <div className="col-span-3"></div>
                <Paper elevation={4} className={`generic-border grid col-span-6 ${style.formContainer}`}>
                    <div className='contact-form-container'>
                        <div className=''>
                            <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '96%' },
                            }}
                            noValidate
                            autoComplete="off"
                            className={`m-4 generic-border ${style.formWrapper}`}
                            >
                                <div className='grid justify-center'>
                                    <Typography variant='h6' className='secondary-text'>
                                        Please fill in the below details
                                    </Typography>
                                </div>
                                <div className='mt-12'>
                                    <TextField
                                    id="user-name"
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    />
                                    <TextField
                                    id="user-email"
                                    label="Email"
                                    placeholder="Email id"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                    <FormControl sx={{ m: 1, minWidth: '96%' }} size="small">
                                        <InputLabel id="demo-select-small-label">Reason</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={formData.reason}
                                            label="Age"
                                            name="reason"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'Casual connect'}>Casual connect</MenuItem>
                                            <MenuItem value={'Strategic discussion'}>Strategic discussion</MenuItem>
                                            <MenuItem value={'Specific problem'}>About specific problem</MenuItem>
                                            <MenuItem value={'Other'}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                    id="user-message"
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline
                                    rows={5}
                                    />
                                </div>
                                <div className="action-buttons flex justify-end mt-4 mb-8">
                                    <Button variant="contained" size="medium" className='m-4 bg-teal-900' onClick={(event) => handleSubmit(event)}>Submit</Button>
                                    <Button variant="contained" size="medium" className='m-4 bg-error' onClick={(event) => resetForm(event)}>Reset</Button>
                                </div>
                            </Box>
                        </div>
                    </div>
                </Paper>
                <div className="col-span-3"></div>
            </section>
        </>
    )
}