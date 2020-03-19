import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {
  render() {
    const links = ['bio', 'resume', 'portfolio', 'contact'];
    return (
      <div className="col-xl-3 col-lg-12 align-self-center">
        <div className="row h-20 mb-5">
          <div className="col">
            <h1 className="short-name text-xl-center text-lg-left"><Link to='./'>
              A<span className="colored">.</span>Y<span className="colored">.</span>idlbi<span className="smile colored">)</span></Link>
            </h1>
          </div>
        </div>
        {links.map(link => {
          console.log(`${this.props.selected}, ${link}`)
          return (
            <div className="row h-20" key={link}>
              <div className="col text-center side-menu">
                <span className={`${this.props.selected === link ? 'selected' : ''}`}><Link to={`./${link}`}>{link.toUpperCase()}</Link></span>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}
