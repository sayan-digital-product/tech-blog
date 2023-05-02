import Paper from '@mui/material/Paper';
import React, { FormEvent, useRef } from 'react';
import emailjs from "@emailjs/browser";

import style from './contact.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';

export default function Contact() {

    const form = useRef<HTMLFormElement>();
    const [alert, setAlert] = React.useState({
        color: "",
        icon: "",
        message: ""
    });

  const { register, handleSubmit, control, formState: {errors}, reset } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    const current = form.current || '';

    emailjs
      .sendForm(
        serviceId,
        templateId,
        current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert(successAlert);
        },
        (error) => {
          console.log(error.text);
          setAlert(errorAlert);
        }
      );
  }

  const successAlert = {
    color: "success",
    icon: "ni ni-like-2",
    message: " Your message has been sent successfully!",
  };

  const errorAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: " Oops! Something went wrong. Please try again later.",
  };

  const resetForm = (e: any) => {
      const defaultForm = {
          name: "",
          email: "",
          reason: "",
          message: ""
      }
  }

    return(
        <>
            <section className={`contact-container grid grid-cols-12 gap-4 m-8`}>
                <div className="col-span-3"></div>
                <Paper elevation={0} className={`grid col-span-6 bg-cardBackground border border-solid border-pegasus-200 ${style.formContainer}`}>
                    <div className='contact-form-container'>
                        <div className=''>
                            <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '96%' },
                            }}
                            noValidate
                            autoComplete="off"
                            className={`m-4 ${style.formWrapper}`}
                            ref={form}
                            onSubmit={handleSubmit(onSubmit)}
                            >
                                    <div className='grid justify-center'>
                                        <Typography variant='h6' className='secondary-text'>
                                            Please fill in the below details
                                        </Typography>
                                    </div>
                                    <div className='mt-12'>
                                      <Controller
                                        control={control}
                                        name="name"
                                        defaultValue=""
                                        render={({ field }) => 
                                          <TextField
                                            {...field}
                                            id="user-name"
                                            label="Name"
                                            error={!!errors.name}
                                            helperText={errors.name ? "Please provide input" : ''}
                                            required
                                            />
                                        }
                                      />
                                      <Controller
                                        control={control}
                                        name="email"
                                        defaultValue=""
                                        render={({ field }) => 
                                        <TextField
                                        {...field}
                                        id="user-email"
                                        label="Email"
                                        placeholder="Email id"
                                        type="email"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        helperText={errors.email ? "Please provide input" : ''}
                                        required
                                        />
                                      } />
                                      <Controller 
                                        name={'reason'}
                                        control={control}
                                        defaultValue=""
                                        render={({field}) => 
                                        <>
                                          <FormControl sx={{ m: 1, minWidth: '96%' }} size="small">
                                           <InputLabel id="demo-select-small-label">Reason</InputLabel>
                                            <Select
                                                {...field}
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                label="Reason"
                                                error={!!errors.reason}
                                                required
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
                                        </>
                                      }
                                      />
                                      <Controller 
                                        name="message"
                                        control={control}
                                        render={({field}) => 
                                        <TextField
                                        {...field}
                                        id="user-message"
                                        label="Message"
                                        type='textarea'
                                        multiline
                                        rows={5}
                                        />
                                    }/>
                                    </div>
                                    <div className="action-buttons flex justify-end mt-4 mb-8">
                                        <Button type="submit" variant="contained" size="medium" className='m-4 bg-gremlin-50 hover:bg-gremlin-200'>Submit</Button>
                                        <Button variant="contained" size="medium" className='m-4 bg-gremlin-900 hover:bg-pegasus-700'onClick={() => {
                                                reset(formValues => ({
                                                  ...formValues, 
                                                  name: '', 
                                                  email: '',
                                                  reason: '',
                                                  message: ''
                                                }))
                                              }}
                                        >Reset
                                        </Button>
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