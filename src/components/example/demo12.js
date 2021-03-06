import React from 'react'
import $ from 'jquery'

export default class RepoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: null
        }
    }

    componentDidMount() {

        $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars').then(value => {
            this.setState({
                loading: false,
                data: value,
            },
                error => this.setState({
                    loading: false,
                    error: error
                }))
        });
    }

    render() {
        if (this.state.loading) {
            return <span className='content'>loading...</span>
        } else if (this.state.error) {
            return <span>Error : {this.state.error.message}</span>
        } else {
            let repos = this.state.data.items;
            console.log('repos=', repos)
            let repoList = repos.map(function (repo, index) {
                return (<li key={index}><a href={repo.html_url}>{repo.name}</a>({repo.stargazers_count} stars)<br />{repo.description}</li>);
            });
            console.log('repoList=', repoList)

            return (
                <main className='content'>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
}