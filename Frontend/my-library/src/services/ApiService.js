import axios from 'axios';

const BASE_URL = 'http://localhost:9090';

/* GET request URLs*/
const AVAILABLE_BOOK_API_URL = `${BASE_URL}/member/availableBooks`;
const ISSUE_BOOK_MEMBER_API_URL = `${BASE_URL}/libr/issuebook`;
const ALL_ISSUE_BOOK_API_URL = `${BASE_URL}/libr/issuebook`;
const ALL_BOOK_API_URL = `${BASE_URL}/libr/`;
const ALL_MEMBER_DETAILS_API_URL = `${BASE_URL}/libr/member`;
const DELETE_MEMBER=`${BASE_URL}/libr/member`;
const UPDATE_USER=`${BASE_URL}/libr/member`;
const USER_BY_ID=`${BASE_URL}/libr/member`;
 const BOOK_FOR_FINE=`${BASE_URL}/libr/fineOn`;
const ADD_FINE_TO_MEMBER=`${BASE_URL}/libr/fineOn`;
const PAY_FINE =`${BASE_URL}/member/issuebook`;
// post request urls
const UPDATE_BOOK=`${BASE_URL}/libr/booktoupdate`;
const LOGIN_URL = `${BASE_URL}/login`;
const REGISTRATION_URL = BASE_URL+"/member/add";
const BOOK_BY_ID=`${BASE_URL}/libr`;
const DELETE_BOOK=`${BASE_URL}/libr`;
const ADD_BOOK=BASE_URL+"/libr/Book";
const ISSUE_BOOK=`${BASE_URL}/libr/issue`;
const RENEW_BOOK=`${BASE_URL}/member/renew`;
const BOOK_FOR_RETURN=`${BASE_URL}/member/returnBook`;
const RETURN_BOOK=`${BASE_URL}/libr/issuebook`;
const BOOK_BY_AUTHOR=`${BASE_URL}/libr/author`;
const BOOK_BY_TITLE=`${BASE_URL}/libr/title`;
const UPDATE_PASSWORD=`${BASE_URL}/member/reset`;


class ApiService { 

    resetPAssword(data)
    {
        return axios.put(UPDATE_PASSWORD, data,{headers:{ "Content-Type": "application/json"}});
    }

    bookByTitle(title)
    {
        return axios.get(`${BOOK_BY_TITLE}/${title}`);
    }
    bookByAuthor(author)
    {
        return axios.get(`${BOOK_BY_AUTHOR}/${author}`);
    }
     returnYourBook(issueId)
    {
        return axios.put(`${RETURN_BOOK}/${issueId}`);
    }

    returnBooks()
    {
        return axios.get(`${BOOK_FOR_RETURN}`);
    }
    renewBook(uid,bid)
    {
        return axios.put(`${RENEW_BOOK}/${uid}/${bid}`);
    }

    issueBookByMember(uid,bid)
    {
        return axios.post(`${ISSUE_BOOK}/${uid}/${bid}`);
    }
    addBook(data)
    {
        return axios.post(ADD_BOOK, data); 
    }

    deleteBook(bookId)
    {
   
        return axios.delete(`${DELETE_BOOK}/${bookId}`);
    }
    bookById(bookId)
    {
        return axios.get(`${BOOK_BY_ID}/${bookId}`);
    }
    updateBook(data)
    {
        return axios.put(UPDATE_BOOK, data,{headers:{ "Content-Type": "application/json"},}); 
    }
    payFine(issueId)

    {
        return axios.put(`${PAY_FINE}/${issueId}`);
    }
    addFineToMember(issueId)
    {
        return axios.put(`${ADD_FINE_TO_MEMBER}/${issueId}`);
    }

    bookForFine()
    {
        return axios.get(`${BOOK_FOR_FINE}`);
    }

    memberById(memberId)
    {
        return axios.get(`${USER_BY_ID}/${memberId}`);
    }


    updateMember(data){
        return axios.put(UPDATE_USER, data,{headers:{ "Content-Type": "application/json"},});
    }

    deleteMember(memberId){
        return axios.delete(`${DELETE_MEMBER}/${memberId}`);
    }
    availableBooks() {
        return axios.get(`${AVAILABLE_BOOK_API_URL}`);
    }
    issueBookOfMember(memberId) {
        return axios.get(`${ISSUE_BOOK_MEMBER_API_URL}/${memberId}`);
    }

    allBooks() {
        return axios.get(ALL_BOOK_API_URL);
    }
    allmemberdetails() {
        return axios.get(ALL_MEMBER_DETAILS_API_URL);
    }
    allissuebook() {
        return axios.get(ALL_ISSUE_BOOK_API_URL);
    }
    
    login(data) {
        return axios.post(LOGIN_URL, data);
    }
    memberRegistration(data) {
        console.log("memberregistration"+data);

        return axios.post(REGISTRATION_URL, data,{headers:{ "Content-Type": "application/json"},});
    }
   

    
}

export default new ApiService();
