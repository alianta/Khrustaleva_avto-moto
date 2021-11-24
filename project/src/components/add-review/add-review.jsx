import React, {useState} from 'react';

const RATING_STAR_COUNT = 5;


function AddReview() {
  const [rating, setRating] = useState(0);
  const [popUpStatus, setPopUpStatus] = useState(0);
  const [name, setName] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [comment, setComment] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('pros', pros);
    localStorage.setItem('cons', cons);
    localStorage.setItem('rating', rating);
    localStorage.setItem('comment', comment);
  };

  return (
    <div id="pop-up" className={`pop-up ${popUpStatus?'pop-up--close':''}`} onMouseUp={(evt)=>evt.target.id === 'pop-up'?setPopUpStatus(1):''}>
      <form id="add-review-form" className="review-form" onSubmit={onFormSubmit}>
        <button
          className="pop-up__close-button"
          type="button"
          onClick={() => setPopUpStatus(1)}
        >
        </button>
        <h2 className="review-form__title">Оставить отзыв</h2>
        <div className="review-form__field required">
          <label className="review-form__label visually-hidden" htmlFor="review-form__name">Имя</label>
          <input id="review-form__name" className="review-form__input" type="text" name="name" placeholder="Имя" onChange={(evt) => setName(evt.target.value)}/>
        </div>
        <div className="review-form__field">
          <label className="review-form__label visually-hidden" htmlFor="review-form__pros">Достоинства</label>
          <input id="review-form__pros" className="review-form__input" type="text" name="pros" placeholder="Достоинства" onChange={(evt) => setPros(evt.target.value)}/>
        </div>
        <div className="review-form__field">
          <label className="review-form__label visually-hidden" htmlFor="review-form__cons">Недостатки</label>
          <input id="review-form__cons" className="review-form__input" type="text" name="cons" placeholder="Недостатки" onChange={(evt) => setCons(evt.target.value)}/>
        </div>
        <div className="review-form__field">
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
                    <label className={`rating__label ${rating>=id+1?'rating__label--active':''}`} htmlFor={`star-${id}`}></label>
                  </React.Fragment>
                );
              })
            }
          </div>
        </div>
        <div className="review-form__field  review-form__field--last required">
          <label className="review-form__label visually-hidden" htmlFor="review-form__comment">Комментарий</label>
          <textarea id="review-form__comment" className="review-form__comment"  name="comment" placeholder="Комментарий" onChange={(evt) => setComment(evt.target.value)}></textarea>
        </div>
        <button className="review-form__submit" type="submit">Оставить отзыв</button>
      </form>
    </div>
  );
}

export default AddReview;
