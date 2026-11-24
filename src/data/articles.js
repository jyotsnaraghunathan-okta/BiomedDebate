// The three additional official references (HOSA Biomedical Debate 2026-27).
// Each article is modeled like a book: sections act as chapters.

export const articles = {
  emanuel: {
    id: 'emanuel',
    kind: 'article',
    short: 'Shared Ethical Framework (COVID-19)',
    title: 'The Shared Ethical Framework to Allocate Scarce Medical Resources: A Lesson from COVID-19',
    subtitle: 'The Lancet, vol. 401, pp. 1892-1902 (June 2023)',
    author: 'Ezekiel J. Emanuel & Govind Persad',
    citation: 'Emanuel, E. J. and Persad, G. "The shared ethical framework to allocate scarce medical resources: a lesson from COVID-19." The Lancet 401 (2023): 1892-1902.',
    url: 'https://www.sciencedirect.com/science/article/pii/S0140673623008127',
    cite: 'Emanuel & Persad',
    icon: '🦠',
    thesis:
      'COVID-19 guidance from bodies around the world converged on the same core ethical values. Fair allocation is a three-step process: identify the values, turn them into priority tiers, and implement them carefully. Most failures in the pandemic came at implementation, not at the level of values.',
    note: 'This article sits behind a paywall. These notes come from the abstract and published summaries, so read the full text through a school or library login.',
    chapters: [
      {
        id: 'values',
        title: 'Step 1: Five Fundamental Values',
        summary:
          'Guidance from the US Advisory Committee on Immunization Practices (ACIP), the UK Nuffield Council on Bioethics, and WHO\'s Strategic Advisory Group of Experts (SAGE) converged on five values. None is enough alone. Their weight depends on the resource and the context.',
        keyPoints: [
          'Maximizing benefits and preventing harm: direct resources to those who would gain the most benefit or protection.',
          'Mitigating disadvantage: give priority to people disadvantaged by income, race or other factors.',
          'Equal moral concern: treat similar people similarly, while still recognizing real differences such as disease burden.',
          'Reciprocity: give priority to those who took on burdens or risks to help others during the crisis.',
          'Instrumental value: give priority to people who can reduce future harm to others, such as health care workers.',
        ],
        terms: ['Maximizing benefits', 'Mitigating disadvantage', 'Equal moral concern', 'Reciprocity', 'Instrumental value', 'ACIP', 'SAGE', 'Nuffield Council'],
      },
      {
        id: 'tiers',
        title: 'Step 2: Priority Tiers',
        summary:
          'The values are turned into priority tiers, meaning groups who receive the resource first. Tiers should mainly emphasize instrumental value, minimizing harm and mitigating disadvantage. In COVID-19, there was broad agreement on the tiers: health-care workers, first responders, people in congregate housing (e.g., nursing homes) and people at higher risk of death.',
        keyPoints: [
          'Tiers protect both people at immediate risk and people who might be harmed later.',
          'COVID-19 tiers were too blunt. For example, every US health-system employee qualified, not only those who worked directly with patients.',
          'Tiers were too rigid. Surplus doses were sometimes thrown away instead of going to the next tier.',
        ],
        terms: ['Priority tiers', 'Congregate settings', 'First responders'],
      },
      {
        id: 'implementation',
        title: 'Step 3: Implementation',
        summary:
          'Implementation is where allocation most often went wrong. COVAX first proposed giving vaccines to countries in proportion to population, not COVID-19 burden. Passive allocation (waiting for eligible people to sign themselves up) made existing disparities worse. The authors call for active outreach and flexible tiers.',
        keyPoints: [
          'Allocating by population, not by disease burden, ignored where need was greatest.',
          'Passive allocation favored people with time, internet access and information.',
          'Active distribution, such as texting eligible people or going door-to-door, increases uptake and reduces disparities.',
          'Tiers with looser boundaries let resources flow on when the top tier cannot be reached.',
        ],
        terms: ['COVAX', 'Passive vs. active allocation', 'Disease burden'],
      },
      {
        id: 'future',
        title: 'Lessons for Future Scarcity',
        summary:
          'The authors propose this shared framework as the starting point for allocating scarce resources in future pandemics and other public-health emergencies, including vaccines that are currently scarce for mpox, malaria and cholera.',
        keyPoints: [
          'One shared framework works for different scarce resources.',
          'Values stay stable while tiers and implementation adapt to the resource.',
          'Equity has to be built into implementation, not only stated as a value.',
        ],
        terms: ['Public-health emergencies', 'mpox', 'Pandemic preparedness'],
      },
    ],
    debate: {
      aff: [
        { claim: 'Maximizing benefits is a core shared value.', detail: 'Every major guidance body put "maximizing benefits and preventing harm" first. Directing resources where they will save the most lives, or the most life-years, puts that value into practice.', cite: 'Step 1' },
        { claim: 'Clear criteria beat ad hoc decisions.', detail: 'COVID-19 showed that explicit, agreed tiers let systems act quickly and consistently under pressure.', cite: 'Step 2' },
      ],
      neg: [
        { claim: 'Survival is only one of five values.', detail: 'The framework weighs benefit together with mitigating disadvantage, equal moral concern, reciprocity and instrumental value. A rule based only on long-term survival drops four of the five.', cite: 'Step 1' },
        { claim: 'Instrumental value and reciprocity can override prognosis.', detail: 'Health-care workers were prioritized because they protect others and took on risk, not because they had the best long-term survival odds.', cite: 'Steps 1-2' },
        { claim: 'Prognosis-based allocation compounds disadvantage.', detail: 'Passive and burden-blind allocation worsened disparities. People who are disadvantaged often have worse prognoses, so a survival criterion would push them further back in line.', cite: 'Step 3' },
      ],
    },
  },

  residency: {
    id: 'residency',
    kind: 'article',
    short: 'Navigating Healthcare Ethics',
    title: 'Navigating Healthcare Ethics: Resource Allocation & Fairness Explained',
    subtitle: 'Residency Advisor, Medical Ethics & Law (Feb 2025)',
    author: 'Residency Advisor',
    citation: 'Residency Advisor. "Navigating Healthcare Ethics: Resource Allocation & Fairness Explained." 2025.',
    url: 'https://residencyadvisor.com/resources/medical-ethics-law/ethics-resource-allocation-gets-what-healthcare',
    cite: 'Residency Advisor',
    icon: '🩺',
    thesis:
      'Every health system rations by deciding what it funds and offers. Fair allocation needs ethical principles (justice, utility, need, efficiency and transparency) applied with attention to health disparities, so that efficiency never becomes an excuse to deny needed care.',
    chapters: [
      {
        id: 'levels',
        title: 'Understanding Resource Allocation',
        summary:
          'Resource allocation is how limited resources such as beds, ICU capacity, ventilators, organs, staff time, medications and funding are spread across people and services. Decisions happen at three levels.',
        keyPoints: [
          'Micro (bedside): which patient gets the last ICU bed or the earlier surgery or MRI slot.',
          'Meso (institutional): how a hospital splits its budget across services such as oncology and mental health, or which department takes the cuts.',
          'Macro (system/policy): how a government divides funding between primary, specialty, preventive and tertiary care.',
          'Rationing happens in every system, even when clinicians dislike the word.',
        ],
        terms: ['Resource allocation', 'Micro level', 'Meso level', 'Macro level', 'Rationing'],
      },
      {
        id: 'principles',
        title: 'Core Ethical Principles',
        summary:
          'The article sets out five principles: justice (distributive justice), utilitarianism, need, efficiency, and transparency and procedural fairness. They often conflict, especially utility and need.',
        keyPoints: [
          'Justice: treat similar cases alike. It can mean equal access (e.g., a lottery), equal opportunity, or priority to the worst off. "Fairness is not always the same as equality."',
          'Utilitarianism: maximize overall good (lives, life-years, QALYs). The risk is deprioritizing frail, disabled or chronically ill people.',
          'Need: urgency, no alternative, risk of serious harm. It conflicts with utility when the neediest have lower long-term benefit.',
          'Efficiency: cost-effectiveness, less waste, early detection. It must not become an excuse to deny needed care.',
          'Transparency and procedural fairness: public, consistent criteria, appeals, stakeholder input and audits.',
        ],
        terms: ['Distributive justice', 'Utilitarianism', 'Need', 'Efficiency', 'Procedural fairness', 'QALY'],
      },
      {
        id: 'cases',
        title: 'Real-World Applications',
        summary:
          'COVID-19 triage, expensive drugs, and transplant and dialysis allocation show the principles in action, and in tension.',
        keyPoints: [
          'COVID-19 ICU triage used survival probability, short-term prognosis (SOFA score), "fair innings" reasoning (controversial) and priority for essential workers.',
          'Comorbidity-based triage can penalize chronic conditions rooted in social inequity.',
          'Expensive cancer drugs with modest gains vs. broad prevention programs; insulin and EpiPen price spikes.',
          'Transplant allocation weighs urgency (MELD score for livers), likelihood of benefit, waiting time and compatibility (ABO, HLA).',
          '1960s dialysis "God committees" judged social worth (job, family status), and similar biases persist in subtler forms.',
        ],
        terms: ['Crisis standards of care', 'SOFA score', 'MELD score', 'God committee', 'Moral distress'],
      },
      {
        id: 'challenges',
        title: 'Persistent Challenges',
        summary:
          'Health disparities, political and economic pressure, and the debate over cost and value make fair allocation hard.',
        keyPoints: [
          'Disparities come from uneven hospital distribution, insurance gaps, language barriers, structural racism, implicit bias and social determinants of health.',
          'Example: online-only scheduling excludes people without broadband.',
          'Lobbying, electoral cycles and budgets distort priorities.',
          'Cost vs. value: who sets an acceptable cost per QALY, and how is population efficiency reconciled with duty to the individual patient?',
        ],
        terms: ['Health disparities', 'Social determinants of health', 'Cost per QALY'],
      },
      {
        id: 'strategies',
        title: 'Building Fairer Frameworks',
        summary:
          'Four strategies: participatory decision-making, transparency and trust, evidence-based policy focused on equity, and ethics education and reflection.',
        keyPoints: [
          'Include patients, frontline staff, ethicists, public-health experts and community leaders.',
          'Publish criteria in plain language and report outcomes by race, ethnicity and other factors.',
          'Use health equity impact assessments and combine cost-effectiveness with equity weights.',
          'Build moral resilience through ethics training, debriefs and implicit-bias training.',
        ],
        terms: ['Equity weights', 'Health equity impact assessment', 'Moral resilience', 'Participatory decision-making'],
      },
    ],
    debate: {
      aff: [
        { claim: 'Utilitarian triage is an accepted crisis standard.', detail: 'Under crisis standards of care, COVID-19 triage used survival probability and SOFA-based prognosis to save the most lives with scarce ventilators.', cite: 'Real-World Applications' },
        { claim: 'Efficiency is an ethical principle in its own right.', detail: 'Putting resources where benefit is largest (cost-effectiveness, less waste) means more total health for the population.', cite: 'Core Ethical Principles' },
      ],
      neg: [
        { claim: 'Need conflicts with long-term benefit.', detail: 'The article names this exact tension: the patients in greatest need may have lower long-term benefit. A survival-only rule abandons them.', cite: 'Core Ethical Principles' },
        { claim: 'Comorbidity-based triage encodes injustice.', detail: 'Chronic conditions that lower survival odds often come from social inequity, so a survival criterion penalizes people who are already disadvantaged.', cite: 'Real-World Applications, Persistent Challenges' },
        { claim: 'Fairness is not equality, and not maximization either.', detail: 'Justice can require giving more to the worst off to correct structural inequity.', cite: 'Core Ethical Principles' },
      ],
    },
  },

  gesda: {
    id: 'gesda',
    kind: 'article',
    short: 'Longevity Science (GESDA)',
    title: 'Radar Spotlight: Longevity Science Crosses the Clinical Threshold',
    subtitle: 'GESDA Science Breakthrough Radar 2026',
    author: 'Geneva Science and Diplomacy Anticipator (GESDA)',
    citation: 'GESDA. "Radar Spotlight: Longevity Science Crosses the Clinical Threshold." 2026 Science Breakthrough Radar.',
    url: 'https://www.gesda.global/radar-spotlight-longevity-science-crosses-clinical-threshold/',
    cite: 'GESDA',
    icon: '🧬',
    thesis:
      '"For centuries, humanity marked time chronologically." Biomarkers now show that biological age predicts health better than years lived, and longevity science is moving into the clinic. The open question is no longer whether this will happen but how to govern it, with equitable access as the central challenge.',
    note: 'The URL in the HOSA guidelines now returns "not found." These notes come from GESDA\'s spotlight summary and its Radar pages on Healthspan Extension and Biomarkers of Ageing.',
    chapters: [
      {
        id: 'threshold',
        title: 'Crossing the Clinical Threshold',
        summary:
          'The 2026 GESDA Science Breakthrough Radar draws on 2,390 researchers from 89 countries. It argues that longevity science is accelerating toward clinical reality, driven mainly by breakthroughs in molecular diagnostics and targeted drug development, so "the time for debate is over." The task for diplomats and policymakers is to write policy and regulation, and equitable access is the central governance challenge.',
        keyPoints: [
          '2026 Radar: 2,390 researchers, 89 countries.',
          'Drivers: molecular diagnostics and targeted drug development.',
          'Switzerland\'s "Longevity Valley," with EPFL as a key contributor.',
          'Governance question: how to regulate, not whether it will happen.',
          'Equitable access is the central challenge, to avoid a two-tier experience of aging.',
        ],
        terms: ['GESDA', 'Science Breakthrough Radar', 'Longevity Valley', 'Equitable access'],
      },
      {
        id: 'biomarkers',
        title: 'Biological vs. Chronological Age',
        summary:
          '"Years lived is therefore not a reliable predictor of future health and longevity." Biological age, measured by biomarkers, is more informative. Epigenetic clocks estimate biological age from DNA methylation and can flag accelerated aging in cells, tissues or organs before disease appears.',
        keyPoints: [
          'Healthspan (healthy years of life) vs. lifespan (total years).',
          'Epigenetic clocks read DNA methylation patterns; newer models combine several biomarkers to predict mortality.',
          'Biomarkers are statistical tools that improve with large, well-benchmarked datasets (e.g., UK Biobank).',
          'The Global Neurodegeneration Proteomics Consortium pools data on about 40,000 people using federated access, which protects sensitive data.',
          'Within about 10 years, biological age is expected to enter routine clinical monitoring, with wearables validated against clocks.',
        ],
        terms: ['Biological age', 'Chronological age', 'Healthspan', 'Epigenetic clock', 'DNA methylation', 'Biomarker'],
      },
      {
        id: 'interventions',
        title: 'Interventions: Rejuvenation and Mimetics',
        summary:
          'Approaches range from resetting the epigenome to repurposing existing drugs. Aging may share underlying processes, the "hallmarks of ageing," that can be targeted directly.',
        keyPoints: [
          'In vivo reprogramming with OSKM (four transcription factors) carries an inherent cancer risk, so safer factors such as HNF4 alpha (liver) are being explored.',
          'Ex vivo rejuvenation of aged stem cells or donor organs (kidneys, hearts) before transplantation.',
          'SIRT6 activators (e.g., fucoidan) act on the epigenome indirectly.',
          'Dark genome: about 98% of DNA is non-coding, and transposable elements make up about half. LINE-1 activity rises with age and drives inflammation; antiretrovirals can suppress it.',
          'Circadian clock genes regulate all 12 hallmarks of ageing. Boosting them extended mouse lifespan by 15%.',
          '"Lifestyle mimetics" are drugs that imitate the benefits of healthy behavior; metformin and rapamycin are under study.',
        ],
        terms: ['Hallmarks of ageing', 'Epigenetic reprogramming', 'OSKM', 'Dark genome', 'Transposable elements', 'Lifestyle mimetics', 'Rapamycin', 'Metformin'],
      },
      {
        id: 'governance',
        title: 'Ethics, Equity and Governance',
        summary:
          'As interventions reach patients, the big questions become who gets access, how data is protected, and how safety is assured. Early high-cost therapies and diagnostics tend to appear first in wealthy countries and premium clinics.',
        keyPoints: [
          'Risk of a two-tier aging divide between those who can afford interventions and those who cannot.',
          'Research needs funding models that do not compromise sensitive medical data.',
          'Safety (e.g., cancer risk from reprogramming) is key to translation into humans.',
          'Multilateral (international) action is called for, especially on biomarkers and epigenome rejuvenation.',
        ],
        terms: ['Two-tier aging', 'Data privacy', 'Multilateral governance'],
      },
    ],
    debate: {
      aff: [
        { claim: 'Biomarkers make survival prediction more accurate.', detail: 'If biological age predicts outcomes better than years lived, allocating by likelihood of long-term survival can rest on objective measures rather than crude age cutoffs.', cite: 'Biological vs. Chronological Age' },
        { claim: 'Long-term survival is increasingly extendable.', detail: 'With interventions reaching the clinic, resources given to patients with good long-term prospects may yield even more healthy years.', cite: 'Crossing the Clinical Threshold' },
      ],
      neg: [
        { claim: 'Access, not biology, may decide who survives long-term.', detail: 'GESDA names equitable access as the central challenge. If wealthier people get longevity interventions first, survival-based allocation rewards wealth twice.', cite: 'Ethics, Equity and Governance' },
        { claim: 'Prognosis is a moving target.', detail: 'Rejuvenation and mimetics may change who can survive long-term, so today\'s "poor prognosis" may not be tomorrow\'s.', cite: 'Interventions' },
        { claim: 'Biomarkers are still being validated.', detail: 'Clocks are statistical tools that need large, well-benchmarked datasets, and are not yet ready to decide life-or-death allocation.', cite: 'Biological vs. Chronological Age' },
      ],
    },
  },
}
