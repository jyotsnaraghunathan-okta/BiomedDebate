// "How it works" notes: study designs, methods and reasoning to understand, not just memorize.
// Keyed by source id, then chapter id.

export const methods = {
  levy: {
    ch1: [
      { title: 'Stereotype embodiment theory in one line', text: 'Absorbed in childhood → operate unconsciously → become self-relevant in old age → act through three pathways: psychological (expectations, self-efficacy), behavioral (health habits) and biological (stress biomarkers such as cortisol and CRP).' },
    ],
    ch2: [
      { title: 'Three-culture memory study', text: 'Levy compared older and younger mainland Chinese (Confucian respect for elders), Deaf Americans (an intergenerational culture with positive age images) and hearing Americans. The groups with the most positive age beliefs had the smallest age gap in memory.' },
      { title: 'Implicit priming experiment', text: 'Participants watched a bull\'s-eye while words such as "wise" and "alert" or "senile" and "confused" flashed too fast for conscious reading ("perception without awareness"). They did a memory task before and after. After 10 minutes, positive primes improved memory and negative primes worsened it. Priming is subliminal so that it bypasses confirmation bias.' },
    ],
    ch3: [
      { title: 'Ruling out reverse causation', text: 'In an 18-year survey, baseline functional health did not predict later age beliefs, but age beliefs did predict later functional health, even among people with the same starting health. So beliefs → health, not health → beliefs.' },
      { title: 'From the lab to the community', text: 'One lab session sped up walking and improved balance, but the effect faded within an hour. Weekly priming in senior housing for a month produced lasting gains, which mimics the repeated exposure people get in everyday life.' },
    ],
    ch4: [
      { title: 'Baltimore Longitudinal Study of Aging', text: 'Age beliefs were measured decades before brain scans or autopsies, while participants were healthy. Negative beliefs predicted more plaques and tangles and hippocampal shrinkage three times as fast. The timing shows the beliefs came first.' },
      { title: 'APOE 4 study', text: 'In a national sample of more than 5,000 older adults followed for 4 years, APOE 4 carriers with positive age beliefs were 47% less likely to develop dementia, about the same risk as non-carriers. Environment moderates genetic risk (epigenetics).' },
    ],
    ch6: [
      { title: 'How the 7.5 years was found', text: 'The Ohio Longitudinal Study on Aging and Retirement measured age beliefs at baseline (e.g., "As you get older you are less useful"). Levy linked participants to the National Death Index, then compared median survival between belief groups, controlling for age, gender, race, socioeconomic status, loneliness and health.' },
      { title: 'Putting it in perspective', text: 'Positive beliefs gave about 7.5 extra years; low blood pressure or low cholesterol about 4; not smoking about 3; low BMI about 1.' },
    ],
    ch8: [
      { title: 'The $63 billion estimate', text: 'This is the yearly US health cost of ageism (age discrimination, negative age stereotypes and negative self-perceptions of aging). It is conservative: only eight conditions were counted and lost wages were excluded. It is still more than the cost of morbid obesity.' },
    ],
    ch9: [
      { title: 'ABC method', text: 'Awareness (notice age images around and within you; you are an "older person in training"), Blame (blame ageism, not aging), Challenge (push back on ageism in yourself and in society).' },
    ],
  },
  bognar: {
    ch2: [
      { title: 'Rating scale', text: 'Rank health states between 0 (death) and 1 (full health). This gives only a ranking, so differences between values cannot be compared as improvements.' },
      { title: 'Standard gamble', text: 'Certain life in state X versus a gamble with probability p of full health and 1−p of death. At the point of indifference, value(X) = p. It is criticized as hard to explain and administer.' },
      { title: 'Time trade-off', text: 'Y years in state X = T years in full health → value(X) = T/Y.' },
      { title: 'QALYs vs. DALYs', text: 'QALY = years × quality weight, a measure of benefit gained. DALY = years lost to death or disability, a measure of disease burden (lower is better).' },
    ],
    ch3: [
      { title: 'Average vs. incremental ratio', text: 'Cost-effectiveness ratio = cost ÷ benefit. ICER = (extra cost) ÷ (extra benefit) compared with the alternative. Example: $12.1M for 110 lives vs. $10M for 100 lives → $2.1M ÷ 10 = $210,000 per extra life.' },
      { title: 'NICE threshold', text: 'Under £20,000 per QALY usually approved; £20,000-£30,000 needs extra justification; above £30,000 rarely approved. Discount rate 3.5%.' },
      { title: 'Discounting debate', text: 'Discounting for uncertainty is fine. Discounting health only because it comes later looks like pure time preference. Not discounting at all leads to the "eradication" paradox, and a lower rate for benefits than costs leads to postponing spending forever.' },
    ],
    ch5: [
      { title: 'Fair innings vs. maximizing life-years', text: 'Preferring the young because they gain more life-years is a maximizing argument. Fair innings is a fairness argument: those who have had less life have stronger claims. A sharp threshold creates the threshold problem; gradual age-weighting fixes it.' },
    ],
    ch6: [
      { title: 'Four positions on distribution', text: 'Utilitarian: add up benefits. Egalitarian: equality is good in itself (faces the leveling down objection). Prioritarian: benefits to the worse off count more (concave weighting), with no leveling down problem. Anti-aggregation: refuses to sum small benefits, which runs into the number problem; a weighted lottery (6/7 vs. 1/7) is one answer.' },
    ],
    ch7: [
      { title: 'Option luck vs. brute luck', text: 'Option luck is bad outcomes from deliberate risky choices (e.g., a smoker\'s heart disease). Brute luck is outside a person\'s control. Luck egalitarianism compensates only brute luck, and faces the abandonment objection and the social gradient.' },
    ],
  },
}
