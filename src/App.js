import React, { Component } from "react";
import MyList from "./componetes/myList";
import NewsList from "./componetes/news-list.js";
import "./App.css";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("439c60eec1854f8e889fe21f403363f0");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serchq:'',
      news: [],
    };
  }

  onSearch =(event) => {
    event.preventDefault();
    //const query = event.target.value;
    const n= this.n.value
    this.setState({ serchq: n });
   
    newsapi.v2.everything({
      q: this.n.value,
      sources: 'bbc-news,the-verge',
      domains: 'bbc.co.uk, techcrunch.com',
      from: '2020-06-09',
      to: '2020-06-30',
      language: 'en',
      sortBy: 'relevancy',
      page: 1
    }).then((response) => {
      console.log(response)
      this.setState({ news: response.articles })
    });
    
  }
  componentDidMount() {
    newsapi.v2.everything({
      q: 'corona',
      sources: 'bbc-news,the-verge',
      domains: 'bbc.co.uk, techcrunch.com',
      from: '2020-06-02',
      to: '2020-06-30',
      language: 'en',
      sortBy: 'relevancy',
      page: 1
    }).then((response) => {
      console.log(response)
      this.setState({ news: response.articles })
    });
   
    // newsapi.v2
    //   .sources({

    //     category: "technology",
    //     language: "en",
    //     country: "us",
    //   })
    //   .then((response) => {
    //     console.log(response)
    //     this.setState({ news: response.sources })
    //   });
  }
  componentDidUpdate(){
    
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td><h1>News By Bing</h1></td>  
            <td>
              <div className="layout">
                <form onSubmit={this.onSearch.bind(this)}>
                  <table>
                    <tr>
                      <td>
                    <label>
                      Serach News:
                      </label></td>
                      <td>
                      <input
                        type="text"
                        value={this.state.value}
                        ref={input => this.n = input}
                      />
                    </td> 
                    <td>
                    <input type="submit" value="Submit" /></td>
                    </tr>
                    </table>
                </form>
                </div>
            </td>
            </tr>
            <tr>
              <td >
                <div className='layout'>
                 <h3> Your Search Result</h3>
                 </div>
              </td>
              <td>
              <td >
                <div className='layout'>
                 <h3> Search query:{this.state.serchq} </h3>
                 </div>
              </td>
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                {this.state.news.map((nw) => {
                  return( 
                  <div>
                    <table >
                      <tr>
                        <td><p><b>{nw.description}</b></p>
                            <p>Author: {nw.author} Date: {nw.publishedAt}</p>
                            <p>{nw.content}</p>
                        
                        </td>
                      </tr>
                    </table>
                  </div>
                  )
                  
                }
                )}
                

                </td>
            </tr>
        </table>
      </div>
    );
  }
}

export default App;
