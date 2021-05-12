import React from "react";

import "./index.scss";

const RenderQuestions = ({ questions, parIndex }) => {
  return questions.map((el, index) => {
    return (
      <li className="questions__item" key={index + "_" + parIndex}>
        <p className="questions__item-title">{el.name}</p>
        {el.answers.map((ans) => {
          return (
            <label className="questions__item-question" key={index + "_" + parIndex + ans.name}>
              <input type="radio" name={el.name} />
              {ans.name}
              {el.type === 2 || ans.custom ? (
                <input type="text" placeholder="Комментарий" />
              ) : null}
            </label>
          );
        })}

        {el.type === 0 ? (
          <label className="questions__item-question">
            <input type="radio" name={el.name} />
            Затрудняюсь ответить
          </label>
        ) : null}
      </li>
    );
  });
};

const RenderBlocks = ({ blocks }) => {
  return blocks.map((el, index) => {
    return (
      <li className="blocks__item" key={index}>
        <p className="blocks__item-title" >{el.name}</p>
        <ul className ="questions__list">
          <RenderQuestions questions={el.questions} parIndex={index} />
        </ul>
      </li>
    );
  });
};

export const Questionnaire = ({ questionnaire }) => {
  console.log(questionnaire.questionnaire.blocks);
  return (
    <div className="questionnaire container">
      <form className="questionnaire__form">
        <ul className="blocks__list">
          <RenderBlocks blocks={questionnaire.questionnaire.blocks} />
        </ul>

        <button className="questionnaire__submit" type="submit"> Отправить ответ </button>
      </form>
    </div>
  );
};
