import React, { useState } from 'react';
import {
    AppBar, BottomNavigation, BottomNavigationAction,
    Box,
    Button,
    Card, CardActions, CardContent,
    CardMedia,
    Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    IconButton,
    Paper, TextField,
    Toolbar,
    Typography
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';

import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.4)'
    },
    mainFeaturesPost: {
        position: "relative",
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturesPostContent: {
        position: "relative",
        color: theme.palette.common.white,
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {

    const classes = useStyles();
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={ classes.menuButton }
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={ classes.title }>Web developer Blog</Typography>
                        <Box mr={ 3 }>
                            <Button color="inherit" variant="outlined" onClick={ handleClickOpen }>Log In</Button>
                            <Dialog open={ open } onClose={ handleClose } aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Log in to see videos</DialogContentText>
                                    <TextField autoFocus margin="dense" id="name" label="Email" type="email" fullWidth/>
                                    <TextField autoFocus margin="dense" id="pass" label="Password" type="password"
                                               fullWidth/>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={ handleClose } color="primary">Cansel</Button>
                                    <Button onClick={ handleClose } color="primary">Log in</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                        <Button color="secondary" variant="contained">Sign up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Paper
                    className={ classes.mainFeaturesPost }
                    style={ { backgroundImage: `url(https://source.unsplash.com/random)` } }>
                    <Container fixed>
                        <div className={ classes.overlay }/>
                        <Grid container>
                            <Grid item md={ 6 }>
                                <div className={ classes.mainFeaturesPostContent }>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Phillip Miller
                                    </Typography>
                                    <Typography
                                        component="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci
                                        alias consequuntur delectus ducimus enim incidunt ipsum molestiae
                                        necessitatibus qui, reiciendis sequi? Cum cupiditate harum odio pariatur
                                        quae quibusdam tenetur?
                                    </Typography>
                                    <Button variant="contained" color='secondary'>
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={ classes.mainContent }>
                    <Container maxWidth="md">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Web developer blog
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores blanditiis
                            debitis ex exercitationem itaque nobis odit sed, tempore velit? Cum dolor earum harum minima
                            natus quos repudiandae veritatis vero.
                        </Typography>
                        <div className={ classes.mainButtons }>
                            <Grid container spacing={ 5 } justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={ classes.cardGrid } maxWidth="md">
                    <Grid container spacing={ 4 }>
                        { cards.map(card => (
                            <Grid item key={ card } xs={ 12 } sm={ 6 } md={ 4 }>
                                <Card className={ classes.card }>
                                    <CardMedia
                                        className={ classes.cardMedia }
                                        image="http://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={ classes.cardContent }>
                                        <Typography variant="h5" gutterBottom>
                                            Blog post
                                        </Typography>
                                        <Typography>
                                            Blog post. Web developer Blog. Web developer Blog.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                        <LayerIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )) }
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
                <BottomNavigation value={ value } onChange={ handleChange } className={ classes.root }>
                    <BottomNavigationAction label="Recents" value="recents" icon={ <RestoreIcon/> }/>
                    <BottomNavigationAction label="Favorites" value="favorites" icon={ <FavoriteIcon/> }/>
                    <BottomNavigationAction label="Nearby" value="nearby" icon={ <LocationOnIcon/> }/>
                    <BottomNavigationAction label="Folder" value="folder" icon={ <FolderIcon/> }/>
                </BottomNavigation>
                <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                    Web developer blog React js material ui site
                </Typography>
            </footer>
        </>
    );
}

export default App;
