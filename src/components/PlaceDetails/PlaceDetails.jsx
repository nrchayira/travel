import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';

const PlaceDetails = ({place, selected, refProp}) => {

    if(selected) refProp?.current?.scrollIntoView({behavior: 
    "smooth", block: "start"})
    const classes= useStyles();

    return(
        <Card elevation ={6}>
            <CardMedia
            style={{height:300}}
            image={place.photo? place.photo.images.large.url:''}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                <Rating value={Number(place.rating)} readOnly />
                    <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottomvariant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Ranking</Typography>
                    <Typography gutterBottomvariant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) =>(
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src ={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                     </Box>   

                ))}
                {place?.cuisine?.map(({name}) =>(
                    <Chip key={name} size="small" label={name} className={classes.chip} />

                ))}
                {place?.address &&(
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                  {place?.phone &&(
                    <Typography gutterBottom variant="boody2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon />{place.phone}
                    </Typography>
                  )}
                  </CardContent>
                  <CardActions>
                  <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>

                  </CardActions>
        </Card>
    );
};

export default PlaceDetails ;