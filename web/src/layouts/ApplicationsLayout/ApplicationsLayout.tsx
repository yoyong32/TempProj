import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ApplicationLayoutProps = {
  children: React.ReactNode
}

const ApplicationsLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1>
          <Link to={routes.home()}>myApplications</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.applications()}>Applications</Link>
            </li>
          </ul>
        </nav>

        <Link
          to={routes.newApplication()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Application
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ApplicationsLayout
