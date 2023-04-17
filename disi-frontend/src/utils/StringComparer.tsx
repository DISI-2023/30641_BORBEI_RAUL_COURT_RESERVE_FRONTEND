class StringComparer {
    constructor(private readonly value) { }

    hasLengthBetween(min: number, max: number) {
        return this.value.length < min || this.value.length > max;
    }

    isSmaller(integer: number) {
        return this.value.length < integer;
    }

    truncateString() {
        return this.value.replace(/\s+/g, ' ').trim();
    }
}

export default StringComparer;
