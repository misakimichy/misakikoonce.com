import React from 'react'
import { Link } from 'gatsby'
import './styles.css'
import PropTypes from 'prop-types'
import Tag from './tag'

const Card = ({
    title,
    url,
    description,
    tags = [],
    thumbnail
}) => (
    <div className="project-card">
        <img className="card-thumbnail" src={thumbnail} alt="project thumbnail"/>
        <div className="card-content">
            <Link to={url} className="no-underline">
                <h2>{title}</h2>
            </Link>
            <p className="card-description">{description}
                <Link to={url}>
                    ...read more
                </Link>
            </p>
            <div className="card-tag">
                {tags.map((tag, index) => 
                    <Tag key={index} name={tag}/>
                )}
            </div>
        </div>
    </div>
)

export default Card

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
}

Card.defaultProps = {
    tags: []
}