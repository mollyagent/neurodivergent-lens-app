/* ============================================
   Neurodivergent Lens — Application Logic
   ============================================ */

// ---- LESSONS DATA ----
const LESSONS = [
  {
    id: 1,
    tag: "both",
    tagLabel: "Autism & ADHD",
    title: "What Is Neurodivergence? A Starting Place",
    body: [
      `Neurodivergence refers to brains that develop or function differently from what's considered "typical." Autism and ADHD are two of the most common forms. Both are neurological differences — not disorders caused by trauma, bad parenting, or character flaws — though they can certainly be shaped by environment, adversity, and systemic barriers.`,
      `In therapy, adopting a neurodivergent-affirming lens means holding two truths at once: your client may genuinely struggle, and those struggles arise from a world built for a different kind of brain — not from a broken one. This reframe changes everything: the goal shifts from "fixing" the person to helping them understand themselves, access support, and build a life that fits who they actually are.`
    ],
    keyPoints: [
      "Autism and ADHD are neurological differences, not deficits",
      "Struggles often stem from person-environment mismatch",
      "Affirming work focuses on self-understanding, not 'correction'",
      "Both can co-occur — roughly 50–70% of autistic people also have ADHD"
    ]
  },
  {
    id: 2,
    tag: "autism",
    tagLabel: "Autism",
    title: "How Autism Shows Up in Therapy",
    body: [
      `Autistic clients may present in ways that are easy to misread if you're not familiar with the spectrum. They might struggle with open-ended questions, preferring concrete framing like "Tell me one thing that felt hard this week" over "How are you feeling?" They may interpret language literally, have difficulty with unpredictable session structures, or experience your waiting room's fluorescent lighting as genuinely painful.`,
      `In session, autistic clients may show less eye contact (which does not indicate disengagement), talk extensively about a topic of deep interest (which can be a way of building trust), or seem flat in affect while feeling intensely. Many have spent years masking — performing neurotypical behavior at great cost. Creating a low-demand, predictable, sensory-friendly therapeutic environment is itself an evidence-based intervention.`
    ],
    keyPoints: [
      "Prefer concrete, specific questions over broad, open-ended ones",
      "Limited eye contact ≠ disengagement",
      "Flat affect ≠ lack of feeling",
      "Predictable structure reduces anxiety and builds safety",
      "Deep special interests can be a doorway into connection"
    ]
  },
  {
    id: 3,
    tag: "adhd",
    tagLabel: "ADHD",
    title: "How ADHD Shows Up in Therapy",
    body: [
      `ADHD is often misunderstood as simply being "distracted" or "hyper." In therapy, ADHD can look like a client who jumps between topics, arrives late, forgets between-session work, cries at unexpected moments, or seems fully present one week and completely disengaged the next. These aren't signs of a client who doesn't care — they're signs of a brain that works differently with time, motivation, and emotional regulation.`,
      `ADHD involves significant executive function challenges (planning, initiating, sustaining effort), emotional dysregulation (big feelings that move fast), and time blindness — the difficulty perceiving time as a continuous flow rather than "now" and "not now." It also comes with genuine strengths: hyperfocus, creativity, pattern recognition, and a high capacity for empathy. Effective ADHD-affirming therapy names these realities clearly rather than treating the client as "too much" or "not trying hard enough."`
    ],
    keyPoints: [
      "ADHD is an executive function and emotional regulation difference",
      "Time blindness is neurological, not laziness",
      "Hyperfocus is real — and a genuine strength",
      "Rejection sensitive dysphoria (RSD) is common and can be intense",
      "Shame is often the presenting issue underneath the symptoms"
    ]
  },
  {
    id: 4,
    tag: "autism",
    tagLabel: "Autism",
    title: "Common Misdiagnoses: When Autism Is Missed",
    body: [
      `Autism is frequently misidentified — especially in people who are female, non-binary, or from BIPOC communities, where both diagnostic bias and masking are pronounced. Common misdiagnoses include Borderline Personality Disorder (BPD), anxiety disorders, depression, OCD, PTSD, and bipolar disorder. This happens in part because autistic traits are filtered through clinicians who learned primarily about white, male, childhood-presenting autism.`,
      `For example, an autistic adult woman presenting with intense emotional swings, relational difficulties, identity confusion, and self-harm behaviors may receive a BPD diagnosis. But the underlying driver may be chronic masking exhaustion, rejection sensitive dysphoria, and the pain of not understanding why connection is so hard. The treatment path for each is quite different. When clients report that multiple therapies haven't helped, or express a deep sense of "not being like other people," it's worth exploring neurodivergence.`
    ],
    keyPoints: [
      "BPD is a common misdiagnosis for autistic women and AFAB people",
      "Anxiety disorders, OCD, and PTSD frequently co-occur or mask autism",
      "Masking conceals autistic traits — especially in highly verbal adults",
      "A late diagnosis can be profoundly validating and life-changing",
      "Don't require 'childhood symptoms' to explore neurodivergence"
    ]
  },
  {
    id: 5,
    tag: "adhd",
    tagLabel: "ADHD",
    title: "ADHD Misread as Anxiety, Mood, or Trauma",
    body: [
      `ADHD is routinely missed — particularly in women, non-binary individuals, and BIPOC clients — and just as routinely misdiagnosed as generalized anxiety, depression, or a trauma response. There's a reason: ADHD and anxiety look alike on the surface. Both produce restlessness, difficulty concentrating, overthinking, and sleep disruption. But the mechanisms differ, and so does the effective treatment.`,
      `ADHD-related anxiety often stems from fear of failure, rejection sensitive dysphoria, and the exhaustion of struggling in systems that weren't built for ADHD brains. When ADHD goes unrecognized, people often internalize blame ("I'm lazy, disorganized, a failure") for years. In therapy, this shows up as shame-heavy presentations. A client who has been in talk therapy for years without much progress may be dealing with undiagnosed ADHD. Consider it when the picture is complex.`
    ],
    keyPoints: [
      "ADHD mimics anxiety — distinguish by mechanism, not symptoms alone",
      "Depression in ADHD is often shame-based and secondary",
      "Years of 'failing' systems creates chronic internalized shame",
      "Women and AFAB people with ADHD are diagnosed later, if at all",
      "Psychoeducation about ADHD can be genuinely therapeutic"
    ]
  },
  {
    id: 6,
    tag: "both",
    tagLabel: "Autism & ADHD",
    title: "Masked and Late-Diagnosed Presentations",
    body: [
      `Masking (also called camouflaging) is the practice of suppressing or hiding neurodivergent traits in order to appear neurotypical. It's exhausting, often unconscious, and comes with a significant cost: burnout, depression, anxiety, and identity confusion. Many people who masked successfully through childhood present in adulthood with the aftermath — chronic fatigue, a fragile sense of self, and a pervasive sense that something is wrong with them without knowing what.`,
      `Late diagnosis is increasingly common. Women, non-binary people, and BIPOC individuals are particularly likely to be missed due to diagnostic criteria developed primarily on white cisgender boys. Late-diagnosed adults often experience a complex mixture of relief, grief, and anger. Relief at finally having an explanation. Grief for the years lost to misunderstanding. Anger at systems that failed them. Affirming this full emotional complexity — rather than just celebrating the diagnosis — is essential therapeutic work.`
    ],
    keyPoints: [
      "Masking has a high cost: burnout, depression, identity fragmentation",
      "Late diagnosis brings relief, grief, and often anger — all valid",
      "Women, AFAB, and BIPOC clients are disproportionately underdiagnosed",
      "Don't require a client to 'look autistic/ADHD' to take it seriously",
      "Exploring neurodivergence can be done without a formal diagnosis"
    ]
  },
  {
    id: 7,
    tag: "both",
    tagLabel: "Autism & ADHD",
    title: "Co-Occurring Conditions: The Full Picture",
    body: [
      `Neurodivergent people are more likely to experience co-occurring mental health conditions — not because neurodivergence causes them, but because growing up in a world that isn't designed for your brain creates real stress and adversity. Anxiety, depression, OCD, PTSD, eating disorders, and substance use disorders are all more prevalent in autistic and ADHD populations.`,
      `In therapy, it's important to avoid treating only the co-occurring condition while missing the neurodivergent foundation. For example, exposure-based treatment for social anxiety may be appropriate — but it should be modified if the anxiety is driven partly by sensory overwhelm, communication differences, or a history of social rejection specific to being autistic. Similarly, treating depression in an ADHD client without addressing the executive function and shame components is likely to produce limited results. Hold both layers.`
    ],
    keyPoints: [
      "Anxiety, depression, PTSD, OCD are common co-occurring conditions",
      "Co-occurrence doesn't mean one causes the other",
      "Modify evidence-based treatments to account for neurodivergent needs",
      "Trauma work should consider autistic experience and sensory processing",
      "Substance use is often a form of self-medication — explore with curiosity"
    ]
  },
  {
    id: 8,
    tag: "language",
    tagLabel: "Language",
    title: "Language Matters: Identity-First vs. Person-First",
    body: [
      `Person-first language ("a person with autism") was introduced with good intentions: to center personhood and resist reducing people to their diagnosis. However, many autistic adults actively prefer identity-first language ("an autistic person"), viewing autism as an intrinsic part of who they are — not a separate thing they "have." Identity-first language is now strongly preferred by most autistic self-advocates, though individual preferences vary.`,
      `ADHD communities show more variation — both "person with ADHD" and "ADHDer" are used. The most important clinical principle is simple: follow your client's lead. Ask early ("How do you like to refer to your experience of ADHD?") and mirror their language. Avoid language that frames neurodivergence as inherently tragic: "suffering from autism," "afflicted with ADHD," or "despite their autism." These framings are absorbed and can reinforce shame. Use language that affirms difference without minimizing real challenge.`
    ],
    keyPoints: [
      "Most autistic adults prefer identity-first language ('autistic person')",
      "Follow your client's lead — ask early and reflect their language",
      "Avoid tragedy-framing: 'suffering from,' 'afflicted by,' 'despite their'",
      "Words shape the client's relationship to their own identity",
      "Both 'person with ADHD' and 'ADHDer' are used — client preference rules"
    ]
  },
  {
    id: 9,
    tag: "both",
    tagLabel: "Autism & ADHD",
    title: "Affirming Therapy: Core Principles",
    body: [
      `Neurodivergent-affirming therapy starts with one foundational belief: the client is not broken. From there, the work involves building genuine self-understanding, identifying accommodations and environments that fit the client's actual brain, reducing internalized shame, and supporting the client in advocating for themselves in relationships and systems.`,
      `Practically, this means: creating predictable session structure; being flexible about eye contact, body position, and sensory needs; avoiding pathologizing stimming or special interests; using concrete language; and not expecting "neurotypical" social engagement as a marker of progress. It also means knowing your limits — if you're not familiar with neurodivergence, refer to clinicians who specialize in this work, rather than inadvertently reinforcing the message that something is fundamentally wrong with how the client is.`
    ],
    keyPoints: [
      "Core belief: the client is not broken",
      "Goals include self-understanding, accommodation, and shame reduction",
      "Predictable structure and sensory flexibility support engagement",
      "Stimming and special interests are not pathological — don't treat them as such",
      "Know your limits; refer to specialists when needed"
    ]
  },
  {
    id: 10,
    tag: "both",
    tagLabel: "Autism & ADHD",
    title: "ACT with Neurodivergent Clients",
    body: [
      `ACT pairs well with ND-affirming work; it focuses on relating differently to thoughts and feelings, using values and committed action beyond masking-driven "shoulds."`,
      `Adapt ACT for ND clients: (1) Values beyond masking "shoulds"; (2) Tiny EF-friendly committed actions; (3) Defusion for shame narratives ("I'm broken") separating thoughts from identity; (4) Mindfulness/interoception adaptations that use concrete sensory anchors instead of abstract scans; (5) Self-as-context that normalizes multiple selves (masking/tired) without pathologizing.`
    ],
    keyPoints: [
      "Use values to replace masking-driven 'shoulds' with client-chosen 'want to's",
      "Defusion for shame (thoughts ≠ truths)",
      "Committed action must be tiny and EF-friendly (chunked, cued, scheduled)",
      "Adapt mindfulness to sensory/interoceptive needs (visual, brief, concrete)",
      "Self-as-context de-shames multiple selves (masking, exhausted)"
    ]
  }
];

