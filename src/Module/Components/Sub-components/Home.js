import React,{useState,useEffect} from 'react'

const Home = () => {
    const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])
  console.log("kktableData",tableData)
  return (
    <div>Home
      
    </div>
  )
}

export default Home