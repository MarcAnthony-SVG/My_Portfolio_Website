import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

const Inline = {
  display: 'inline',
};

function TechnicalSkills(props) {
  const [isVisible, setVisibility] = useState(false);
  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    display: 'inline',
  });
  return (
    <div className="TechnicalSkills" style={{ backgroundColor: 'white' }}>
      <Waypoint
        scrollableAncestor={window}
        onEnter={() => {
          if (!isVisible) setVisibility(true);
          console.log('Technical Skills');
        }}
        onLeave={() => {
          if (isVisible) setVisibility(false);
        }}
      />
      <animated.h1 style={fadeAnimation}>Technical Skills</animated.h1>

      <animated.section style={fadeAnimation}>
        <div>
          <h4 style={Inline}>Front End </h4>
          <p style={Inline}>
            ​: JavaScript, HTML5, CSS3, React, Axios, Bootstrap
          </p>
          <br></br>
          <h4 style={Inline}>Back End </h4>
          <p style={Inline}>
            : Node.js, Express, MySQL, S3, D3, Graphql, Apollo-Server, PHP{' '}
          </p>
          <br></br>
          <h4 style={Inline}>Developer Tools </h4>
          <p style={Inline}>:​ React Debugger, Git, npm, Webpack, Babel </p>
        </div>
      </animated.section>
    </div>
  );
}
export default TechnicalSkills;
