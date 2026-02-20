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
  },
  {
    id: 11,
    tag: "both",
    tagLabel: "Autism & ADHD",
    title: "Rejection Sensitive Dysphoria (RSD)",
    body: [
      `Rejection Sensitive Dysphoria describes the intense emotional and sometimes physical pain that can follow perceived or actual rejection. It's strongly associated with ADHD and can also appear in autistic clients. The experience isn't just "big feelings" — it can feel like a wound or shock to the system that crashes functioning.`,
      `In therapy, RSD can look like sudden devastation or shame after small feedback, a client going silent or withdrawing, or quick anger/defensiveness to protect against hurt. Triggers often include canceled plans, constructive feedback, delayed replies, or even neutral facial expressions misread as disapproval. An affirming stance names it, normalizes the neurology, and plans for soothing and recovery rather than minimizing the pain.`
    ],
    keyPoints: [
      "RSD = intense pain to perceived/actual rejection; common in ADHD, present for some autistic clients",
      "Shows up as devastation, shame, shutdown/withdrawal, or quick anger to protect against hurt",
      "Common triggers: cancellations, feedback, delayed replies, ambiguous silence/expressions",
      "Clinical stance: name and normalize; separate shame story from self; co-create recovery/soothing steps",
      "Avoid minimizing (it's not a big deal); focus on safety, regulation, and repair"
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
    how: `<ul>
        <li><strong>When to use:</strong> Shame spikes, masking burnout, rigid perfectionism, RSD flare, "should" versus values conflict.</li>
        <li><strong>Step-by-step:</strong> (1) Values check-in (1–2 options only). (2) Defusion of the shame story with a concrete image (leaf, train car). (3) Acceptance move: allow the sensation/urge for 10–30 seconds while regulating. (4) Choose one 5-minute committed action with external supports (timer, body double). (5) Review as data, not judgment, at next session.</li>
        <li><strong>ND-specific adaptations:</strong> Eyes open; offer movement/stimming during exercises; swap metaphors that fit the client’s sensory world; keep actions tiny to respect executive function limits; call out RSD explicitly when present ("your brain’s rejection alarm is loud").</li>
        <li><strong>Common pitfalls:</strong> Long meditations that overload sensory systems; setting actions too big; using values to push neurotypical performance; skipping regulation before values work when overloaded.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "Notice the story that you’re broken. Let’s place it on a leaf and watch it pass while you rock or fidget if that helps."<br>
          "If authenticity is a value, what's a 5% more authentic choice today that your brain could actually do?"<br>
          "Your RSD alarm is blaring — can we name it, breathe with eyes open, and pick one next step once it softens?"
        </li>
      </ul>`,

  },
  {
    name: "Psychoeducation",
    tags: ["executive-function", "emotional-dysregulation", "time-blindness", "rejection-sensitive-dysphoria", "sensory-overwhelm", "perfectionism"],
    why: "For many neurodivergent clients, simply having accurate information about how their brain works is transformative. Years of being called lazy, disorganized, or 'too sensitive' create deep shame. Understanding the neuroscience can directly counter internalized blame.",
    how: `<ul>
        <li><strong>When to use:</strong> Early sessions, shame spikes, family/partner consults, after RSD events to normalize the neurology.</li>
        <li><strong>Step-by-step:</strong> (1) Name the frame: "Different brain, not broken." (2) Teach one micro-concept (time blindness, sensory load, RSD) in 1–2 sentences. (3) Link it to the client’s lived example. (4) Offer a take-home line the client can reuse. (5) Repeat next week in a new format (written card, visual).</li>
        <li><strong>ND-specific adaptations:</strong> Use visuals/whiteboard; give written follow-up for working memory; keep chunks short; emphasize that supports are assistive tech, not evidence of failure; explicitly define RSD when you mention it.</li>
        <li><strong>Common pitfalls:</strong> Info-dumping; implying psychoeducation will "fix" the client; using pathologizing language; skipping consent with family members.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "ADHD does 'now' and 'not now' — timers are a ramp for time, not proof you’re lazy."<br>
          "That sting you feel is called RSD — a known ADHD pattern where rejection hits like pain. Nothing is wrong with you."<br>
          "Masking means performing neurotypical to stay safe. It protects, but it costs energy. We can plan for that cost."
        </li>
      </ul>`,

  },
  {
    name: "Scaffolding & Environmental Accommodations",
    tags: ["executive-function", "time-blindness", "sensory-overwhelm"],
    why: "When executive function is impaired, adding external structure compensates for what the internal system can't reliably provide. This is not a crutch — it's how the ADHD brain works best.",
    how: `<ul>
        <li><strong>When to use:</strong> Tasks stall from EF/time blindness, forgetfulness between sessions, overwhelm in specific environments.</li>
        <li><strong>Step-by-step:</strong> (1) Pick one friction point. (2) Break into 3–5 visible steps and post them. (3) Add external cues (alarms with next action text, visual timers). (4) Test one step in-session or via brief body doubling. (5) Adjust weekly with data, not judgment.</li>
        <li><strong>ND-specific adaptations:</strong> Sensory map before choosing tools; pair alarms with a sensory transition (song, cold water); use body doubling or virtual co-working; frame experiments as RSD-safe ("data, not grade").</li>
        <li><strong>Common pitfalls:</strong> Adding too many tools at once; removing supports when things improve; shaming language like "shouldn't need this."</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "Let's write the steps where you can see them: open laptop → open bills site → pay water bill."<br>
          "We’ll try one alarm that literally says the next move — 'start laundry, press start' — and pair it with a song you like."<br>
          "These are ramps for your brain, not evidence of failure. We'll keep what works and ditch what doesn't."
        </li>
      </ul>`,
  },
  {
    name: "Strengths Mapping",
    tags: ["masking-burnout", "perfectionism", "social-anxiety", "rejection-sensitive-dysphoria"],
    why: "Neurodivergent clients often arrive with years of deficit-focused feedback from schools, workplaces, and previous treatment. Explicitly identifying and naming strengths shifts the clinical frame and builds a more accurate, resilient self-concept.",
    how: `<ul>
        <li><strong>When to use:</strong> After deficit-heavy histories, masking burnout, career/relationship decisions, post-RSD hurt from feedback.</li>
        <li><strong>Step-by-step:</strong> (1) Identify sparks (hyperfocus, patterning, honesty, empathy). (2) Pair each with contexts where it shines. (3) Reframe "too much" feedback into strength-plus-fit conversation. (4) Turn strengths into advocacy statements. (5) Capture 3 evidence examples the client can reread.</li>
        <li><strong>ND-specific adaptations:</strong> Go slow to avoid RSD backlash; allow stimming/objects during positive focus; use visuals/whiteboard; include special interests as strengths, not rewards.</li>
        <li><strong>Common pitfalls:</strong> Generic compliments; forced silver linings on real harm; ignoring fatigue/burnout while naming strengths.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "When you dive into that topic for hours, that’s deep focus — let's list where that’s valued."<br>
          "They called you 'too intense'; I see persistence and passion. Where could that be welcomed?"<br>
          "Because you notice tiny inconsistencies, a reasonable ask is: 'Please send details in writing so I can track them.'"
        </li>
      </ul>`,
  },
  {
    name: "Somatic Approaches",
    tags: ["sensory-overwhelm", "emotional-dysregulation", "masking-burnout"],
    why: "Many neurodivergent people have a complex relationship with their bodies — both due to interoception differences (difficulty sensing internal body states) and the accumulated physical cost of masking. Somatic work can rebuild the client's relationship with their own physical experience.",
    how: `<ul>
        <li><strong>When to use:</strong> Dissociation, shutdown/overwhelm, masking fatigue, RSD crash, difficulty naming sensations.</li>
        <li><strong>Step-by-step:</strong> (1) Safety/consent check with options. (2) Start with outer sensations (chair, temperature, feet) before inner. (3) Offer 2–3 regulation tools (rocking, weighted item, paced breathing with visual). (4) Dose for 30–60 seconds, then check impact. (5) Close with client choice (stop/continue/shift topics).</li>
        <li><strong>ND-specific adaptations:</strong> Eyes open; allow movement/stimming instead of stillness; avoid long body scans; tailor to sensory profile (sound vs. touch vs. temperature); validate medical/ABA trauma history.</li>
        <li><strong>Common pitfalls:</strong> Forcing stillness or eye closure; using touch without explicit consent; assuming flat affect means dysregulation; going too long.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "Want to try a 30-second feet-on-floor check with eyes open, or would you rather keep talking?"<br>
          "You can rock or fidget while we breathe — movement is welcome."<br>
          "If this feels off at any moment, say 'pause' and we stop. You steer." 
        </li>
      </ul>`,
  },
  {
    name: "Reducing Shame / Narrative Work",
    tags: ["masking-burnout", "perfectionism", "rejection-sensitive-dysphoria", "social-anxiety", "executive-function"],
    why: "Shame is often the central wound in neurodivergent presentations. Years of being different, being corrected, failing systems, and misunderstanding yourself accumulates into a profound sense of deficiency. Directly addressing shame is often the most important work.",
    how: `<ul>
        <li><strong>When to use:</strong> Self-blame scripts ("lazy," "too much"), post-RSD episodes, perfectionism/procrastination loops.</li>
        <li><strong>Step-by-step:</strong> (1) Name the shame voice explicitly. (2) Externalize it on paper/whiteboard as "old training." (3) Map origins on a brief timeline (masking start, burnout, key feedback). (4) Co-write one compassionate rebuttal line. (5) Rehearse it aloud and store visibly for low-EF days.</li>
        <li><strong>ND-specific adaptations:</strong> Use short phrases; visual aids; allow movement while talking; don't assume tears = distress; include masking fatigue and RSD language when relevant.</li>
        <li><strong>Common pitfalls:</strong> Debating the shame voice logically; toxic positivity; overwhelming with homework; ignoring the protective function of masking.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "I hear a shame voice trained by years of being misunderstood — it says 'lazy.' Let's write it down and label it 'old training.'"<br>
          "Your brain’s rejection alarm just fired; it makes sense this hurts. What do you want to say back to that old script?"<br>
          "New line to practice: 'My brain is wired differently; I get to support it, not punish it.'"
        </li>
      </ul>`,
  },
  {
    name: "Working with Special Interests",
    tags: ["social-anxiety", "masking-burnout", "emotional-dysregulation"],
    why: "For autistic clients especially, special interests are a source of genuine joy, mastery, and often social connection. Rather than treating them as a symptom to manage, affirming therapy uses them as therapeutic resources.",
    how: `<ul>
        <li><strong>When to use:</strong> Building rapport, regulation needs, motivation slumps, social connection goals, post-RSD withdrawal.</li>
        <li><strong>Step-by-step:</strong> (1) Invite a share (2–3 minutes). (2) Reflect genuine interest. (3) Bridge with a question about energy/connection. (4) Integrate as regulation (object, short clip, drawing) when distressed. (5) If desired, map safe communities or outlets.</li>
        <li><strong>ND-specific adaptations:</strong> Protect time for interest without framing as reward; avoid pathologizing depth; use interest objects in-session for grounding; check sensory/social capacity before suggesting groups.</li>
        <li><strong>Common pitfalls:</strong> Redirecting too quickly; treating the interest as avoidance; exposing clients to noisy/unsafe communities; using it only as a carrot.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "What’s lighting you up lately? Teach me for two minutes."<br>
          "How does that refill you or connect you? Let's plan intentional time for it."<br>
          "When RSD hits, holding something from this interest or a 2-minute video can be a reset — want to try that plan?"
        </li>
      </ul>`,
  },
  {
    name: "Emotional Regulation Skills",
    tags: ["emotional-dysregulation", "rejection-sensitive-dysphoria", "time-blindness"],
    why: "Emotional dysregulation is a core feature of both ADHD and often autism — particularly the experience of intense, fast-moving emotions that can feel overwhelming. Skills for slowing down and navigating this are genuinely helpful, as long as they're taught without shame.",
    how: `<ul>
        <li><strong>When to use:</strong> Fast emotions, meltdowns/shutdowns, RSD episodes, panic spikes, transition stress.</li>
        <li><strong>Step-by-step:</strong> (1) Name the pattern ("0→100 nervous system"). (2) Build a 3-step plan: pause cue → ground with one sense → choose micro-action. (3) Practice in-session with a real or imagined trigger. (4) Preload supports (written card, alarm text). (5) Debrief after incidents: what worked, what to tweak.</li>
        <li><strong>ND-specific adaptations:</strong> Use sensory-safe options (temperature, visual breathing guides, isometric squeezes); keep scripts short; allow movement; explicitly name RSD as a neurological alarm.</li>
        <li><strong>Common pitfalls:</strong> Minimizing the feeling; overloading with multi-step plans; expecting recall without visual cues; insisting on eyes-closed mindfulness.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "That sting is likely RSD — your brain’s rejection alarm. Nothing is wrong with you; let's give it care."<br>
          "Your plan card: Pause. Feet on floor and look around. Then choose: ask for clarity, step outside for 2 minutes, or text yourself 'this will crest and fall.'"<br>
          "Skills are supports, not proof you shouldn't feel. We’ll practice them here so they’re easier to grab later."
        </li>
      </ul>`,
  },
  {
    name: "Trauma-Informed Care",
    tags: ["masking-burnout", "social-anxiety", "emotional-dysregulation", "sensory-overwhelm"],
    why: "Neurodivergent people have disproportionately high rates of trauma — from bullying, medical trauma, coercive 'therapies' (especially ABA for autistic people), and the chronic stress of navigating hostile environments. Assuming a trauma history and proceeding accordingly is sound practice.",
    how: `<ul>
        <li><strong>When to use:</strong> History of coercive therapy/medical trauma, high startle/shutdown, strong masking in session, client reports feeling controlled.</li>
        <li><strong>Step-by-step:</strong> (1) Collaborative safety agreements (sensory, exits, check-in signals). (2) Gentle history-taking with consent about past harms (including ABA/school discipline). (3) Adapt exposures/processing: shorter doses, predictable scripts, movement allowed. (4) Build repair rituals for misattunement. (5) Revisit consent each session.</li>
        <li><strong>ND-specific adaptations:</strong> Sensory plan before content; allow written/asynchronous processing; emphasize double-empathy (mismatch is mutual); offer movement/fidgets; avoid surprises.</li>
        <li><strong>Common pitfalls:</strong> Forcing eye contact; equating compliance with safety; pushing pace; interpreting withdrawal as opposition instead of protection.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "If you tap twice or look toward the door, we'll pause — you don't have to explain."<br>
          "Have there been therapies or school plans that felt coercive? We can avoid repeating that."<br>
          "We’ll do this in short, predictable slices. Movement and stimming are welcome while we work."
        </li>
      </ul>`,
  },
  {
    name: "Collaborative Goal-Setting",
    tags: ["perfectionism", "executive-function", "masking-burnout"],
    why: "Neurodivergent clients often have a history of goals being set for them — by schools, clinicians, and families — that didn't fit their actual needs or values. Reclaiming goal-setting as a collaborative, low-shame process is itself therapeutic.",
    how: `<ul>
        <li><strong>When to use:</strong> History of imposed goals, perfectionism/paralysis, EF barriers, RSD triggered by feedback on progress.</li>
        <li><strong>Step-by-step:</strong> (1) Anchor to a value. (2) Co-create a micro-goal (10% version). (3) Define floor/ceiling (minimum viable vs. stretch). (4) Add supports (visual tracker, alarm, body double). (5) Review as data, invite edits or drops without shame.</li>
        <li><strong>ND-specific adaptations:</strong> Keep goals observable and small; show them visually; pre-negotiate that changes are expected; script RSD-safe check-ins ("data, not grade").</li>
        <li><strong>Common pitfalls:</strong> SMART goals without supports; framing as compliance; stacking multiple goals; treating changes as failure.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "What's the 10% version that still matters?"<br>
          "On low days, the floor is 'send one reply.' On high days, the stretch is 'clear three.' Both are wins."<br>
          "Next check-in is just data — if the plan didn't fit your brain, we’ll reshape it."
        </li>
      </ul>`,
  },
  {
    name: "Social Communication Support",
    tags: ["social-anxiety", "masking-burnout"],
    why: "Autistic clients may struggle with unwritten social rules, reading non-verbal cues, or navigating social situations in a world designed by and for neurotypical people. Affirming support acknowledges the real challenges while naming that the issue is not deficiency but difference.",
    how: `<ul>
        <li><strong>When to use:</strong> Confusion about social rules, masking fatigue, workplace strain, RSD from social feedback, desire for authentic connection.</li>
        <li><strong>Step-by-step:</strong> (1) Map "good conversations" for pace, depth, environment. (2) Script preferences/asks and practice aloud. (3) Role-play repairs with double-empathy framing. (4) Plan exits/breaks for sensory overload. (5) Identify ND-friendly or structured spaces that fit.</li>
        <li><strong>ND-specific adaptations:</strong> Normalize direct communication; allow asynchronous options (text/email) when live processing is hard; include sensory needs; call out that misunderstandings are mutual, not personal failure.</li>
        <li><strong>Common pitfalls:</strong> Teaching conformity/social masking as the goal; forcing eye contact; ignoring cultural context; framing feedback as moral.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "When conversation feels good for you, what’s true about pace, topic, and environment? Let's choose spaces that match that."<br>
          "Try this script: 'I track best with direct feedback and written follow-up — can you email the details?'"<br>
          "If you need to step out because the room is loud, that’s regulation, not rudeness."
        </li>
      </ul>`,
  },
  {
    name: "Lifestyle Structure & Energy Management",
    tags: ["time-blindness", "executive-function", "masking-burnout", "sensory-overwhelm"],
    why: "Managing energy — especially for autistic clients dealing with sensory load and masking — and time for ADHD clients is a central life challenge. Helping clients design sustainable rhythms is genuinely therapeutic.",
    how: `<ul>
        <li><strong>When to use:</strong> Chronic burnout, frequent crashes after masking, time blindness disrupts routines, sensory overload days.</li>
        <li><strong>Step-by-step:</strong> (1) Map a typical week with energy highs/lows and sensory drains. (2) Set 3–4 daily anchors (meals, commute) plus visual timers. (3) Pre-plan buffers and decompression after high-demand events. (4) Add transition rituals between tasks (song, stretch, step outside). (5) Review weekly; adjust without shame.</li>
        <li><strong>ND-specific adaptations:</strong> Treat rest as non-negotiable; use alarms with action text; schedule interest time as fuel; create sensory budgets (earplugs, sunglasses, quiet car time); name that plan changes are not failure (RSD safety).</li>
        <li><strong>Common pitfalls:</strong> Over-structuring and then abandoning; relying on willpower/time sense; removing joy time; judging plan changes.</li>
        <li><strong>Clinician read-alouds:</strong><br>
          "Let's mark the parts of your week that drain you and put recovery blocks right after."<br>
          "Alarms get an action verb: 'stand, stretch, water.' They’re reminders, not scolds."<br>
          "If Tuesday's plan blows up, that’s data — we adjust, not judge."
        </li>
      </ul>`,
  }
];


// ---- DESCRIPTOR TAGS ----
const DESCRIPTOR_TAGS = [
  { id: "executive-function", label: "Executive function struggles" },
  { id: "sensory-overwhelm", label: "Sensory overwhelm" },
  { id: "emotional-dysregulation", label: "Emotional dysregulation" },
  { id: "masking-burnout", label: "Masking / burnout" },
  { id: "social-anxiety", label: "Social anxiety" },
  { id: "rejection-sensitive-dysphoria", label: "Rejection sensitive dysphoria (RSD = intense pain to perceived/actual rejection)" },
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

    const rsdNote = inv.tags.includes('rejection-sensitive-dysphoria')
      ? `<div class="rsd-note">RSD = intense pain to perceived or actual rejection; common in ADHD and present for some autistic clients.</div>`
      : '';

    const card = document.createElement('div');
    card.className = 'intervention-card';
    card.innerHTML = `
      <div class="intervention-top">
        <div class="intervention-name">${inv.name}</div>
        <div class="intervention-tags">${matchLabels.map(l => `<span class="int-tag">${l}</span>`).join('')}</div>
      </div>
      <div class="intervention-why">${inv.why}</div>
      ${rsdNote}
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
