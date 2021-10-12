import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';
import { projects } from '../my_infos';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {activeTab:0};
  }

  toggleCategories(){
          if(this.state.activeTab === 0){
            return (
              <div className="projects-grid">
               {projects.react.map((project,id)=>{

                 return(
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                  <CardTitle style={{color: "#fff", height: "176px", background:'url(https://fr.reactjs.org/logo-og.png) center / cover'}}>
                    {project.title}
                  </CardTitle>
                  <CardText>
                    {project.description}
                  </CardText>
                  <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: "#fff"}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
  
                 )
               })}

         
              </div>


            )
          }else if(this.state.activeTab === 1){

            return (
              <div className="projects-grid">
            {projects.laravel_8.map((project,id)=>{

              return(
               <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
               <CardTitle style={{color: "#fff", height: "176px", background:'url(https://fr.reactjs.org/logo-og.png) center / cover'}}>
                 {project.title}
               </CardTitle>
               <CardText>
                 {project.description}
               </CardText>
               <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePen</Button>
                 <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color: "#fff"}}>
                 <IconButton name="share" />
               </CardMenu>
             </Card>

              )
            }

            )}
             </div>)
          }else if(this.state.activeTab === 2){
            return (
              <div className="projects-grid">
            {projects.java.map((project,id)=>{

              return(
               <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
               <CardTitle style={{color: "#fff", height: "176px", background:'url(https://fr.reactjs.org/logo-og.png) center / cover'}}>
                 {project.title}
               </CardTitle>
               <CardText>
                 {project.description}
               </CardText>
               <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePen</Button>
                 <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color: "#fff"}}>
                 <IconButton name="share" />
               </CardMenu>
             </Card>

              )
            }

            )}
             </div>)
          }else if(this.state.activeTab === 3){
            return (
              <div className="projects-grid">
            {projects.spring.map((project,id)=>{

              return(
               <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
               <CardTitle style={{color: "#fff", height: "176px", background:'url(https://fr.reactjs.org/logo-og.png) center / cover'}}>
                 {project.title}
               </CardTitle>
               <CardText>
                 {project.description}
               </CardText>
               <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePen</Button>
                 <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color: "#fff"}}>
                 <IconButton name="share" />
               </CardMenu>
             </Card>

              )
            }

            )}
             </div>)
          }else if(this.state.activeTab === 4){
              return (
                <div><h1>This is Machine Learning</h1></div>
              )
            }
  }

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Laravel</Tab>
          <Tab>java</Tab>
          <Tab>Spring</Tab>
         
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}
export default Projects;
