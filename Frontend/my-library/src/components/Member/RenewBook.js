import { MDBDataTableV5 } from "mdbreact";
// import {useState} from 'react';
import ApiService from "../../services/ApiService";
// import "./RenewBook.css";
import { Link } from "react-router-dom";
// import React, { Component }  from 'react';
// import React from 'react';
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
const RenewBook = () => {
 
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
      const renewBookOfMemebr = (uid,bid) => {
        console.log('Printing id',uid,bid);
        ApiService.renewBook(uid,bid)
          .then(response => {
            console.log('user deleted successfully', response.data);
           toast("renewed successfuly");
            init();
          })
          .catch(error => {
            if(user.fine!=null)
           toast.warning("you have to first pay fine");
            else
            toast.warning("this book is renewed more than 3 times ");
            console.log('Something went wrong', error);
          })
      }

      return (
        <>
        <div className="whole-page"  >
        <div className="container" style={{marginTop:"80px"}}>
        <h3>Renew Book</h3> 
           <div style={{marginTop:"80px"}} >
             
                   
          <div>
          {/* id,aadhar,first_name,middle_name,last_name, address,email, mobile, password ,dept,join_date,yr_experience,salary */}
            <table className="table table-bordered table-striped" style={{marginTop:"170px"}}>
              <thead className="thead-dark">
                 
                <tr>
                   
                <th>Issue Id</th>  
                <th>Book Id</th>
                <th>Member Id</th>
                <th>Issue Date</th>
                <th>Return Date</th>              
                 <th>Expected Return Date</th>
                 <th>Renew Date</th>
                 <th>No.of times renewed</th>
                 
                 <th>Action</th>
                 {/* <th>reservation</th> */}
 
                </tr>
              </thead>
              <tbody>
              {
                //id,first_name,middle_name,last_name,gender,address,mobile,dept,dob,join_date,yr_experience,salary,bonus
                books.map(books => (
                  <tr key={books.id}>
                      <td>{books.issueId}</td>
                    <td>{books.bookId}</td>
                    <td>{books.memberId}</td>
                    <td>{books.issuedOn}</td>
                    <td>{books.returnDate}</td>
                    <td>{books.expectedReturn}</td>
                    <td>{books.renewedAt}</td>
                    <td>{books.numOfTimesRenewed}</td>                  
                    <td><button type="submit" className="button_del"  onClick={()=>renewBookOfMemebr(user.id,books.bookId)} >RenewBook</button></td>
                    {/* onClick={() => {handleUpdate(user.id);}} */}
                    </tr>
                ))
              }
              </tbody>
            </table>
            <div className="issuebtn">
            <Link to="/member"> <button className="btn btn-primary">Back</button></Link>
       
             </div>
          </div>
        </div>
       </div>
       </div>
       <ToastContainer/>
       </>
      );
            }
 
            export default RenewBook;        

