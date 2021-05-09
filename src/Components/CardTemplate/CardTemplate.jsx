/* @flow */
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

type Props = {
  name: number,
  date: string, 
  vote: number,
  image: number, 
  id: number
}

const CardTemplateStyle = {
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}

const CardTemplate = ({ name, date, vote, image, id }: Props) => (
  <Link to={`/movie/${id}`}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className='custom-image'>
        <img alt={name} width='100%' height='350px' src={`https://image.tmdb.org/t/p/w500${image}`} />
      </div>
      <div className='custom-card'>
        <h3 style={CardTemplateStyle.title}>{name}</h3>
        <p>{`Date: ${date} || Votes: ${vote}`}</p>
      </div>
    </Card>
  </Link>
)

export default CardTemplate
