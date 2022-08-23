
<Container sx={{display: 'flex',justifyContent: 'center', alignSelf:'center',}}>
<Box component="form"
  sx={{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
     justifyItems:'center',
     justifyTracks:'center',
alignSelf:'center',
    flexWrap: 'wrap',
    '& > :not(style)': {
     
      width: 528,
      height: 500,
    },

  }}
>
  <Paper variant="outlined" sx={{ justifyContent: 'center', alignSelf: 'center', border: '3.5px solid #FFD700' }}>
    <Typography variant="h3" sx={{ margin: '15px', fontSize: '30px' }}>Sign In to Availo</Typography>
    <Typography variant="subtitle1" sx={{ margin: '15px', color: 'GrayText', fontStyles: 'serif' }}>Enter Your Details Below</Typography>
    <Box sx={{ width: 500, ml: 'auto', mr: 'auto', maxWidth: '100%', alignSelf: 'center', fontSize: '20px' }}> <TextField fullWidth label="Email address" id="fullWidth" /></Box>
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: '100%', alignSelf: 'center', fontSize: '20px'}}>
      <FormControl sx={{ width: '40ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end" >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

     <Box sx={{flexGrow:1}}>
     <div><Checkbox />Remember me  <div>Forgot password?</div></div>
     </Box>
    </Box>

  

  </Paper>
</Box>
</Container>