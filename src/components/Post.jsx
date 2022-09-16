import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post(){

  const navigate = useNavigate();
  const status = 200

  if(status === 404){

    return <Navigate to='/notfound' />
  }

  const onClick = () =>{

    console.log('hello')

    //navigate to about page
    navigate('/about')
  }

  return (
      <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
          <Route path='/show' element={<h1>Hello World</h1>}/>
        </Routes>
      </div>
  )
}

export default Post
