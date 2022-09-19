import React from 'react'
// import styles from './card.module.css'



class Card extends React.PureComponent {
  render() {
    const { carditem } = this.props;
    return (
      <>
     
        
          <div className="card">
            <img
              src={carditem.imgsrc}
              alt="mypic1"
              className="card-img"
            />
            <div className="card-info">
              <p className="card-title">{carditem.title}</p>
              <div className="autthor-date-section">
                <span className="card-author">{carditem.author}</span>
                <span className="card-date">|{carditem.date}</span>
              </div>
              <div className="card-desc"><p>{carditem.desc}</p></div>
            </div>
          </div>
   
      </>
    );
  }
}

export default Card;