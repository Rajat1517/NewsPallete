import React from 'react'
// import PropTypes from 'prop-types'

const NewsItem=(props)=> {

    let {title, description, imageUrl, newsUrl, author,date,source}= props; // adding props to the component
    return ( 
      <div className='container'>
       <div className="card" style={{width: "18rem", margin:"1rem"}}>
       <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1" }}>
    {source}</span>
  <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Nothing_Phone_1-5-647x363.jpeg?iRnhKtKB9bZ27M4efrkEDe85Nn1vaS1R":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div> 
    )
  
}

export default NewsItem
