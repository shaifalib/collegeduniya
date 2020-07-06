import React, { Component } from 'react';

import CollegeList from './collegeList/CollegeList';
import './collegeList/collegeList.css';

class App extends Component {

  state = {
    colleges: [],
    visibleColleges: [],
    index: 1
  }

  componentDidMount(){
    fetch('/Data.json')
    .then(response => response.json())
    .then(response => this.setState({colleges: response.colleges}, ()=> {
      const newColleges = this.state.colleges.slice(0,10);
      this.setState({visibleColleges: newColleges});
    }));

    this.refs.myscroll.addEventListener('scroll', () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.setState({ index: this.state.index+1}, () => this.loadMore(this.state.index))
      }
    });
  }

  loadMore = (index) => {
    const newColleges = this.state.colleges.slice(0,index*10);
      this.setState({visibleColleges: newColleges});
  }

  render(){
    return (
      <div className="App" ref='myscroll' >
        <div>
          <div className="college-wrap">
            <h2 className="heading">Colleges in North India</h2>
            <div className="college-wrap--list">
            <div className="list-row"  >
              {
                this.state.visibleColleges.map((data, index) =>
                  <CollegeList data={data} key={index}/>
                )
              }
            </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
