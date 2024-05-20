
export const NavBar = () => {
  return (
    <nav>

      <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className='navbar-brand'>
          <i className='fas fa-calendar-alt'></i>
          &nbsp; Leo
        </span>

        <button className='btn btn-outline-danger'>
          <i className="fas fa-sign-out-alt"></i>
          <span> &nbsp; Salir</span>
        </button>

      </div>

    </nav>
  )
}
