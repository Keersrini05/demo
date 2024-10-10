import React from 'react'
import './Body.css'
//import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
const Body = () => {
    const theme = useTheme();
    return (
        <div>
            <div className='sec'>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                sx={{ color: 'text.secondary' }}
                            >
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/static/images/cards/live-from-space.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
                <center>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mtbllX145Nn1TG0tg0787skL9pahigj9jA&s" alt="image" height='200px' width="200px" ></img>
                </center>
            </div>
            <div>
                <p>
                    The word 'Kongu' refers to a region of the southern state of India and the term 'Kongu Vellalar' specially means the agricultural community, predominated in the west of Tamilnadu, which was deprived of educational facility in those days. To achieve technical excellence in their rural areas, 41 philanthropists from different walks of life who realized the need for technical education for their region's economic strides, formed collectively a Trust called 'The Kongu Vellalar Institute of Technology Trust' and they tried to promote and develop equality of opportunity for the rich and the poor. Affiliated to Anna University Chennai,the college has completed more than three decades of dedicated service to the people of India and abroad in the field of Technical Education. The Institution has an area of 167 acres of land richly endowed with beautiful greeneries. The college with its state-of- the- art infrastructural facilities and excellent academic records has earned recognition as one of the reputed educational institutions for men and women in India.
                </p>
            </div>

        </div>
    )
}

export default Body