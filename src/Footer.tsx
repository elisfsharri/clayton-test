import { FC, ChangeEvent } from 'react'
import useStyles from './Styles/Styles'
import Select from '@material-ui/core/Select'
import Pagination from '@material-ui/lab/Pagination'

type FooterProps = {
  pageNumber: number;
  changePageNumber: (event: React.ChangeEvent<unknown>, page: number) => void;
  pageSize: number;
  changePageSize: any;
  lastPage: number;
}

const Footer: FC<FooterProps> = ({
  pageNumber,
  changePageNumber,
  pageSize,
  changePageSize,
  lastPage
}) => {

  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Select
        native
        color='secondary'
        value={pageSize}
        onChange={changePageSize}
        inputProps={{style: {width: '2rem' }}}
      >
        <option value={5} >5</option>
        <option value={10} >10</option>
        <option value={15} >15</option>
        <option value={20} >20</option>
        <option value={25} >25</option>
        <option value={50} >50</option>
        <option value={75} >75</option>
        <option value={100} >100</option>
      </Select>
      <Pagination 
        className={classes.pagination}
        page={pageNumber}
        count={lastPage}
        defaultPage={1}
        onChange={changePageNumber}
      />
    </div>     
  )
}

export default Footer