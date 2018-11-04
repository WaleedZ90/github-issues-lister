import axios from 'axios';

export default class IssueService {
    getIssues(keys = {
        state: "open",
        filter: "all",
        page: "1",
        per_page: "30"
    }) {
        let params = "";
        Object.keys(keys).forEach(key => {
            params += `${key}=${keys[key]}&`;
        });
        
        return axios.get(`https://api.github.com/repos/facebook/react/issues?${params}`)
            .then(res => {
                return res;
            })
    }
}