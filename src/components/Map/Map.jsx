import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';


const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('min-width:600px');
    
 

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyByKm7JNmt8iMY7I_JlYvqkR6H_G93lSlE'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) =>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                    
                }}
                onChildClick={(child) =>setChildClicked(child)}
                >
                    {places?.map((place,i) =>(
                        <div className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                        >
                            {
                                !isDesktop ?(
                                    <LocationOnOutlinedIcon color="primary" fontsize="large" />
                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name} 
                                        </Typography>
                                        <img 
                                            className={classes.pointer}
                                            src={place.photo? place.photo.images.large.url:'https://palmjumeirah.fivehotelsandresorts.com/all-inclusive-package-five-palm-jumeirah-dubai?gclid=CjwKCAjw-sqKBhBjEiwAVaQ9a3wPN1BzgMksiKmi2tyWgL7WiOab0WYbliLVD9So2FryJ-5UOYsr_hoCJl0QAvD_BwE'}
                                            alt={place.name}
                                            />
                                        <Rating size="small" value={Number(place.rating)} readOnly />
                                        </Paper>
                                )
                            }


                    </div>
                    ))}
                     {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
                </GoogleMapReact>
        </div>
    );
};

export default Map;