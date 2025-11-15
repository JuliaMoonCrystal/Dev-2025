'use client';
import * as React from 'react';
import { useState } from 'react';
import NavBar from '@/app/components/NavBar';
import { Box, Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function CharactherSheet() {
    const [type, setType] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    return (
        <>
            <NavBar />
            <Card sx={{ minWidth: 275, marginTop: '30px', marginLeft: '450px', width: '50%' }} >
                <CardContent>

                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 40, textAlign: 'center', fontFamily: 'fantasy', backgroundColor: 'red' }} >
                        Ficha de personagem
                    </Typography>

                    <FormControl fullWidth>
                        <Box sx={{ minWidth: 20, maxWidth: 400 }}>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 15, fontFamily: 'fantasy', }}>
                                Escolha o estilo de rpg
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Medieval"}>Medieval</MenuItem>
                                    <MenuItem value={"Cyberpunk"}>Cyberpunk</MenuItem>
                                    <MenuItem value={"Horror"}>Horror</MenuItem>
                                    <MenuItem value={"Faroeste"}>Faroeste</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2, 
                                marginTop: 5,
                                maxWidth: 800,
                                flexWrap: 'wrap',
                            }}
                        >
                            <Box>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 15, fontFamily: 'fantasy' }}>
                                    Nome do personagem
                                </Typography>
                                <TextField id="outlined-basic" label="" variant="outlined" sx={{ width: 400 }} />
                            </Box>

                            <Box>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 15, fontFamily: 'fantasy' }}>
                                    Idade
                                </Typography>
                                <TextField id="outlined-basic" label="" variant="outlined" sx={{ width: 400 }} />
                            </Box>
                        </Box>


                    </FormControl>

                </CardContent>
            </Card>
        </>
    );
}
