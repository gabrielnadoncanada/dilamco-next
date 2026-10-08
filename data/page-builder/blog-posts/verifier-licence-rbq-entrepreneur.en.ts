// Article: checking a contractor's RBQ licence (queries "check contractor RBQ
// licence", "RBQ licence contractor"). Sources consulted on 2026-10-08:
// - RBQ, "Check a contractor's licence" (registry, valid / not valid /
//   restricted statuses, contents of the record):
//   https://www.rbq.gouv.qc.ca/en/you-are/citizen/check-a-contractors-licence/
// - RBQ, "Displaying your licence" (number required on website, advertising,
//   quotes, contracts, invoices):
//   https://www.rbq.gouv.qc.ca/en/licence/fulfilling-your-obligations/displaying-your-licence/
// - RBQ, "Licence security" ($40,000 general contractor, $20,000 specialized;
//   no security for 1.1.1 / 1.1.2, covered by the guarantee plan):
//   https://www.rbq.gouv.qc.ca/en/frequently-asked-questions-faq/contractor/licence-security/
// - RBQ, "Make a claim" (licence valid at signing or during the work, contract
//   with name and number, defect noted within 12 months after the work ends):
//   https://www.rbq.gouv.qc.ca/en/you-are/citizen/problems-with-a-contractor/make-a-claim/
// - RBQ, draft regulations published for comment (2026-02-25): proposed
//   increase to $60,000 / $30,000, not in force on the publication date.
// - Dilamco's registry record (consulted 2026-09-18): 8306-0806-27, valid since
//   2004-09-07, GC 1.2 and 1.3, holder 9139-1250 Québec inc., 0 claims.

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "verifier-licence-rbq-entrepreneur",
  locale: "en",
  category: "entrepreneur",
  publishedAt: "2026-10-08",
  title: "How to check a contractor's RBQ licence before you sign",
  metaTitle: "How to check a contractor's RBQ licence",
  description:
    "Valid licence, right subclasses, security, claims: the 5 points to check in the RBQ registry before you sign with a contractor.",
  excerpt:
    "Five minutes in the RBQ registry tell you if the contractor may legally do your work, and what protects you if it goes wrong.",
  cover: {
    src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
    alt: "Staircase with a glass railing after an interior renovation",
  },
  body: [
    {
      type: "callout",
      title: "In short",
      items: [
        "Look up the company in the RBQ [licence holder registry](https://www.rbq.gouv.qc.ca/en/you-are/citizen/check-a-contractors-licence/).",
        "The status must be **valid** and the subclasses must cover your work.",
        "The name and number on the contract must match the record. If not, the licence security does not cover you.",
      ],
    },
    {
      type: "h2",
      text: "Why the RBQ licence matters to you",
    },
    {
      type: "p",
      text: "In Quebec, a contractor who performs construction work, or has it performed, must hold a licence from the Régie du bâtiment du Québec (RBQ). To get it, the company's designated officer passes qualification exams, and the company provides a licence security (bond). Without a licence, you lose your main recourse if the work goes wrong.",
    },
    {
      type: "h2",
      text: "Where to find the licence number",
    },
    {
      type: "p",
      text: "The law requires contractors to display their number on their website, advertising, business cards, quotes, contracts and invoices. It is a ten-digit number. A quote with no number is already a red flag.",
    },
    {
      type: "h2",
      text: "The 5 points to check in the registry",
    },
    {
      type: "p",
      text: "The registry is free to search online, by company name or by number. The company's record answers the following five questions.",
    },
    {
      type: "h3",
      text: "1. Is the licence valid?",
    },
    {
      type: "p",
      text: "The registry shows three statuses. **Valid**: the company can work. **Not valid**: the licence was suspended or cancelled. **Restricted**: the company cannot bid on a public contract, but can work for a homeowner. A company that never held a licence simply does not appear.",
    },
    {
      type: "h3",
      text: "2. Do the subclasses cover your work?",
    },
    {
      type: "p",
      text: "Each licence lists subclasses. General contractor subclasses (those starting with 1) allow a company to coordinate an entire job site. Specialized subclasses limit the company to one trade. A ceramic tile specialist, for example, cannot take on a full bathroom renovation that includes plumbing and electrical work.",
    },
    {
      type: "h3",
      text: "3. Does the name match the contract?",
    },
    {
      type: "p",
      text: "The record gives the holder's legal name, often a numbered company, and the other names it uses. The contract must be signed with that entity and show that licence number. To claim against the licence security, the RBQ requires a contract that shows the exact name and number.",
    },
    {
      type: "h3",
      text: "4. Who provides the licence security?",
    },
    {
      type: "p",
      text: "The record names the organization that bonds the company. This licence security is **$40,000** for a general contractor and **$20,000** for a specialized contractor. A draft regulation published in February 2026 proposes to raise it. Check the amount in force when you sign.",
    },
    {
      type: "h3",
      text: "5. Are there any claims?",
    },
    {
      type: "p",
      text: "The registry shows claims paid out of the licence security in recent years. One claim does not disqualify a company, but ask what happened. Several claims are a reason to look elsewhere.",
    },
    {
      type: "image",
      src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
      alt: "Renovated bathroom with a curbless shower and glass panel",
      caption: "A full bathroom involves plumbing and electrical work: it calls for a general contractor.",
    },
    {
      type: "h2",
      text: "What the licence security covers, and what it does not",
    },
    {
      type: "p",
      text: "The licence security compensates a client when the contractor does not finish the work, does not refund a deposit or delivers faulty work. For a defect, the problem must be noted within 12 months after the work ends. The amount is shared among all claimants against the same company: it is a safety net, not full insurance.",
    },
    {
      type: "p",
      text: "Contractors who build new homes (subclasses 1.1.1 and 1.1.2) have no licence security: their clients are protected by the mandatory guarantee plan. That plan does not apply to renovation. This is why a written contract and a valid licence are your two main protections.",
    },
    {
      type: "h2",
      text: "Red flags before you sign",
    },
    {
      type: "ul",
      items: [
        "No licence number on the quote, or a number you cannot find in the registry",
        "A \"no tax\" price if you pay cash",
        "You are asked to get the permit yourself, in your own name",
        "A large deposit before any materials are ordered",
        "No written contract, or a contract with no schedule and no description of the work",
      ],
    },
    {
      type: "h2",
      text: "An example: our registry record",
    },
    {
      type: "p",
      text: "Dilamco holds licence 8306-0806-27, issued in 2004 and valid with no restriction. The holder is 9139-1250 Québec inc., which operates under the names Dilamco and Construction Dilamco. Our general contractor subclasses, 1.2 and 1.3, cover the renovation of houses and buildings. You can [view our record](https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/8306080627) and repeat every check in this article. Our [about](/a-propos) page also details our insurance.",
    },
  ],
  faq: {
    heading: "Questions about the RBQ licence",
    items: [
      {
        q: "Does a subcontractor also need a licence?",
        a: "Yes. Every company that performs construction work must hold the licence for its trade. The general contractor chooses licensed subcontractors and answers to you for their work.",
      },
      {
        q: "What if the contractor has no licence?",
        a: "Do not sign. You can report it to the RBQ. If the work has started, you will not have access to the licence security if a problem arises.",
      },
      {
        q: "Where can I check complaints against a contractor?",
        a: "The RBQ registry shows claims against the licence security. The Office de la protection du consommateur can also tell you if complaints have been filed against the company.",
      },
      {
        q: "Does the RBQ licence replace liability insurance?",
        a: "No. The licence and its security cover losses related to the contract. Liability insurance covers damage caused during the work. Ask for proof of both.",
      },
    ],
  },
  related: {
    heading: "Further reading",
    items: [
      {
        title: "Our licence and guarantees",
        href: "/a-propos",
        description: "Licence, security and insurance",
      },
      {
        title: "How a project unfolds",
        href: "/processus",
        description: "From the visit to the finished job",
      },
      {
        title: "Turnkey renovation",
        href: "/services/renovation",
        description: "One contractor responsible",
      },
    ],
  },
  sources: [
    {
      title: "Régie du bâtiment du Québec, \"Check a contractor's licence\"",
      url: "https://www.rbq.gouv.qc.ca/en/you-are/citizen/check-a-contractors-licence/",
    },
    {
      title: "Régie du bâtiment du Québec, \"Displaying your licence\"",
      url: "https://www.rbq.gouv.qc.ca/en/licence/fulfilling-your-obligations/displaying-your-licence/",
    },
    {
      title: "Régie du bâtiment du Québec, \"Licence security\"",
      url: "https://www.rbq.gouv.qc.ca/en/frequently-asked-questions-faq/contractor/licence-security/",
    },
    {
      title: "Régie du bâtiment du Québec, \"Make a claim\"",
      url: "https://www.rbq.gouv.qc.ca/en/you-are/citizen/problems-with-a-contractor/make-a-claim/",
    },
    {
      title: "Dilamco's record in the licence holder registry",
      url: "https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/8306080627",
    },
  ],
  cta: {
    heading: "Compare us with full transparency",
    intro: "Our number is on every quote. Check it, then ask for your price.",
  },
};
