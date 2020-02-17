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
  render() {
    // todosに初期値の空の配列とnameの空を代入
    const { todos } = this.state;
    //変数todosを.mapメソッドでtodoの値とindex番号に分ける
    //それをli要素のkeyにindex番号を持たし、変数todoの値をliで表示する
    return (
      <div>
        <input type="text" />
        <button>登録</button>
        <ul>
          {todos.map((todo,index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    );
  }
}

export default Todo;