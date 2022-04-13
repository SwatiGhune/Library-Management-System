import { MDBDataTableV5 } from "mdbreact";
// import {useState} from 'react';
import ApiService from "../../services/ApiService";
// import "./issuebook.css";
import { Link } from "react-router-dom";
// import React, { Component }  from 'react';
// import React from 'react';
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const IssueBook = () => {

    const [books, setBooks] = useState([]);
    const[user,setuser]=useState(JSON.parse(localStorage.getItem('user')))  ;
    const init = () => {
     

     ApiService.issueBookOfMember(user.id)
        .then(response => {
            
          console.log('+++++++++Printing users data', response.data);
          
          setBooks(response.data);

        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 

    }
    useEffect(() => {
        init();
      }, []);
      return (
        <>
        <div className="whole-page"  >
        <div className="container" style={{marginTop:"80px"}}>
        <h3>{user.name}'s Issue Books</h3> 
           <div style={{marginTop:"80px"}} >
                    
          <div>
          {/* id,aadhar,first_name,middle_name,last_name, address,email, mobile, password ,dept,join_date,yr_experience,salary */}
            <table className="table table-bordered table-striped" style={{marginTop:"170px"}}>
              <thead className="thead-dark">
                  
                <tr>
                    
                <th>Issue Id</th>  
                <th>Book Id</th>
                <th>Issue Date</th>                
                 <th>Expected Return Date</th>
                 <th>No.of times renewed</th>
                 <th>Renew Date</th>
                 <th>Fine</th>
                </tr>
              </thead>
              <tbody>
              {
                //id,first_name,middle_name,last_name,gender,address,mobile,dept,dob,join_date,yr_experience,salary,bonus
                books.map(books => (
                  <tr key={books.id}>
                      <td>{books.issueId}</td>
                    <td>{books.bookId}</td>
                    <td>{books.issuedOn}</td>
                    <td>{books.expectedReturn}</td>
                    <td>{books.numOfTimesRenewed}</td>
                    <td>{books.renewedAt}</td>
                    <td>{books.fineOnBook}</td>
                    </tr>
                ))
              }
              </tbody>
            </table>
            <div className="issuebtn">
            <Link to="/member"> <button onClick={(e) => IssueBook(e)} className="btn btn-primary">Back</button></Link>
            
             </div>
          </div>
        </div>
        </div>
        
        </div>
        <ToastContainer />
        </>
      );
            }

            export default IssueBook;        