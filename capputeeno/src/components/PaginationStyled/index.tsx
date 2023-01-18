export const PaginationStyled = () => {
  return (
    <Box
      style={{
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '21px',
        marginBottom: '21px',
      }}
    >
      <Pagination
        count={2}
        shape="rounded"
        onChange={(_e, value) => {
          setCurrentPage(value);
          handlePagined(value);
        }}
        defaultPage={currentPage}
      />
    </Box>
  );
};
