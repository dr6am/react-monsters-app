import React from 'react';
import { CardList } from './components/card-list/card-list.component.jsx' ;
import { SearchBox } from './components/search-box/search-box.component' ;
import './App.css';


class App extends React.Component{
    state={
        "data":[],
        "search":null
    }

    componentDidMount() {
        //https://jsonplaceholder.typicode.com/users
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(d => d.json())
            .then(resp=>{this.setState({data: resp})})
            .catch((e)=>{console.error(e)})
    }
    render() {
        const { data, search} =this.state;
        const filtered = data.filter((item)=>{
            if(item.name.length > 0 && search != null){
                return item.name.toLowerCase().includes(search.toLowerCase())
            }else if(search == null){
                return item
            }
        })
        return (
            <div className="App">
                <h1 className={"title"}>Monsters Rolodex</h1>
                <SearchBox handleChange={e=>this.setState({search: e.target.value})}
                           placeholder={"search..."}/>
                <CardList monsters={filtered}/>
            </div>
        );
    }
}

export default App;
