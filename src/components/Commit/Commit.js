import React from 'react';
import getTimeFormat from './date-utility';
import './styles.scss';
const Commit = ( props ) =>
{
  const { data } = props;
  const { author } = data;
  const time = getTimeFormat(author.date)
  return (
    <div className='commit'>
      <div className="commit__wrapper">
        <h3 className="commit__header">{data.message}</h3>
        <div className="commit__info">
          <span className="commit__time">
            {time}
          </span>
          by
          <span className="commit__user">{author.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Commit;