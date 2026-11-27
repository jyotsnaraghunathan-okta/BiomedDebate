// The three additional official references (HOSA Biomedical Debate 2026-27).
// Each article is modeled like a book: sections act as chapters.

export const articles = {
  emanuel: {
    id: 'emanuel',
    kind: 'article',
    short: 'Shared Ethical Framework (COVID-19)',
    title: 'The Shared Ethical Framework to Allocate Scarce Medical Resources: A Lesson from COVID-19',
    subtitle: 'The Lancet, vol. 401, pp. 1892-1902 (June 3, 2023)',
    author: 'Ezekiel J. Emanuel & Govind Persad',
    citation: 'Emanuel, E. J. and Persad, G. "The shared ethical framework to allocate scarce medical resources: a lesson from COVID-19." The Lancet 401 (2023): 1892-1902.',
    url: 'https://www.sciencedirect.com/science/article/pii/S0140673623008127',
    cite: 'Emanuel & Persad',
    icon: '🦠',
    thesis:
      'COVID-19 forced the world to clarify how to allocate scarce medical resources fairly. Ethical allocation is a three-step process: (1) set out the fundamental values, (2) use them to define priority tiers, and (3) implement the tiers faithfully. The five substantive values are settled and universal. The pandemic\'s failures were mostly failures of implementation, and its lessons should guide future scarcity, such as the malaria vaccine.',
    chapters: [
      {
        id: 'intro',
        title: 'Introduction: Why COVID-19 Clarified Allocation',
        summary:
          'In the past 100 years, no event or technology (not penicillin, dialysis, organ transplantation or gene therapy) has required allocating scarce resources for more people worldwide than COVID-19. Calls for "fair and equitable" allocation were common but vague. Because no intervention can be produced instantly in sufficient quantities, scarcity will recur, for example with the mpox vaccine JYNNEOS, the malaria vaccine Mosquirix and cholera vaccines.',
        keyPoints: [
          'Three-step process: elucidate values → delineate priority tiers → implement the prioritization.',
          'Allocation happens both within countries and among countries.',
          'Many bodies issued guidance: the US National Academies, US ACIP, many countries, the Nuffield Council, WHO\'s SAGE, US states and scholars (Table 1). Most identified similar values and similar priority groups.',
          'Global allocation is harder because there is no authoritative body to enforce allocation among countries. The ethical values themselves are not different.',
          'COVAX (set up by WHO, GAVI, CEPI and others) proposed a population-based model. The authors and other scholars proposed allocating by COVID-19 disease burden instead.',
        ],
        terms: ['Three-step process', 'COVAX', 'GAVI', 'CEPI', 'ACIP', 'SAGE', 'JYNNEOS', 'Mosquirix'],
        pages: '1892-1894',
      },
      {
        id: 'values',
        title: 'Five Substantive Values',
        summary:
          'Across COVID-19 guidance, five substantive values inform allocation (Table 2). Appeals to "medical need" are uninformative, because every candidate has medical need. What matters is the different effect of giving the resource to some candidates rather than others. The values are universal, but none is enough on its own, and their weight varies by context. In an emergency, the consensus is to weight benefiting people and preventing harm, and mitigating disadvantage, most heavily.',
        keyPoints: [
          'Maximizing benefits and minimizing harms: allocate to those who can gain the most benefit and protection. Harms include death, loss of future life, illness, hospitalization, loss of work, poverty and disrupted education, assessed over a lifetime (e.g., long COVID). Harms can be direct (the disease, ventilation) or indirect (overwhelmed hospitals forced into crisis standards of care). Sometimes called "utilitarian," it is part of every plausible ethical theory.',
          'Mitigating unfair disadvantage (equity): avoid worsening past inequities, with special urgency for people who face unfair disadvantage from discrimination by race, religion, sex and so on. Not every risk factor is an unfair disadvantage: being male or older raises COVID-19 death risk, but neither is unfair.',
          'Equal moral concern: do not treat people differently except to realize morally important values. It does not mean identical treatment. Treating a community in a COVID-19 surge the same as a low-case community fails to show equal concern.',
          'Reciprocity: give priority to people, communities or countries that took on burdens to address the problem, such as health workers, essential workers and vaccine-trial participants. In organ transplantation, past or pledged donors get priority. WHO calls it "a principle of narrower scope and more limited importance." It mainly breaks ties among similar recipients.',
          'Instrumental value: give priority to those who can reduce harm to others, e.g., front-line staff whose protection prevents crisis standards of care. It is not an independent value; it helps realize the others. Guidance often assumed it without naming it.',
        ],
        terms: ['Maximizing benefits and minimizing harms', 'Mitigating unfair disadvantage', 'Equal moral concern', 'Reciprocity', 'Instrumental value', 'Medical need', 'Long COVID'],
        pages: '1894-1896',
      },
      {
        id: 'procedural',
        title: 'Procedural Principles',
        summary:
          'Procedural principles govern how decisions are made and should not be confused with the substantive values. The main ones are transparency, engagement and evidence-responsiveness. Some COVID-19 reports multiplied principles or mislabeled procedural values as substantive ones.',
        keyPoints: [
          'Transparency: allocation is not hidden; the weighting is public and justified with evidence.',
          'Engagement: the affected public, not just interest groups or experts, can assess and comment, through surveys, deliberation or notice-and-comment.',
          'Evidence-responsiveness: guidance is regularly reviewed and revised as data change.',
          'ACIP listed "promoting justice" and "mitigating health inequities" as separate principles but defined them similarly, and made transparency (a procedural principle) its fourth principle.',
          'WHO listed legitimacy as a fundamental principle, but it is procedural.',
        ],
        terms: ['Transparency', 'Engagement', 'Evidence-responsiveness', 'Legitimacy', 'Substantive vs. procedural'],
        pages: '1896',
      },
      {
        id: 'tiers',
        title: 'From Values to Priority Tiers',
        summary:
          'The values led to largely convergent priority tiers for vaccines and antivirals. Instrumental value justified prioritizing health-care workers and first responders. Benefiting people and preventing harm justified prioritizing those at highest risk of death, such as older adults and people with risk-increasing conditions. Other risk factors were used inconsistently.',
        keyPoints: [
          'Common top tiers: health-care workers, first responders, people in congregate housing, and people at increased risk of death.',
          'Inconsistently used: multigenerational and congregate housing, occupation, geography, race and sex.',
          'ACIP used age and medical conditions but not other risk factors.',
          'Long-term-care residents were prioritized, but similarly vulnerable adults in crowded community housing or crowded prisons were not.',
          'The National Academies noted higher risk for men and minority communities but did not use these factors.',
          'Legal, political or logistical limits may restrict which factors can be used, but transparency requires acknowledging those limits openly.',
          'Examples of top tiers in Table 1: the UK ranked care-home residents and carers first; Norway put people with risk factors first and health workers second; Ontario included First Nations, Métis and Inuit adults in phase 1.',
        ],
        terms: ['Priority tiers', 'Congregate housing', 'Risk factors', 'Long-term care'],
        pages: '1893-1896',
      },
      {
        id: 'implementation',
        title: 'Six Implementation Challenges',
        summary:
          '"The best ethical framework and priority tiers ... are only as good as their implementation." Tiers that are too restrictive leave resources sitting idle, and criteria that are too broad cause unfair, inefficient queuing. COVID-19 revealed six major challenges (Table 3).',
        keyPoints: [
          '1. Population-based distribution: the US federal government (Trump administration) sent vaccines to states purely by population, ignoring case rates and deaths. COVAX first planned to cover 20% of each country\'s population. Vaccines sat idle in Congo and South Sudan while Nepal and Peru had shortages. "Purely population-based distribution ... is nearly always ethically wrong", because it treats unequal situations equally and so violates equal moral concern.',
          '2. Tiers that were both overbroad and underinclusive: Massachusetts put all health-care workers first, so administrators and lab researchers not doing COVID-19 work were vaccinated before nursing-home residents.',
          '3. Rigid age cutoffs: Black Americans\' life expectancy (74.8) was shorter than White Americans\' (78.8). The average age of COVID-19 death was 72 for non-White and 81 for White Americans. A 75+ cutoff favored White people, and it also favored women (life expectancy 81.4 vs. 76.3 for men), compounding Black men\'s disadvantage.',
          '4. Passive allocation: online first-come, first-served sign-ups and pharmacy-based access favored the wealthy (more education, free time, broadband). Pharmacies cluster in higher-income areas.',
          '5. Self-attestation (honor systems): this rewarded lying about age, comorbidities and residence, and normalized cheating, for example with booster limits for people over 50.',
          '6. Rigidly excluding everyone below a tier: New York providers threw out doses because of strict guidelines and penalties. Wastage is "the worst possible outcome" for a scarce, life-saving resource.',
        ],
        terms: ['Population-based allocation', 'Overbroad tiers', 'Age cutoffs', 'Passive allocation', 'First-come, first-served', 'Self-attestation', 'Wastage'],
        pages: '1896-1898',
      },
      {
        id: 'improving',
        title: 'Better Implementation Mechanisms',
        summary:
          'Good design can reduce, if not fully prevent, these problems, both by defining tiers better and by using better delivery mechanisms.',
        keyPoints: [
          'Allocate by ethical values, not population: send vaccines where high case rates are expected and direct a share to disadvantaged communities. The US did this for its initial JYNNEOS (mpox) allocation. Globally, the US took a hybrid approach: some doses to COVAX by population, and about 25% to high-burden countries.',
          'Apply instrumental value and reciprocity only to people actually doing patient care or fighting the pandemic, not everyone employed by a hospital.',
          'Base eligibility on multiple factors, including exposure (crowded housing) and risk of death or ICU admission.',
          'Distribute actively: the UK texted high-risk people, then followed up with a letter and a call. Identify eligible people from Medicaid or Medicare enrollment and medical records, and go door-to-door. This also reduces reliance on self-attestation.',
          'Allocate to several tiers at once: e.g., 50% to front-line health workers, 25% to older people in crowded living conditions, and 25% to other front-line workers (grocery staff, teachers, first responders), so nothing is wasted for lack of demand.',
        ],
        terms: ['Active distribution', 'Simultaneous proportional allocation', 'Hybrid allocation'],
        pages: '1898-1899',
      },
      {
        id: 'malaria',
        title: 'Applying the Lessons: The Malaria Vaccine',
        summary:
          'About 77% of malaria deaths are in children under 5. RTS,S/AS01 (Mosquirix) reduces severe disease in infants and children by about 30% with four doses. WHO recommended it in October 2021 for about 30 sub-Saharan countries. With about 25 million eligible children a year, about 100 million doses a year are needed, but early supply covers only about 1 million children, and it will take 4-6 years for supply to meet demand.',
        keyPoints: [
          'Models: in regions with 10-65% malaria prevalence, it averts a median of 116,480 clinical cases and 484 deaths per 100,000 fully vaccinated children.',
          'Conclusion 1: do not allocate by population of children; this violates minimizing harm and relieving disadvantage.',
          'Conclusion 2: reciprocity should not be primary. Trial participation by Malawi, Ghana and Kenya should not automatically put them first.',
          'Conclusion 3: send vaccines to countries that can actually distribute and administer them. Countries without that capacity should get other help, including building capacity. Sending vaccines that will sit unused "is of no ethical value."',
          'Conclusion 4: target where vaccines most reduce serious illness and death among children, using data to find the highest-risk children (e.g., rural areas).',
          'Conclusion 5: make sure the children of wealthy or politically connected families are not prioritized, and scrutinize "open" queues.',
          'Pregnant women face very high malaria risk but were excluded from trials. Some doses could go to trials, because ethical allocation should also shape research design.',
        ],
        terms: ['RTS,S/AS01', 'Mosquirix', 'Plasmodium falciparum', 'Distribution capacity'],
        pages: '1899',
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        summary:
          'The pandemic clarified that ethical allocation rests on five substantive values: minimizing harms, mitigating disadvantage (equity), equal moral concern (not identical treatment), reciprocity and instrumental value. Priority tiers should mainly emphasize instrumental value, minimizing harm and mitigating disadvantage. Implementation must make sure disadvantaged groups are not disadvantaged further: define eligible groups carefully, avoid "open" methods that favor the wealthy, and use active rather than passive distribution, "since passivity favours the privileged."',
        keyPoints: [
          'The values are settled. There is no need to invent new ones in the next emergency.',
          'The challenge is implementing the values faithfully in each context.',
          'Active, not passive, distribution.',
        ],
        terms: ['Equity', 'Active distribution'],
        pages: '1899-1900',
      },
    ],
    debate: {
      aff: [
        { claim: 'Benefit-maximizing is a core shared value and counts loss of future life.', detail: 'Harms to be minimized include death and "loss of future life," assessed over a lifetime. In emergencies, benefiting people and preventing harm is among the most heavily weighted values. Long-term survival is one way of measuring that benefit.', cite: 'Five Substantive Values, pp. 1894-1896' },
        { claim: 'Need alone cannot decide; expected benefit must.', detail: 'The authors say "appeals to medical need are uninformative" because every candidate has need. The decision must turn on the different effects of treating some candidates rather than others.', cite: 'p. 1894' },
        { claim: 'Send resources where they will actually produce benefit.', detail: 'For the malaria vaccine, the authors say send doses only where they can be used, and target where they most reduce serious illness and death. Sending vaccines where they won\'t be used "is of no ethical value."', cite: 'Malaria, p. 1899' },
      ],
      neg: [
        { claim: 'No single value is sufficient.', detail: '"None of the values are sufficient alone." A survival-only rule ignores mitigating disadvantage, equal moral concern, reciprocity and instrumental value, and the consensus weights mitigating disadvantage as heavily as benefit.', cite: 'Five Substantive Values, p. 1896' },
        { claim: 'Age and life-expectancy criteria deepen racial and sex inequities.', detail: 'A 75+ cutoff favored White people and women because Black Americans (74.8 vs. 78.8) and men (76.3 vs. 81.4) live shorter lives. Prognosis-based rules inherit these same inequities.', cite: 'Challenge 3, pp. 1897-1898' },
        { claim: 'Instrumental value can outrank individual survival odds.', detail: 'Front-line workers were prioritized "even if they will not directly gain the most protection," because protecting them prevents wider harm.', cite: 'Instrumental value, p. 1895' },
        { claim: 'Not every risk factor is morally relevant, and some disadvantages demand priority.', detail: 'The framework distinguishes unfair disadvantage from mere risk. Disadvantaged groups often have worse prognoses, and the framework says to give them special urgency, not lower priority.', cite: 'p. 1895' },
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
