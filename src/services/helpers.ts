import { Skill } from "../models/skill";

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
        console.log(e);
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