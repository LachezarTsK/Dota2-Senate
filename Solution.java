
import java.util.LinkedList;
import java.util.Queue;

public class Solution {

    private static final char RADIANT = 'R';
    private static final char DIRE = 'D';

    public String predictPartyVictory(String senate) {
        return calculateWinner(senate);
    }

    private String calculateWinner(String senate) {
        int totalSenators = senate.length();

        Queue<Integer> queueRadiant = new LinkedList<>();
        fillQueueSenators(RADIANT, senate, queueRadiant);

        Queue<Integer> queueDire = new LinkedList<>();
        fillQueueSenators(DIRE, senate, queueDire);

        while (!queueRadiant.isEmpty() && !queueDire.isEmpty()) {
            if (queueRadiant.peek() < queueDire.peek()) {
                queueRadiant.add(queueRadiant.peek() + totalSenators);
            } else {
                queueDire.add(queueDire.peek() + totalSenators);
            }
            queueDire.poll();
            queueRadiant.poll();
        }
        return queueDire.isEmpty() ? "Radiant" : "Dire";
    }

    private void fillQueueSenators(char party, String senate, Queue<Integer> queueSenators) {
        for (int i = 0; i < senate.length(); ++i) {
            if (party == senate.charAt(i)) {
                queueSenators.add(i);
            }
        }
    }
}
