import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axiosInstance from "../axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Select, FormControl, InputLabel, MenuItem, Modal, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const HomePage = () => {
  const [fields, setFields] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  var filtered = fields;

  useEffect(() => {
    axiosInstance.get("/field")
      .then(response => {
        setFields(response.data)
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })

    axiosInstance.get("/location")
      .then(response => {
        setLocations(response.data)
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  if (selectedLocation !== "") {
    filtered = fields.filter(field => {
      return field.locationDTO.name === selectedLocation;
    });
  } else {
    filtered = fields;
  }

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
    console.log(selectedLocation)
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg">
      <Navbar></Navbar>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FormControl sx={{ width: "500px", marginTop: "2em" }}>
          <InputLabel id="select-location-label">Please enter a location</InputLabel>
          <Select
            labelId="select-location-label"
            id="select-location"
            defaultValue=''
            value={selectedLocation ?? ''}
            label="Location"
            onChange={handleChange}
          >
            {
              locations.map(location => (
                <MenuItem
                  key={location.name}
                  value={location.name}
                >{location.name}
                </MenuItem>
              ))
            }

          </Select>
        </FormControl>
      </div>
      {
        filtered.map(field => (
          <Card sx={{ maxWidth: 500, margin: 'auto', marginTop: '2em', marginBottom: '2em' }}>
            <CardMedia
              sx={{ height: 250 }}
              image='field-prototype.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {field.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOnIcon sx={{ marginBottom: "-0.25em" }}></LocationOnIcon>
                {field.locationDTO.name}, {field.locationDTO.street}, {field.locationDTO.number}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Reserve</Button>
              <Button size="small" onClick={handleOpen}>Select date</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="select-date-title"
                aria-describedby="select-date-description"
              >
                <Box sx={style}>
                  <Typography id="select-date-title" variant="h6" component="h2">
                    Please select a date
                  </Typography>
                  <div id="select-date-description">
                  <DatePicker />
                  </div>
                </Box>
              </Modal>
            </CardActions>
          </Card>
        ))
      }
    </div>
  )

}

export default HomePage;