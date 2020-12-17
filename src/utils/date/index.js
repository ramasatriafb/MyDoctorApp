export const getChatTime = (date) => {
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${hour}:${minutes} ${hour >= 12 ? 'PM': 'AM'}`;
}

export const setDateChat = (onlDate) => {
    const year = onlDate.getFullYear();
    const month = onlDate.getMonth() + 1;
    const date = onlDate.getDate();

    return `${year}-${month}-${date}`;
}