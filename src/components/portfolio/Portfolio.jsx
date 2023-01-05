import React from 'react';
import { useState, useEffect } from 'react';
import './portfolio.css';
import lawyer from '../../assets/lawyer.png';
import penetron from '../../assets/penetron.png';
import hjm from '../../assets/hjm.png';
import cast from '../../assets/cast.png';
import analysis from '../../assets/analysis.png';
import SM from '../../assets/sm.png';

const Portfolio = () => {

  const [active,setActive]=useState('active');
  const [actives,setActives]=useState('');
  const [activess,setActivess]=useState('');



  const myportfolio =[
    {
      image:analysis,
      title:"Analysis laboratories & MS",
      link:"https://mylocalstream.com/analysis/",
      category: ['all', 'frontend'],
    },
    {
      image:cast,
      title:"Casting platform",
      link:"https://castmycrew.com/main",
      category: ['all', 'frontend'],
    },
    {
      image:hjm,
      title:"HJM Website & MS",
      link:"http://hjmadv.com/",
      category: ['all', 'frontend'],
    },
    {
      image:penetron,
      title:"Penetronegypt Website",
      link:"https://penetronegypt.net/",
      category: ['all', 'frontend'],
    },
    {
      image:lawyer,
      title:"lawyers' offices & MS",
      link:"https://attractionme.net/Lawyer/",
      category: ['all', 'frontend'],
    },
    {
      image:SM,
      title:"Store MS",
      link:"https://github.com/TasnimMustafa/StoreMS",
      category: ['all','backend'],
    }
  ];
  
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(myportfolio);
  },[]);

  useEffect(() => {
    setProjects([]);
    const filtered = myportfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
    setProjects(filtered);
  }, [filter]);

  return (
      <section id='portfolio' style={{height:"auto"}}>
        <h5>My Recent Work</h5>
        <h2 style={{marginBottom: "3rem"}}>Portfolio</h2>


        <div className="container portfolio_container">

        <div className="portfolio_labels">
        <span active={filter === 'all'} onClick={() => {setFilter('all'); setActive('active'); setActives(''); setActivess('')}} className={active}>All</span>
        <span active={filter === 'frontend'} onClick={() => {setFilter('frontend'); setActive(''); setActives('active'); setActivess('')}} className={actives}>FrontEnd</span>
        <span active={filter === 'backend'} onClick={() => {setFilter('backend'); setActive(''); setActives(''); setActivess('active')}} className={activess}>BackEnd</span>
        </div>

          <div className="pp row justify-content-center">
            {/* {myportfolio.map((proj)=>(
              <div className="project mb-2 px-4 pt-4">
                <div className="project_img mb-2">
                  <img src={proj.image} alt="project"/>
                </div>
                <div className="project_title mb-2">
                  <p>{proj.title}</p>
                </div>
                <div className="project_link mb-2">
                  <a href="https://github.com/TasnimMustafa" className='btnn mr-2'>Github</a>
                  <a href={proj.link} className="btnn btn-prim" target="_blank">View Demo</a>
                </div>
              </div>
            ))} */}

            
              {projects.map(proj => proj.filtered === true ? (
                  <div className="project col-xl-3 col-lg-4 col-md-5  col-11 mb-3 px-4 pt-4">
                  <div className="project_img mb-2">
                    <img src={proj.image} alt="project"/>
                  </div>
                  <div className="project_title mb-2">
                    <p>{proj.title}</p>
                  </div>
                  <div className="project_link mb-4">
                    <a href="https://github.com/TasnimMustafa" className=''>Github</a>
                    <a href={proj.link} className="" target="_blank">View Demo</a>
                  </div>
                </div>
                ) : '')}
            
          </div>
        </div>
        </section>
  )
}

export default Portfolio