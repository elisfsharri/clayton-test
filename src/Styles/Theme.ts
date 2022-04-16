import { createTheme } from '@material-ui/core'

const Theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#5F2EEA'
    }
  }
})

Theme.props = {
  MuiInput: {
    disableUnderline: true
  }
}

Theme.overrides = {
  MuiTypography: {
    h3: {
      fontWeight: 200
    },
    h4: {
      fontSize: 32,
      fontWeight: 700
    },
    h6: {
      fontSize: 16,
      fontWeight: 600
    },
    body1: {
      fontSize: 14,
      fontWeight: 600
    },
    body2: {
      fontSize: 16,
      fontWeight: 400
    }
  },
  MuiContainer: {
    root: {
      margin: 10,
      minWidth: 400,
      borderRadius: 15
    }
  },
  MuiButton: {
    root: {
      textTransform: 'none',
      width: '100%',
      maxWidth: 220,
      minWidth: 100,
      height: 55,
      fontSize: 16,
      fontWeight: 600,
      marginLeft: 5
    }
  },
  MuiSelect: {
    root: {
      width: 70,
      margin: 10,
      fontSize: 18,
      fontWeight: 600
    }
  }
}

export default Theme