// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set} from '@redwoodjs/router'

import ApplicationsLayout from 'src/layouts/ApplicationsLayout'

import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ApplicationsLayout}>
        <Route path="/applications/new" page={ApplicationNewApplicationPage} name="newApplication" />
        <Route path="/applications/{id:Int}/edit" page={ApplicationEditApplicationPage} name="editApplication" />
        <Route path="/applications/{id:Int}" page={ApplicationApplicationPage} name="application" />
        <Route path="/applications" page={ApplicationApplicationsPage} name="applications" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
