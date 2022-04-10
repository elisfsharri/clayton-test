import { FC } from 'react'
import { Container } from '@material-ui/core'
import useStyles from './Styles/Styles'
import Craft from './Craft'

type CraftListProps = {
  data: any
}

const CraftList: FC<CraftListProps> = ({data}) => {

  const classes = useStyles()

  const dataArray = data.map((entry: {name: string},i: number) => {
    return <Craft name={entry.name} key={i}/>
  })

  return (
      <Container className={classes.craftList}>
        {dataArray}
      </Container>
  )
}

export default CraftList
