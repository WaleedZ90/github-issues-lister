import React, { Component } from 'react';
import './styles.css';

const IssueItem = ({ issue }) => {
    return (
        <div key={issue.id} className="issue-item">
            <aside className="issue-state-icon">
                {issue.state == "open" && <i className="fas fa-exclamation-circle open-state-icon"></i>}
                {issue.state == "closed" && <i className="far fa-check-circle closed-state-icon"></i>}
            </aside>
            <article className="issue-item-body">
                <header className="issue-item-header">
                    <strong className="issue-item-title">{issue.title}</strong>
                    {
                        issue.labels.map((label, index) => {
                            return <span key={label.node_id} style={{ backgroundColor: `#${label.color}` }} className="label-item" >{label.name}</span>
                        })
                    }
                    <span className="issue-comments">
                        <i className="far fa-comment-alt"></i> {issue.comments}
                    </span>
                </header>
                <footer className="issue-item-footer">
                    <span>{`#${issue.number} opened ${issue.created_at} by ${issue.user.login}`}</span>
                </footer>
            </article>
        </div>
    );
};

export default IssueItem;