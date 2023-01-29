import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarBorderRoundedIcon from '/node_modules/@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '/node_modules/@mui/icons-material/StarRounded';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#344050',
    },
});

export default function Stars(props) {
    return (
        <Box color="primary">
            <StyledRating
                value={props.stars}
                readOnly
                icon={<StarRoundedIcon sx={{ fontSize: 40 }} />}
                emptyIcon={<StarBorderRoundedIcon sx={{ fontSize: 40 }} />}
            />
        </Box>
    );
}