import { useForm } from 'react-hook-form';
import React, { useState,useEffect } from 'react';
import classNames from 'classnames';
import { useRef } from 'react';
import ApiService from '../../services/ApiService';
import { useHistory,useParams, } from 'react-router-dom';
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
//import './addBookForm.css';
// import React, { Component }  from 'react';
 
 
function TitlesBook(){
    const [books,setBooks] = useState('');
    const history = useHistory();
    //   const [author1,setAuthor1] = useState(useParams());
      const {title} = useParams();
      const init = () => {

        ApiService.bookByTitle(title)
           .then(response => {
            console.log('+++++++++Printing users data',title);
             console.log('+++++++++Printing users data', response.data);
           
             setBooks(response.data);
   
           })
           .catch(error => {
              toast("this book is not avilable in library");
             console.log('Something went wrong', error);
             history.push("/findbook");
           }) 
   
       }
       useEffect(() => {
           init();
         }, []);
      return(
        <div className="whole-page"  >
        <div className="container" style={{marginTop:"80px"}}>
        <h3>All Book</h3> 
           <div style={{marginTop:"80px"}} >
    
          <div>
          {/* id,aadhar,first_name,middle_name,last_name, address,email, mobile, password ,dept,join_date,yr_experience,salary */}
            <table className="table table-bordered table-striped" style={{marginTop:"170px"}}>
              <thead className="thead-dark">
                <tr>
                    
                <th>Book No</th>  
                  
                  <th>Book Title</th>
                  <th>Author</th>                
                 
                </tr>
              </thead>
              <tbody>
             
                  <tr key={books.id}>
                      <td>{books.id}</td>
                    <td>{books.title}</td>
                    <td>{books.author}</td>
                    
                    
                  </tr>
               
              </tbody>
            </table>
            <div className="issuebtn">
            <Link to="/findbook"> <button  className="btn btn-primary">Back</button></Link>
        
             </div>
          </div>
        </div>
        </div>
        </div>);
  }
  
  export default TitlesBook;