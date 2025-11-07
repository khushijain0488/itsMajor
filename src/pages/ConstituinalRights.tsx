import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Scale, Shield, Landmark, Search, Filter, ScrollText, Printer, Link as LinkIcon, Info, Gavel } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ---------------------------------------------
// Types
// ---------------------------------------------
export type RightCategory =
  | "Equality"
  | "Freedom"
  | "Protection from Exploitation"
  | "Religion"
  | "Cultural & Educational"
  | "Constitutional Remedies"
  | "Life & Personal Liberty" // Art. 21 derived rights (Privacy etc.)
  | "Education"; // Art. 21A

export interface ConstitutionalRight {
  id: string;
  title: string;
  articles: string; // e.g., "Articles 14–18"
  category: RightCategory;
  summary: string;
  keyPoints: string[];
  restrictions?: string[]; // reasonable restrictions, where applicable
  notableCases?: { name: string; year?: string; note?: string }[];
  remedies?: string[]; // e.g., writs under Art. 32/226
}

// ---------------------------------------------
// Data
// ---------------------------------------------
const RIGHTS: ConstitutionalRight[] = [
  {
    id: "equality",
    title: "Right to Equality",
    articles: "Articles 14–18",
    category: "Equality",
    summary:
      "Equality before law, equal protection of the laws, prohibition of discrimination, equality of opportunity in public employment, and abolition of untouchability and titles.",
    keyPoints: [
      "Article 14: Equality before law & equal protection",
      "Article 15: No discrimination on grounds of religion, race, caste, sex, place of birth",
      "Article 16: Equality of opportunity in public employment",
      "Article 17: Abolition of untouchability",
      "Article 18: Abolition of titles (except academic/military)",
    ],
    restrictions: [
      "Special provisions for women, children, and socially/educationally backward classes permitted",
      "Reasonable classification allowed if intelligible differentia & rational nexus",
    ],
    notableCases: [
      { name: "State of West Bengal v. Anwar Ali Sarkar", year: "1952", note: "Classification test" },
      { name: "Indra Sawhney v. Union of India", year: "1992", note: "Reservations & OBCs" },
    ],
    remedies: ["Writs under Articles 32/226", "Public Interest Litigation (PIL)"] ,
  },
  {
    id: "freedom",
    title: "Right to Freedom",
    articles: "Articles 19–22",
    category: "Freedom",
    summary:
      "Freedoms of speech and expression, assembly, association, movement, residence, profession (Art. 19), protection in respect of conviction for offences (Art. 20), protection of life and personal liberty and safeguards against arbitrary arrest and detention (Arts. 21–22).",
    keyPoints: [
      "Article 19(1): Speech, assembly, association, movement, residence, profession",
      "Article 19(2)-(6): Reasonable restrictions (security, public order, decency, etc.)",
      "Article 20: Protection in respect of conviction (ex post facto, double jeopardy, self-incrimination)",
      "Article 21: Procedure established by law must be just, fair, and reasonable",
      "Article 22: Safeguards against arbitrary arrest and preventive detention",
    ],
    restrictions: [
      "Reasonable restrictions in the interests of sovereignty & integrity, security of the State, public order, decency/morality, contempt of court, defamation, incitement to offence, etc.",
    ],
    notableCases: [
      { name: "Maneka Gandhi v. Union of India", year: "1978", note: "Expanded scope of Art. 21" },
      { name: "Shreya Singhal v. Union of India", year: "2015", note: "Struck down 66A (free speech online)" },
    ],
    remedies: ["Habeas corpus", "Writ petitions under Arts. 32/226"],
  },
  {
    id: "exploitation",
    title: "Right against Exploitation",
    articles: "Articles 23–24",
    category: "Protection from Exploitation",
    summary:
      "Prohibits human trafficking, begar and other forced labour, and prohibits employment of children in hazardous occupations.",
    keyPoints: [
      "Article 23: Prohibition of trafficking and forced labour",
      "Article 24: Prohibition of child labour in hazardous work (below 14 years)",
    ],
    notableCases: [
      { name: "People's Union for Democratic Rights v. Union of India", year: "1982", note: "Scope of forced labour" },
    ],
    remedies: ["Writ of mandamus", "PIL for enforcement"],
  },
  {
    id: "religion",
    title: "Freedom of Religion",
    articles: "Articles 25–28",
    category: "Religion",
    summary:
      "Freedom of conscience and free profession, practice and propagation of religion; managing religious affairs; freedom from taxation for promotion of any particular religion; and freedom as to attendance at religious instruction in certain educational institutions.",
    keyPoints: [
      "Article 25: Freedom of conscience & free profession, practice, propagation",
      "Article 26: Manage religious affairs",
      "Article 27: No tax for promotion of a religion",
      "Article 28: No religious instruction in State-run institutions (exceptions apply)",
    ],
    restrictions: [
      "Subject to public order, morality, health and other fundamental rights",
      "State can regulate secular aspects of religious practices",
    ],
    notableCases: [
      { name: "S. R. Bommai v. Union of India", year: "1994", note: "Secularism as basic structure" },
    ],
    remedies: ["Writs under Arts. 32/226"],
  },
  {
    id: "culture-education",
    title: "Cultural & Educational Rights",
    articles: "Articles 29–30",
    category: "Cultural & Educational",
    summary:
      "Protects interests of minorities to conserve their language, script and culture, and grants minorities the right to establish and administer educational institutions of their choice.",
    keyPoints: [
      "Article 29: Protection of interests of minorities",
      "Article 30: Right of minorities to establish & administer educational institutions",
    ],
    notableCases: [
      { name: "T.M.A. Pai Foundation v. State of Karnataka", year: "2002", note: "Minority institutions" },
    ],
    remedies: ["Approach High Courts/Supreme Court under Arts. 226/32"],
  },
  {
    id: "remedies",
    title: "Right to Constitutional Remedies",
    articles: "Article 32 (with Article 226 for High Courts)",
    category: "Constitutional Remedies",
    summary:
      "Empowers individuals to move the Supreme Court (Art. 32) and High Courts (Art. 226) for enforcement of fundamental rights through writs such as habeas corpus, mandamus, prohibition, quo warranto, and certiorari.",
    keyPoints: [
      "Writ jurisdiction is itself a fundamental right under Art. 32",
      "High Courts have wider writ powers under Art. 226 (for FRs & other rights)",
    ],
    notableCases: [
      { name: "L. Chandra Kumar v. Union of India", year: "1997", note: "Judicial review is part of basic structure" },
    ],
    remedies: ["Direct writ petitions to SC/HC"],
  },
  {
    id: "life-liberty",
    title: "Right to Life & Personal Liberty (Expanded)",
    articles: "Article 21 (read with others)",
    category: "Life & Personal Liberty",
    summary:
      "Article 21 has been expansively interpreted to include dignity, livelihood, clean environment, legal aid, fair procedure, and more.",
    keyPoints: [
      "Due process (just, fair, reasonable)",
      "Legal aid & fair trial",
      "Right to a clean environment & livelihood",
    ],
    notableCases: [
      { name: "Maneka Gandhi v. Union of India", year: "1978" },
      { name: "Olga Tellis v. Bombay Municipal Corporation", year: "1985", note: "Livelihood" },
      { name: "Subhash Kumar v. State of Bihar", year: "1991", note: "Environment" },
    ],
    remedies: ["Approach SC/HC via writs; PIL"],
  },
  {
    id: "education-21a",
    title: "Right to Education",
    articles: "Article 21A (86th Amendment)",
    category: "Education",
    summary:
      "Free and compulsory education for all children aged 6 to 14 years in a manner determined by the State.",
    keyPoints: [
      "Ensures elementary education as a fundamental right",
      "Obligation on State to provide",
    ],
    notableCases: [
      { name: "Society for Un-aided Private Schools v. Union of India", year: "2012", note: "RTE Act validity" },
    ],
    remedies: ["High Court/Supreme Court writs; PIL"],
  },
  {
    id: "privacy",
    title: "Right to Privacy (as part of Article 21)",
    articles: "Art. 21 (Justice K.S. Puttaswamy v. Union of India, 2017)",
    category: "Life & Personal Liberty",
    summary:
      "Supreme Court declared privacy a fundamental right intrinsic to life and personal liberty under Article 21 and as part of freedoms guaranteed by Part III.",
    keyPoints: [
      "Informational privacy & data protection principles",
      "Any restriction must meet legality, necessity, and proportionality",
    ],
    notableCases: [
      { name: "Justice K.S. Puttaswamy (Retd.) v. Union of India", year: "2017", note: "Nine-judge bench" },
    ],
    remedies: ["Constitutional writs; challenge disproportionate intrusions"],
  },
];

