const { Octokit } = require( '@octokit/core' );
const encodedToken = 'Z2hwX0l4aXFlUjJ2enR3dDh3a3Z6TEJ6cndnWGlEYVRSOTRiSVNuQg==';
const octokit = new Octokit( {
  auth: window.atob(encodedToken)
} );
async function getCommits ()
{
  const result = await octokit.request( 'GET /repos/{owner}/{repo}/commits', {
    owner: 'saikumar0202',
    repo: 'track-repo'
  } );
  return result;
}

export default getCommits;