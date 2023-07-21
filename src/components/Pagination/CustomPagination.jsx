import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (e, newPage) => {
    onPageChange(newPage)
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '2.5rem' }}>
      <Stack spacing={2} style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', alignItems: 'center' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          shape='rounded'
          onChange={handlePageChange}
          variant='outlined'
          size='medium'
          color='error'
        />
      </Stack>
    </div>
  )
}

export default CustomPagination
