import logo from './logo.svg';
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
      <main class="card">
        <h1>Employees</h1>
        <div class="emp-listing-header">
          <div class="start-section">
            <input
              type="text"
              name="key"
              class="search-input"
              placeholder="Search employees..."
              autocomplete="off"
            />
          </div>
          <div class="next-section">
            <div class="filters-section">
              <div id="skills-filter" class="filter-btn-container">
                <button class="filter-btn hover-btn">
                  <span class="material-symbols-outlined"> tune </span>
                  <p>Skills</p>
                  <ul class="selected-items"></ul>
                </button>
                <div class="filter-dropdown">
                  <form class="filter-form">
                    <span class="material-symbols-outlined search-icon">
                      search
                    </span>
                    <input
                      class="filter-search"
                      type="text"
                      id="skill-filter"
                      name="skill-filter"
                      placeholder="Search Skills"
                      autocomplete="off"
                    />
                  </form>
                  <hr />
                  <ul class="filtered-items"></ul>
                  <hr />
                  <button class="clear-filter">
                    <p>Clear Filters</p>
                  </button>
                </div>
              </div>
            </div>
            <button class="add-btn hover-btn">
              <span class="material-symbols-outlined"> add_circle </span>
              <p>Create</p>
            </button>
          </div>
        </div>
        <div class="table-container">
          <table class="emp-table">
            <colgroup>
              <col style={{ width: "5%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "40%" }} />
              <col style={{ width: "5%" }} />
            </colgroup>
            <thead>
              <tr class="header-row">
                <th class="check-cell">
                  <div class="checkbox-container">
                    <input type="checkbox" class="all-check" />
                  </div>
                </th>
                <th>
                  <div class="header-container">
                    <h3 class="column-title" data-key="employeeId">
                      <button >ID</button>
                      <span class="sort-icon">
                        <span class="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span class="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div class="header-container">
                    <h3 class="column-title" data-key="name">
                      <button >Name</button>
                      <span class="sort-icon">
                        <span class="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span class="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div class="header-container">
                    <h3 class="column-title" data-key="designation">
                      <button >Designation</button>
                      <span class="sort-icon">
                        <span class="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span class="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div class="header-container">
                    <h3 class="column-title" data-key="department">
                      <button >Department</button>
                      <span class="sort-icon">
                        <span class="material-symbols-outlined up">
                          keyboard_arrow_up
                        </span>
                        <span class="material-symbols-outlined down">
                          keyboard_arrow_down
                        </span>
                      </span>
                    </h3>
                  </div>
                </th>

                <th>
                  <div class="header-container">
                    <h3 class="column-title no-click" data-key="skills">
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
        <nav class="pagination-container">
          <div class="pagination">
            <button class="hover-btn page-first">
              <span class="material-symbols-outlined"> first_page </span>
            </button>
            <button class="hover-btn page-previous">
              <span class="material-symbols-outlined"> navigate_before </span>
            </button>
            <ul class="page-numbers">
              <li>
                <button
                  id="page-1"
                  data-num="1"
                  class="page-number hover-btn active"
                >1
                </button>
              </li>
              <li>
                <button
                  id="page-2"
                  data-num="2"
                  class="page-number hover-btn"
                >2</button>
              </li>
            </ul>
            <button class="hover-btn page-next">
              <span class="material-symbols-outlined"> navigate_next </span>
            </button>
            <button class="hover-btn page-last">
              <span class="material-symbols-outlined"> last_page </span>
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
