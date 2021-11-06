import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';


export default function Create() {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
        }
        if (details == '') {
            setDetailsError(true)
        }
        if (title && details) {
            console.log(title, details)
        }
    }

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom

            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWith
                    required
                    error={titleError}
                />
                <TextField
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDetails(e.target.value)}
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWith
                    required
                    error={detailsError}
                />
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form >
        </Container>


    )
}
