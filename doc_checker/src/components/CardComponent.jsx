import * as React from 'react';

import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';





export default function CardCompoent(props) {
  return (
    <Card sx={{  backgroundColor: '#E4E6EA', fontSize: '14px', margin: '10px', marginLeft: '0px', borderRadius: '18px', ...props.styling }}> 
        <CardActionArea 
        {...(props.isReviewBox ? { onClick: () => {props.jumpToHighlightArea(props.note.highlightAreas[0])}} : {})}
        >
            <CardHeader
                    avatar={ 
                    props.img ? 
                    <img
                        src={props.img}
                        alt={props.name}
                        loading="lazy"
                    /> :
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="name">
                        {props?.name?.charAt(0)}
                    </Avatar>
                    }
                title={
                    <Typography sx={{fontWeight: 'bold'}}>
                    {props.name}
                    </Typography>
                }
                    subheader={
                    <Typography sx={{color: '#9CA3AF'}}>
                        {props.isReviewBox ? props.note?.date : props.getDate()}
                    </Typography>
                    }
                />
        {props.children}
        </CardActionArea>
    </Card>
  );
}