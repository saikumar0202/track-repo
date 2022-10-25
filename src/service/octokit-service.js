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