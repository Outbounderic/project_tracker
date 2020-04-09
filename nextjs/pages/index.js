import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AddIcon from '@material-ui/icons/Add'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles(theme => ({

}))

export default function ProjectTracker() {
  const classes = useStyles()
  const theme = useTheme()

  const [websiteChecked, setWebsiteChecked] = useState(false)
  const [iOSChecked, setiOSChecked] = useState(false)
  const [androidChecked, setAndroidChecked] = useState(false)
  const [softwareChecked, setSoftwareChecked] = useState(false)

  return (
    <Grid container direction="column">
      <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
        <Typography variant="h1">Project</Typography>
      </Grid>
      <Grid item>
        <TextField
          placeholder="Search prject details or create a new entry."
          style={{width: "35em", marginLeft: "5em"}}
          InputProps={{
            endAdornment:
            <InputAdornment position="end">
              <AddIcon color="primary" />
            </InputAdornment>
          }}
        />
      </Grid>
      <Grid item style={{marginLeft: "5em", marginTop: "2em"}}>
        <FormGroup row>
          <FormControlLabel
            style={{marginRight: "5em"}}
            control={
              <Switch
                checked={websiteChecked}
                color="primary"
                onChange={() => setWebsiteChecked(!websiteChecked)}
              />}
            label="Websites"
            labelPlacement="start"
          />
          <FormControlLabel
            style={{marginRight: "5em"}}
            control={
              <Switch
                checked={iOSChecked}
                color="primary"
                onChange={() => setiOSChecked(!iOSChecked)}
              />}
            label="IOS"
            labelPlacement="start"
          />
          <FormControlLabel
            style={{marginRight: "5em"}}
            control={
              <Switch
                checked={androidChecked}
                color="primary"
                onChange={() => setAndroidChecked(!androidChecked)}
              />}
            label="Android"
            labelPlacement="start"
          />
          <FormControlLabel
            control={
              <Switch
                checked={softwareChecked}
                color="primary"
                onChange={() => setSoftwareChecked(!softwareChecked)}
              />}
            label="Software"
            labelPlacement="start"
          />
        </FormGroup>
      </Grid>
    </Grid>
  )
}