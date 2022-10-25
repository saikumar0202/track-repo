import React, { useEffect, useState } from 'react';
import './App.scss';
import Commit from './components/Commit/Commit';
import getCommits from './service/octokit-service';

function App ()
{
  const [commits, setCommits ] = useState([]);
  useEffect( () => {
    getCommits().then(json => {
      setCommits(() => json.data);
    })
  }, [] );
  return (
    <div className="container">
      <div className="body">
       {commits.map((commit) => <Commit data={commit.commit} />)}
      </div>
    </div>
  );
}

export default App;
