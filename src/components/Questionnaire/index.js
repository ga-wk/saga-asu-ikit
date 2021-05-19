import React, { useRef } from "react";
import { Redirect } from "react-router";
import { Cookie } from "../../libs/cookie";
import { postData } from "../../libs/requests";
import { token } from "../../strings/public";
import { questionnaireSendresult } from "../../strings/urls";

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
              key={index + "_" + parIndex + ans.name}>
              <input required type="radio" name={el.name} value={ans.score} id_ans={ans.id} custom={ans.custom} score={ans.score} />
              <div className={`${el.type === 2 ? "fder-column" : ""}`}>
                <span>{ans.name}</span>
                {el.type === 2 || ans.custom ? (
                  <input className="questions__item-comment" type="text" placeholder="Комментарий" />
                ) : null}
              </div>
            </label>
          );
        })}

        {el.type === 0 ? (
          <label className="questions__item-question-final">
            <input required type="radio" name={el.name} value={-1} id_ans={el.answers[0].id} custom={0} score={0} />
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
  const modal = useRef();
  const wrapper = useRef();
  const form = useRef();

  const formSubmit = (e) => {
    e.preventDefault();

    const body = {
      userToken: Cookie.getCookie(token),
      id: questionnaire.questionnaire.id,
      answers: [],
    }

    for (let i = 0, length = form.current.length; i < length; i++) {
      if (form.current[i].checked) {
        let value = ""
        if (form.current[i].nextElementSibling.lastElementChild !== null) {
          value = form.current[i].nextElementSibling.lastElementChild.value || ""
        }

        const answer = {
          id: form.current[i].getAttribute('id_ans'),
          custom: form.current[i].getAttribute('custom'),
          score: form.current[i].getAttribute('score'),
          name: form.current[i].getAttribute('name'),
          value: value,
        }

        body.answers.push(answer)
      }
    }

    postData(questionnaireSendresult, body).then((result) => {
      alert("Благодарим за уделенное время ")
      return <Redirect to={"/questionnaires"} />
    }).catch(e => {
      console.error(e)
    })

  }
  const clickModalBtn = (e) => {
    modal.current.classList.toggle("hidden");
    wrapper.current.classList.toggle("wrapper");
  };

  return (
    <div ref={wrapper} className="questionnaire container">
      <form ref={form} onSubmit={formSubmit} className="questionnaire__form">
        <ul className="blocks__list">
          <RenderBlocks
            blocks={questionnaire.questionnaire.blocks}
            description={questionnaire.questionnaire.description} />
        </ul>

        <button className="questionnaire__submit btn" type="submit">
          Отправить ответ
        </button>
      </form>

      <button onClick={clickModalBtn} className="modal__btn-open">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="45px"
          version="1.1"
          viewBox="-6 -5 45 45"
          width="35px" >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
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
              width="25px">
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          </button>
        </header>

        <ul className="blocks__list">
          {questionnaire.questionnaire.blocks.map((el, index) => (
            <li className="blocks__item">
              <a onClick={clickModalBtn} href={`#${index}`}>
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
