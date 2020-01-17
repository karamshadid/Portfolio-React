import React from "react";
import Avatar from "./Avatar.gif";
import "bootstrap/dist/css/bootstrap.min.css";

class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (
      <div id="app" className={`container ${collapsed ? "collapsed" : ""}`}>
        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

        <div className="overlay-menu">
          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <h2 className="aboutMe">About me </h2>

        <div className="row-sorting">
          <img src={Avatar} alt="avatar" />
          <ul className="skills">
            {skills.map((skill, index) => (
              <li
                key={skill.type}
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: `hsl(${hue}, ${saturation}%, ${100 /
                    (index + 3.5)}%)`
                }}
              >
                <p>
                  {skill.type}
                  <span>{skill.level}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="row-sorting">
          <p id="about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            assumenda perferendis velit facilis, id in vitae quaerat neque
            veritatis repellendus. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio, quod deleniti. Sint perspiciatis at
            laborum! Deserunt ad dolor dolore earum numquam necessitatibus
            aliquam aut ex, obcaecati modi ab nesciunt temporibus?
          </p>
        </div>
      </div>
    );
  }
}

export default SkillBars;
