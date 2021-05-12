import React from "react";

import "./index.scss";

const RenderQuestions = ({ questions, parIndex }) => {
  return questions.map((el, index) => {
    return (
      <li className="questions__item" key={index + "_" + parIndex}>
        <p className="questions__item-title">{el.name}</p>
        {el.answers.map((ans) => {
          return (
            <label
              className={`questions__item-question`}
              key={index + "_" + parIndex + ans.name}
            >
              <input type="radio" name={el.name} />
              <div className={`${el.type === 2 ? "fder-column" : ""}`}>
                <span>{ans.name}</span>
                {el.type === 2 || ans.custom ? (
                  <input type="text" placeholder="Комментарий" />
                ) : null}
              </div>
            </label>
          );
        })}

        {el.type === 0 ? (
          <label className="questions__item-question-final">
            <input type="radio" name={el.name} />
            <span>Затрудняюсь ответить</span>
          </label>
        ) : null}
      </li>
    );
  });
};

const RenderBlocks = ({ blocks, description }) => {
  return blocks.map((el, index) => {
    return (
      <>
        <li className="blocks__item" key={index}>
          <p className="blocks__item-title"> {el.name}</p>
          <p className="blocks__item-description">
            {description
              .replace(/(<br\/>)/gi, " ")
              .replace(/(<\/b>)/gi, " ")
              .replace(/(<b>)/gi, " ")
              .replace(/Шкала оценок: /, "*")}
          </p>
        </li>

        <ul className="questions__list">
          <RenderQuestions questions={el.questions} parIndex={index} />
        </ul>
      </>
    );
  });
};

export const Questionnaire = ({ questionnaire }) => {
  return (
    <div className="questionnaire container">
      <form className="questionnaire__form">
        <ul className="blocks__list">
          <RenderBlocks
            blocks={questionnaire.questionnaire.blocks}
            description={questionnaire.questionnaire.description}
          />
        </ul>

        <button className="questionnaire__submit btn" type="submit">
          Отправить ответ
        </button>
      </form>
    </div>
  );
};