// ---- DRILLS DATA ----
const DRILLS = [
  {
    id: 1,
    scenario: `Alex, a 29-year-old client, arrives 20 minutes late to their ADHD session for the third time. They seem flustered and apologetic, saying "I don't know why I can't just be on time. Everyone else manages it. I'm such a mess." They have recently started a new medication and are finding it helps with some things but not others.`,
    question: "What is the most affirming, accurate clinical response?",
    options: [
      "\"It sounds like the medication isn't working. We should talk to your prescriber about adjusting the dose.\"",
      "\"Time management is something a lot of people struggle with. Let's make a schedule together you can follow.\"",
      "\"Lateness is really common with ADHD — your brain experiences time differently, which isn't a moral failure. Let's think about what structures might help you on your own terms.\"",
      "\"It might be worth reflecting on whether you're making this a priority. Consistency takes commitment.\""
    ],
    correct: 2,
    explanation: "Option C is most affirming because it normalizes the ADHD experience of time blindness as neurological (not a character flaw), directly counters shame with accurate psychoeducation, and invites collaborative problem-solving without imposing a neurotypical solution. Option A pathologizes further; Option B imposes a standard neurotypical structure; Option D introduces shame and implies the client isn't trying hard enough — the opposite of affirming."
  },
  {
    id: 2,
    scenario: `Maya, a 34-year-old woman, was recently diagnosed autistic at age 33 after years of diagnoses including anxiety and BPD. She comes to her first session with you and says, "I've been reading everything I can find. I feel like I finally understand myself. But I'm also really angry — why did it take so long? Why didn't anyone catch this?"`,
    question: "What is the most affirming, accurate clinical response?",
    options: [
      "\"That's a lot of emotion. Let's slow down and make sure your anger isn't getting in the way of processing the diagnosis.\"",
      "\"Your anger makes complete sense. Diagnostic systems have historically been built around white, male presentations of autism, and many women and AFAB people have been failed by that. Your anger is a reasonable response to a real injustice.\"",
      "\"Let's focus on the relief you're feeling — the anger might fade once you settle into the diagnosis.\"",
      "\"It's important to remember that the clinicians who worked with you were doing their best with the information they had.\""
    ],
    correct: 1,
    explanation: "Option B validates Maya's anger as clinically appropriate and grounds it in real systemic context — diagnostic bias is a documented problem, especially for women and AFAB autistic people. It acknowledges both her experience and the broader injustice, which is affirming and accurate. Options A and C minimize or redirect her anger; Option D centers the previous clinicians' experience rather than the client's."
  },
  {
    id: 3,
    scenario: `During a session, Jordan, who is autistic, begins talking at length about their special interest — a detailed historical period they've been researching. Your instinct is to redirect them back to the presenting problem. But Jordan seems more animated and relaxed than at any other point in the session.`,
    question: "What is the most affirming, accurate response?",
    options: [
      "Gently redirect: \"That sounds really interesting, but let's make sure we're using our time to work on what brought you here today.\"",
      "Stay silent and let them finish, then redirect once they naturally come to a pause.",
      "Engage genuinely with their interest and look for a natural bridge — the relaxation and trust built here is therapeutically useful data, not a detour.",
      "Make a note to set a time limit on topic shifts in future sessions to keep the work on track."
    ],
    correct: 2,
    explanation: "Option C reflects an affirming understanding of special interests as both a source of joy/strength and a therapeutic window. When autistic clients share their interests, it often signals trust, safety, and genuine connection. A skilled affirming therapist meets the client there and can find natural bridges to the therapeutic work. Options A and D treat the interest as an obstacle; Option B is neutral but misses the therapeutic opportunity."
  },
  {
    id: 4,
    scenario: `A supervisor tells you that your ADHD client, 22-year-old Priya, "just needs to try harder" with her between-session homework, since she consistently forgets to do it. You know Priya is highly motivated in sessions and clearly wants to change.`,
    question: "Which response reflects the most accurate clinical understanding?",
    options: [
      "Agree with the supervisor — follow-through is an important part of the therapeutic process.",
      "Consider that homework non-completion in ADHD clients often reflects executive function challenges (initiation, working memory), not motivation deficits — and adapt the approach accordingly.",
      "Tell Priya she needs to try harder if she wants the therapy to work.",
      "Discontinue homework assignments entirely so Priya doesn't feel pressure."
    ],
    correct: 1,
    explanation: "Option B reflects accurate ADHD neuroscience: completing between-session tasks requires initiation, working memory, and time perception — all of which are affected by ADHD. The intervention is to adapt (smaller steps, prompts, in-session setup) rather than to increase pressure. Option A accepts a shame-based framework; Option C is directly harmful; Option D overcorrects and avoids useful therapeutic work."
  },
  {
    id: 5,
    scenario: `A new client, Sam, describes feeling like they "don't belong anywhere" and has struggled to maintain friendships despite genuinely wanting connection. They say, "I know how to act around people, but it's exhausting. I go home and I'm completely wiped out." They were never formally evaluated for neurodivergence.`,
    question: "What is the most affirming, accurate clinical response?",
    options: [
      "\"That sounds like social anxiety — let's work on cognitive restructuring to challenge your fears about social situations.\"",
      "\"What you're describing — performing connection and then crashing afterward — is something many autistic people describe as masking. I wonder if it might be worth exploring whether neurodivergence is part of your picture.\"",
      "\"You might be an introvert. Introverts need more alone time to recharge after socializing.\"",
      "\"Let's work on building your social skills so interaction feels more natural over time.\""
    ],
    correct: 1,
    explanation: "Option B gently names the possibility of masking — a core autistic experience — without diagnosing, and invites the client to explore their own picture. The description Sam gives (performing social behavior, post-social exhaustion, and sense of not belonging) is a classic masking/neurodivergence presentation. Option A assumes social anxiety; Option C understates the clinical picture; Option D implies the client's social presentation is deficient, reinforcing shame."
  },
  {
    id: 6,
    scenario: `During a session, you notice your autistic client, Kai, rocking gently in their chair. This is new behavior you haven't seen before. They seem calm and engaged in the conversation.`,
    question: "What is the most affirming, accurate response?",
    options: [
      "Gently note the rocking and ask if everything is okay — it may indicate distress.",
      "Make no comment and continue the session normally, noting internally that Kai seems regulated and engaged.",
      "Ask Kai to sit still to minimize distractions during the session.",
      "Check in at the end of the session about whether they felt comfortable today."
    ],
    correct: 1,
    explanation: "Stimming (repetitive self-stimulatory behavior like rocking) is a natural regulatory behavior for many autistic people. When the client appears calm and engaged, there is no clinical reason to draw attention to it — doing so could be shaming or disruptive. Option B is correct: note the regulation and continue. Option A pathologizes regulated stimming; Option C actively suppresses a healthy self-regulation tool; Option D is unnecessary given Kai's apparent comfort."
  },
  {
    id: 7,
    scenario: `Your ADHD client, Marcus, tearfully describes a recent experience where a friend canceled plans last-minute. "I know it's not a big deal, but I felt devastated. Like, physically sick. I spent the whole day thinking about it. Something is wrong with me." This is a pattern — small perceived rejections seem to hit him extremely hard.`,
    question: "What is the most affirming, accurate clinical response?",
    options: [
      "\"Let's work on building resilience and distress tolerance so these events don't impact you as much.\"",
      "\"What you're describing sounds like Rejection Sensitive Dysphoria — a really common experience in ADHD where perceived rejection creates an intense emotional pain response. Nothing is wrong with you. This is a neurological thing, and there are ways to work with it.\"",
      "\"This reaction seems disproportionate. Let's explore what earlier experiences this might be connected to.\"",
      "\"Your friend canceling could have many explanations. Let's practice reframing the situation more neutrally.\""
    ],
    correct: 1,
    explanation: "Option B accurately names Rejection Sensitive Dysphoria (RSD), a well-documented ADHD experience involving intense, often physical emotional pain in response to perceived rejection. Naming it psychoeducationally — and directly countering 'something is wrong with me' — is both accurate and affirming. Option A implies the response is a deficiency to fix; Option C implies the response is disproportionate (shame-inducing); Option D minimizes the physiological reality of RSD."
  },
  {
    id: 8,
    scenario: `A colleague mentions they have an autistic client who "doesn't seem to have any empathy." They ask for your input on how to help the client build emotional attunement.`,
    question: "What is the most accurate clinical response?",
    options: [
      "Suggest the colleague try empathy-building exercises and social skills training.",
      "Explain that the 'lack of empathy' framing is a common myth — autistic people often have deep empathy but may express and process it differently; what presents as 'no empathy' may be differences in emotional expression, or even an overwhelm of too much empathy rather than too little.",
      "Agree that empathy deficits are a core autism trait and focus treatment on theory of mind work.",
      "Suggest the client may also have Narcissistic Personality Disorder given the empathy concerns."
    ],
    correct: 1,
    explanation: "Option B challenges a widespread and harmful myth. Autistic people are not inherently lacking in empathy — research and autistic self-reports consistently show this. What neurotypical observers sometimes read as 'no empathy' may be different ways of processing and expressing emotion, social communication differences, or — notably — a form of empathy so intense it becomes overwhelming. The 'double empathy problem' (Milton, 2012) notes that communication difficulties go both ways. Option C reinforces the myth; Option A and D are built on a false premise."
  },
  {
    id: 9,
    scenario: `Rosa, a 40-year-old Latina woman, shares that her children's school recently suggested her daughter might have ADHD. Rosa says, "In my family, we don't believe in that — you just have to work harder. I don't want her labeled." She seems protective and somewhat defensive.`,
    question: "What is the most affirming, accurate clinical response?",
    options: [
      "Strongly encourage Rosa to pursue an evaluation immediately, explaining the risks of leaving ADHD untreated.",
      "Agree that labels can be harmful and validate her instinct to protect her daughter.",
      "Acknowledge Rosa's protective instinct and cultural context, then offer to explore together what an evaluation might (or might not) offer her daughter — without pressure, and with curiosity about what 'help' could look like for their family.",
      "Explain that ADHD is a real medical condition and the label would help her daughter get accommodations."
    ],
    correct: 2,
    explanation: "Option C meets Rosa with genuine respect for her cultural context and protective instincts, while creating space for curiosity and exploration. It avoids pushing an evaluation (which could feel coercive) and avoids simply validating avoidance (which could leave the daughter unsupported). An affirming, culturally-responsive approach centers the family's values while gently holding open the door. Options A and D are pressuring and center the clinician's framework; Option B validates avoidance without therapeutic movement."
  },
  {
    id: 10,
    scenario: `During an intake, a client describes lifelong struggles with focus, organization, and emotional regulation. They mention that a previous therapist told them, "You don't seem like someone with ADHD — you're so articulate and you have a graduate degree." The client wonders if they were wrong to think ADHD might be relevant to them.`,
    question: "What is the most affirming, accurate clinical response?",
    options: [
      "\"Your previous therapist may have had a point — high-functioning adults often develop compensatory strategies. Let's see how things go before assuming ADHD is a factor.\"",
      "\"ADHD looks very different across individuals. Being articulate or educated doesn't rule it out — in fact, high-achieving people with ADHD often compensate for years before burnout or crisis. Your experience is worth taking seriously.\"",
      "\"Without a formal evaluation, we can't really know if ADHD is relevant, so let's focus on the symptoms themselves.\"",
      "\"It sounds like the other therapist had a valid perspective. Tell me more about your struggles and we'll see if ADHD really fits.\""
    ],
    correct: 1,
    explanation: "Option B directly counters a harmful clinical myth: that intelligence, education, or articulateness rules out ADHD. Many high-achieving people with ADHD compensate successfully for years, often at great personal cost, before their strategies collapse. Validating the client's experience and naming the myth is both accurate and affirming. Options A, C, and D all implicitly or explicitly cast doubt on the client's lived experience, reinforcing the damage done by the previous therapist."
  }
];

