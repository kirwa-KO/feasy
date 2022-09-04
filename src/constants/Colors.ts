const RESET_BOLD = "\u001b[22m"
const RESET_COLOR = "\x1b[0m";
const BOLD = "\u001b[1m"
const FG_GREEN = "\x1b[32m";
const FG_RED = "\x1b[31m";
const FG_Blue = "\x1b[34m";

const BOLD_FG_GREEN = `${BOLD}${FG_GREEN}`;
const RESET_BOLD_FG_GREEN = `${RESET_BOLD}${RESET_COLOR}`;
const BOLD_FG_RED = `${BOLD}${FG_RED}`;
const RESET_BOLD_FG_RED = `${RESET_BOLD}${RESET_COLOR}`;

const BOLD_FG_BLUE = `${BOLD}${FG_Blue}`;
const RESET_BOLD_FG_BLUE = `${RESET_BOLD}${RESET_COLOR}`;

export const ErrorMessage = (message: string): void => {
	console.log(`${BOLD_FG_RED}${message}${RESET_BOLD_FG_RED}`);
}

export const InfoMessage = (message: string): void => {
	console.log(`${BOLD_FG_BLUE}${message}${RESET_BOLD_FG_BLUE}`);
}

export const SuccessMessage = (message: string): void => {
	console.log(`${BOLD_FG_GREEN}${message}${RESET_BOLD_FG_GREEN}`);
}