import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import { mySelf } from '../my_infos';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>{mySelf.name} </h2>
            <img
              src="https://cdn4.iconfinder.com/data/icons/men-avatars-set-1-dot-version/380/17-512.png"
              alt="avatar"
              style={{height: '250px' }}
            />
            <h6 style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>{mySelf.about_me} </h6>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me!</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    {mySelf.phone}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    {mySelf.email}
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;
