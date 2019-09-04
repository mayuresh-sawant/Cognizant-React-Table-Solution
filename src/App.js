import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {rank: 8, points: '2000', name: 'Maria', age: '23'}, 
        {rank: 5, points: '4566', name: 'Suzan', age: '21'}, 
        {rank: 10, points: '1123', name: 'Rick', age: '28'}, 
        {rank: 3, points: '8975', name: 'Bella', age: '34'}, 
        {rank: 6, points: '3456', name: 'Jack', age: '27'}, 
        {rank: 1, points: '9087', name: 'Jill', age: '22'}, 
        {rank: 7, points: '3232', name: 'Claudia', age: '29'}, 
        {rank: 4, points: '5456', name: 'Zack', age: '27'}, 
        {rank: 2, points: '9000', name: 'Shane', age: '33'}, 
        {rank: 9, points: '1456', name: 'Lita', age: '31'},  
      ],
    };
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  };

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }

    render() {
      const Row = ({rank, points, name, age}) => (
        <div className="row">
          <div>{rank}</div>
          <div>{points}</div>
          <div>{name}</div>
          <div>{age}</div>    
        </div>
      );
      const rows = this.state.data.map( (rowData) => <Row {...rowData} />);
        return(
          <div>
            <div className="center">
            <h2>Leaderboard</h2>
            <button onClick={() => this.sortBy('rank')}>Rank</button>
            <button onClick={() => this.sortBy('points')}>Points</button>
            <button onClick={() => this.sortBy('name')}>Name</button>
            <button onClick={() => this.sortBy('age')}>Age</button>
            </div>
            <div className="table">
            <div className="header">
              <div>RANK</div>
              <div>POINTS</div>
              <div>NAME</div>
              <div>AGE</div>
            </div>
            <div className="body">
              {rows}
            </div>
          </div>
        </div>
        );
    }

}

