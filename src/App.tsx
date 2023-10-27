import React from 'react';
import './App.css';
import './App.css';
import './css/buttons.css'
import './css/form.css'
import './css/input.css'
import './css/normalize.css'
import './css/popup.css'
import './css/style.css'
import './css/table.css'

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
            <button className="add-btn hover-btn">
              <span className="material-symbols-outlined"> add_circle </span>
              <p>Create</p>
            </button>
          </div>
        </div>
        <div className="table-container">
          <table className="emp-table">
            <colgroup>
              <col style={{ width: "5%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "40%" }} />
              <col style={{ width: "5%" }} />
            </colgroup>
            <thead>
              <tr className="header-row">
                <th className="check-cell">
                  <div className="checkbox-container">
                    <input type="checkbox" className="all-check" />
                  </div>
                </th>
                <th>
                  <div className="header-container">
                    <h3 className="column-title" data-key="employeeId">
                      <button >ID</button>
                      <span className="sort-icon">
                        <span className="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span className="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div className="header-container">
                    <h3 className="column-title" data-key="name">
                      <button >Name</button>
                      <span className="sort-icon">
                        <span className="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span className="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div className="header-container">
                    <h3 className="column-title" data-key="designation">
                      <button >Designation</button>
                      <span className="sort-icon">
                        <span className="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span className="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div className="header-container">
                    <h3 className="column-title" data-key="department">
                      <button >Department</button>
                      <span className="sort-icon">
                        <span className="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span className="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div className="header-container">
                    <h3 className="column-title no-click" data-key="skills">
                      Skills
                    </h3>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
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
