import React from 'react';

class Todo extends React.Component {
  //初期値にtodoは空の配列で、nameには空
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }
  //todoを追加メソッドを定義
  onInput = (e) => {
    //nameの値を更新する
    this.setState({
      //入力された値をe.target.valueで取り出せる
      name: e.target.value
    });
  }
  //todoを登録するメソッドを定義
  addTodo = () => {
    //初期値を代入
    const { todos, name } = this.state;
    //
    this.setState({
      //スプレッド演算子を使って、配列を複製し、入力された値をセット
      todos: [...todos, name]
    });
  }

  render() {
    // todosに初期値の空の配列とnameの空を代入
    const { todos } = this.state;
    //変数todosを.mapメソッドでtodoの値とindex番号に分ける
    //それをli要素のkeyにindex番号を持たし、変数todoの値をliで表示する
    return (
      //入力されたらonInputメソッド発動し
      //ボタンをクリックしたらaddTodoメソッド発動で追加
      <div>
        <input type="text" onInput={this.onInput} />
        <button　onClick={this.addTodo}>登録</button>
        <ul>
          {todos.map((todo, index) => <li key={index}>
            {todo}
          </li>)}
        </ul>
      </div>
    );
  }
}

export default Todo;