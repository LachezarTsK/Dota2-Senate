
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    this.RADIANT = 'R';
    this.DIRE = 'D';
    return calculateWinner(senate);
};


/**
 * @param {string} senate
 * @return {string}
 */
function calculateWinner(senate) {
    const totalSenators = senate.length;

    //const {Queue} = require('@datastructures-js/queue');

    const queueRadiant = new Queue();//Queue<number>
    fillQueueSenators(this.RADIANT, senate, queueRadiant);

    const queueDire = new Queue();//Queue<number>
    fillQueueSenators(this.DIRE, senate, queueDire);

    while (!queueRadiant.isEmpty() && !queueDire.isEmpty()) {
        if (queueRadiant.front() < queueDire.front()) {
            queueRadiant.enqueue(queueRadiant.front() + totalSenators);
        } else {
            queueDire.enqueue(queueDire.front() + totalSenators);
        }
        queueDire.dequeue();
        queueRadiant.dequeue();
    }
    return queueDire.isEmpty() ? "Radiant" : "Dire";
}

/**
 * @param {string} party 
 * @param {string} senate
 * @param {Queue<number>} queueSenators 
 * @return {void}
 */
function fillQueueSenators(party, senate, queueSenators) {
    for (let i = 0; i < senate.length; ++i) {
        if (party === senate.charAt(i)) {
            queueSenators.enqueue(i);
        }
    }
}
