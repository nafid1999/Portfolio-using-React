import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
import { mySelf } from '../my_infos';


class Resume extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center', }}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/men-avatars-set-1-dot-version/380/17-512.png"
                alt="avatar"
                style={{height: '200px'}}
                />
            </div>
            <h2 style={{paddingTop: '2em'}}>{mySelf.name}</h2>
            <h4 style={{color: 'grey'}}>Software Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Adress</h5>
            <p>Morocco,Dar El Kebdani Driouch</p>
            <h5>Phone</h5>
            <p>{mySelf.phone} </p>
            <h5>Email</h5>
            <p>{mySelf.email}</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2022}
              schoolName="National School of Applied Sciences of Al Hoceïma"
              schoolDescription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2016}
              joblName="Capgemini"
              jobDescription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
              skill="JavaScript"
              progress={80}
            />
            <Skills
              skill="HTML5/CSS3"
              progress={70}
            />
            <Skills
              skill="java"
              progress={75}
            />
            <Skills
              skill="Spring boot"
              progress={70}
            />
            <Skills
              skill="laravel 8"
              progress={75}
            />
            <Skills
              skill="React Js"
              progress={70}
            />
            <Skills
              skill="Php"
              progress={70}
            />
             <Skills
              skill=" Hibernate"
              progress={70}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
