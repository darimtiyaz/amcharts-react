import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import './App.css'
//import usersData from './users.json'

const downloadFile = ({ data, fileName, fileType }) => {
    
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType })
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}

const exportToJson = (userData) => {
  //e.preventDefault()
  downloadFile({
    data: JSON.stringify(userData),
    fileName: 'user.json',
    fileType: 'text/json',
  })
}

const JSONdownload = () => {
    const [userData, setUserData] = useState([]);


    useEffect(()=>{
        const jsonData = async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log('resp', response);
            setUserData(response.data);
        }
        jsonData()
    },[]);

    console.log('data',userData)
  return (
    <div className='App'>
      <h1>How to download CSV and JSON files in React</h1>

      <table className='usersTable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => {
            const { id, name, username, email, phone, website } = user
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{website}</td>

              </tr>
            )
          })}
        </tbody>
      </table><br/>
      <div className='actionBtns'>
        <button type='button' onClick={()=>exportToJson(userData)}>
          Download
        </button>
      </div>
    </div>
  )
}

export default JSONdownload