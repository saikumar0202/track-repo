const { Octokit } = require( '@octokit/core' );
const octokit = new Octokit( {
  auth: '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'
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