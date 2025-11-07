"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Search } from "lucide-react";

// Basic structure of the Constitution
const constitutionParts = [
  {
    part: "Part I",
    title: "The Union and Its Territory",
    articles: "Articles 1-4",
    description: "Defines India as a Union of States, describes names of States, and the power of Parliament regarding the creation of new States.",
  },
  {
    part: "Part II",
    title: "Citizenship",
    articles: "Articles 5-11",
    description: "Deals with citizenship at the commencement of the Constitution and empowers Parliament to regulate citizenship.",
  },
  {
    part: "Part III",
    title: "Fundamental Rights",
    articles: "Articles 12-35",
    description: "Guarantees rights such as equality, freedom, right against exploitation, freedom of religion, cultural and educational rights, and constitutional remedies.",
  },
  {
    part: "Part IV",
    title: "Directive Principles of State Policy",
    articles: "Articles 36-51",
    description: "Guidelines for the State to establish a social and economic democracy; not enforceable by law but fundamental in governance.",
  },
  {
    part: "Part IVA",
    title: "Fundamental Duties",
    articles: "Article 51A",
    description: "Specifies the fundamental duties of every citizen of India.",
  },
  {
    part: "Part V",
    title: "The Union",
    articles: "Articles 52-151",
    description: "Deals with the executive, legislature, and judiciary at the Union level.",
  },
  {
    part: "Part VI",
    title: "The States",
    articles: "Articles 152-237",
    description: "Deals with the executive, legislature, and judiciary at the State level.",
  },
  {
    part: "Part IX",
    title: "The Panchayats",
    articles: "Articles 243-243O",
    description: "Provides for the establishment of Panchayati Raj institutions in villages.",
  },
  {
    part: "Part IXA",
    title: "The Municipalities",
    articles: "Articles 243P-243ZG",
    description: "Provides for the establishment of municipalities in urban areas.",
  },
  {
    part: "Part XII",
    title: "Finance, Property, Contracts and Suits",
    articles: "Articles 264-300A",
    description: "Covers financial relations, borrowing, property of the Union and States, contracts, and legal suits.",
  },
  {
    part: "Part XX",
    title: "Amendment of the Constitution",
    articles: "Article 368",
    description: "Provides the procedure for amending the Constitution.",
  },
];

export default function ConstitutionPage() {
  const [search, setSearch] = useState("");

  const filteredParts = constitutionParts.filter(
    (p) =>
      p.part.toLowerCase().includes(search.toLowerCase()) ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.articles.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 px-4 border-b flex items-center gap-3">
        <Book className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Constitution of India</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Intro */}
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Constitution of India, adopted on 26th November 1949 and in effect from 26th January 1950, is the supreme law of India. 
            It lays down the framework demarcating political principles, procedures, powers, and duties of government institutions and sets out 
            fundamental rights, directive principles, and duties of citizens.
          </p>
        </section>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by part, title, or article..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Constitution Parts */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {filteredParts.map((p, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>
                <div className="flex flex-col text-left">
                  <span className="font-semibold">{p.part} — {p.title}</span>
                  <span className="text-sm text-muted-foreground">{p.articles}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{p.description}</p>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
