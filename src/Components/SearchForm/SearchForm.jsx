import React, { Component } from 'react'
import { Input, Col, Row, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import './SearchForm.css'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      fireRedirect: false
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }

  render () {
    const { fireRedirect, value: query } = this.state
    return (
      <Row>
        <Col span={14} offset={5}>
          <form onSubmit={this.handleSubmit}>
            <Input className='input' placeholder='영화제목을 입력해주세요' onChange={this.handleChange} />
            <Button type="primary" icon="search" onClick={this.handleSubmit}>검색</Button>
          </form>
        </Col>
        {
        fireRedirect && query &&
        <Redirect to={`/search/${query}`} push />
        }
      </Row>
    )
  }
}
