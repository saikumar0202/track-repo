import React, { useEffect, useState } from 'react';
import './App.scss';
import Commit from './components/Commit/Commit';
import Header from './components/Header/Header';
import getCommits from './service/octokit-service';
const REFRESH_TIME = 30;
function App ()
{
  const [commits, setCommits ] = useState([]);
  const [count, setCount ] = useState(REFRESH_TIME);
  const getCommitData = () => {
    getCommits().then(json => {
      setCount(() => REFRESH_TIME);
      setCommits(() => json.data);
    })
  }
  useEffect( () => {
    const interval = setInterval(() => {
      setCount((prevCount) =>  {
        console.log(prevCount)
        if(prevCount == 0) {
            getCommitData();
          }
          return prevCount - 1;
         });
    }, 1000);
    return () => clearInterval(interval);
  }, [commits] );
  useEffect( () => {
    getCommitData();
  }, [] );
  const handleRefresh = () => {
    getCommitData();
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="body">
        <div className='commit-container-header'>
          <h2>Commit History</h2>
          <div>
            <div className='timer'>
              Refresh in {count} Sec(s)
            </div>
            <div>
              <button onClick={handleRefresh}>refresh now</button>
            </div>
          </div>
        </div>
        <div className="commits-wrapper">
          {commits.map((commit) => <Commit key={commit.sha} data={commit.commit} />)}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
