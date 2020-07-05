import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Oliver Muñoz</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ullam harum consequatur perspiciatis pariatur iste reiciendis,
              quia sint, assumenda quasi vitae aliquam obcaecati ipsa, tenetur
              porro animi provident numquam dolor. sint.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="item-content">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+63) 995 834 1675
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="item-content">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    nikkimmunoz@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="item-content">
                    <i className="fa fa-skype" aria-hidden="true" />
                    My Skype ID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
