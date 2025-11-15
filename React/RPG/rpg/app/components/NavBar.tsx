import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function NavBar() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    const router = useRouter();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='error'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => {

                        router.push('/');
                    }}>
                        Asas de Ebáno
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}