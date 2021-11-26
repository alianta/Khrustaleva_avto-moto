import React, {useEffect, useState} from 'react';
import {RATING_STAR_COUNT} from '../../const';
import PropTypes from 'prop-types';

function AddReview({onPopUpClose}) {
  const [rating, setRating] = useState(0);
  const [selectingRatingValue, setSelectingRatingValue] = useState(0);
  const [name, setName] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [comment, setComment] = useState('');
  const [isNameEmptyError, setIsNameEmptyError] = useState(false);
  const [isCommentEmptyError, setIsCommentEmptyError] = useState(false);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (name === '' && comment === '') {
      setIsNameEmptyError(true);
      setIsCommentEmptyError(true);
    }else if (comment === '') {
      setIsCommentEmptyError(true);
      setIsNameEmptyError(false);
    }else if (name === '') {
      setIsCommentEmptyError(false);
      setIsNameEmptyError(true);
    }else{
      localStorage.setItem('name', name);
      localStorage.setItem('pros', pros);
      localStorage.setItem('cons', cons);
      localStorage.setItem('rating', rating);
      localStorage.setItem('comment', comment);
      onPopUpClose();
    }
  };

  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        onPopUpClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  return (
    <div id="pop-up" className='pop-up' onMouseUp={(evt)=>evt.target.id === 'pop-up'?onPopUpClose():''}>
      <form id="add-review-form" className="review-form" onSubmit={onFormSubmit}>
        <button
          className="pop-up__close-button"
          type="button"
          onClick={() => onPopUpClose()}
        >
        </button>
        <h2 className="review-form__title">Оставить отзыв</h2>
        <div className={`review-form__field required ${isNameEmptyError?'required--error':''}`}>
          <span className={`review-form__error ${isNameEmptyError?'':'visually-hidden'}`}>Пожалуйста, заполните поле</span>
          <label className="review-form__label visually-hidden" htmlFor="review-form__name">Имя</label>
          <input id="review-form__name" className={`review-form__input ${isNameEmptyError?'review-form__input--error':''}`} type="text" name="name" placeholder="Имя" onChange={(evt) => setName(evt.target.value)} autoFocus/>
        </div>
        <div className="review-form__field">
          <label className="review-form__label visually-hidden" htmlFor="review-form__pros">Достоинства</label>
          <input id="review-form__pros" className="review-form__input" type="text" name="pros" placeholder="Достоинства" onChange={(evt) => setPros(evt.target.value)}/>
        </div>
        <div className="review-form__field">
          <label className="review-form__label visually-hidden" htmlFor="review-form__cons">Недостатки</label>
          <input id="review-form__cons" className="review-form__input" type="text" name="cons" placeholder="Недостатки" onChange={(evt) => setCons(evt.target.value)}/>
        </div>
        <div className="review-form__field review-form__field--first">
          <span className="review-form__label">Оцените товар:</span>
          <div className="rating">
            {
              Array.from({length: RATING_STAR_COUNT}).map((_, id) => {
                const keyValue = `star-${id}`;
                return (
                  <React.Fragment key={keyValue}>
                    <input
                      className="rating__input"
                      id={`star-${id}`}
                      type="radio"
                      name="rating"
                      value={`${id}`}
                      onChange={({target}) => {
                        setRating(+target.value+1);
                      }}
                    />
                    <label
                      className={`rating__label ${rating>=id+1||selectingRatingValue>=id+1?'rating__label--active':''}`}
                      onMouseEnter={({target}) => {
                        setSelectingRatingValue(id+1);
                      }}
                      htmlFor={`star-${id}`}
                    >
                    </label>
                  </React.Fragment>
                );
              })
            }
          </div>
        </div>
        <div className={`review-form__field  review-form__field--last required ${isCommentEmptyError?'required--error':''}`}>
          <span className={`review-form__error ${isCommentEmptyError?'':'visually-hidden'}`}>Пожалуйста, заполните поле</span>
          <label className="review-form__label visually-hidden" htmlFor="review-form__comment">Комментарий</label>
          <textarea id="review-form__comment" className={`review-form__comment ${isCommentEmptyError?'review-form__comment--error':''}`} name="comment" placeholder="Комментарий" onChange={(evt) => setComment(evt.target.value)}></textarea>
        </div>
        <button className="review-form__submit" type="submit">Оставить отзыв</button>
      </form>
    </div>
  );
}

AddReview.propTypes = {
  onPopUpClose: PropTypes.func.isRequired,
};

export default AddReview;
