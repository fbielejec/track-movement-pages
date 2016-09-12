import React, {Component, PropTypes} from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 500,
        height: 500,
        overflowY: 'auto',
        marginBottom: 24
    }
};

const tilesData = [
    {
        img: 'images/connect1.png',
        title: 'title1',
        text: 'text1',
    }, {
        img: 'images/connect2.png',
        title: 'title2',
        text: 'text2',
    }, {
        img: 'images/connect3.png',
        title: 'title3',
        text: 'text3',
    }, {
        img: 'images/connect4.png',
        title: 'title4',
        text: 'text4',
    }
];

class Connecting extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList cellHeight={200} style={styles.gridList}>
                    {tilesData.map((tile) => (
                        <GridTile
                             key={tile.img}
                             title={tile.text}
                             subtitle={tile.text}
                             actionIcon={<IconButton > <StarBorder color="white"/> </IconButton>}>
                            <img src={tile.img}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }

}

export default Connecting;
