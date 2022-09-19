import React from 'react';
// import {styles} from './CategoryBtn.module.css'

class CategoryBtn extends React.Component {
    render() {
        const{ categoryBtn, keyid } = this.props;
        return (
              <span className="category" id={`categoryBtn${keyid}`} >
                {categoryBtn}
            </span>  
      
    );
    }

}
export default CategoryBtn;