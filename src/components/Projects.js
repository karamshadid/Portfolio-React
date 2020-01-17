import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Image1 from "./Images/artificial-intelligence-3382507_640.jpg";
import Image2 from "./Images/code-2170396_640.jpg";
import Image3 from "./Images/html5-386614_640.jpg";
import Image4 from "./Images/playing-cards-4074478_640.jpg";
import Image5 from "./Images/pancakes-2291908_640.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    flexWrap: "wrap",

    overflow: "hidden"
  },
  gridList: {
    padding: 30,
    height: 650
  }
}));

export default function ImageGridList() {
  const classes = useStyles();

  const tileData = [
    {
      title: "JavaScipt",
      img: Image1,
      url: "https://github.com/karamshadid/Quiz-game"
    },
    {
      title: "React",
      img: Image2,
      url: "https://github.com/karamshadid/Weather-app"
    },
    {
      title: "Html/CSS",
      img: Image3,
      url: "  https://github.com/karamshadid/Study-Dairy"
    },
    { title: "Gaming", img: Image4, url: "https://github.com/karamshadid" },
    { title: "recipes", img: Image5, url: "https://github.com/karamshadid" }
  ];

  return (
    <div className={classes.root}>
      <div className="projects">
        <h2 id="project-title">PROJECTS</h2>
        <GridList cellHeight={280} className={classes.gridList} cols={5}>
          {tileData.map(tile => (
            <GridListTile
              className="gridImg"
              key={tile.img}
              cols={tile.cols || 1}
            >
              <a href={tile.url}>
                {" "}
                <div className="img_title" onClick={window.location.href}>
                  {tile.title}
                </div>
              </a>
              <a className="" href={tile.url}>
                <img
                  onClick={window.location.href}
                  src={tile.img}
                  alt={tile.title}
                />{" "}
              </a>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
