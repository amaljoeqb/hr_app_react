import { Employee, Skill } from "../models";

/**
 * Get data from url
 * @param {string} url url of request
 */
export async function getData(url: string) {
    return fetch(url).then((response) => response.json());
}

/**
 * Function to add span for search term in a string
 * @param {string} text - Text to highlight
 * @param {string} searchTerm - Search term
 */
export function highlightSearchTerm(text: string, searchTerm: string) {
    try {
        if (typeof text !== "string" && typeof text !== "number") {
            return text;
        }
        const textString = text.toString();
        const lowerCaseText = textString.toString().toLowerCase();
        if (!searchTerm || !lowerCaseText.includes(searchTerm)) {
            return text;
        }
        const startIndex = lowerCaseText.toString().indexOf(searchTerm);
        const endIndex = startIndex + searchTerm.length;
        const highlightedText =
            textString.toString().slice(0, startIndex) +
            '<span class="highlight">' +
            textString.slice(startIndex, endIndex) +
            "</span>" +
            textString.slice(endIndex);
        return highlightedText;
    } catch (e) {
        return text;
    }
}

/**
 * Get rupees format for a number
 * @param {number} number - Number to format
 */
export function getRupeesFormat(number: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
    }).format(number);
}

/**
 * Convert date object to dd/mm/yyyy
 * @param {Date} date - Date object
 */
export function convertFromDate(date: Date) {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
}

/**
 * Convert date string to date object
 * @param {string} dateString - Date string in dd/mm/yyyy format
 */
export function convertToDate(dateString: string) {
    const dateParts = dateString.split("/").map((part) => parseInt(part));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}


/**
 * Transform skills list to span elements
 */
export function skillsToString(skills: Skill[]) {
    return skills.map((skill) => skill.skill).join(", ");
}

/**
 * Fuction to search employees array based on a search term
 * @param {array} employees - Array of employees
 * @param {string} searchTerm - Term to search for
 */
export function searchEmployees(employees: Employee[], searchTerm: string) {
    try {
      const lowerCaseValue = searchTerm.toLowerCase();
      return Object.values(employees).filter((employee) =>
        Object.values(employee).some(
          (value) =>
            (typeof value === "string" || typeof value === "number") &&
            value.toString().toLowerCase().includes(lowerCaseValue)
        )
      );
    } catch (e) {
      return [];
    }
  }

/**
 * Function to sort employees array based on an attribute
 * @param {Employee[]} employees - Array of employees
 * @param {keyof Employee} key - Name of the attribute to sort
 * @param {boolean} asc - Order to sort the column (ascending/descending)
 */
export function sortEmployees(employees: Employee[], key: keyof Employee, asc: boolean = true): Employee[] {
    const numericalSort = (a: Employee, b: Employee) => {
        if (a[key] < b[key]) {
            return asc ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return asc ? 1 : -1;
        }
        return 0;
        };

    const alphaNumericSort = (a: Employee, b: Employee) => {
        const aString = a[key].toString().toLowerCase();
        const bString = b[key].toString().toLowerCase();
        if (aString < bString) {
            return asc ? -1 : 1;
        }
        if (aString > bString) {
            return asc ? 1 : -1;
        }
        return 0;
    }

    const departmentSort = (a: Employee, b: Employee) => {
        const aString = a.department.department.toString().toLowerCase();
        const bString = b.department.department.toString().toLowerCase();
        if (aString < bString) {
            return asc ? -1 : 1;
        }
        if (aString > bString) {
            return asc ? 1 : -1;
        }
        return 0;
    }
  
    switch (key) {
      case "employeeId":
      case "salary":
        return employees.sort(numericalSort);
      case "name":
      case "email":
      case "designation":
        return employees.sort(alphaNumericSort);
      case "department":
        return employees.sort(departmentSort);
      default:
        return employees;
    }
  }