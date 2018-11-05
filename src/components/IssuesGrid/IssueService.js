import axios from 'axios';

export default class IssueService {
    getIssues(keys = null) {
        let filterParams = {
            state: "open",
            filter: "all",
            page: "1",
            per_page: "10",
            direction: "desc"
        };

        if (keys) {
            filterParams = {...filterParams, ...keys};
        }

        let params = "";
        Object.keys(filterParams).forEach(key => {
            params += `${key}=${filterParams[key]}&`;
        });

        return axios.get(`https://api.github.com/repos/facebook/react/issues?${params}`)
            .then(res => {
                return res;
            })
    }
}