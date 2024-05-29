import { Box, Typography } from "@mui/material";

const MemInformation = () => {
  return (
    <Box>
      <Typography>Total size of database [byte]: 262140</Typography>
      <Typography>Free size of database [byte]: 219141</Typography>
      <Typography>Filled size of database [byte]: 42999</Typography>
    </Box>
  );
};

export default MemInformation;
