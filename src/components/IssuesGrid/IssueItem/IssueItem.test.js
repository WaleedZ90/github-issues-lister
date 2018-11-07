import React from 'react';
import ReactDOM from 'react-dom';
import IssueItem from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const issueObject = {
            "url": "https://api.github.com/repos/facebook/react/issues/14137",
            "repository_url": "https://api.github.com/repos/facebook/react",
            "labels_url": "https://api.github.com/repos/facebook/react/issues/14137/labels{/name}",
            "comments_url": "https://api.github.com/repos/facebook/react/issues/14137/comments",
            "events_url": "https://api.github.com/repos/facebook/react/issues/14137/events",
            "html_url": "https://github.com/facebook/react/issues/14137",
            "id": 378312510,
            "node_id": "MDU6SXNzdWUzNzgzMTI1MTA=",
            "number": 14137,
            "title": "Cannot read property 'ReactDebugCurrentFrame' of undefined",
            "user": {
                "login": "btf93",
                "id": 44644409,
                "node_id": "MDQ6VXNlcjQ0NjQ0NDA5",
                "avatar_url": "https://avatars2.githubusercontent.com/u/44644409?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/btf93",
                "html_url": "https://github.com/btf93",
                "followers_url": "https://api.github.com/users/btf93/followers",
                "following_url": "https://api.github.com/users/btf93/following{/other_user}",
                "gists_url": "https://api.github.com/users/btf93/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/btf93/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/btf93/subscriptions",
                "organizations_url": "https://api.github.com/users/btf93/orgs",
                "repos_url": "https://api.github.com/users/btf93/repos",
                "events_url": "https://api.github.com/users/btf93/events{/privacy}",
                "received_events_url": "https://api.github.com/users/btf93/received_events",
                "type": "User",
                "site_admin": false
            },
            "labels": [{
                "id": 620368407,
                "node_id": "MDU6TGFiZWw2MjAzNjg0MDc=",
                "url": "https://api.github.com/repos/facebook/react/labels/Resolution:%20Needs%20More%20Information",
                "name": "Resolution: Needs More Information",
                "color": "fffde7",
                "default": false
            }],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [

            ],
            "milestone": null,
            "comments": 3,
            "created_at": "2018-11-07T14:31:51Z",
            "updated_at": "2018-11-07T18:03:15Z",
            "closed_at": null,
            "author_association": "NONE",
            "body": "Hi, I get the following issue in Chrome developer tools Console after updating to the latest version of React.\r\n\r\nIt doesn't seem a very common issue? Please let me know if there's any other information I can provide?\r\n\r\nUncaught TypeError: Cannot read property 'ReactDebugCurrentFrame' of undefined\r\n    at eval (webpack-internal:///987:655)\r\n    at eval (webpack-internal:///987:3570)\r\n    at Object.<anonymous> (bundle.js:11919)\r\n    at __webpack_require__ (bundle.js:20)\r\n    at eval (webpack-internal:///478:34)\r\n    at Object.<anonymous> (bundle.js:5811)\r\n    at __webpack_require__ (bundle.js:20)\r\n    at eval (webpack-internal:///597:7)\r\n    at Object.<anonymous> (bundle.js:7239)\r\n    at __webpack_require__ (bundle.js:20)"
        };

    ReactDOM.render(<IssueItem issue={issueObject} />, div);
    ReactDOM.unmountComponentAtNode(div);
});