import React from "react";
import $ from "jquery";

const style = {
  backgroundColor: 'black'
}

export default class GetSingleQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
    this.randomQuote = this.randomQuote.bind(this);
  }

  componentDidMount(){
    this.getQuotes();
  }

  componentWillUnmount(){
    clearInterval(this.quoteTimer)
  }

  getQuotes() {
    $.ajax({
      type:'GET',
      url: '/home',
      success: (data) => {
        data = data.map((quoteObj) => [quoteObj.quote, quoteObj.source]);
        this.quoteTimer = setInterval(() => this.randomQuote(data), 4000);
      },
      error: (xhr, status, err) => {
        console.error(err)
      }
    });
  }

  randomQuote(quotes) {
    let randomIdx = Math.floor(Math.random() * quotes.length)
    this.setState({ quote: quotes[randomIdx] })
  }

  render() {
    return (
      <section className="top-section">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={style}>
              <div className="Marcelas-Card" style={{width: "18rem"}}>
                <img className="card-img-top-Marcela" src="https://i.imgur.com/llYZAD1.jpg?1" alt="Marcela's Pro Pic"/>
                <div className="card-body">
                  <h4 className="card-title">Marcela Torres</h4>
                    <h6>CEO &CoFounder</h6>
                  <p className="card-text">Marcela loves hacking things, specially social justice. Her commitment to
                     bring about positive social change, has driven her to engage in various sectors from the public
                     sector, social corporate responsibility to become an international consultant for social impact
                     assessments and action-field-researcher across the world. She believes HolaCode has the potential
                     to hack obstacles youth might encounter to achieve their dreams.</p>
                   <a href="http://www.material-ui.com/#/" className="btn btn-primary">Learn about Material-UI!</a>
                </div>
              </div>
            </div>
          </div>
          <div id='QuotesInTheCenter' className="col-md-6">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {this.state.quote}
          </div>
          <div className="col-md-3">
            <div id="card2" className="card" style={style}>
              <div className="Nicolas-Card" style={{width: "18rem"}}>
                <img className="card-img-top-Nicolas" src="https://i.imgur.com/9vDSVUE.jpg?2" alt="Nicolas's Pro Pic"/>
                <div className="card-body">
                  <h4 className="card-title">Nicolas Demeilliers</h4>
                  <h6>CFO/Co-Founder</h6>
                  <p className="card-text">Nicolas is co-founder of Connovo, an impact venture builder which has built
                     Extensio, Hipocampus and HolaCode. Before finding his passion as an impact entrepreneur, he worked
                     for 7 years in investment banking in London and Paris at BNP Paribas, and set up an accelerator
                     program for social entrepreneurs in Mexico for LGT Venture Philanthropy. Nicolas loves spending
                     time with his family, playing flamenco guitar, training capoeira and traveling.</p>
                   <a href="https://getbootstrap.com/" className="btn btn-primary">Learn about Bootstrap!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
