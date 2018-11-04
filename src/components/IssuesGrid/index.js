import React, { Component } from 'react';
import IssueService from './IssueService';

import IssueItem from './IssueItem';

import './styles.css';

export default class IssuesGrid extends Component {
    state = {
        issueService: new IssueService(),
        issues: [],
        isLoading: false,
        hasError: false
    };

    componentDidMount() {
        try {
            const { issueService } = this.state;
            this.setState({ isLoading: true });
            issueService.getIssues().then(res => {
                if (res.status == 200) {
                    const issues = res.data;
                    this.setState({ issues, isLoading: false });
                }else {
                    this.setState({ hasError: true, isLoading: false });
                }
            });
        } catch (error) {
            this.setState({ hasError: true, isLoading: false });
        }
    }

    render() {
        const { issues, isLoading } = this.state;

        if (isLoading) {
            return <h1>Loading please wait...</h1>;
        }

        return (
            <article className="issues-grid">
                <section className="filters-container"></section>
                <section className="issues-container">
                    {
                        issues.map((issue, index) => {
                            return <IssueItem key={index} issue={issue} />
                        })
                    }
                </section>
            </article>
        );
    }
}