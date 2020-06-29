import React,{Component} from 'react';
import MyList from './componetes/myList'
import NewsList from './componetes/news-list.js'
import './App.css'

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('439c60eec1854f8e889fe21f403363f0');

class App extends Component {
  constructor(props) {  
    super(props);  
    
    this.state={
      serchq:'',
      news:[]
    };
  }  
  handleChange = (event) => {  
    const query=event.target.value
   this.setState({serchq: query}); 
    console.log(this.state.serchq)

  }   
  onSearch(event){
    alert("search is :"+this.state.serchq)
  }
  componentDidMount(){
    newsapi.v2.topHeadlines({
      sources: 'bbc-news,the-verge',
      q: 'bitcoin',
      category: 'business',
      language: 'en',
      country: 'us'
    }).then(response => {
      console.log(response);
     
    });
  
  }
  
  render(){
      return (
        <div className="App">
               <h1>News By Bing</h1>
             <div className='layout'>
                <form onSubmit={this.onSearch.bind(this)} >  
                      <label>Serach News:  
                          <input type="text" value={this.state.value}  onChange={this.handleChange}  />  
                      </label>  
                      <input type="submit" value="Submit" />  
                </form>  
              
              </div>
            
            
        </div>
      );
  }

}

export default App;
