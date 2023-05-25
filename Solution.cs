
using System;
using System.Collections.Generic;

public class Solution
{
    private const char RADIANT = 'R';
    private const char DIRE = 'D';
    public string PredictPartyVictory(string senate)
    {
        return calculateWinner(senate);
    }

    private String calculateWinner(String senate)
    {
        int totalSenators = senate.Length;

        Queue<int> queueRadiant = new Queue<int>();
        fillQueueSenators(RADIANT, senate, queueRadiant);

        Queue<int> queueDire = new Queue<int>();
        fillQueueSenators(DIRE, senate, queueDire);

        while (queueRadiant.Count > 0 && queueDire.Count > 0)
        {
            if (queueRadiant.Peek() < queueDire.Peek())
            {
                queueRadiant.Enqueue(queueRadiant.Peek() + totalSenators);
            }
            else
            {
                queueDire.Enqueue(queueDire.Peek() + totalSenators);
            }
            queueDire.Dequeue();
            queueRadiant.Dequeue();
        }
        return queueDire.Count == 0 ? "Radiant" : "Dire";
    }

    private void fillQueueSenators(char party, String senate, Queue<int> queueSenators)
    {
        for (int i = 0; i < senate.Length; ++i)
        {
            if (party == senate[i])
            {
                queueSenators.Enqueue(i);
            }
        }
    }
}
