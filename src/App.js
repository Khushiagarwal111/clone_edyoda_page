
import './App.css'
import React from 'react'
import './style.css'
import Headers from './components/header/Headers'
import Card from './components/cards/Card'
import CategoryBtn from './components/categorybtn/CategoryBtn'

class App extends React.PureComponent{

  dataObject={
    categoryBtns:[
      "All",
      "Artfical Intelligence",
      "Cloud Computing",
      "DevOps",
      "Programming languages",
      "Mobile Application Development",
      "Technology and Tools",
      "Get a Job in a Tech Company",
      "Others",
    ],
    
cardItems:[
  {
  id:1,
  imgsrc:"https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
  title:"Introduction to a Machine Learning Online Course",
  author:"EdYoda",
  date:"12/2/2022",
  desc:"We have had an insight into Artifical Intelligence. Well, one of its subfields is machine and this introduction will help you get a fair idea. "
},
{
  id:2,
  imgsrc:"https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg",
  title:"Getting started with artificial Intelligence", 
  author:"EdYoda",
  date:"08 Jul 2019",
  desc:"We're rapidly moving towardsa day and age where almost everthyong can be controlled by artificial intelligence"
},{
  id:3,
  imgsrc:"https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
  title:"Challenges of Machine Learning in Big Data", 
  author:"EdYoda",
  date:"12/2/2022",
  desc:"Machine learning is a subset of artifical intelligence which is an important part of computer science. the reveolution of Big Dta promises to transform the way "
},
{
  id:4,
  imgsrc:"https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
  title:"Impact of Cloud Computing in various industries", 
  author:"EdYoda",
  date:"24 Aug 2019",
  desc:"Cloud computing has been rapidly gaining pace in the world of information"
},{
  id:5,
  imgsrc:"https://edyoda.s3.amazonaws.com/media/blog-images/react-native-vs-flutter.png",
  title:"React Native Vs Flutter: Breaking...", 
  author:"EdYoda",
  date:"12 Aug 2019",
  desc:"The Two Biggest social platforms have created a buzz in yhe application development industry React Native by FaceBook"
},{
  id:6,
  imgsrc:"https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg",
  title:"Understanding DevOps", 
  author:"EdYoda",
  date:"23 jul 2019",
  desc:"DevOps is a term derived after combining development and operation "
}
]

};


render(){
  return(
    <div>
<Headers/>
<div className='top-container'>
<div className="category-container">
  <h1>Lastest Posts</h1>
  <div className="filter-by-category"><h2>  <i className="fa-solid fa-filter"></i>Filter by Category</h2>
  
  </div>
  
{
  this.dataObject.categoryBtns.map((categoryBtn)=>(
  <CategoryBtn
  categoryBtn={categoryBtn}

 keyid={this.dataObject.categoryBtns.indexOf(categoryBtn)
 } />
 ))
}
</div>


<div className="card-container">

{
  this.dataObject.cardItems.map((carditem)=>(
    <Card
     carditem={carditem}/>
  ))
}
</div>
</div>

<footer className='myfooter'>
      <p>EdYoda Design a Grid Example:

      <br/>
      Khushi Agarwal
      </p>
</footer>
</div>
  );
}
}
export default App;

// import React, { Fragments, useState, useEffect } from 'react'
// import NavBar from './NavBar'
// import { BrowserRouter, Route, Routes,} from 'react-router-dom'
// import NavBar from 'NavBar'

// import Home from './Home'
// function App() {

//   useEffect(()=>{
//     if(JSON.parse(localStorage.getItem("isLoggedIn")==null)){
//       localStorage.setItem("isLoggedIn",false)
//     }
//   },[])

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div>
//       <Fragment>
//         <BrowserRouter>

//           <NavBar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
//           <Route>
//             <Route path='/' elemnt={<home />}/>
//             <Route path='/Product' element={isLoggedIn ===true?<Products/>:<Navigate to="/"/>} />
//             <Route path='/About' element={isLoggedIn ===true?<About />:<Navigate to="/"/>} />
//             <Routes path="*" element={<h1>404 not found</h1>} />
//           </Route>
//         </BrowserRouter>
//         </Fragment>
     
//     </div>
//   );
// }

// export default App;
// <div>
//   App
// </div>