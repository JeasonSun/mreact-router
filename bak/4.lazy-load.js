import React, { Suspense } from 'react'

import { HashRouter as Router, Route, Switch, Link } from './react-router-dom'
function Loading () {
  return <div>loading</div>
}
function lazy (load) {
  return class extends React.Component {
    state = {
      trueComponent: null
    }
    componentDidMount () {
      load().then(loadResult => {
        this.setState({
          trueComponent: loadResult.default || loadResult
        })
      })
    }
    render () {
      let { trueComponent: LoadComponent } = this.state
      return LoadComponent ? <LoadComponent {...this.props} /> : null
    }
  }
}
const LazyHome = lazy(() =>
  import(/*WebpackChunkName:Profile*/ './components/Home')
)
const LazyProfile = lazy(() =>
  import(/*WebpackChunkName:Profile*/ './components/Profile')
)

export default function App () {
  return (
    <>
      <Router>
        <ul className='nav-container'>
          <li>
            <Link to='/'>首页</Link>
          </li>
          <li>
            <Link to='/profile'>用户详情</Link>
          </li>
        </ul>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/' component={LazyHome} exact />
            <Route path='/profile' component={LazyProfile} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}
