import UserApi from '../UserApi'
import { Route, Redirect } from '../react-router-dom'

function Protected (props) {
  const { path, component: RouteComponent } = props

  return (
    <Route
      path={path}
      render={routeProps => {
        const isLogin = UserApi.isLogin()
        if (isLogin) {
          return <RouteComponent {...routeProps} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: path } }} />
        }
      }}
    />
  )
}

export default Protected
