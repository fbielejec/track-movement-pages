import React, {Component, PropTypes} from 'react'

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>TrackMovement is an open-hardware board for Arduino which can detect X and Y position movement on a flat surface.</h3>

                <h2>Purpose</h2>
                Compact form makes this board perfect for all sorts of robotics projects. Just attach it under  

                <h2>How does it work?</h2>

                <p>Board uses ADNS2083 optical camera which tracks the points of the flat surface texture as the camera lens slides over them and converts them to X/Y motion.</p>

                <h2>Features</h2>
                <ul>
                    <li>5V supply voltage</li>
                    <li>device size is XX x XX mm</li>
                </ul>

            </div>
        )
    }

}

export default About;
