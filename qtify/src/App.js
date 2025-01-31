import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from './components/Hero/Hero.jsx';
import Section from './components/Section/Section.jsx';
import FilterSection from './components/FilterSection/FilterSection.jsx';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs} from './api/api.jsx'
import { useEffect, useState } from 'react';
import styles from "./App.module.css"
import Search from "./components/Search/Search.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {

  const[topAlbumSongs,setTopAlbumSongs]=useState([]);
  const[newAlbumSongs,setNewAlbumSongs]=useState([]);

  const[songsData, setSongsData]=useState([]);

  const[value,setValue]= useState(0);

  const[filteredData, setFilteredData]=useState([]);


  const generateTopAlbumSongs=async()=>{
    try{
      const res= await fetchTopAlbums();
    setTopAlbumSongs(res);
    }
    catch(error){
      console.log(error);
      return null;
    } 
  }

  const generateNewAlbumSongs=async()=>{
    try{
      const res= await fetchNewAlbums();  
    setNewAlbumSongs(res);
    }
    catch(error){
      console.log(error);
      return null;
    } 
  }

  const generateSongs=async()=>{
    try{
      console.log("generateSongs");
      const res=await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    }
    catch(error){
      return null;
    }
  }

const generateNewSongs=(index)=>{

  let key="";
  if(index===0){
    generateSongs();
    return;
  }
  else if(index===1){
    key="rock";
  }
  else if(index===2){
    key="pop";
  }

  else if(index===3){
    key="jazz";
  }
  else if(index===4){
    key="blues";
  }

  let newSongsArray=songsData.filter((song)=>{
    console.log("key: ",key)
    return(song.genre.key===key);
  })

  console.log("generateNewSongs triggered and filtered this Data: ", newSongsArray)
  setFilteredData(newSongsArray);
}


 const handleChangeIndex= async(newValue)=>{
  console.log("handleChangeIndex triggered with newValue: ",newValue)
  setValue(newValue);
  generateNewSongs(newValue);
 }

  useEffect(()=>{
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateSongs();
  },[])
// console.log(topAlbumSongs)
  return (
    <div className="App">
      <Navbar />
      <div className={styles.mobileSearch}>
        <Search />
        </div>
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type='album' title='Top Albums' data={topAlbumSongs}/>
      <hr/>
      <Section type='album' title='New Albums' data={newAlbumSongs}/>
      <hr/>
      <FilterSection  type='song' title='Songs' value={value} filteredData={filteredData} handleChangeIndex={handleChangeIndex}/>
      </div>
      <hr/>
      <Faqs/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;