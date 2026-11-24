// Study content for the two official Biomedical Debate references (HOSA 2026-27).
// Page numbers refer to the print editions used by the practice tests.

export const RESOLUTION =
  'Limited healthcare resources should be allocated to patients with the greatest likelihood of long-term survival.'

export const books = {
  levy: {
    id: 'levy',
    short: 'Breaking the Age Code',
    title: 'Breaking the Age Code',
    subtitle: 'How Your Beliefs About Aging Determine How Long and Well You Live',
    author: 'Becca Levy',
    citation: 'Levy, Becca. Breaking the Age Code. William Morrow, 2022.',
    cite: 'Levy',
    icon: '🌱',
    theme: 'levy',
    thesis:
      'Age beliefs absorbed from our culture are not harmless attitudes. They act on memory, physical function, mental health and even lifespan, and because they are learned, they can be changed, both by individuals and by society.',
    chapters: [
      {
        id: 'introduction',
        title: 'Introduction: Ideas Bouncing Between the US and Japan',
        summary:
          'Levy contrasts the respect older people receive in Japan (Keiro No Hi, "Respect for the Aged Day") with the ageism she sees in the US. Her grandmother\'s loss of confidence after a "senior moment" and the Oxford, Ohio data led her to a question: do the beliefs we hold about aging shape how we age? In the Ohio study, how people thought about old age mattered more for longevity than income, loneliness or functional health.',
        keyPoints: [
          'Japanese elders, treated "like rock stars," show better health markers (e.g., higher testosterone in older men); Japanese women report fewer menopausal symptoms such as hot flashes.',
          'For the first time in history, more people are over 64 than under 5.',
          'In Oxford, Ohio, age beliefs were the single most important factor predicting longevity.',
        ],
        terms: ['Keiro No Hi', 'Age beliefs', 'Ageism'],
      },
      {
        id: 'ch1',
        title: 'Chapter 1: The Pictures in Our Head',
        summary:
          'Introduces stereotype embodiment theory (SET): age stereotypes are internalized from childhood, operate unconsciously, become more powerful as they become self-relevant, and act through psychological, behavioral and biological pathways. Infants sort faces by age by about four months, and children absorb cultural age stereotypes long before they are old.',
        keyPoints: [
          'SET\'s four mechanisms: internalized across the lifespan from childhood; operate unconsciously; gain power as they become self-relevant; act via psychological, behavioral and biological pathways.',
          'Biological pathway: negative age beliefs raise stress biomarkers such as cortisol and C-reactive protein (CRP).',
          'Only about 25% of health is attributable to genes; the rest is environment, including beliefs.',
          'Asked to describe an old person, people in China most often said "wisdom."',
        ],
        terms: ['Stereotype embodiment theory (SET)', 'Self-relevance', 'Cortisol', 'C-reactive protein'],
      },
      {
        id: 'ch2',
        title: 'Chapter 2: Anatomy of a Senior Moment',
        summary:
          'Memory decline is not a fixed consequence of age. "Senior moment" first appeared in print in 1997. Levy\'s comparison of older mainland Chinese, deaf Americans and hearing Americans showed that groups with more positive age beliefs had better memory in old age. Priming studies showed that subliminal age stereotypes can quickly raise or lower older adults\' memory performance.',
        keyPoints: [
          'Semantic memory (knowledge and facts) tends to hold up or improve with age.',
          'Older mainland Chinese, who held the most positive age views, performed best on memory tasks.',
          'Those with positive age beliefs showed about 30% better memory scores in old age.',
          'Older people excel at pattern recognition; Indigenous Australian elders are valued as keepers of knowledge.',
        ],
        terms: ['Senior moment', 'Semantic memory', 'Implicit priming'],
      },
      {
        id: 'ch3',
        title: 'Chapter 3: Old and Fast',
        summary:
          'Physical function, including walking speed and balance, responds to age beliefs. Levy\'s implicit-priming intervention ("subliminal strengthening") improved older adults\' physical function over time, outperforming an explicit priming condition. Positive age beliefs also predict recovery from serious disability and illness.',
        keyPoints: [
          'Subliminal positive age stereotypes improved gait and balance; effects strengthened across weeks.',
          'Older people with positive age beliefs were more likely to fully recover from severe disability.',
          'Examples of older athletes challenge assumptions that aging means frailty.',
        ],
        terms: ['Subliminal strengthening', 'Gait speed', 'Functional health'],
      },
      {
        id: 'ch4',
        title: 'Chapter 4: Brawny Brains: Genes Aren\'t Destiny',
        summary:
          'Using the Baltimore Longitudinal Study of Aging, Levy found that people with negative age beliefs had more Alzheimer\'s-related brain changes (amyloid plaques, neurofibrillary tangles) and faster hippocampal shrinkage. Among carriers of the risky APOE 4 gene, those with positive age beliefs were 47% less likely to develop dementia.',
        keyPoints: [
          'Negative age beliefs predicted greater plaques and tangles decades later.',
          'Hippocampus (memory) shrank faster in those with negative age beliefs.',
          'APOE 4 carriers with positive beliefs: 47% lower dementia risk. APOE 2 carriers also benefit from positive beliefs.',
          'Brains remain plastic in later life; genes are not destiny.',
        ],
        terms: ['Baltimore Longitudinal Study of Aging', 'APOE 4', 'Hippocampus', 'Neuroplasticity'],
      },
      {
        id: 'ch5',
        title: 'Chapter 5: Later-Life Mental Health Growth',
        summary:
          'Mental health often improves with age, but ageism leads clinicians to dismiss depression and anxiety in older patients as "normal aging." Positive age beliefs protect against psychiatric conditions, including PTSD among veterans, and help older people manage stress.',
        keyPoints: [
          'Older people commonly report greater emotional well-being than younger adults.',
          'Ageism in health care leads to undertreatment of later-life mental illness.',
          'Veterans with positive age beliefs were less likely to develop PTSD, depression and anxiety.',
        ],
        terms: ['Psychiatric ageism', 'PTSD', 'Resilience'],
      },
      {
        id: 'ch6',
        title: 'Chapter 6: Longevity Advantage of 7.5 Years',
        summary:
          'Using the Ohio Longitudinal Study on Aging and Retirement, Levy found that people with positive age beliefs lived an average of 7.5 years longer than those with negative beliefs, an advantage larger than that of low blood pressure, low cholesterol, healthy weight or not smoking. The will to live is one of the mechanisms. Long-lived communities (such as Okinawa) show cultural respect for elders.',
        keyPoints: [
          'Positive age beliefs → 7.5 extra years of life on average.',
          'The longevity advantage held after controlling for age, sex, income, loneliness and functional health.',
          'Will to live and lower cardiovascular stress are key pathways.',
          'Collectivist cultures express less explicit and implicit ageism.',
        ],
        terms: ['Ohio Longitudinal Study on Aging and Retirement', 'Will to live', 'Centenarians', 'Okinawa'],
      },
      {
        id: 'ch7',
        title: 'Chapter 7: Stars Invisible by Day: Creativity and the Senses',
        summary:
          'Creativity can flourish in later life. Art historians use "Alterstil" to describe an old-age style marked by changes in technique, emotional tone and subject matter. Sensory abilities like hearing are also shaped by age beliefs: people with negative beliefs experience more hearing decline.',
        keyPoints: [
          'Alterstil: a distinct late-life artistic style, not a decline.',
          'Many artists and writers produced major work in old age.',
          'Negative age beliefs predict worse hearing decline over time.',
        ],
        terms: ['Alterstil', 'Late-life creativity', 'Sensory aging'],
      },
      {
        id: 'ch8',
        title: 'Chapter 8: Ageism: The Evil Octopus',
        summary:
          'Ageism is pictured as an octopus whose tentacles reach into health care, the workplace, media, housing and the law. Robert Butler coined "ageism" in 1969. Levy\'s team estimated that ageism costs the US health system $63 billion per year. Structural ageism (policies and practices) and implicit ageism reinforce each other.',
        keyPoints: [
          'Robert Butler coined "ageism" (1969).',
          'Ageism cost US health care $63 billion in one year (age-related costs from discrimination, stereotypes and negative self-perceptions).',
          'Age-discrimination employment law protects existing workers far better than job seekers.',
          'Health-care ageism: older patients are excluded from trials and offered less aggressive treatment.',
        ],
        terms: ['Ageism', 'Structural ageism', 'Implicit bias', 'Robert Butler'],
      },
      {
        id: 'ch9',
        title: 'Chapter 9: Individual Age Liberation: How to Free Your Mind',
        summary:
          'The ABC method helps individuals shift from age-negative to age-positive beliefs: Awareness (notice age stereotypes around you and in yourself), Blame (place blame on ageism, not aging, for problems), and Challenge (actively push back on negative age beliefs).',
        keyPoints: [
          'A = Awareness: identify age images in media, conversation and your own thinking.',
          'B = Blame: redirect blame from aging to structural ageism.',
          'C = Challenge: act against ageism, e.g., confronting it, intergenerational contact.',
          'Positive age beliefs can be strengthened at any age.',
        ],
        terms: ['ABC method', 'Awareness', 'Blame', 'Challenge'],
      },
      {
        id: 'ch10',
        title: 'Chapter 10: Societal Age Liberation: A New Social Movement',
        summary:
          'Levy calls for an age-liberation movement modeled on other civil-rights movements. Strategies include collective identification, protest, consciousness-raising and reclaiming symbols of age. The Gray Panthers, founded by Maggie Kuhn, are a model of age activism.',
        keyPoints: [
          'Collective identification builds shared pride among older people.',
          'Protest and advocacy push media and advertisers to drop ageist images.',
          'Reclaiming age (e.g., "Wrinkle Salons") echoes the civil-rights movement\'s "Black is beautiful."',
          'The Gray Panthers used creative protests against ageist policy.',
        ],
        terms: ['Age liberation', 'Gray Panthers', 'Maggie Kuhn', 'Collective identification'],
      },
      {
        id: 'afterword',
        title: 'Afterword and Appendices',
        summary:
          'The afterword imagines a town free of ageism. The appendices give practical tools: the ABC method (Appendix 1), "ammunition" to debunk negative age stereotypes (Appendix 2), and a call to end structural ageism across policy areas (Appendix 3).',
        keyPoints: [
          'Appendix 1: ABC Method to Bolster Positive Age Beliefs.',
          'Appendix 2: Ammunition to Debunk Negative Age Stereotypes.',
          'Appendix 3: A Call to End Structural Ageism.',
        ],
        terms: ['Age-friendly community'],
      },
    ],
    debate: {
      aff: [
        {
          claim: 'Survival likelihood should be judged on evidence, not assumptions about age.',
          detail:
            'Levy shows that chronological age is a poor predictor of outcomes. A prognosis-based rule that uses real clinical data can actually protect older patients from blanket age cutoffs.',
          cite: 'Ch. 6, Ch. 8',
        },
        {
          claim: 'Long-term survival is modifiable, so investment where it pays off is rational.',
          detail:
            'If beliefs and environment, not just genes (about 25%), shape outcomes, then the patients most likely to survive long-term are a meaningful, measurable group, and resources spent on them produce lasting health.',
          cite: 'Ch. 1, Ch. 4',
        },
      ],
      neg: [
        {
          claim: '"Likelihood of long-term survival" builds ageism into triage.',
          detail:
            'Any rule rewarding expected years left systematically disadvantages older patients. Levy documents how health-care ageism already leads to undertreatment and exclusion from trials, and a survival criterion would formalize that bias.',
          cite: 'Ch. 5, Ch. 8',
        },
        {
          claim: 'Prognoses are biased by the same stereotypes the resolution relies on.',
          detail:
            'Clinicians\' expectations about older patients are shaped by implicit age stereotypes. Negative age beliefs themselves worsen outcomes (stress biomarkers, recovery from disability), so a survival-based rule can become a self-fulfilling prophecy.',
          cite: 'Ch. 1, Ch. 3',
        },
        {
          claim: 'Older people have large, underestimated survival potential.',
          detail:
            'Positive age beliefs add 7.5 years of life on average and cut dementia risk by 47% even in APOE 4 carriers. Writing older patients off as "low survival" ignores this.',
          cite: 'Ch. 4, Ch. 6',
        },
        {
          claim: 'Ageism is already expensive.',
          detail:
            'Ageism costs the US $63 billion a year in health care. Policies that devalue older lives add to this cost rather than saving resources.',
          cite: 'Ch. 8',
        },
      ],
    },
  },

  bognar: {
    id: 'bognar',
    short: 'Ethics of Health Care Rationing',
    title: 'The Ethics of Health Care Rationing',
    subtitle: 'An Introduction (2nd ed.)',
    author: 'Greg Bognar & Iwao Hirose',
    citation: 'Bognar, Greg and Iwao Hirose. The Ethics of Health Care Rationing, 2nd ed. Routledge, 2022.',
    cite: 'Bognar & Hirose',
    icon: '⚖️',
    theme: 'bognar',
    thesis:
      'Rationing, the controlled allocation of health care resources, is inevitable because resources are scarce. The question is not whether to ration but how. It should be done by explicit, ethically justified principles that balance maximizing benefits with fairness, so that it does not happen arbitrarily at the bedside.',
    chapters: [
      {
        id: 'introduction',
        title: 'Introduction',
        summary:
          'Opens with real cases of scarcity, including the WHO "3 by 5" initiative to deliver antiretroviral therapy to three million people with HIV in developing countries by 2005, and the UNAIDS 90-90-90 targets. These show that allocation choices, such as between rural and urban patients, are unavoidable and ethically charged.',
        keyPoints: [
          'WHO 3 by 5: a controversy was how to allocate drugs between rural and urban areas.',
          '90-90-90: 90% know their HIV status, 90% of diagnosed on treatment, 90% of treated virally suppressed.',
          'Overview: Ch. 1 ethics; Ch. 2 measuring health; Ch. 3-5 cost-effectiveness and its critics; Ch. 6-7 broader fairness; Ch. 8 drug prices.',
        ],
        terms: ['3 by 5 initiative', '90-90-90 targets', 'Scarcity'],
      },
      {
        id: 'ch1',
        title: 'Chapter 1: Ethics and Health Care',
        summary:
          'Defines health care rationing as the controlled allocation of health care resources. Rationing is ubiquitous and inevitable because of scarcity, even when hidden (waiting lists, insurance coverage, prices). Two basic moral ideas govern it: maximizing benefits and distributing them fairly. The Seattle Swedish Hospital "God Committee," which chose dialysis patients by social worth, illustrates the problems of ad hoc rationing.',
        keyPoints: [
          'Rationing happens at different levels: macro (national budgets), meso (institutions, regions), micro (individual patients).',
          'Explicit vs. implicit rationing: waiting lists and costs ration even when no one calls it rationing.',
          'Seattle\'s "God Committee" used social-worth criteria, which was widely condemned.',
          'Core tension: efficiency (maximizing benefit) vs. fairness (distribution).',
        ],
        terms: ['Rationing', 'Scarcity', 'Maximization', 'Fairness', 'God Committee'],
      },
      {
        id: 'ch2',
        title: 'Chapter 2: The Value of Health',
        summary:
          'To allocate fairly and efficiently we must measure health\'s contribution to quality of life. Health states are described (e.g., the EQ-5D questionnaire) and valued with methods like the rating scale, standard gamble and time trade-off. These build summary measures: QALYs (benefit of interventions) and DALYs (burden of disease, the gap between actual and ideal health).',
        keyPoints: [
          'Standard gamble: indifferent between condition and p chance of full health → value = p (e.g., 80/20 → 0.8). Criticized as hard to explain and administer.',
          'Time trade-off: X years healthy = Y years in condition → value X/Y (e.g., 6/10 = 0.6).',
          'QALY: 1 year in full health (or 2 years at 0.5).',
          'DALY: measures disease burden; the Global Burden of Disease lets different causes (e.g., anemia from malaria or hemorrhage) share a disability weight.',
        ],
        terms: ['EQ-5D', 'Standard gamble', 'Time trade-off', 'QALY', 'DALY', 'Disability weight'],
      },
      {
        id: 'ch3',
        title: 'Chapter 3: Ethics and Cost-Effectiveness',
        summary:
          'Cost-effectiveness analysis (CEA) compares interventions by cost per unit of benefit (usually QALYs or DALYs). Examples include Oregon\'s Medicaid prioritization list, NICE in England and Wales (roughly £20,000-£30,000 per QALY threshold, created partly to end the "postcode lottery"), and New Zealand\'s Herceptin decision. The chapter also covers discounting future costs and benefits.',
        keyPoints: [
          'Cost-effectiveness ratio = cost ÷ health benefit; lower is better.',
          'Incremental cost-effectiveness ratio (ICER) compares a new intervention to current care.',
          'NICE: under £20,000/QALY usually approved; £20,000-£30,000 needs extra justification.',
          'Oregon ranked condition-treatment pairs; early versions produced counterintuitive rankings.',
          'Discounting: weighting future costs and benefits less is controversial for health.',
        ],
        terms: ['Cost-effectiveness analysis', 'ICER', 'NICE', 'Postcode lottery', 'Oregon Health Plan', 'Discounting'],
      },
      {
        id: 'ch4',
        title: 'Chapter 4: Disability Discrimination',
        summary:
          'A major objection says CEA discriminates against people with disabilities, since their life-years count for less in QALYs. The authors argue most versions confuse quality of life with the value of life or misunderstand CEA. A real problem remains: interventions for some disabilities may have poor cost-effectiveness ratios. Their answer is giving extra weight to benefits for the worse off.',
        keyPoints: [
          'The first Oregon waiver was rejected (1992) amid Americans with Disabilities Act concerns.',
          'Distinguish quality of life from the moral value of a life.',
          'No standard theory of discrimination fully captures the problem case.',
          'Proposed fix: priority to the worse off.',
        ],
        terms: ['Disability discrimination', 'Americans with Disabilities Act', 'Quality vs. value of life'],
      },
      {
        id: 'ch5',
        title: 'Chapter 5: The Question of Age',
        summary:
          'Should age matter? The fair innings argument says people who have lived a full life have weaker claims. The authors reject its traditional threshold form but show how age-weighting can make it less objectionable, test it against bedside rationing in extreme scarcity (e.g., ventilators in COVID-19), and argue against age-weighting DALYs.',
        keyPoints: [
          'Fair innings (Harris, Williams): everyone is entitled to a "normal" span of life.',
          'Threshold problem: why should claims change sharply at one age?',
          'Age-weighting gives gradually more weight to the young, not a cliff.',
          'Age-weighting of DALYs was rejected for good reason.',
        ],
        terms: ['Fair innings', 'Age-weighting', 'Bedside rationing', 'Life-years'],
      },
      {
        id: 'ch6',
        title: 'Chapter 6: The Aggregation of Health Benefits',
        summary:
          'Maximizing benefit assumes the aggregation thesis: small benefits to many can outweigh large benefits to a few. Rejecting it creates the "number problem" (Taurek): why save five rather than one? A weighted lottery is one option. Prioritarianism reconciles aggregation with concern for the worse off, but identifying the worse off is hard.',
        keyPoints: [
          'Aggregation thesis vs. anti-aggregation views.',
          'Rescue case: save one or save five?',
          'Weighted lottery: each group gets a chance proportional to its size.',
          'Prioritarianism: benefits to the worse off count for more.',
        ],
        terms: ['Aggregation thesis', 'Number problem', 'Weighted lottery', 'Prioritarianism', 'Survival lottery'],
      },
      {
        id: 'ch7',
        title: 'Chapter 7: Responsibility for Health',
        summary:
          'Luck egalitarianism holds that inequalities resulting from free choices are not unjust, so people might bear the costs of risky lifestyles. It faces the abandonment objection and the problem that socioeconomic status shapes lifestyle. The authors conclude responsibility should not be a factor in allocation, and that the social gradient in health is a separate ethical issue.',
        keyPoints: [
          'Luck egalitarianism: distinguish brute luck from option luck.',
          'Abandonment objection: refusing care to the imprudent is unacceptably harsh.',
          'The social gradient (Marmot): health worsens step by step with lower status.',
          'Health care allocation and health inequality should be treated separately.',
        ],
        terms: ['Luck egalitarianism', 'Abandonment objection', 'Social gradient', 'Personal responsibility'],
      },
      {
        id: 'ch8',
        title: 'Chapter 8: The Price of Drugs',
        summary:
          'New in the 2nd edition. England uses cost-effectiveness to manage drug prices; Japan\'s cost-calculation method pays little attention to the size of health benefits and is worse at controlling prices (e.g., nivolumab). Prices can also be too low: thin margins undermine supply chains (antibiotic shortages, production concentrated in India and China) and orphan-drug R&D.',
        keyPoints: [
          'Cost-effectiveness can induce reasonable drug prices, not just ration.',
          'Japan\'s cost-calculation method vs. NICE\'s value-based approach.',
          'Low prices → global shortages of essential drugs such as antibiotics.',
          'Orphan drugs for rare diseases (e.g., cerliponase alfa) and NICE\'s Highly Specialised Technologies process.',
        ],
        terms: ['Orphan drugs', 'Cost-calculation method', 'Highly Specialised Technologies', 'Drug shortages'],
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        summary:
          'Without general principles, rationing still happens, but at the bedside, where it is unfair, non-transparent and arbitrary, open to mistakes, prejudice and corruption. COVID-19 made this clear. "Health care should be rationed, so that it does not have to be rationed at the bedside." Health is not like Caribbean holidays left to the market; decisions are best delegated to bodies like NICE and PHARMAC that are insulated from electoral and interest-group pressure, and must be legitimate: fair, accountable and transparent.',
        keyPoints: [
          'Bedside rationing is unfair, opaque and arbitrary.',
          '20-40% of health spending worldwide is wasted (about 30% in the US).',
          'Caribbean holidays analogy: health is a matter of justice, not just markets.',
          'Delegate to agencies removed from political pressure (NICE, PHARMAC).',
        ],
        terms: ['Bedside rationing', 'Legitimacy', 'Transparency', 'PHARMAC'],
      },
    ],
    debate: {
      aff: [
        {
          claim: 'Rationing is inevitable, so it should follow an explicit principle.',
          detail:
            'Scarcity means someone always decides. A clear, general criterion like expected long-term survival is fairer and more transparent than ad hoc bedside rationing, which is arbitrary and prone to prejudice.',
          cite: 'Ch. 1, Conclusion',
        },
        {
          claim: 'Maximizing benefit means maximizing life-years.',
          detail:
            'QALY-based cost-effectiveness analysis aims to produce the most health from limited resources. Patients most likely to survive long-term gain the most QALYs per unit of resource.',
          cite: 'Ch. 2, Ch. 3',
        },
        {
          claim: 'The aggregation thesis supports saving the most life.',
          detail:
            'Rejecting aggregation leads to the number problem. Accepting it supports directing resources to where they produce the greatest total benefit.',
          cite: 'Ch. 6',
        },
        {
          claim: 'COVID-19 triage relied on survival-based criteria.',
          detail:
            'Under extreme scarcity, guidelines directed ICU support toward patients who could benefit. Clear principles reduce the moral burden on frontline staff.',
          cite: 'Ch. 5, Conclusion',
        },
      ],
      neg: [
        {
          claim: 'Pure maximization ignores fairness.',
          detail:
            'The authors insist on two moral ideas: maximizing benefits and fair distribution. A survival-only rule abandons the second and disadvantages the worse off.',
          cite: 'Ch. 1, Ch. 6',
        },
        {
          claim: 'Survival criteria discriminate against people with disabilities and chronic illness.',
          detail:
            'Those with disabilities often have lower expected survival or quality-adjusted gains. The authors propose giving extra weight to the worse off, the opposite of the resolution.',
          cite: 'Ch. 4',
        },
        {
          claim: 'It becomes a crude age cutoff.',
          detail:
            'Expected long-term survival tracks age. The authors reject the traditional fair innings threshold and the age-weighting of DALYs.',
          cite: 'Ch. 5',
        },
        {
          claim: 'Prognosis reflects social disadvantage.',
          detail:
            'The social gradient means poorer people have worse expected outcomes through little fault of their own. A survival rule would compound socioeconomic injustice.',
          cite: 'Ch. 7',
        },
      ],
    },
  },
}

export const bookList = [books.levy, books.bognar]

export const DEBATE_FORMAT = [
  { side: 'aff', label: 'First Affirmative', seconds: 120, task: 'Present the affirmative case.' },
  { side: 'neg', label: 'First Negative', seconds: 120, task: 'Respond to the affirmative arguments.' },
  { side: 'neg', label: 'Second Negative', seconds: 120, task: 'Present the negative case.' },
  { side: 'aff', label: 'Second Affirmative', seconds: 120, task: 'Respond to the negative arguments.' },
  { side: 'neg', label: 'Negative Summary / Rebuttal', seconds: 120, task: 'Conclude for the negative.' },
  { side: 'aff', label: 'Affirmative Summary / Rebuttal', seconds: 120, task: 'Conclude for the affirmative.' },
]
