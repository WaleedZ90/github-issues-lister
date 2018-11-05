import React, { Component } from 'react';
import './styles.css';

const IssueItem = ({ issue }) => {
    return (
        <div className="issue-item">
            <header className="issue-item-header">
                {/* <span>{issue.state}</span> */}
                {issue.state == "open" && <i class="fas fa-exclamation-circle open-state-icon"></i>}
                {issue.state == "closed" && <i class="far fa-check-circle closed-state-icon"></i>}
                <strong>{issue.title}</strong>
                {
                    issue.labels.map((label, index) => {
                        return <span key={label.node_id} style={{ backgroundColor: `#${label.color}` }} className="label-item" >{label.name}</span>
                    })
                }
                <span className="issue-comments">
                    <i class="far fa-comment-alt"></i> {issue.comments}
                </span>
            </header>
            <footer className="issue-item-footer">
                <span>{`#${issue.number} opened ${issue.created_at} by ${issue.user.login}`}</span>
            </footer>
        </div>
    );
};

export default IssueItem;