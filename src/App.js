import logo from './logo.svg';
import './App.css';
import { useState, useEffect, use } from 'react';
import Header from './Components/Header';
import Search from './Components/main/Search';
import Items from './Components/main/ListItem/Index';
function App() {
  const [postData, setPostData] = useState([]);
  const [text, setText] = useState('');
  const [email, setEMail] = useState('')
  useEffect(() => {
    const dataFun = async () => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        setPostData(data)
      }
      catch (err) {
        console.log(err, 'error')
      }
    }
    dataFun();
  }, []);

  const updateList = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);

  }
  const updatEmail = (e) => {
    // console.log(e.target.value);

    setEMail(e.target.value)
  }
  const handleAdd = () => {
    if (text.trim() === "") return;
    const updteItem = [...postData, { id: Date.now(), name: text, email: email }];
    setPostData(updteItem);
    setText('');
    setEMail('')
  }

  const removeItem=(id)=>{
    const updateItem = postData.filter((item)=>item.id !==id);
    setPostData(updateItem);
  }
  return (
    <div className="App">
      <Header />
      <Search updateList={updateList} text={text} email={email} updatEmail={updatEmail}  handleAdd={handleAdd} />
      <Items postData={postData} removeItem={removeItem}/>


    </div>
  );
}

export default App;
