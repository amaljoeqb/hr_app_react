import React from 'react';
import './css/buttons.css'
import './css/form.css'
import './css/input.css'
import './css/normalize.css'
import './css/popup.css'
import './css/style.css'
import './css/table.css'
import EmployeeTable from "./views/EmployeeTable.1";
import { HoverButton } from './components/HoverButton.style';

function App() {
  return (
    <div className="App">
      <main className="card">
        <h1>Employees</h1>
        <div className="emp-listing-header">
          <div className="start-section">
            <input
              type="text"
              name="key"
              className="search-input"
              placeholder="Search employees..."
              autoComplete="off"
            />
          </div>
          <div className="next-section">
            <div className="filters-section">
              <div id="skills-filter" className="filter-btn-container">
                <button className="filter-btn hover-btn">
                  <span className="material-symbols-outlined"> tune </span>
                  <p>Skills</p>
                  <ul className="selected-items"></ul>
                </button>
                <div className="filter-dropdown">
                  <form className="filter-form">
                    <span className="material-symbols-outlined search-icon">
                      search
                    </span>
                    <input
                      className="filter-search"
                      type="text"
                      id="skill-filter"
                      name="skill-filter"
                      placeholder="Search Skills"
                      autoComplete="off"
                    />
                  </form>
                  <hr />
                  <ul className="filtered-items"></ul>
                  <hr />
                  <button className="clear-filter">
                    <p>Clear Filters</p>
                  </button>
                </div>
              </div>
            </div>
            <HoverButton>
              <span className="material-symbols-outlined"> add_circle </span>
              <p>Create</p>
            </HoverButton>
          </div>
        </div>
        <div className="table-container">
          <EmployeeTable />
        </div>
        <nav className="pagination-container">
          <div className="pagination">
            <button className="hover-btn page-first">
              <span className="material-symbols-outlined"> first_page </span>
            </button>
            <button className="hover-btn page-previous">
              <span className="material-symbols-outlined"> navigate_before </span>
            </button>
            <ul className="page-numbers">
              <li>
                <button
                  id="page-1"
                  data-num="1"
                  className="page-number hover-btn active"
                >1
                </button>
              </li>
              <li>
                <button
                  id="page-2"
                  data-num="2"
                  className="page-number hover-btn"
                >2</button>
              </li>
            </ul>
            <button className="hover-btn page-next">
              <span className="material-symbols-outlined"> navigate_next </span>
            </button>
            <button className="hover-btn page-last">
              <span className="material-symbols-outlined"> last_page </span>
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
