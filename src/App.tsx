import { SetStateAction, useEffect, useState } from 'react'
import { ThemeProvider, Container, Typography, TextField } from '@material-ui/core'
import Theme from './Styles/Theme'
import useStyles from './Styles/Styles'
import CraftList from './CraftList'
import Footer from './Footer'

function App() {

  const classes = useStyles()

  const [data, setData] = useState([])
  const [update, setUpdate] = useState(false)
  const [craftName, setCraftName] = useState('')
  const [pageSize, setPageSize] = useState(25)
  const [pageNumber, setPageNumber] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  const handleSearch = async () => {
    const url = `http://stapi.co/api/v1/rest/spacecraft/search?name=${craftName}&pageSize=${pageSize}&pageNumber=${pageNumber-1}`
    const result = await fetch(url, {method: 'post'})
    const input = await result.json()
    setLastPage(input.page.totalPages)
    setData(input.spacecrafts)
  }

  useEffect(() => {handleSearch()}, [update])

  const onNameChange = (event: { target: { value: SetStateAction<string> } }) => {
    if (pageNumber>1) {setPageNumber(1)}
    setCraftName(event.target.value)
    setUpdate(!update)
  }

  const changePageSize = (event: { target: { value: SetStateAction<number> } }) => {
    setPageSize(Number(event.target.value))
    setUpdate(!update)
  }

  const changePageNumber = (event: any, value: number) => {
    if (pageNumber>0){
      setPageNumber(Number(value))
      setUpdate(!update)
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.app}>
        <Container  className={classes.header}>
          <TextField 
            variant='outlined'
            label='Search'
            onChange={onNameChange}
            />
        </Container>
        <Typography variant='h4'>
          Star Trek Spacecrafts
        </Typography>
        <CraftList data={data}/>
        <Footer 
          pageNumber={pageNumber}
          pageSize={pageSize}
          changePageNumber={changePageNumber}
          changePageSize={changePageSize}
          lastPage={lastPage}
        />
      </Container>
    </ThemeProvider>
  )
}

export default App
