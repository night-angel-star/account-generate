import * as React from "react";

import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
  Box,
} from "@mui/material";
import AccountSetting from "./CustomizeForm/AccountSetting";

import { Add } from "@mui/icons-material";

export const CustomizeForm = () => {
  const [data, setData] = React.useState([
    { mainCategory: "", count: 0, skills: [] },
  ]);

  const handleSetData = (index, newData) => {
    let tempData = [...data];
    tempData[index] = newData;
    setData(tempData);
  };
  const handleAddData = () => {
    setData([...data, { mainCategory: "", count: 0, skills: [] }]);
  };
  const handleDeleteData = async (i) => {
    const newData = await data.reduce((accumulator, currentValue, index) => {
      if (index !== i) {
        return [...accumulator, currentValue];
      } else return accumulator;
    }, []);

    setData(newData);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customize your accounts
      </Typography>
      <Grid container spacing={3}>
        {data.map((d, i) => (
          <Grid item xs={12} key={i}>
            <AccountSetting
              i={i}
              data={d}
              setData={handleSetData}
              onDelete={handleDeleteData}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton aria-label="plus" onClick={handleAddData}>
              <Add />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveCustomize" value="yes" />
            }
            label="Use this customize as default profile"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CustomizeForm;
