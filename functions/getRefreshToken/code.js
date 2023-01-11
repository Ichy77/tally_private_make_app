function getRefreshToken(head) {
    debug(head)

    let firstSplit = head.split(';');
    let firstElement = firstSplit.shift();
    return firstElement
}