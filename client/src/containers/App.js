import React, { Component } from 'react';
import Conversation from '../services/conversation';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      conversationHistory: []
    };
  }

  componentDidMount() {
    this.sendMessage('')
  }

  render() {
    return (
      <div className="app">
        <header>Chat Bot</header>
        <section ref="main">
          { this.state.conversationHistory.map((h,i) => this.renderText(h, i)) }
        </section>
        <footer>
        { this.renderInputView()}
        </footer>
      </div>
    );
  }

  renderText(exchange, key) {
    return (
      <div key={key} className="exchange">
        { exchange.input.text ? <div className="user-msg">{exchange.input.text}</div> : null }
        { exchange.output.text.map((t, i) => <div key={i} className="watson-msg">{t}</div>) }
      </div>);
  }

  renderInputView() {
    return <input type="text" autoComplete="off" placeholder='Type something'
                  onKeyUp={e => this.onInputKeyUp(e)}/>;
  }

  onInputKeyUp(e) {
    switch (e.which) {
      case 0x0d:
        this.sendMessage(e.target.value);
        e.target.value = '';
        break;
      default:
        break;
    }
  }

  sendMessage(text) {
    Conversation.message({
      text
    }).then(r => {
      this.state.conversationHistory.push(r);
      this.setState({
        conversationHistory: this.state.conversationHistory
      })
    });
  }

  componentDidUpdate() {
    const scrollTo = (element, to, duration) => {
      if (duration <= 0) return;
      const difference = to - element.scrollTop;
      const perTick = difference / duration * 10;

      setTimeout(function () {
        element.scrollTop += perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
      }, 10);
    };
    const node = this.refs.main;
    scrollTo(node, node.scrollHeight, 300);
  }
}

export default App;
