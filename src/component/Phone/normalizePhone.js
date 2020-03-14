

const normalizePhone = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 3) {
        return onlyNums
    }
    if (onlyNums.length <= 7) {
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
    }
    return ` +${onlyNums.slice(0, 1)} (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}  ${onlyNums.slice(7, 9)} ${onlyNums.slice(9, 11)}`
};

export default normalizePhone