// Helpful list of writs to show in UI
const WRITS = [
  { name: "Habeas Corpus", note: "Produce the detained person before the court" },
  { name: "Mandamus", note: "Command to a public authority to perform a duty" },
  { name: "Prohibition", note: "Higher court stops lower court from exceeding jurisdiction" },
  { name: "Certiorari", note: "Higher court quashes order of lower court" },
  { name: "Quo Warranto", note: "Challenge to a person's right to hold public office" },
];

// ---------------------------------------------
// Component
// ---------------------------------------------
const ConstitutionalRightsIndia: React.FC = () => {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<RightCategory | "All">("All");

  const categories: (RightCategory | "All")[] = [
    "All",
    "Equality",
    "Freedom",
    "Protection from Exploitation",
    "Religion",
    "Cultural & Educational",
    "Constitutional Remedies",
    "Life & Personal Liberty",
    "Education",
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RIGHTS.filter((r) =>
      (tab === "All" || r.category === tab) &&
      (
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.keyPoints.some((k) => k.toLowerCase().includes(q)) ||
        r.articles.toLowerCase().includes(q)
      )
    );
  }, [query, tab]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="space-y-1">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Scale className="h-7 w-7 text-blue-700" /> Fundamental Rights of India
            </h1>
            <p className="text-gray-600 max-w-2xl">
              A concise, searchable guide to the Fundamental Rights under Part III of the Constitution of India, with key
              Articles, restrictions, and landmark cases.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handlePrint} className="print:hidden">
              <Printer className="h-4 w-4 mr-2" /> Print / Save PDF
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <Card className="shadow-lg border">
          <CardContent className="py-4">
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
              <div className="flex-1 relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Search rights, articles, cases…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full md:w-auto">
                  <TabsList className="flex flex-wrap">
                    {categories.map((c) => (
                      <TabsTrigger key={c} value={c} className="text-xs md:text-sm">
                        {c}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main list */}
          <div className="lg:col-span-2 space-y-6">
            {filtered.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <Card id={item.id} className="shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <BookOpen className="h-5 w-5 text-blue-600" /> {item.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{item.articles}</Badge>
                      <Badge className="text-xs" variant="outline">{item.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-700">{item.summary}</p>

                    {/* Key points */}
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="points">
                        <AccordionTrigger className="text-sm">
                          <div className="flex items-center gap-2"><Info className="h-4 w-4" /> Key Points</div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                            {item.keyPoints.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {item.restrictions && item.restrictions.length > 0 && (
                        <AccordionItem value="restrictions">
                          <AccordionTrigger className="text-sm">
                            <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Reasonable Restrictions</div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                              {item.restrictions.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      {item.notableCases && item.notableCases.length > 0 && (
                        <AccordionItem value="cases">
                          <AccordionTrigger className="text-sm">
                            <div className="flex items-center gap-2"><Gavel className="h-4 w-4" /> Landmark Cases</div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="pl-0 space-y-2 text-sm">
                              {item.notableCases.map((c, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-0.5"><Landmark className="h-4 w-4" /></span>
                                  <div>
                                    <div className="font-medium">{c.name}{c.year ? ` (${c.year})` : ""}</div>
                                    {c.note && <div className="text-gray-600">{c.note}</div>}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      {item.remedies && item.remedies.length > 0 && (
                        <AccordionItem value="remedies">
                          <AccordionTrigger className="text-sm">
                            <div className="flex items-center gap-2"><ScrollText className="h-4 w-4" /> Enforcement & Remedies</div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                              {item.remedies.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </Accordion>

                    <div className="flex flex-wrap gap-2 pt-1">
                      <a href={`#${item.id}`} className="inline-flex items-center gap-1 text-xs text-blue-700 hover:underline">
                        <LinkIcon className="h-3.5 w-3.5" /> Permalink
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <Card>
                <CardContent className="py-10 text-center text-gray-600">No results. Try another term or category.</CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Scale className="h-5 w-5 text-blue-600" /> Writs at a Glance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2">
                  {WRITS.map((w) => (
                    <li key={w.name} className="flex items-start gap-2 text-sm">
                      <Shield className="h-4 w-4 mt-0.5" />
                      <div>
                        <div className="font-medium">{w.name}</div>
                        <div className="text-gray-600">{w.note}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ScrollText className="h-5 w-5 text-blue-600" /> Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <Badge variant="secondary">Part III</Badge>
                  <p>Fundamental Rights are primarily in Part III of the Constitution.</p>
                </div>
                <Separator />
                <div className="flex items-start gap-2">
                  <Badge variant="outline">Reasonable Restrictions</Badge>
                  <p>Some freedoms (e.g., Art. 19) may be limited in the interests of public order, security, decency, etc.</p>
                </div>
                <Separator />
                <div className="flex items-start gap-2">
                  <Badge>Basic Structure</Badge>
                  <p>Judicial review and many core principles are part of the Constitution’s basic structure doctrine.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstitutionalRightsIndia;
