
#include <queue>
#include <string>
using namespace std;

class Solution {
    
    const static char RADIANT = 'R';
    const static char DIRE = 'D';

public:
    string predictPartyVictory(const string& senate) const {
        return calculateWinner(senate);
    }
    
private:
    string calculateWinner(const string& senate) const {
        int totalSenators = senate.length();

        queue<int> queueRadiant;
        fillQueueSenators(RADIANT, senate, queueRadiant);

        queue<int> queueDire;
        fillQueueSenators(DIRE, senate, queueDire);

        while (!queueRadiant.empty() && !queueDire.empty()) {
            if (queueRadiant.front() < queueDire.front()) {
                queueRadiant.push(queueRadiant.front() + totalSenators);
            } else {
                queueDire.push(queueDire.front() + totalSenators);
            }
            queueDire.pop();
            queueRadiant.pop();
        }
        return queueDire.empty() ? "Radiant" : "Dire";
    }

    void fillQueueSenators(char party, const string& senate, queue<int>& queueSenators) const {
        for (size_t i = 0; i < senate.size(); ++i) {
            if (senate[i] == party) {
                queueSenators.push(i);
            }
        }
    }
};
