import React, { Component } from 'react';
import IssueService from './IssueService';

import IssueItem from './IssueItem';

import './styles.css';

export default class IssuesGrid extends Component {
    state = {
        issueService: new IssueService(),
        issues: [],
        isLoading: false,
        hasError: false,
        filters: [
            {
                label: "Open",
                value: "open"
            },
            {
                label: "Closed",
                value: "closed"
            },
            {
                label: "All",
                value: "all"
            }
        ],
        selectedFilter: "open",
        sortList: [
            {
                label: "Ascending",
                value: "asc"
            },
            {
                label: "Descending",
                value: "desc"
            }
        ],
        selectedSort: "desc",
        pageNumber: 1
    };

    componentDidMount() {
        this.fetchIssues();
    }

    fetchIssues = (keys = null) => {
        try {
            const { issueService } = this.state;
            this.setState({ isLoading: true });
            issueService.getIssues(keys).then(res => {
                if (res.status == 200) {
                    const issues = res.data;
                    this.setState({ issues, isLoading: false });
                } else {
                    this.setState({ hasError: true, isLoading: false });
                }
            });
        } catch (error) {
            this.setState({ hasError: true, isLoading: false });
        }
    };

    handleFilterChange = (e) => {
        this.setState({ selectedFilter: e.target.value }, () => {
            const { selectedFilter, selectedSort } = this.state;
            const filters = {
                state: selectedFilter,
                direction: selectedSort
            };
            this.fetchIssues(filters);
        });
    };

    handleSortChange = (e) => {
        this.setState({ selectedSort: e.target.value }, () => {
            const { selectedFilter, selectedSort } = this.state;
            const filters = {
                state: selectedFilter,
                direction: selectedSort
            };
            this.fetchIssues(filters);
        });
    };

    handlePaging = (nextPage) => {
        this.setState({ pageNumber: nextPage }, () => {
            const { selectedFilter, selectedSort, pageNumber } = this.state;
            const filters = {
                state: selectedFilter,
                direction: selectedSort,
                page: pageNumber
            };
            this.fetchIssues(filters);
        });
    }

    renderDropdownFilter = (list, onChangeCallback, selectedValue) => {
        return (
            <fieldset className="dropdown-container">
                <label className="dropdown-label">{list.label}</label>
                <select onChange={onChangeCallback}>
                    {
                        list.data.map((listItem) => {
                            return <option className="dropdown-item" value={listItem.value} selected={listItem.value == selectedValue}>{listItem.label}</option>;
                        })
                    }
                </select>
            </fieldset>
        );
    }

    renderGridItems = () => {
        const { issues, isLoading } = this.state;

        if (isLoading) {
            return <h1>Loading please wait...</h1>;
        }

        return (
            <section className="issues-container">
                {
                    issues.map((issue, index) => {
                        return <IssueItem issue={issue} />
                    })
                }
            </section>
        );
    }

    render() {
        const { filters, sortList, selectedFilter, selectedSort, pageNumber } = this.state;

        const previousPage = !(pageNumber - 1 <= 0) ? pageNumber - 1 : 1;
        const nextPage = pageNumber + 1;

        const filtersData = {
            label: "Filter by state",
            data: filters
        };

        const sortData = {
            label: "Sort",
            data: sortList
        };

        return (
            <article className="issues-grid">
                <section className="filters-container">
                    {this.renderDropdownFilter(filtersData, this.handleFilterChange, selectedFilter)}
                    {this.renderDropdownFilter(sortData, this.handleSortChange, selectedSort)}
                </section>
                {this.renderGridItems()}
                <section className="paging-section">
                    <button onClick={() => this.handlePaging(previousPage)}>Previous page</button>
                    <button onClick={() => this.handlePaging(nextPage)}>Next page</button>
                </section>
            </article>
        );
    }
}