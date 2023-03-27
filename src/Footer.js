import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className='footer__albumLogo'
                    src="data:image/jpeg;base64,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" alt="" />
                <div className="footer__songInfo">
                    <h4>No Song is Playing</h4>

                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon
                    fontSize="large"
                    className="footer__icon"
                />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer