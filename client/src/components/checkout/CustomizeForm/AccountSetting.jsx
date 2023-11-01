import {
  Grid,
  Autocomplete,
  TextField,
  IconButton,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { SKILLS } from "../../../constants/skill";
import DeleteIcon from "@mui/icons-material/Delete";
export const AccountSetting = (props) => {
  const { i, data, setData, onDelete } = props;

  const handleMainCategoryChange = (event) => {
    setData(i, {
      mainCategory: event.target.value,
      count: data.count,
      skills: data.skills,
    });
  };

  const handleCountChange = (event) => {
    setData(i, {
      mainCategory: data.mainCategory,
      count: event.target.value,
      skills: data.skills,
    });
  };

  const handleSkillsChange = (event, value) => {
    setData(i, {
      mainCategory: data.mainCategory,
      count: data.count,
      skills: value,
    });
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  id="mainCategory"
                  name="mainCategory"
                  label="Main Category"
                  onChange={handleMainCategoryChange}
                  fullWidth
                  value={data.mainCategory}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="count"
                  name="count"
                  label="Count"
                  type="number"
                  onChange={handleCountChange}
                  fullWidth
                  value={data.count}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  id="skills"
                  options={SKILLS}
                  getOptionLabel={(option) => option.preferredLabel}
                  defaultValue={[]}
                  filterSelectedOptions
                  value={data.skills}
                  onChange={handleSkillsChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Skills"
                      required
                      placeholder="Enter Skills"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <IconButton
                aria-label="delete"
                onClick={() => {
                  onDelete(i);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AccountSetting;
