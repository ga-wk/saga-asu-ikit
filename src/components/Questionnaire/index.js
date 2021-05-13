import React, { useRef } from "react";

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
        <li id={index} className="blocks__item" key={index}>
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
  const modal = useRef()
  const clickModalBtn = (e)=>{
    e.preventDefault();
  
    modal.current.classList.toggle('hidden')
  }

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

      <button onClick={clickModalBtn} className="modal__btn-open">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>

      <div ref={modal} className="modal__href hidden">
        <header className="modal__header">
          <p className="modal__title">Все вопросы</p>
          <button onClick={clickModalBtn} className="modal__btn-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 0 329.26933 329"
              width="25px"
            >
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          </button>
        </header>

        <ul className="blocks__list">
          {questionnaire.questionnaire.blocks.map((el, index) => (
            <li className="blocks__item">
              <a href={`#${index}`}>{el.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
