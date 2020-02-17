import React from 'react';

class Todo extends React.Component {
  //初期値にtodoは空の配列で、nameには空
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      name: ''
    };
  }
  //追加メソッドを定義
  onInput = (e) => {
    //nameの値を更新する
    this.setState({
      //入力された値をe.target.valueで取り出せる
      name: e.target.value
    });
  }

  render() {
    // todosに初期値の空の配列とnameの空を代入
    const { todos } = this.state;
    //変数todosを.mapメソッドでtodoの値とindex番号に分ける
    //それをli要素のkeyにindex番号を持たし、変数todoの値をliで表示する
    return (
      //入力された値をonInputメソッドでonInputに代入
      <div>
        <input type="text" onInput={this.onInput} />
        <button>登録</button>
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    );
  }
}

export default Todo;