// ---- INTERVENTIONS DATA ----
const INTERVENTIONS = [
  {
    name: "Acceptance and Commitment Therapy (ACT)",
    tags: ["emotional-dysregulation", "masking-burnout", "perfectionism", "social-anxiety", "rejection-sensitive-dysphoria"],
    why: "ACT is especially effective for neurodivergent clients because it doesn't ask the brain to 'think differently' but instead works on relating differently to thoughts and feelings. It's well-suited to the shame and self-criticism common in ADHD and autism.",
    how: `Blend quick read-aloud scripts with core ACT processes tailored for ND clients:
<ul>
  <li><strong>Defusion for shame:</strong> “I’m noticing the thought ‘I’m broken.’ Can we hold it as a thought, not a fact?”</li>
  <li><strong>Values beyond masking:</strong> “If we set aside the ‘shoulds’ from masking, what actually matters to you this week?”</li>
  <li><strong>Committed action:</strong> Keep steps tiny and EF-friendly (5–10 minutes, chunked, cued, reminded).</li>
  <li><strong>Acceptance:</strong> “Your brain does this; we don’t have to fight it to still choose what matters.”</li>
  <li><strong>Mindfulness/interoception:</strong> Use concrete sensory anchors (5–4–3–2–1 senses) over abstract scans.</li>
</ul>
Emphasize values-driven choices that replace masking-driven “shoulds,” defusion for shame narratives, and sensory-aware mindfulness.`,
  },
  {
    name: "Psychoeducation",
    tags: ["executive-function", "emotional-dysregulation", "time-blindness", "rejection-sensitive-dysphoria", "sensory-overwhelm", "perfectionism"],
    why: "For many neurodivergent clients, simply having accurate information about how their brain works is transformative. Years of being called lazy, disorganized, or 'too sensitive' create deep shame. Understanding the neuroscience can directly counter internalized blame.",
    how: `Explain ADHD's impact on executive function, time perception, and emotional regulation in plain language; explain autism's sensory processing differences and masking. Use analogies and on-the-spot scripts:
<ul>
  <li><strong>ADHD + EF:</strong> “Planning/initiating/switching are executive functions; ADHD is an EF difference, not laziness.”</li>
  <li><strong>Time blindness:</strong> “Your brain experiences time as now/not-now. Timers/visual clocks are aids, not crutches.”</li>
  <li><strong>Emotional regulation:</strong> “Big/fast emotions are part of how your nervous system runs, not character flaws.”</li>
  <li><strong>Autism + sensory:</strong> “Sensory input can register as pain; stimming is regulation.”</li>
  <li><strong>Masking:</strong> “You’ve been performing neurotypical; it’s exhausting — nothing is wrong with you for feeling wiped out.”</li>
</ul>
Close with 1–2 resources (books, communities) and normalize revisiting psychoeducation often — weave it throughout treatment.`,
  },
  {
    name: "Scaffolding & Environmental Accommodations",
    tags: ["executive-function", "time-blindness", "sensory-overwhelm"],
    why: "When executive function is impaired, adding external structure compensates for what the internal system can't reliably provide. This is not a crutch — it's how the ADHD brain works best.",
    how: `Co-design one structure at a time; keep it doable and shame-free:
      <ul>
        <li><strong>Body doubling:</strong> "Want to stay on video while you send those two emails? I'll be silent background." Encourage co-working rooms or focus calls.</li>
        <li><strong>External working memory:</strong> Write steps visibly: "Open laptop → open bills site → pay water bill." Use sticky notes/whiteboards, not memory.</li>
        <li><strong>Time blindness bridges:</strong> Alarms with next-step text: "Start laundry (press start)." Pair with transition rituals (song, sensory cue).</li>
        <li><strong>Sensory mapping:</strong> "Let's list your high-drain environments and one tweak each (earplugs, softer lighting, sunglasses, breaks)."</li>
        <li><strong>Normalize:</strong> "These tools are assistive tech for your brain, like glasses — not proof you’re failing."</li>
      </ul>
      Test structures in-session when possible to reduce EF barrier at home.`,
  },
  {
    name: "Strengths Mapping",
    tags: ["masking-burnout", "perfectionism", "social-anxiety", "rejection-sensitive-dysphoria"],
    why: "Neurodivergent clients often arrive with years of deficit-focused feedback from schools, workplaces, and previous treatment. Explicitly identifying and naming strengths shifts the clinical frame and builds a more accurate, resilient self-concept.",
    how: `Make it concrete and name strengths out loud:
      <ul>
        <li><strong>Spot the spark:</strong> "Where do you lose track of time in a good way?" Capture hyperfocus, pattern spotting, loyalty, creative problem-solving.</li>
        <li><strong>Reframe 'too much' feedback:</strong> "That 'too intense' comment is also persistence and passion — where is that valued?"</li>
        <li><strong>Strengths inventory with environment fit:</strong> Map traits to contexts: deep focus → research roles; directness → teams that value clarity; sensory attunement → design/QA.</li>
        <li><strong>Script to mirror back:</strong> "I notice how your attention to detail shows up when you describe X — that's a strength, not a flaw."</li>
        <li><strong>Link to self-advocacy:</strong> Turn strengths into ask: "Because I focus deeply, I need uninterrupted blocks."</li>
      </ul>
      Keep the pace gentle for clients with RSD; celebrate small, real examples instead of generic compliments.`,
  },
  {
    name: "Somatic Approaches",
    tags: ["sensory-overwhelm", "emotional-dysregulation", "masking-burnout"],
    why: "Many neurodivergent people have a complex relationship with their bodies — both due to interoception differences (difficulty sensing internal body states) and the accumulated physical cost of masking. Somatic work can rebuild the client's relationship with their own physical experience.",
    how: `Titrate, offer choice, and respect sensory profiles:
      <ul>
        <li><strong>Consent micro-checks:</strong> "Would it feel okay to try a 10-second breath with eyes open, or would you prefer to keep talking?"</li>
        <li><strong>Interoception ladder:</strong> Start with outer sensations (chair pressure, temperature) before inner sensations; avoid long body scans if overwhelming.</li>
        <li><strong>Regulation menu:</strong> rocking, weighted item, hand on heart, temperature shifts (cold pack), paced breathing with a visual. Normalize stimming as regulation.</li>
        <li><strong>Exit ramps:</strong> "If this gets uncomfortable, we stop immediately — you steer." Build agency to counter past coercive experiences (e.g., ABA/medical trauma).</li>
      </ul>
      Keep language concrete; invite movement instead of stillness if that feels safer.`,
  },
  {
    name: "Reducing Shame / Narrative Work",
    tags: ["masking-burnout", "perfectionism", "rejection-sensitive-dysphoria", "social-anxiety", "executive-function"],
    why: "Shame is often the central wound in neurodivergent presentations. Years of being different, being corrected, failing systems, and misunderstanding yourself accumulates into a profound sense of deficiency. Directly addressing shame is often the most important work.",
    how: `Make shame explicit, then externalize and re-author:
      <ul>
        <li><strong>Name and locate:</strong> "I hear a strong shame voice saying you're 'lazy.' That voice was built by years of others misunderstanding your brain."</li>
        <li><strong>Externalize:</strong> Write the shame script on paper, label it "old training." Invite the client to respond: "What would you like to say back?"</li>
        <li><strong>Timeline reframe:</strong> Map life events with ND lens: "Here’s where masking started, here’s when burnout hit." Validate survival value of past strategies.</li>
        <li><strong>Self-compassion micro-script:</strong> "My brain is wired differently; I get to support it, not punish it." Practice aloud; keep it brief for EF.</li>
        <li><strong>RSD-friendly repair:</strong> When shame spikes after feedback, script a pause: "This hurts, and it's an old wound being poked. I'm still worthy and in-progress."</li>
      </ul>
      Keep tone steady, not cheerleading; repeat often.`,
  },
  {
    name: "Working with Special Interests",
    tags: ["social-anxiety", "masking-burnout", "emotional-dysregulation"],
    why: "For autistic clients especially, special interests are a source of genuine joy, mastery, and often social connection. Rather than treating them as a symptom to manage, affirming therapy uses them as therapeutic resources.",
    how: `Lean in; use interests as doorway and regulation tool:
      <ul>
        <li><strong>Open the door:</strong> "What topic lights you up right now?" Engage sincerely for a few minutes; it's trust-building.</li>
        <li><strong>Bridge to therapy:</strong> "How does your love of trains show up in your week? Does it refill your energy or connect you to people?" Connect to values/needs.</li>
        <li><strong>Regulation kit:</strong> Invite interest-based micro-breaks during distress (watch a short clip, hold an interest-related object).</li>
        <li><strong>Social connection:</strong> Explore safe communities around the interest; emphasize consent and pacing to avoid overwhelm.</li>
        <li><strong>Reframe:</strong> "This isn't 'obsessing' — it's expertise and joy. How can we protect time for it?"</li>
      </ul>
      Avoid shaming or time-capping reflexively; use interests collaboratively.`,
  },
  {
    name: "Emotional Regulation Skills",
    tags: ["emotional-dysregulation", "rejection-sensitive-dysphoria", "time-blindness"],
    why: "Emotional dysregulation is a core feature of both ADHD and often autism — particularly the experience of intense, fast-moving emotions that can feel overwhelming. Skills for slowing down and navigating this are genuinely helpful, as long as they're taught without shame.",
    how: `Teach skills with ND-specific tweaks and scripts:
      <ul>
        <li><strong>Fast emotions normalizer:</strong> "Your brain's alarm goes 0→100 quickly. Skills are tools, not evidence you 'shouldn't feel.'"</li>
        <li><strong>DBT TIPP, sensory-safe:</strong> Offer temperature shift with consent (cold pack on neck), paced breathing with a visual, isometric squeeze. Avoid breath-holding if panic-prone.</li>
        <li><strong>RSD pause plan:</strong> "When you feel that rejection sting, text yourself: 'This is RSD; it will crest and fall.' Then do one grounding action (cold water, step outside, short movement)."</li>
        <li><strong>Pre-planned scripts:</strong> Create a 2–3 line card: "I can pause. I can ask for clarity. I can take a 5-minute reset." Keep it visible for working-memory support.</li>
        <li><strong>Post-episode debrief:</strong> Map triggers and body signals without blame; adjust sensory/structure ahead of high-demand events.</li>
      </ul>
      Practice in-session; repetition builds automaticity despite EF hurdles.`,
  },
  {
    name: "Trauma-Informed Care",
    tags: ["masking-burnout", "social-anxiety", "emotional-dysregulation", "sensory-overwhelm"],
    why: "Neurodivergent people have disproportionately high rates of trauma — from bullying, medical trauma, coercive 'therapies' (especially ABA for autistic people), and the chronic stress of navigating hostile environments. Assuming a trauma history and proceeding accordingly is sound practice.",
    how: `Assume trauma is likely; prioritize safety, choice, and pacing:
      <ul>
        <li><strong>Direct, gentle inquiry:</strong> "Have you had therapies that felt coercive or unsafe (including ABA, school plans, medical settings)?" Validate without pathologizing.</li>
        <li><strong>Sensory safety plan:</strong> Agree on lighting, seating, fidgets, and exit cues. "If you tap the table twice, we'll pause or step outside."</li>
        <li><strong>Modify exposure/prolonged work:</strong> Shorten durations, add predictable scripts, allow stimming/movement, and reconfirm consent often.</li>
        <li><strong>Double empathy lens:</strong> Frame relational ruptures as mutual misattunement, not a client deficit; repair explicitly.</li>
        <li><strong>Empowerment micro-choices:</strong> Offer two options often (talk vs. draw; sit vs. walk) to rebuild agency eroded by past control-heavy environments.</li>
      </ul>
      Name that responses called "behavior" are often protective adaptations.`,
  },
  {
    name: "Collaborative Goal-Setting",
    tags: ["perfectionism", "executive-function", "masking-burnout"],
    why: "Neurodivergent clients often have a history of goals being set for them — by schools, clinicians, and families — that didn't fit their actual needs or values. Reclaiming goal-setting as a collaborative, low-shame process is itself therapeutic.",
    how: `Goals should be client-led, tiny, and adjustable without shame:
      <ul>
        <li><strong>Co-create micro-goals:</strong> "What's a 10% version of this that would still feel meaningful?" (e.g., send one email, not inbox zero.)</li>
        <li><strong>RSD-aware check-ins:</strong> Frame updates as data, not judgment: "Let's see what the experiment taught us."</li>
        <li><strong>Visual trackers:</strong> Use simple checkboxes/whiteboard visible during session for working-memory support.</li>
        <li><strong>Plan for variance:</strong> "On low-energy days, what's the 'minimum viable' action? On high-energy days, what's the stretch?"</li>
        <li><strong>Celebrate effort:</strong> Name process wins: "You noticed the overwhelm early and paused — that's progress."</li>
      </ul>
      Explicitly invite changing or dropping goals to counter perfectionism and masking.`,
  },
  {
    name: "Social Communication Support",
    tags: ["social-anxiety", "masking-burnout"],
    why: "Autistic clients may struggle with unwritten social rules, reading non-verbal cues, or navigating social situations in a world designed by and for neurotypical people. Affirming support acknowledges the real challenges while naming that the issue is not deficiency but difference.",
    how: `Support authentic communication, not performance:
      <ul>
        <li><strong>Self-mapping:</strong> "When conversation feels good, what's happening (pace, topic depth, sensory environment)?" Use this to choose contexts that fit.</li>
        <li><strong>Direct preference scripts:</strong> Practice aloud: "I track better with direct feedback." / "Can you text me details after meetings?"</li>
        <li><strong>Double empathy framing:</strong> "Both sides misunderstand; it's not a you-only problem." Role-play brief repairs that honor both perspectives.</li>
        <li><strong>Consent to pause/leave:</strong> Normalize exits: "If you need a sensory break, it's okay to step out and rejoin."</li>
        <li><strong>Community fit:</strong> Explore ND-friendly spaces (structured meetups, interest groups) rather than forcing high-noise, unstructured settings.</li>
      </ul>
      Skip conformity-focused drills; prioritize agency and bidirectional understanding.`,
  },
  {
    name: "Lifestyle Structure & Energy Management",
    tags: ["time-blindness", "executive-function", "masking-burnout", "sensory-overwhelm"],
    why: "Managing energy — especially for autistic clients dealing with sensory load and masking — and time for ADHD clients is a central life challenge. Helping clients design sustainable rhythms is genuinely therapeutic.",
    how: `Design routines that respect energy, sensory load, and time blindness:
      <ul>
        <li><strong>Energy map:</strong> "Let's chart a typical day: where does energy crash after masking/sensory load?" Add recovery blocks intentionally.</li>
        <li><strong>Transition rituals:</strong> Pair alarms with a 1–2 minute bridge (song, stretching, stepping outside) to move from hyperfocus to next task.</li>
        <li><strong>Time anchoring:</strong> Use routine anchors (meal, commute) plus visual timers; avoid relying on internal sense of time.</li>
        <li><strong>Sensory budget:</strong> For high-demand days, pre-plan regulation (earplugs, sunglasses, quiet car time) and post-event decompression.</li>
        <li><strong>Protect joy:</strong> Schedule interest time as replenishment, not just a reward — guards against burnout.</li>
      </ul>
      Frame structure as energy management, not morality; adjust weekly based on data, not judgment.
  }
];

// ---- DESCRIPTOR TAGS ----
const DESCRIPTOR_TAGS = [
  { id: "executive-function", label: "Executive function struggles" },
  { id: "sensory-overwhelm", label: "Sensory overwhelm" },
  { id: "emotional-dysregulation", label: "Emotional dysregulation" },
  { id: "masking-burnout", label: "Masking / burnout" },
  { id: "social-anxiety", label: "Social anxiety" },
  { id: "rejection-sensitive-dysphoria", label: "Rejection sensitive dysphoria" },
  { id: "perfectionism", label: "Perfectionism / shame" },
  { id: "time-blindness", label: "Time blindness" }
];

// ---- APP STATE ----
const state = {
  currentPage: 'home',
  currentDrill: 0,
  drillAnswered: false,
  drillScores: JSON.parse(localStorage.getItem('nd_drill_scores') || '{}'),
  lessonFilter: 'all',
  selectedTags: new Set()
};

// ---- NAVIGATION ----
function navigate(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile nav
  document.getElementById('site-nav').classList.remove('open');

  if (page === 'drills') renderDrill();
  if (page === 'lessons') renderLessons();
}

// ---- HOME ----
function renderHome() {
  // Feature cards are static HTML; just wire up buttons
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.goto));
  });
}

// ---- LESSONS ----
function renderLessons() {
  const filter = state.lessonFilter;
  const filtered = filter === 'all' ? LESSONS : LESSONS.filter(l => l.tag === filter);
  const container = document.getElementById('lesson-list');
  container.innerHTML = '';
  filtered.forEach(lesson => {
    const item = document.createElement('div');
    item.className = 'lesson-item';
    item.dataset.id = lesson.id;
    item.innerHTML = `
      <div class="lesson-header" role="button" tabindex="0" aria-expanded="false">
        <div class="lesson-header-left">
          <span class="lesson-tag tag-${lesson.tag}">${lesson.tagLabel}</span>
          <span class="lesson-title">${lesson.title}</span>
        </div>
        <span class="lesson-chevron">▾</span>
      </div>
      <div class="lesson-body">
        ${lesson.body.map(p => `<p>${p}</p>`).join('')}
        <div class="key-points">
          <h4>Key Points</h4>
          <ul>${lesson.keyPoints.map(kp => `<li>${kp}</li>`).join('')}</ul>
        </div>
      </div>`;
    const header = item.querySelector('.lesson-header');
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.lesson-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.lesson-header').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
    });
    container.appendChild(item);
  });
}

function initLessonsFilters() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.lessonFilter = tab.dataset.filter;
      renderLessons();
    });
  });
}

// ---- DRILLS ----
function getTotalAnswered() {
  return Object.keys(state.drillScores).length;
}
function getTotalCorrect() {
  return Object.values(state.drillScores).filter(Boolean).length;
}

function renderDrill() {
  const idx = state.currentDrill;
  const answered = state.drillAnswered;

  // Update progress
  const total = DRILLS.length;
  const done = getTotalAnswered();
  document.getElementById('drill-progress-fill').style.width = `${(done / total) * 100}%`;
  document.getElementById('drill-progress-label').textContent = `${done} of ${total} completed`;
  document.getElementById('drill-score-badge').textContent = `✓ ${getTotalCorrect()} correct`;

  if (idx >= DRILLS.length) {
    showDrillComplete();
    return;
  }

  const drill = DRILLS[idx];

  document.getElementById('drill-scenario').textContent = drill.scenario;
  document.getElementById('drill-question').textContent = drill.question;
  document.getElementById('drill-counter').textContent = `Scenario ${idx + 1} of ${total}`;

  const optContainer = document.getElementById('drill-options');
  optContainer.innerHTML = '';
  drill.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'drill-option';
    btn.textContent = opt;
    btn.disabled = state.drillAnswered;
    if (state.drillAnswered) {
      if (i === drill.correct) btn.classList.add('show-correct');
      const prev = state.drillScores[drill.id];
      if (prev !== undefined) {
        // already answered — re-show
      }
    }
    btn.addEventListener('click', () => handleDrillAnswer(i));
    optContainer.appendChild(btn);
  });

  // Feedback
  const fb = document.getElementById('drill-feedback');
  fb.className = 'drill-feedback';
  fb.innerHTML = '';

  // If already answered this drill (from localStorage), show feedback
  if (state.drillAnswered) {
    const correct = state.drillScores[drill.id];
    showFeedback(drill, correct !== undefined ? correct : true);
  }

  const nextBtn = document.getElementById('drill-next-btn');
  nextBtn.disabled = !state.drillAnswered;
  nextBtn.textContent = idx < DRILLS.length - 1 ? 'Next Scenario →' : 'See Results →';
}

function handleDrillAnswer(selectedIdx) {
  if (state.drillAnswered) return;
  const drill = DRILLS[state.currentDrill];
  const isCorrect = selectedIdx === drill.correct;
  state.drillAnswered = true;
  state.drillScores[drill.id] = isCorrect;
  localStorage.setItem('nd_drill_scores', JSON.stringify(state.drillScores));

  // Style options
  const opts = document.querySelectorAll('.drill-option');
  opts.forEach((opt, i) => {
    opt.disabled = true;
    if (i === drill.correct) opt.classList.add('show-correct');
    if (i === selectedIdx && !isCorrect) opt.classList.add('selected-incorrect');
    if (i === selectedIdx && isCorrect) opt.classList.add('selected-correct');
  });

  showFeedback(drill, isCorrect);
  document.getElementById('drill-next-btn').disabled = false;

  // Update progress
  document.getElementById('drill-progress-fill').style.width = `${(getTotalAnswered() / DRILLS.length) * 100}%`;
  document.getElementById('drill-progress-label').textContent = `${getTotalAnswered()} of ${DRILLS.length} completed`;
  document.getElementById('drill-score-badge').textContent = `✓ ${getTotalCorrect()} correct`;
}

function showFeedback(drill, isCorrect) {
  const fb = document.getElementById('drill-feedback');
  fb.className = `drill-feedback visible ${isCorrect ? 'correct' : 'incorrect'}`;
  fb.innerHTML = `
    <div class="feedback-title">${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</div>
    <p>${drill.explanation}</p>`;
  fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showDrillComplete() {
  const card = document.getElementById('drill-card');
  const total = DRILLS.length;
  const correct = getTotalCorrect();
  const pct = Math.round((correct / total) * 100);
  let msg = '';
  if (pct === 100) msg = "Perfect score — you're already thinking with a deeply affirming lens.";
  else if (pct >= 80) msg = "Strong work. Your clinical lens is affirming and accurate.";
  else if (pct >= 60) msg = "Good progress. Review the lessons for any areas that felt uncertain.";
  else msg = "Every answer is a learning moment. Review the lessons and try again.";

  card.innerHTML = `
    <div class="drill-complete">
      <div class="score-ring"><span class="score-number">${correct}/${total}</span></div>
      <h3>Session Complete!</h3>
      <p>${msg}</p>
      <p style="color:var(--text-muted); font-size:0.88rem;">${pct}% accuracy</p>
      <button class="btn btn-primary" onclick="resetDrills()">Try Again</button>
    </div>`;
}

function resetDrills() {
  state.currentDrill = 0;
  state.drillAnswered = false;
  state.drillScores = {};
  localStorage.removeItem('nd_drill_scores');
  document.getElementById('drill-card').innerHTML = getDrillCardHTML();
  renderDrill();
  initDrillButtons();
}

function getDrillCardHTML() {
  return `
    <div class="drill-scenario-label">Client Scenario</div>
    <div class="drill-scenario" id="drill-scenario"></div>
    <div class="drill-question" id="drill-question"></div>
    <div class="drill-options" id="drill-options"></div>
    <div class="drill-feedback" id="drill-feedback"></div>
    <div class="drill-nav">
      <span class="drill-counter" id="drill-counter"></span>
      <button class="btn btn-primary" id="drill-next-btn" disabled>Next Scenario →</button>
    </div>`;
}

function initDrillButtons() {
  document.getElementById('drill-next-btn').addEventListener('click', () => {
    state.currentDrill++;
    state.drillAnswered = false;
    renderDrill();
    document.getElementById('drill-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ---- INTERVENTION FINDER ----
function renderTagsGrid() {
  const container = document.getElementById('tags-grid');
  container.innerHTML = '';
  DESCRIPTOR_TAGS.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag-btn' + (state.selectedTags.has(tag.id) ? ' selected' : '');
    btn.dataset.id = tag.id;
    btn.innerHTML = `<span class="tag-check">✓</span> ${tag.label}`;
    btn.addEventListener('click', () => {
      if (state.selectedTags.has(tag.id)) {
        state.selectedTags.delete(tag.id);
        btn.classList.remove('selected');
      } else {
        state.selectedTags.add(tag.id);
        btn.classList.add('selected');
      }
    });
    container.appendChild(btn);
  });
}

function findInterventions() {
  const selected = Array.from(state.selectedTags);
  const container = document.getElementById('interventions-results');
  if (selected.length === 0) {
    container.innerHTML = `<div class="interventions-empty"><span class="empty-icon">🔎</span><p>Select one or more descriptors above, then click <strong>Find Interventions</strong>.</p></div>`;
    return;
  }

  const results = INTERVENTIONS.filter(inv =>
    inv.tags.some(t => selected.includes(t))
  ).sort((a, b) => {
    // Sort by match count descending
    const scoreA = a.tags.filter(t => selected.includes(t)).length;
    const scoreB = b.tags.filter(t => selected.includes(t)).length;
    return scoreB - scoreA;
  });

  if (results.length === 0) {
    container.innerHTML = `<div class="interventions-empty"><span class="empty-icon">💭</span><p>No interventions matched your selection. Try different descriptors.</p></div>`;
    return;
  }

  container.innerHTML = '';
  results.forEach(inv => {
    const matchedTags = inv.tags.filter(t => selected.includes(t));
    const matchLabels = matchedTags.map(t => {
      const tagObj = DESCRIPTOR_TAGS.find(d => d.id === t);
      return tagObj ? tagObj.label : t;
    });

    const card = document.createElement('div');
    card.className = 'intervention-card';
    card.innerHTML = `
      <div class="intervention-top">
        <div class="intervention-name">${inv.name}</div>
        <div class="intervention-tags">${matchLabels.map(l => `<span class="int-tag">${l}</span>`).join('')}</div>
      </div>
      <div class="intervention-why">${inv.why}</div>
      <div class="intervention-how">
        <div class="intervention-how-label">How to apply</div>
        ${inv.how}
      </div>`;
    container.appendChild(card);
  });
}

function clearTags() {
  state.selectedTags.clear();
  document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('interventions-results').innerHTML = `<div class="interventions-empty"><span class="empty-icon">🔎</span><p>Select one or more descriptors above, then click <strong>Find Interventions</strong>.</p></div>`;
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });

  // Mobile nav toggle
  document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('site-nav').classList.toggle('open');
  });

  // Home feature cards
  renderHome();

  // Lessons
  initLessonsFilters();
  renderLessons();

  // Drills — init card HTML and buttons
  initDrillButtons();

  // Intervention finder
  renderTagsGrid();
  document.getElementById('find-btn').addEventListener('click', findInterventions);
  document.getElementById('clear-btn').addEventListener('click', clearTags);

  // Start on home
  navigate('home');
});
