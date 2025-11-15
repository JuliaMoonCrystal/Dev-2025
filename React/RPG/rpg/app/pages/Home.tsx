"use client";
import * as React from 'react';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';
import { useRouter } from 'next/navigation';

const cards = [
    {
        id: 1,
        title: 'Crie sua ficha de personagem 🚀',
        description: 'Plants are essential for all life.',
        image: '/static/cards/dragon.png',
        path: '/pages/character-sheet'
    },
    {
        id: 2,
        title: 'Animals',
        description: 'Animals are a part of nature.',
        image: '/static/cards/dragon.png',
        path: '/CharactherSheet'
    },
    {
        id: 3,
        title: 'Humans',
        description: 'Humans depend on plants and animals for survival.',
        image: '/static/cards/dragon.png',
        path: '/CharactherSheet'
    },
];

export default function Home() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    const router = useRouter();
    return (
        <>
            <NavBar />
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(450px, 100%), 2fr))',
                    gap: 5,
                    marginTop: '30px',
                    marginLeft: 'auto',
                }}
            >
                {cards.map((card, index) => (
                    <Card key={index}>
                        <CardMedia
                            component="img"
                            height="550"
                            image={card.image}
                            alt="green iguana"
                        />
                        <CardActionArea
                            data-active={selectedCard === index ? '' : undefined}
                            onClick={() => {
                                setSelectedCard(index);
                                router.push(card.path);
                            }}
                            sx={{
                                height: '100%',
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                    '&:hover': {
                                        backgroundColor: 'action.selectedHover',
                                    },
                                },
                            }}
                        >
                            <CardContent sx={{ height: '100%' }}>
                                <Typography variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </>
    );
}