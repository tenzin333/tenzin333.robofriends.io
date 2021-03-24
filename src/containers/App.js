import React ,{Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';

//state is an object which describes an application 
//we are able to change the value 
//while props dont change
//a parent passes a state which is used by the child 





class App  extends Component {
   
    constructor(){
        super();
        this.state =  {
            robots:robots,
            searchfield:''
        }
    }

    componentDidMount(){

            fetch('https://jsonplaceholder.typicode.com/users').then(
                response=> response.json())
                .then(users => this.setState({robots: users}));

    }


    onSearchChange=(e)=>{
        this.setState({searchfield:e.target.value});

     
    }


   render(){ 
        const filterRobot = this.state.robots.filter(robot =>{
           return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
       })

        return (
        <div className="center-content"> 
       <h1>RoboFriends</h1>

            <SearchBox  searchChange = {this.onSearchChange} />
        
          <Scroll>
                <CardList robots ={filterRobot}      />
            </Scroll> 

      

        </div>
           
    )
   }
   
}

export default App;