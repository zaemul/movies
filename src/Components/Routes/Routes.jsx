import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../Home/Home'
import Movie from '../Movie/Movie'
import Showfilms from '../Showfilms/Showfilms'

const Routes = () => (
  <Switch>
    <Route exact path='/popular' render={
      props => (<Showfilms currentPage='인기있는' category='popular'{...props} />
    )} />
    <Route exact path='/upcoming' render={
      props => (<Showfilms currentPage='예정작' category='upcoming' {...props} />
    )} />
    <Route exact path='/nowplaying' render={
      props => (<Showfilms currentPage='상영중' category='now_playing' {...props} />
    )} />
    <Route exact path='/toprated' render={
      props => (<Showfilms currentPage='인기순위' category='top_rated' {...props} />
    )} />
    <Route exact path='/search/:query' render={
      props => (<Showfilms currentPage='검색결과' {...props} />
    )} />
    <Route exact path='/movie/:id' component={Movie} />
    <Redirect path={'*'} to={'/popular'} />
  </Switch>
)

export default Routes
