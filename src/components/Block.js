import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import colors from "../constants/colors";

const Block = ({id, text}) => {
  const classes = useStyles();
  return (
    <Box className={classes.block}>
        <Typography variant="subtitle2" className={classes.id}>
            {id.padStart(3, '0')}
        </Typography>
        <Typography
            variant="body2"
            className={classes.text}
        >
            {text}
        </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  block: {
    backgroundColor: colors.gray,
    padding: '8px',
    marginBottom: '4px',
    lineHeight: '20px',
  },
  id: {
    fontSize: theme.typography.pxToRem(10),
    color: colors.blue,
    fontWeight: theme.typography.bold,
    lineHeight: '16px',
  },
}));

Block.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Block;