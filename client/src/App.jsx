import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import styles from './styles.module.css';
// import useStyles from './styles';
const App = () => {
    
    return (
        <Container>
            <AppBar className={styles.appBar} position="static" color="inherit">
                <Typography className={styles.heading}  variant="h2" align="center">Memories</Typography>
                <img  className={styles.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;