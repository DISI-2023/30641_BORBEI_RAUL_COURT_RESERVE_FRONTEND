import StringComparer from '../utils/StringComparer.tsx';

const validUsernameRegex = /^(\s*([A-Za-z]+\s*-?))*((\s)*[A-Za-z]+\s*)$/;
const validEmailRegex = /^\s*\w+@\w+\.[Cc][Oo][Mm]\s*$/;
const noWhiteSpaces = /^\S*$/;

export const validateUsernameRegister = (value: string) => {
    const stringComparer = new StringComparer(value);
    const stringComparerTruncated = new StringComparer(stringComparer.truncateString());

    if (
        stringComparer.hasLengthBetween(2, 100) ||
        stringComparerTruncated.hasLengthBetween(2, 100) ||
        !value.match(validUsernameRegex)
    )
        return 'Username should have between 2 and 100 alpha characters, including "-" and " "';

    return '';
};

export const validateEmailRegister = (value: string) => {
    const stringComparer = new StringComparer(value);

    if (stringComparer.hasLengthBetween(7, 74)) return 'Email should have between 7 and 74 characters';

    if (!value.match(validEmailRegex))
        return 'Email should have a valid format {alphanumeric and underline}@{string}.com';

    return '';
};

export const validatePasswordRegister = (value: string) => {
    const stringComparer = new StringComparer(value);

    if (stringComparer.hasLengthBetween(2, 20)) return 'Password should have between 2 and 20 characters';

    if (!value.match(noWhiteSpaces)) return 'Password should not have whitespaces';

    return '';
};
