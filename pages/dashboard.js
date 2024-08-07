import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';


function dashboard() {

  const [data, setData] = useState([]);

  const [search,SetSearch] = useState('');

  const [title,setTitle] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/data')
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  });

  const Post = {
    title:title,
  }

  const Click = async()=>{
    const resp = await fetch('http://localhost:3005/data',{
      method:"POST",
      headers:{
        'Content-Type':'application/josn'
      },
      body:JSON.stringify(Post),
    });
    const upData = await resp.json();
    setData([...data,upData]);
  }

  const Delete = (id) =>{
    fetch(`http://localhost:3005/data/${id}`,{
      method:"DELETE",}).then(()=>{
        setData(data.filter(item=>item.id!==id));
      });
  }

  return (
    <div>
      {/* Navbar */}
      <nav className='navbar navbar-expand-lg bg-info fixed-top'>
        <div className='container'>
          <div className='navbar-brand'>Data Fetcing</div>
          <ul className='navbar-nav ms-auto'>
            <form>
              <div className='row'>
                <div className='col-lg-6'>
                  <input value={search} onChange={(e)=>{SetSearch(e.target.value)}} placeholder='Search...' className='form-control' />
                </div>
                <div className='col-lg-6'>
                  <button className='btn btn-warning ms-3' type='submit'>Search</button>
                </div>
              </div>
            </form>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <div className='text-center mt-5 mb-5'>
        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" className='mx-auto form-control w-50' placeholder='Add Title' />
        <button className='btn btn-primary mt-5' onClick={()=>{Click()}}>Add Title</button>
      </div>
      <Row lg={4}>
        {
          data.filter((x)=>{
            if(search==''){
              return true;
            }else{
              return search.toLowerCase()===''? data:x.title.toLowerCase().includes(search);
            }
          }).map((x) => (
            <>
              <Col>
              <div className='container'>
                <div className='card m-3' style={{ width: '18rem' }}>
                  <Image src={x.images} width={288} height={288}/>
                  <div className='card-body'>
                    <div className='card-title h4'>
                      {x.title}
                    </div>
                    <div className='card-text'>
                      Area :{x.area} <br/>
                      Rating's : {x.ratings}
                    </div>
                    <button className='btn btn-primary mt-3' onClick={()=>{Delete(x.id)}}>Delete Data</button>
                  </div>
                </div>
                </div>
              </Col>
            </>
          ))
        }
      </Row>
    </div>
  )
}

export default dashboard