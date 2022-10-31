import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from './react-router-dom'

function Home () {
  return <div>Home</div>
}

function UserDetail () {
  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  console.log('history', history)
  console.log('location', location)
  console.log('params', params)
  return <div>UserDetail</div>
}

function Post () {
  const match = useRouteMatch({
    path: '/post/:id',
    strict: true,
    sensitive: true
  })
  console.log('match', match)
  return <div>Post</div>
}

export default function App () {
  return (
    <>
      <Router>
        <ul className='nav-container'>
          <li>
            <Link to='/'>首页</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/user/detail/1',
                state: { id: 1, name: 'mojie' }
              }}
            >
              用户详情
            </Link>
          </li>
          <li>
            <Link to='/post/1'>文章</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/user/detail/:id' component={UserDetail} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </Router>
    </>
  )
}
