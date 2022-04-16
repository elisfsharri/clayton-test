import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  craft: {
    borderBottom: 'solid rgba(0, 0, 0, 0.2) 0.1px',
    marginBottom: 1,
    backgroundColor: 'white',
    transition: 'ease',
    textAlign: 'left'
  },
  craftList: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 5
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'lightgrey'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'grey',
      borderRadius: 20
    }
  },
  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'right'
  },
  pagination: {
    '& .MuiPaginationItem-icon': {
      border: '2px solid #5F2EEA',
      borderRadius: 15
    },
    '& .Mui-selected': {
      fontWeight: 'bold'
    },
    margin: 10
  }
}))

export default useStyles