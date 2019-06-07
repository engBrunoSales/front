import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, Button, Grid, Card, CardActions, CardContent, CardMedia, Container} from "@material-ui/core";
import Logo from "../assets/images/octo-ead-2-coral.fw.png";

const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "#222931",
    padding: "100px 10px",
  },
  barDark:{
    background: "#464646",
  },
  bigLogo: {
    width: 60,
    height: 60,
    marginRight: "10px",
  },
  button:{
    backgroundColor: "white",
  },
  card:{
    backgroundColor: "transparent",
    border: "3px solid #464646",
    textAlign: "center",
    color: "#fff",
  },
  cardMedia:{
    height: "100px",
    marginTop: "15px",
  },
  heroContainer:{
    marginBottom: "50px",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "2rem",
  },
});

const cards = [1,2,3,4,5,6]; 

export const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}> 

      <AppBar position="fixed" className={classes.barDark}>
        <Toolbar>
          <img alt="octo-ead" src={Logo} className={classes.bigLogo} />
          <Typography className={classes.title}>
            OctoEAD
          </Typography>
          <Button variant="contained" className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>

      <Container className={classes.heroContainer}>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          OctoEAD
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. 
        </Typography>
        <Button variant="contained" className={classes.button}>
          Accesar comunidade
        </Button>
      </Container>
      
      <Grid container spacing={4}>
        {cards.map(card => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <img alt="octo-ead" src={Logo} className={classes.cardMedia}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Title course
              </Typography>
              <Typography component="p">
                Descripcion of course.
              </Typography>
            </CardContent>
            <CardActions>
              <Button fullWidth variant="contained" className={classes.button}>Go do it</Button>     
            </CardActions>
          </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
};
