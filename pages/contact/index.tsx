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

    const [reason, setReason] = React.useState('Casual connect');

    const handleChange = (event: SelectChangeEvent<string>): void => {
        console.log("Selected value", event);
        setReason(event?.target?.value);
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
                                    />
                                    <TextField
                                    id="user-email"
                                    label="Email"
                                    placeholder="Email id"
                                    />
                                    <FormControl sx={{ m: 1, minWidth: '96%' }} size="small">
                                        <InputLabel id="demo-select-small-label">Reason</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={reason}
                                            label="Age"
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
                                    multiline
                                    rows={5}
                                    />
                                </div>
                                <div className="action-buttons flex justify-end mt-4 mb-8">
                                    <Button variant="contained" size="medium" className='m-4 bg-teal-900'>Submit</Button>
                                    <Button variant="contained" size="medium" className='m-4 bg-error'>Reset</Button>
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