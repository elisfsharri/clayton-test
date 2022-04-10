import { FC } from 'react'
import { Box, Typography, Divider } from '@material-ui/core'
import useStyles from './Styles/Styles'

type CraftProps = {
  name: string
}

const Craft: FC<CraftProps> = ({name}) => {

  const classes = useStyles()

  return (
      <Box className={classes.craft}>
        <Typography variant='body2'>
          {name}
        </Typography>
        <Divider />
      </Box>
  )
}

export default Craft
