import React from 'react';
import './styles.scss';
const Commit = ( props ) =>
{
  const { data } = props;
  return (
    <div className='commit'>
      <div className="commit__wrapper">
        <h3 className="commit__header">{data.message}</h3>
        <div className="commit__info">
          <span className="commit__time">
            {data.author.date}
          </span>
          by
          <span className="commit__user">{data.author.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Commit;