
const Footer = ({ data }) => {
  return (
    <footer className='p-4' style={{ backgroundColor: '#15B981' }}>
      <span>{`${data ? data.length : 0} locations world wild`}</span>
    </footer>
  )
}

export default Footer