import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import '../styles/CommerceCarousel.scss';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
  IconButton
} from '@material-ui/core';

function Banner(props) {
  if (props.newProp) console.log(props.newProp)
  const contentPosition = props.contentPosition ? props.contentPosition : "left"
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
      <Grid item xs={12 / totalItems} key="content">
        <CardContent className="Content">
          <Typography className="Title">
            {props.item.Name}
          </Typography>

          <Typography className="Caption">
            {props.item.Caption}
          </Typography>

          <Button variant="outlined" className="ViewButton">
            View Now
          </Button>
        </CardContent>
      </Grid>
  )


  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
        <Grid item xs={12 / totalItems} key={item.Name}>
          <CardMedia
              className="Media"
              image={item.Image}
              title={item.Name}
          >
            <Typography className="MediaCaption">
              {item.Name}
            </Typography>
          </CardMedia>

        </Grid>
    )

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
      <Card raised className="Banner">
        <Grid container spacing={0} className="BannerGrid">
          {items}
        </Grid>
      </Card>
  )
}

const items = [
  {
    Name: "Electronics",
    Caption: "Electrify your friends!",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: "/images/laptop.jpg"
      },
      {
        Name: "iPhone",
        Image: "/images/girl.jpg"
      }
    ]
  },
  {
    Name: "Home Appliances",
    Caption: "Say no to manual home labour!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machines",
        Image: "/images/washing-machine.jpg"
      },
      {
        Name: "Vacuum Cleaner",
        Image: "/images/vacuum-cleaner.jpg"
      }
    ]
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "/images/living-room.jpg"
      },
      {
        Name: "Floral Vase",
        Image: "/images/flowers.jpg"
      }
    ]
  }
]

class CommerceCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true
    }

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay
    })
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators
    })
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
    })
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
    })
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation
    })
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value
    })
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value
    })
  }

  render() {
    return (
        <div style={{ marginTop: "0px", color: "#494949" }}>

          <Carousel
              className="Example"
              autoPlay={this.state.autoPlay}
              animation={this.state.animation}
              indicators={this.state.indicators}
              timeout={this.state.timeout}
              cycleNavigation={this.state.cycleNavigation}
              navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
              navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
              next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
              prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
              onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
          >
            {
              items.map((item, index) => {
                return <Banner item={item} key={index} contentPosition={item.contentPosition} />
              })
            }
          </Carousel>

        </div>

    )
  }
}

export default CommerceCarousel;