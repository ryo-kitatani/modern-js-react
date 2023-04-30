import React from "react";

export const IncompleteTodos = (props) => {
  const {incompleteTodos, onClickDelete, onClickComplete} =  props
  return (
    <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div>
          {incompleteTodos.map((todo, index) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </ul>
            );
          })}
        </div>
      </div>
  )
}
