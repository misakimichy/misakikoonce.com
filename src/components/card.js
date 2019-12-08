import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Tag from './tag'

const Card = ({
    title,
    date,
    url,
    description,
    tags = [],
    thumbnail
}) => (
    <div>
        <div>
            <div>
                <img src={thumbnail} alt="thumbnail of the work"/>
                <Link to={url}>
                    <h2>{title}</h2>
                </Link>
                <span>{date}</span>
                {tags.map((tag, index) => 
                    <Tag key={index} name={tag}/>
                )}
                <p>{description}</p>
                <Link to={url}>
                    ...read more
                </Link>
            </div>
        </div>
    </div>
)

export default Card

Card.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
}

Card.defaultProps = {
    tags: [],
    date: ''
}